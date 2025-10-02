import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Romain Auroux | Développeur Web",
  description: "Portfolio de Romain Auroux, développeur web spécialisé en React, Next.js et TypeScript.",
  metadataBase: new URL("https://portfolio-romain-auroux.netlify.app"),
  openGraph: {
    title: "Portfolio Romain Auroux | Développeur Web",
    description: "Portfolio de Romain Auroux, développeur web spécialisé en React, Next.js et TypeScript.",
    url: "https://portfolio-romain-auroux.netlify.app",
    siteName: "Portfolio Romain Auroux",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 