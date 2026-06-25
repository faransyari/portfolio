import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { THEME_SCRIPT } from "../components/theme/theme-script";
import { ThemeProvider } from "../components/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Firlandi Althaf Ansyari — Software Developer",
  description:
    "Software engineer with dual degrees from UQ and UI. Full-stack, mobile, and data engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
