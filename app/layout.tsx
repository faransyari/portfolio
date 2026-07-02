import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { THEME_SCRIPT } from "../components/theme/theme-script";
import { ThemeProvider } from "../components/theme/ThemeProvider";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Firlandi Althaf Ansyari — Software Engineer",
  description: "Software engineer building full-stack web and mobile products. Dual degrees from UQ and UI.",
  openGraph: {
    title: "Firlandi Althaf Ansyari — Software Engineer",
    description: "Software engineer building full-stack web and mobile products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} /></head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
