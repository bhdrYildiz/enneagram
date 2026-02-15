import type { Metadata } from "next";
import EnneagramKavramlarClient from "./EnneagramKavramlarClient";

export const metadata: Metadata = {
    title: "Enneagram Kavramları | Enneagram Eğitim & Danışmanlık",
    description:
        "Ana mizaç, kanat mizaç, stres hattı ve rahat hattı kavramlarını keşfedin.",
};

export default function Page() {
    return <EnneagramKavramlarClient/>;
}
