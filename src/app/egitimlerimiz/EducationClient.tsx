"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import type { EducationItem, EducationCategory } from "./_data/educations";
import { CATEGORY_META } from "./_data/educations";

function Card({ it }: { it: EducationItem }) {
    return (
        <article className="group">
            <div className="relative w-full aspect-square overflow-hidden rounded-md bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-black/10">
                <Image
                    src={it.poster}
                    alt={it.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <h3 className="mt-4 text-lg md:text-xl leading-snug text-primary tracking-wide font-semibold">
                {it.title}
            </h3>

            <p className="mt-2 text-primary/80 text-base">{it.priceText}</p>

            <div className="mt-5">
                <Link
                    href={`/egitimlerimiz/${it.slug}`}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-black/10 bg-primary px-6 py-3 text-sm tracking-widest uppercase text-white shadow-sm transition hover:bg-secondary hover:text-white"
                >
                    İncele
                </Link>
            </div>
        </article>
    );
}

function Section({
    category,
    items,
}: {
    category: EducationCategory;
    items: EducationItem[];
}) {
    const meta = CATEGORY_META[category];
    if (!items.length) return null;

    return (
        <section className="mt-14">
            <h2 className="text-3xl md:text-4xl text-primary tracking-wide">
                {meta.title}
            </h2>
            <p className="mt-6 whitespace-pre-line text-lg text-primary/80 leading-relaxed max-w-4xl">
                {meta.description}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((it) => (
                    <Card key={it.id} it={it} />
                ))}
            </div>
        </section>
    );
}

export default function EducationClient({ items }: { items: EducationItem[] }) {
    const trainings = items.filter((x) => x.category === "enneagram-egitimleri");
    const workshops = items.filter(
        (x) => x.category === "enneagram-gelisim-atolyeleri"
    );
    return (
        <main className="bg-white font-cormorant">
            <PageHero
                title="EĞİTİM VE ATÖLYELER"
                subtitle="- EĞİTİMLERİMİZİ KEŞFEDİN -"
                backgroundImage="/enneagram-slayder1.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "EĞİTİMLERİMİZ" },
                ]}
            />
            <section className="bg-white">
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                    <p className="text-sm tracking-widest uppercase text-primary/70">
                        {items.length} sonucun tümü gösteriliyor
                    </p>
                    <Section category="enneagram-egitimleri" items={trainings} />
                    <Section category="enneagram-gelisim-atolyeleri" items={workshops} />
                </div>
            </section>
        </main>
    );
}
