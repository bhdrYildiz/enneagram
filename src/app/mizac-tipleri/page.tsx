import type { Metadata } from "next";
import MizacTipleriClient from "./MizacTipleriClient";

export const metadata: Metadata = {
    title: "Mizaç Tipleri | Enneagram Eğitim & Danışmanlık",
    description: "Dokuz mizaç tipini keşfedin ve detay sayfalarına göz atın.",
};

export default function Page() {
    return <MizacTipleriClient />;
}
