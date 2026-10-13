
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Service } from "../_data/services";
import { services as allServices } from "../_data/services";
import ServicesSidebar from "../ServicesSidebar";
import PageHero from "@/components/ui/PageHero";

export default function ServiceDetailClient({
    service,
}: {
    service: Service;
}) {
    return (
        <main className="w-full min-w-0 bg-white font-cormorant">
            <PageHero
                title={service.title}
                subtitle="Hizmet Detayı"
                backgroundImage={
                    service.pagehero ?? "/enneagram-slayder1.jpg"
                }
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    {
                        label: "HİZMETLERİMİZ",
                        href: "/hizmetlerimiz",
                    },
                    { label: service.title },
                ]}
            />

            <section className="mx-auto w-full max-w-[1280px] min-w-0 px-4 py-10 sm:px-6 sm:py-16">
                <Link
                    href="/hizmetlerimiz"
                    className="inline-block max-w-full text-sm tracking-widest uppercase text-primary/70"
                >
                    ← Hizmetlere dön
                </Link>

                <div className="mt-8 grid min-w-0 grid-cols-1 items-start gap-6 lg:mt-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-10">
                    <div className="min-w-0 lg:sticky lg:top-24">
                        <ServicesSidebar services={allServices} />
                    </div>

                    <article className="min-w-0 max-w-full rounded-md border border-black/10 bg-white p-5 shadow-[0_14px_40px_rgba(0,0,0,0.06)] sm:p-8 md:p-10">
                        <div className="min-w-0">
                            <h1 className="max-w-full break-words text-3xl leading-tight tracking-wide text-primary sm:text-4xl md:text-5xl">
                                {service.title} Nedir?
                            </h1>

                            <div className="relative mt-6 min-w-0 pl-5 sm:mt-8 sm:pl-8">
                                <span className="absolute left-0 top-1 h-full w-[3px] bg-secondary" />

                                <p className="break-words text-lg italic leading-relaxed text-primary/80 sm:text-xl md:text-2xl">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        {service.heroImage && (
                            <div className="relative mt-8 aspect-[16/9] w-full max-w-full overflow-hidden rounded-md sm:mt-10 sm:aspect-[16/7]">
                                <Image
                                    src={service.heroImage}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 700px"
                                    className="object-cover"
                                />
                            </div>
                        )}
                        {service.longDescription && (
                            <div className="mt-10 min-w-0 max-w-full whitespace-pre-line break-words [overflow-wrap:anywhere] text-[20px] leading-relaxed text-primary/90">
                                {service.longDescription}
                            </div>
                        )}
                    </article>
                </div>
            </section>
        </main>
    );
}
