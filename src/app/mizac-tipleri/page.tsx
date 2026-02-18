import type { Metadata } from "next";
import MizacTipleriClient from "./MizacTipleriClient";

export const metadata: Metadata = {
    title: "Mizaç Tipleri | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram’ın dokuz mizaç tipini keşfedin. Her mizaç tipinin temel motivasyonları, korkuları, güçlü yönleri ve gelişim alanlarını detaylı inceleyin.",
    keywords: [
        "enneagram mizaç tipleri",
        "9 mizaç tipi",
        "enneagram tipleri",
        "mizaç özellikleri",
        "enneagram karakter tipleri",
        "mizaç analizi",
        "enneagram kişilik tipleri",
    ],

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },

    alternates: {
        canonical: "https://www.enneagramegitim.com/mizac-tipleri",
    },

    openGraph: {
        title: "Mizaç Tipleri | Enneagram Eğitim & Danışmanlık",
        description:
            "Dokuz mizaç tipinin temel dinamiklerini, güçlü yönlerini ve gelişim alanlarını keşfedin.",
        url: "https://www.enneagramegitim.com/mizac-tipleri",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis1.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Mizaç Tipleri",
            },
        ],
        locale: "tr_TR",
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Mizaç Tipleri | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram’ın 9 mizaç tipini detaylı şekilde inceleyin.",
        images: ["https://www.enneagramegitim.com/egitimler/afis1.jpg"],
    },
};

export default function Page() {
    return <MizacTipleriClient />;
}
