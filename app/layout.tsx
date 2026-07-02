import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { THEME_SCRIPT } from "../components/theme/theme-script";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { profile } from "@/content/portfolio";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://firlandiansyari.com"),
  title: "Firlandi Althaf Ansyari — Software Engineer",
  description: "Software engineer building full-stack web and mobile products. Dual degrees from UQ and UI.",
  openGraph: {
    title: "Firlandi Althaf Ansyari — Software Engineer",
    description: "Software engineer building full-stack web and mobile products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firlandi Althaf Ansyari — Software Engineer",
    description: "Software engineer building full-stack web and mobile products.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} /></head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              email: `mailto:${profile.email}`,
              url: profile.website,
              sameAs: [profile.github, profile.linkedIn],
              address: { "@type": "PostalAddress", addressLocality: profile.location },
            }),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
