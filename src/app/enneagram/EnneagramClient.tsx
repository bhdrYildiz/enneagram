"use client";

import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import EnneagramSidebar from "./EnneagramSidebar";
import { enneagramPageContent } from "./_data/enneagram";

function TextBlock({ text }: { text: string }) {
    return (
        <p className="whitespace-pre-line text-[17px] leading-[1.9] text-primary/85">
            {text}
        </p>
    );
}

export default function EnneagramClient() {
    const content = enneagramPageContent;

    return (
        <main className="flex flex-col bg-white text-primary">

            {/* PAGE HERO */}
            <PageHero
                title="Enneagram Nedir?"
                subtitle="Enneagramı Keşfedin"
                backgroundImage="/banner5.png"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "ENNEAGRAM", href: "/enneagram" },
                    { label: "ENNEAGRAM NEDİR?" },
                ]}
            />

            {/* CONTENT */}
            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-24">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-16 lg:gap-20 items-start">

                        {/* MAIN CONTENT */}
                        <div className="space-y-24">

                            {/* INTRO */}
                            <article>

                                <div className="mb-10">
                                    <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-secondary mb-5">
                                        ENNEAGRAM / MİZAÇ MERKEZLİ
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-primary">
                                        Kişilik Modeli
                                    </h2>

                                    <div className="mt-6 h-px w-20 bg-secondary" />
                                </div>

                                <div className="space-y-6 max-w-[850px]">
                                    {content.introParagraphs.map((p, i) => (
                                        <TextBlock key={i} text={p} />
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href="/enneagram/enneagram-kavramlari"
                                        className="group inline-flex items-center gap-4 text-sm tracking-[0.22em] uppercase text-primary"
                                    >
                                        <span className="relative font-semibold">
                                            Enneagram Kavramları
                                            <span className="absolute left-0 -bottom-2 h-px w-full bg-secondary transition-all duration-300 group-hover:w-1/2" />
                                        </span>

                                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </Link>
                                </div>

                            </article>

                            {/* MİZAÇ / KİŞİLİK / KARAKTER */}
                            <article>

                                <div className="mb-14">
                                    <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-secondary mb-5">
                                        TEMEL KAVRAMLAR
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-primary">
                                        Mizaç, Kişilik, Karakter Nedir?
                                    </h2>

                                    <div className="mt-6 h-px w-20 bg-secondary" />
                                </div>

                                <div className="space-y-16">

                                    {content.cards.map((card, index) => (
                                        <section
                                            key={card.title}
                                            className="relative"
                                        >

                                            <div className="flex items-start gap-6">

                                                <span className="hidden md:block text-sm font-semibold tracking-[0.2em] text-secondary pt-1">
                                                    0{index + 1}
                                                </span>

                                                <div className="flex-1">

                                                    <h3 className="text-lg md:text-xl font-semibold tracking-[0.18em] uppercase text-primary">
                                                        {card.title}
                                                    </h3>

                                                    <div className="mt-4 mb-7 h-px w-16 bg-secondary" />

                                                    <TextBlock text={card.body} />

                                                </div>

                                            </div>

                                        </section>
                                    ))}

                                </div>

                                <div className="mt-12">
                                    <Link
                                        href="/mizac-tipleri"
                                        className="group inline-flex items-center gap-4 text-sm tracking-[0.22em] uppercase text-primary"
                                    >
                                        <span className="relative font-semibold">
                                            Mizaç Tipleri
                                            <span className="absolute left-0 -bottom-2 h-px w-full bg-secondary transition-all duration-300 group-hover:w-1/2" />
                                        </span>

                                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </Link>
                                </div>

                            </article>

                            {/* ÖZET */}
                            <section>

                                <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-12 md:px-12 md:py-14">

                                    {/* Decorative elements */}
                                    <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
                                    <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-secondary/20" />

                                    <div className="relative z-10">

                                        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-secondary mb-5">
                                            ÖZETLE
                                        </p>

                                        <div className="h-px w-16 bg-secondary mb-9" />

                                        <div className="space-y-7 text-[16px] leading-[1.9] text-white/85">

                                            {content.ozetBullets.map((b, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-4"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />

                                                    <p>{b}</p>
                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </section>

                        </div>

                        {/* SIDEBAR */}
                        <EnneagramSidebar
                            title="Enneagram"
                            items={[
                                {
                                    label: "Enneagram Nedir?",
                                    href: "/enneagram",
                                },
                                {
                                    label: "Enneagram Kavramları",
                                    href: "/enneagram/enneagram-kavramlari",
                                },
                                {
                                    label: "Mizaç Tipleri",
                                    href: "/mizac-tipleri",
                                },
                            ]}
                        />

                    </div>

                </div>
            </section>

        </main>
    );
}