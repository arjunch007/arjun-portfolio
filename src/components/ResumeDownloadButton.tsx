import { Download } from "lucide-react";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ResumeDownloadButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  label?: string;
};

const variants = {
  primary:
    "accent-gradient text-slate-950 shadow-[0_0_0_1px_rgba(45,212,191,0.25)] hover:brightness-110",
  secondary:
    "border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost:
    "border border-[var(--border)] bg-transparent text-[var(--fg)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm md:text-base",
};

export function ResumeDownloadButton({
  className,
  variant = "primary",
  size = "md",
  label = "Download Resume",
}: ResumeDownloadButtonProps) {
  return (
    <a
      href={site.resumePath}
      download={site.resumeFilename}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        variants[variant],
        sizes[size],
        className,
      )}
      aria-label="Download Arjun Kumar resume PDF"
    >
      <Download className="size-4 shrink-0" aria-hidden />
      {label}
    </a>
  );
}
