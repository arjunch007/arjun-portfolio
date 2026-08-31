import { Mail, MapPin, Phone } from "lucide-react";
import { ResumeDownloadButton } from "@/components/ResumeDownloadButton";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, site } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-pad py-20 md:py-28">
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
            </ul>
            <ResumeDownloadButton />
          </div>
        </div>
      </div>
    </section>
  );
}
