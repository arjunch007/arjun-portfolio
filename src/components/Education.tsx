import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-pad py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Education" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <GraduationCap className="size-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold text-[var(--fg)]">
                {item.degree}
              </h3>
              <p className="mt-2 text-[var(--fg-muted)]">{item.school}</p>
              <p className="mt-3 font-mono text-sm text-[var(--accent)]">
                {item.period}
              </p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
