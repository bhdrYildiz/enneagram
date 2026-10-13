
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "../_data/services";
import ServiceDetailClient from "./ServiceDetailClient";

const BASE_URL = "https://www.enneagramegitim.com";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;

    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Hizmet Bulunamadı",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${service.title} | Hizmetlerimiz`;
    const description = service.description;
    const url = `${BASE_URL}/hizmetlerimiz/${service.slug}/`;

    return {
        title,
        description,

        alternates: {
            canonical: url,
        },

        robots: {
            index: true,
            follow: true,
        },

        openGraph: {
            title,
            description,
            url,
            siteName: "Enneagram Eğitim & Danışmanlık",
            locale: "tr_TR",
            type: "website",
        },
    };
}

export default async function ServiceDetailPage({
    params,
}: Props) {
    const { slug } = await params;

    const service = getServiceBySlug(slug);

    if (!service) notFound();

    return <ServiceDetailClient service={service} />;
}
