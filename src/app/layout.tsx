import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Arjun Kumar | Backend Developer | Node.js, Express.js & PHP/Laravel";
const description =
  "Backend Developer with 9+ years of experience building scalable web applications, RESTful APIs, real-time systems, eCommerce platforms, and third-party integrations.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title,
  description,
  keywords: [
    "Arjun Kumar",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "REST API",
    "Portfolio",
  ],
  authors: [{ name: "Arjun Kumar" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Arjun Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
