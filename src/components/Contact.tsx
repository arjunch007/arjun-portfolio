import { Mail, MapPin, Phone } from "lucide-react";
import { ResumeDownloadButton } from "@/components/ResumeDownloadButton";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, site } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-pad py-10 md:py-14">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-elevated),var(--bg-soft))] p-8 md:p-12">
          <SectionHeading title={contact.heading} description={contact.text} />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-[var(--fg)] transition hover:text-[var(--accent)]"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-3 text-[var(--fg)] transition hover:text-[var(--accent)]"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  {site.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-[var(--fg)]">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <MapPin className="size-4" aria-hidden />
                </span>
                {site.location}
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[var(--fg)] transition hover:text-[var(--accent)]"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <svg
                      className="size-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                    </svg>
                  </span>
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
            <ResumeDownloadButton />
          </div>
        </div>
      </div>
    </section>
  );
}
