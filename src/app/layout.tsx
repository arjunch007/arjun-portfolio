import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const title = "Arjun Kumar | Full Stack Developer | PHP/Laravel • Node.js • React.js • Shopify";
const description =
  "Full Stack Developer with 9+ years of web development experience specializing in PHP, Laravel, MySQL, REST APIs, and eCommerce integrations, with additional skills in Node.js, Express.js, and React.js.";

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
    "Full Stack Developer",
    "Backend Developer",
    "PHP",
    "Laravel",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "Shopify",
    "REST API",
    "MySQL",
    "PostgreSQL",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
