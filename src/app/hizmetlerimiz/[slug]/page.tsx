import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "../_data/services";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const service = getServiceBySlug(slug);
    if (!service) return { title: "Hizmet bulunamadı" };

    return {
        title: `${service.title} | Hizmetlerimiz`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Hizmetlerimiz`,
            description: service.description,
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;

    const service = getServiceBySlug(slug);
    if (!service) notFound();

    return <ServiceDetailClient service={service} />;
}
