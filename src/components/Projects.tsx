import {
  BellRing,
  Car,
  Code2,
  ExternalLink,
  MessageSquareText,
  PackageCheck,
  UtensilsCrossed,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const icons = {
  car: Car,
  truck: PackageCheck,
  bell: BellRing,
  message: MessageSquareText,
  utensils: UtensilsCrossed,
};

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const Icon = icons[project.icon];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_50px_-30px_var(--glow)]">
      <div className="relative flex items-center gap-4 border-b border-[var(--border)] bg-[linear-gradient(135deg,var(--accent-soft),transparent_60%)] px-6 py-6">
        <div className="inline-flex size-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] transition group-hover:scale-105">
          <Icon className="size-6" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-[var(--fg)]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">{project.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-[var(--fg-muted)] md:text-base">
          {project.description}
        </p>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg)]">
            Key features
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-[var(--fg-muted)]"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[var(--bg-soft)] px-2.5 py-1 font-mono text-[11px] text-[var(--fg-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--fg-muted)]",
            )}
            title="GitHub link coming soon"
          >
            <Code2 className="size-4" aria-hidden />
            GitHub
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--fg-muted)]"
            title="Demo link coming soon"
          >
            <ExternalLink className="size-4" aria-hidden />
            Demo
          </span>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad py-10 md:py-14">
      <div className="container-page">
        <SectionHeading
          title="Featured Projects"
          description="Key production applications from my experience spanning enterprise vehicle marketplaces, Shopify eCommerce apps, real-time messaging, and high-volume integrations."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
