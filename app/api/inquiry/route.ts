import { NextResponse } from "next/server";

import { inquirySchema } from "@/lib/schemas";
import { getSupabaseServer } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry" }, { status: 400 });
  }

  // Honeypot — silently accept bots, don't process
  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const inquiry = {
    name: parsed.data.name,
    email: parsed.data.email,
    project_type: parsed.data.projectType,
    budget: parsed.data.budget,
    timeline: parsed.data.timeline ?? null,
    description: parsed.data.description,
  };

  // Persist to Supabase (best-effort — don't fail the request if DB is down)
  try {
    const supabase = getSupabaseServer();
    const { error } = await supabase.from("inquiries").insert(inquiry);
    if (error) console.error("supabase insert error", error);
  } catch (err) {
    console.error("supabase client error", err);
  }

  // Send notification email
  try {
    const resend = getResend();
    const notifyEmail = process.env.INQUIRY_NOTIFY_EMAIL ?? "avinash.saitm@gmail.com";
    const { error } = await resend.emails.send({
      // Use verified domain address once avinashthakur.com is verified in Resend
      // Until then, Resend's shared test address works fine
      from: process.env.RESEND_FROM_EMAIL ?? "Avinash Portfolio <onboarding@resend.dev>",
      to: notifyEmail,
      subject: `New inquiry: ${inquiry.name} (${inquiry.budget})`,
      replyTo: inquiry.email,
      text: [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Project type: ${inquiry.project_type}`,
        `Budget: ${inquiry.budget}`,
        `Timeline: ${inquiry.timeline ?? "—"}`,
        "",
        "Description:",
        inquiry.description,
      ].join("\n"),
    });
    if (error) console.error("resend send error", error);
  } catch (err) {
    console.error("resend client error", err);
  }

  return NextResponse.json({ ok: true });
}
