import { site } from "@/data/portfolio";

export function SectionHeading({
  id,
  title,
  description,
}: {
  id?: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={id} className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
        {site.name.split(" ")[0]}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
