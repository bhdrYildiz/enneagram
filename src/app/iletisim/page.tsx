import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "İletişim | Enneagram Eğitim & Danışmanlık - Bilgi ve Başvuru",
    description:
        "Enneagram Eğitim & Danışmanlık ile iletişime geçin. Eğitimler, danışmanlık, kurumsal çözümler ve başvuru süreçleri için bize yazın; telefon ve e-posta üzerinden hızlıca ulaşın.",
    keywords: [
        "enneagram iletişim",
        "enneagram eğitim iletişim",
        "enneagram danışmanlık iletişim",
        "kurumsal enneagram eğitim",
        "enneagram koçluk",
        "enneagram danışmanlık başvuru",
        "enneagram eğitim ve danışmanlık",
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
        canonical: "https://www.enneagramegitim.com/iletisim",
    },
    openGraph: {
        title: "İletişim | Enneagram Eğitim & Danışmanlık",
        description: "Eğitim ve danışmanlık hakkında bilgi alın.",
        url: "https://www.enneagramegitim.com/iletisim",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis1.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Eğitim Afişi",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "İletişim | Enneagram Eğitim & Danışmanlık",
        description: "Eğitim ve danışmanlık için iletişime geçin.",
        images: ["https://www.enneagramegitim.com/egitimler/afis1.jpg"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
