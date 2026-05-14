"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inquirySchema, type InquiryInput } from "@/lib/schemas";
import { site } from "@/content/site";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "saas",
      budget: "50k-2L",
      timeline: "",
      description: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: InquiryInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(await res.text());
      setSubmitted(true);
      toast.success("Inquiry received. I'll reply within 48 hours.");
      form.reset();
    } catch {
      toast.error(`Something went wrong. Email me directly at ${site.email}`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card/50 p-8 text-center space-y-4 flex flex-col items-center justify-center min-h-[400px]">
        <div className="size-12 rounded-full bg-emerald-500/15 text-emerald-300 flex items-center justify-center text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-semibold">Inquiry received</h3>
        <p className="text-muted-foreground max-w-sm">
          I&apos;ll reply within 48 hours. Want to talk sooner?
        </p>
        <Button asChild>
          <a href={site.social.cal} target="_blank" rel="noopener noreferrer">
            Book a 30-min call
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg border bg-card/50 p-6"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...form.register("honeypot")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="projectType">Project type</Label>
          <Select
            defaultValue="saas"
            onValueChange={(v) => form.setValue("projectType", v as InquiryInput["projectType"])}
          >
            <SelectTrigger id="projectType">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS product</SelectItem>
              <SelectItem value="crm">CRM / Internal tool</SelectItem>
              <SelectItem value="website">Business website</SelectItem>
              <SelectItem value="ai">AI integration</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="budget">Budget range</Label>
          <Select
            defaultValue="50k-2L"
            onValueChange={(v) => form.setValue("budget", v as InquiryInput["budget"])}
          >
            <SelectTrigger id="budget">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-50k">Under ₹50k</SelectItem>
              <SelectItem value="50k-2L">₹50k – ₹2L</SelectItem>
              <SelectItem value="over-2L">₹2L+</SelectItem>
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="timeline">Timeline</Label>
        <Input
          id="timeline"
          placeholder="e.g. 'Need MVP in 6 weeks'"
          {...form.register("timeline")}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="description">Tell me about the project</Label>
        <Textarea id="description" rows={5} {...form.register("description")} />
        {form.formState.errors.description && (
          <p className="text-xs text-destructive">{form.formState.errors.description.message}</p>
        )}
      </div>

      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? "Sending…" : "Send inquiry"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Or book a 30-min call directly →{" "}
        <a
          href={site.social.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline-offset-4 hover:underline"
        >
          cal.com/{site.social.cal.split("/")[3] ?? "avinashthakur"}
        </a>
      </p>
    </form>
  );
}
