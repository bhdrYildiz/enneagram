import type { Metadata } from "next";
import MizacTipleriClient from "./MizacTipleriClient";
import { mizacTipleri } from "./_data/mizac-tipleri";

export const metadata: Metadata = {
    title: "Mizaç Tipleri | Enneagram Eğitim & Danışmanlık",
    description: "Dokuz mizaç tipini keşfedin ve detay sayfalarına göz atın.",
};

export default function Page() {
    return <MizacTipleriClient />;
}
