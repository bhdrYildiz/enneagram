import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-inter",
});

const siteUrl = "https://www.enneagramegitim.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Enneagram Eğitim & Danışmanlık",
    template: "%s | Enneagram Eğitim & Danışmanlık",
  },
  description:
    "Enneagram temelli eğitim ve danışmanlık: bireysel gelişim, kurumsal programlar, ekip çalışmaları ve raporlama çözümleri.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Enneagram Eğitim & Danışmanlık",
    description:
      "Enneagram temelli eğitim ve danışmanlık: bireysel ve kurumsal gelişim çözümleri.",
    url: siteUrl,
    siteName: "Enneagram Eğitim & Danışmanlık",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/egitimler/afis1.jpg",
        width: 1200,
        height: 630,
        alt: "Enneagram Eğitim & Danışmanlık",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Enneagram Eğitim & Danışmanlık",
    description:
      "Enneagram temelli eğitim ve danışmanlık: bireysel ve kurumsal gelişim çözümleri.",
    images: ["/egitimler/afis1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <ResponsiveNav />
        <main className="flex-1 pt-[calc(10vh+40px)] bg-primary">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}