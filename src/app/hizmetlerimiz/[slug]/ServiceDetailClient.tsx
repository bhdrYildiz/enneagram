"use client";

import Image from "next/image";
import Link from "next/link";
import type { Service } from "../_data/services";
import { services as allServices } from "../_data/services";
import ServicesSidebar from "../ServicesSidebar";
import PageHero from "@/components/ui/PageHero";

export default function ServiceDetailClient({ service }: { service: Service }) {
    return (
        <main className="bg-white font-cormorant">
            <PageHero
                title={service.title.toUpperCase()}
                subtitle="- HİZMET DETAYI -"
                backgroundImage={service.heroImage ?? "/enneagram-slayder1.jpg"}
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "HİZMETLERİMİZ", href: "/hizmetlerimiz" },
                    { label: service.title },
                ]}
            />
            <section className="max-w-[1280px] mx-auto px-6 py-16">
                <Link href="/hizmetlerimiz" className="text-sm tracking-widest uppercase text-primary/70">
                    ← Hizmetlere dön
                </Link>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 items-start">
                    <div className="lg:sticky lg:top-24">
                        <ServicesSidebar services={allServices} />
                    </div>
                    <div className="rounded-md border border-black/10 bg-white p-8 md:p-10 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                        <div className="flex items-start justify-between gap-8">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl text-primary tracking-wide leading-tight">
                                    {service.title} Nedir ?
                                </h1>
                                <div className="mt-8 relative pl-8">
                                    <span className="absolute left-0 top-1 w-[3px] h-full bg-secondary" />
                                    <p className="text-xl md:text-2xl italic text-primary/80 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {service.heroImage && (
                            <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-md">
                                <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
                            </div>
                        )}
                        {service.longDescription && (
                            <div className="mt-10 text-[20px] leading-relaxed text-primary/90 whitespace-pre-line">
                                {service.longDescription}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
