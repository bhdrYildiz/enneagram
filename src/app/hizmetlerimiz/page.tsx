import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram Eğitim & Danışmanlık hizmetlerini keşfedin: bireysel danışmanlık, kurumsal eğitimler, ekip çalışmaları, raporlama ve gelişim programları. Size uygun çözümü birlikte planlayalım.",
    keywords: [
        "enneagram hizmetler",
        "enneagram eğitim",
        "enneagram danışmanlık",
        "kurumsal enneagram eğitimi",
        "ekip eğitimi enneagram",
        "enneagram raporlama",
        "liderlik eğitimi enneagram",
        "enneagram koçluk",
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
        canonical: "https://www.enneagramegitim.com/hizmetlerimiz",
    },

    openGraph: {
        title: "Hizmetlerimiz | Enneagram Eğitim & Danışmanlık",
        description:
            "Bireysel danışmanlık, kurumsal eğitimler ve enneagram temelli gelişim çözümleri. Hizmetlerimizi inceleyin.",
        url: "https://www.enneagramegitim.com/hizmetlerimiz",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis2.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Eğitim & Danışmanlık Hizmetlerimiz",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Hizmetlerimiz | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram temelli bireysel ve kurumsal çözümler: eğitim, danışmanlık, ekip gelişimi.",
        images: ["https://www.enneagramegitim.com/egitimler/afis2.jpg"],
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
