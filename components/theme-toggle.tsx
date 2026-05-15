"use client";

import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = isDark ? "light" : "dark";
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Fallback for browsers without View Transitions support
    if (!("startViewTransition" in document)) {
      setTheme(newTheme);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transition = (document as any).startViewTransition(() => {
      flushSync(() => setTheme(newTheme));
    });

    await transition.ready;

    if (isDark) {
      // Bulb ON — light radiates outward from the button
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    } else {
      // Bulb OFF — light collapses back into the button
      document.documentElement.animate(
        {
          clipPath: [
            `circle(${endRadius}px at ${x}px ${y}px)`,
            `circle(0px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-old(root)",
        },
      );
    }
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex items-center justify-center h-8 w-8 rounded-full",
        "border transition-all duration-300 cursor-pointer",
        isDark
          ? [
              "border-border bg-muted/40",
              "text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted/60",
            ]
          : [
              "border-amber-400/70 bg-amber-50",
              "text-amber-500 hover:border-amber-400 hover:bg-amber-100",
              "shadow-[0_0_10px_2px_rgba(251,191,36,0.25)]",
            ],
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <Lightbulb
        className={cn(
          "transition-all duration-300",
          isDark ? "size-[15px] opacity-70" : "size-[15px] opacity-100",
          !isDark && "drop-shadow-[0_0_5px_rgba(251,191,36,0.9)]",
        )}
        fill={isDark ? "transparent" : "currentColor"}
        strokeWidth={isDark ? 1.5 : 1.25}
      />
    </button>
  );
}
