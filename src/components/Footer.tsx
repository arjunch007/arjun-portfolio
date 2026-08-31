import { navLinks, site } from "@/data/portfolio";

export function Footer() {
  const links = navLinks.filter((link) => link.href !== "#education");

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="section-pad py-12">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-[var(--fg)]">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-sm text-[var(--fg-muted)]">
              {site.title}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="container-page mt-10 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--fg-muted)]">
            © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
