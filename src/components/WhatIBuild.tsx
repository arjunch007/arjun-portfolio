import {
  Cable,
  CreditCard,
  Database,
  Network,
  Store,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { whatIBuild } from "@/data/portfolio";

const icons = {
  api: Network,
  zap: Zap,
  store: Store,
  credit: CreditCard,
  database: Database,
  plug: Cable,
};

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="section-pad py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="What I Build"
          description="Backend systems and integrations that power products, payments, and real-time experiences."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition hover:border-[var(--accent)]/35"
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
