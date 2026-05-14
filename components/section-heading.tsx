import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, className, align = "left" }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-mono uppercase tracking-wider text-brand">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
