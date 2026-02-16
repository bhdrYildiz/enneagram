"use client";

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInCard } from "@/app/lib/animations";
import { mizacTipleri } from "./_data/mizac-tipleri";
import { MizacItem } from "./_data/mizac-tipleri";


function Card({ it }: { it: MizacItem }) {
    return (
        <motion.article variants={fadeInCard} className="group">
            <Link href={`/mizac-tipleri/${it.slug}`} className="block">
                <div className="relative w-full aspect-4/3 overflow-hidden rounded-md bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-black/10">
                    <div className="relative w-full aspect-square overflow-hidden rounded-md bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-black/10">
                        <Image
                            src={it.image}
                            alt={it.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 border  flex items-center justify-center opacity-0 scale-95 transition duration-500 group-hover:opacity-100 group-hover:scale-100">
                            <span className="text-white text-2xl leading-none">+</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-[16px] tracking-[0.35em] uppercase text-primary font-semibold">
                        {it.title}
                    </p>
                    {it.subtitle ? (
                        <p className="mt-2 text-base tracking-wide leading-relax text-primary">
                            {it.subtitle}
                        </p>
                    ) : null}
                </div>
            </Link>
        </motion.article>
    );
}

export default function MizacTipleriClient() {
    const items = mizacTipleri;

    return (
        <main className="bg-white font-cormorant">
            <PageHero
                title="MİZAÇ TİPLERİ"
                subtitle="- 9 TEMEL MİZAÇ -"
                backgroundImage="/enneagram_image_2.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "MİZAÇ TİPLERİ" },
                ]}
            />

            <section className="bg-[#f6f1ea]">
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                    <p className="text-sm tracking-widest uppercase text-primary/70">
                        {items.length} sonucun tümü gösteriliyor
                    </p>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {items.map((it) => (
                            <Card key={it.slug} it={it} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
