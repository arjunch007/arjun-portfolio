import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-pad py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                  aria-hidden
                />
                <span className="text-sm text-[var(--fg)] md:text-[0.95rem]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
