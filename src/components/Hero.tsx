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
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-24 lg:py-28">
          <div>
            <p className="fade-up mb-4 font-mono text-sm text-[var(--accent)]">
              Backend Developer
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
                View My Work
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
            </ul>
          </div>

          <div className="fade-up fade-up-delay-2 relative">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--terminal)] shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-slate-400">
                  api-server.ts
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
                  <span className="text-amber-200">&quot;Backend Developer&quot;</span>,
                  {"\n"}
                  {"  "}stack: [
                  <span className="text-amber-200">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-amber-200">&quot;Express&quot;</span>,{" "}
                  <span className="text-amber-200">&quot;Laravel&quot;</span>],
                  {"\n"}
                  {"  "}focus: [
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&quot;REST APIs&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&quot;Real-time systems&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&quot;Integrations&quot;</span>
                  {"\n"}
                  {"  "}],
                  {"\n"}
                  {"  "}experience:{" "}
                  <span className="text-fuchsia-300">9</span>,
                  {"\n"}
                  {"}"};{"\n\n"}
                  <span className="text-teal-300">await</span>{" "}
                  <span className="text-sky-300">engineer</span>.ship
                  (<span className="text-amber-200">&quot;scalable backends&quot;</span>);
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
