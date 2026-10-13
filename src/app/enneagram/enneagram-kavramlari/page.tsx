
import type { Metadata } from "next";
import EnneagramKavramlarClient from "./EnneagramKavramlarClient";

const url =
    "https://www.enneagramegitim.com/enneagram/enneagram-kavramlari/";

const title = "Enneagram Kavramları";

const description =
    "Ana mizaç, kanat mizaç, stres hattı ve rahat hattı kavramlarını keşfedin. Enneagramın temel kavramlarını ve mizaçlar üzerindeki etkilerini öğrenin.";

export const metadata: Metadata = {
    title,
    description,

    alternates: {
        canonical: url,
    },

    openGraph: {
        title: `${title} | Enneagram Eğitim & Danışmanlık`,
        description,
        url,
        siteName: "Enneagram Eğitim & Danışmanlık",
        locale: "tr_TR",
        type: "website",
    },
};

export default function Page() {
    return <EnneagramKavramlarClient />;
}
