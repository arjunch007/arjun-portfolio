import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-pad py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Experience"
          description="9+ years shipping backend systems, APIs, and integrations across product and client work."
        />
        <ol className="relative space-y-8 border-l border-[var(--border)] pl-6 md:pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[1.91rem] top-1.5 size-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:-left-[2.41rem]" />
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--fg)]">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--accent)] md:text-base">
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-[var(--fg-muted)] md:text-sm">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--fg-muted)] md:text-[0.95rem]"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
