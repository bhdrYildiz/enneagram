import type { Metadata } from "next";
import EnneagramClient from "./EnneagramClient";

export const metadata: Metadata = {
    title: "Enneagram Nedir? | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram nedir? Tarihçesi ve mizaç, kişilik, karakter kavramlarının açıklamaları.",
};

export default function Page() {
    return <EnneagramClient />;
}
