import type { Metadata } from "next";
import EnneagramClient from "./EnneagramClient";

export const metadata: Metadata = {
    title: "Enneagram Nedir? | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram nedir? Mizaç, kişilik ve karakter kavramlarını; Enneagram sisteminin tarihçesini ve temel dinamiklerini keşfedin.",
    keywords: [
        "enneagram nedir",
        "enneagram sistemi",
        "enneagram tarihçesi",
        "mizaç nedir",
        "kişilik ve karakter farkı",
        "enneagram mizaç tipleri",
        "enneagram eğitimi",
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
        canonical: "https://www.enneagramegitim.com/enneagram",
    },

    openGraph: {
        title: "Enneagram Nedir? | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram sisteminin kökeni, mizaç yapısı ve temel kavramlarını detaylı şekilde öğrenin.",
        url: "https://www.enneagramegitim.com/enneagram",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis1.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Nedir?",
            },
        ],
        locale: "tr_TR",
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Enneagram Nedir? | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram sistemi ve mizaç kavramlarını detaylı şekilde keşfedin.",
        images: ["https://www.enneagramegitim.com/egitimler/afis1.jpg"],
    },
};

export default function Page() {
    return <EnneagramClient />;
}
