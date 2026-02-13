import type { Metadata } from "next";
import EducationClient from "./EducationClient";
import { educations } from "./_data/educations";

export const metadata: Metadata = {
    title: "Eğitim ve Atölyeler | Rehberimiz",
    description:
        "Eğitim ve atölyelerimizi keşfedin. Afişler, fiyatlar ve kayıt yönlendirmeleri.",
};

export default function Page() {
    return <EducationClient items={educations} />;
}
