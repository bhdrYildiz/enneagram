import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "Hakkımızda | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram Eğitim & Danışmanlık hakkında bilgi alın. Yaklaşımımız, uzmanlık alanlarımız ve bireysel/kurumsal eğitim-danışmanlık süreçlerimizle kişisel ve kurumsal gelişimi destekliyoruz.",
    keywords: [
        "enneagram hakkımızda",
        "enneagram eğitim",
        "enneagram danışmanlık",
        "mizaç temelli yaklaşım",
        "kurumsal eğitim",
        "liderlik gelişimi",
        "ekip gelişimi",
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
        canonical: "https://www.enneagramegitim.com/hakkimizda",
    },

    openGraph: {
        title: "Hakkımızda | Enneagram Eğitim & Danışmanlık",
        description:
            "Yaklaşımımızı, uzmanlık alanlarımızı ve eğitim-danışmanlık süreçlerimizi keşfedin.",
        url: "https://www.enneagramegitim.com/hakkimizda",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis1.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Eğitim & Danışmanlık - Hakkımızda",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Hakkımızda | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram Eğitim & Danışmanlık yaklaşımı ve hizmet alanları hakkında bilgi alın.",
        images: ["https://www.enneagramegitim.com/egitimler/afis1.jpg"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
