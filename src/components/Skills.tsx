import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-pad py-10 md:py-14">
      <div className="container-page">
        <SectionHeading
          title="Technical Skills"
          description="Comprehensive technical toolkit spanning full-stack frameworks, cloud infrastructure, databases, and modern AI-accelerated tooling."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition duration-300 hover:border-[var(--accent)]/40 hover:shadow-[0_0_0_1px_var(--accent-soft)]"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg-soft)] px-2.5 py-1 text-xs font-medium text-[var(--fg-muted)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
