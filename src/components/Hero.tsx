import { Mail, MapPin, Phone } from "lucide-react";
import { ResumeDownloadButton } from "@/components/ResumeDownloadButton";
import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 md:pt-28"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-[var(--glow)] blur-3xl glow-orb" />
      <div className="pointer-events-none absolute -right-16 top-40 size-80 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl glow-orb" />

      <div className="section-pad relative">
        <div className="container-page grid items-center gap-10 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-14 lg:py-16">
          <div>
            <p className="fade-up mb-4 font-mono text-sm text-[var(--accent)]">
              Full Stack Developer • 9+ Years Experience
            </p>
            <h1 className="fade-up fade-up-delay-1 font-display text-4xl font-semibold tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="fade-up fade-up-delay-2 mt-4 max-w-xl text-lg text-[var(--fg-muted)] md:text-xl">
              {site.title}
            </p>
            <p className="fade-up fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] md:text-[1.05rem]">
              {site.intro}
            </p>

            <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-lg accent-gradient px-5 text-sm font-medium text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] md:text-base"
              >
                View Featured Projects
              </a>
              <ResumeDownloadButton variant="secondary" />
            </div>

            <ul className="fade-up fade-up-delay-3 mt-8 flex flex-col gap-3 text-sm text-[var(--fg-muted)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-[var(--accent)]" aria-hidden />
                <span>{site.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-[var(--accent)]"
                >
                  <Mail className="size-4 text-[var(--accent)]" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 transition hover:text-[var(--accent)]"
                >
                  <Phone className="size-4 text-[var(--accent)]" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-[var(--accent)]"
                >
                  <svg
                    className="size-4 fill-[var(--accent)]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="fade-up fade-up-delay-2 relative">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--terminal)] shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-slate-400">
                  fullstack-engineer.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-slate-300 sm:text-[13px]">
                <code>
                  <span className="text-teal-300">const</span>{" "}
                  <span className="text-sky-300">engineer</span> = {"{"}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-amber-200">&quot;Arjun Kumar&quot;</span>,
                  {"\n"}
                  {"  "}role:{" "}
                  <span className="text-amber-200">&quot;Full Stack Developer&quot;</span>,
                  {"\n"}
                  {"  "}stack: [
                  <span className="text-amber-200">&quot;PHP / Laravel&quot;</span>,{" "}
                  <span className="text-amber-200">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-amber-200">&quot;React.js&quot;</span>,{" "}
                  <span className="text-amber-200">&quot;Shopify&quot;</span>],
                  {"\n"}
                  {"  "}focus: [
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&quot;REST APIs &amp; Webhooks&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&quot;eCommerce &amp; Marketplaces&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&quot;Real-Time Systems&quot;</span>
                  {"\n"}
                  {"  "}],
                  {"\n"}
                  {"  "}experienceYears:{" "}
                  <span className="text-fuchsia-300">9</span>,
                  {"\n"}
                  {"}"};{"\n\n"}
                  <span className="text-teal-300">await</span>{" "}
                  <span className="text-sky-300">engineer</span>.ship
                  (<span className="text-amber-200">&quot;production platforms&quot;</span>);
                  <span className="cursor-blink text-teal-300">▌</span>
                </code>
              </pre>
            </div>
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-[var(--accent)]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
