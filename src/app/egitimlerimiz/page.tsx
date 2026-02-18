import type { Metadata } from "next";
import EducationClient from "./EducationClient";
import { educations } from "./_data/educations";

export const metadata: Metadata = {
    title: "Eğitimlerimiz & Atölyeler | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram temelli eğitim ve atölyelerimizi keşfedin. Kurumsal programlar, bireysel gelişim eğitimleri, atölye içerikleri ve başvuru detaylarına buradan ulaşabilirsiniz.",
    keywords: [
        "enneagram eğitimleri",
        "enneagram atölye",
        "kurumsal enneagram eğitimi",
        "bireysel gelişim eğitimi",
        "mizaç temelli eğitim",
        "enneagram seminer",
        "enneagram workshop",
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
        canonical: "https://www.enneagramegitim.com/egitimlerimiz",
    },

    openGraph: {
        title: "Eğitimlerimiz & Atölyeler | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram temelli eğitim programları ve atölyeleri inceleyin. İçerik, detay ve başvuru bilgileri burada.",
        url: "https://www.enneagramegitim.com/egitimlerimiz",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis1.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Eğitim ve Atölyeler",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Eğitimlerimiz & Atölyeler | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram eğitimleri ve atölyeleri hakkında detaylı bilgi alın.",
        images: ["https://www.enneagramegitim.com/egitimler/afis1.jpg"],
    },
};

export default function Page() {
    return <EducationClient items={educations} />;
}
