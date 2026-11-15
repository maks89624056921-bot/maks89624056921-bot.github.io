import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import site from "./site.json";
import "./globals.css";

// Site metadata lives in site.json so Studio can update it without touching
// this file. The favicon and social image are separate files Next.js resolves
// by convention (icon.*, opengraph-image.*), so they need no code here.
// The canonical site URL can come from site.json or, in CI, from
// NEXT_PUBLIC_SITE_URL (the deploy workflow fills it in automatically).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export const metadata: Metadata = {
  // Absolute base for og:image; social crawlers reject relative URLs. Empty
  // until the project is published, which Next.js treats as "no base".
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: site.title,
  description: site.description,
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    siteName: "AniMax",
    title: site.title,
    description: site.description,
    locale: "ru_RU",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
