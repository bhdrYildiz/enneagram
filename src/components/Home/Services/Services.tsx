'use client'

import LogoMarquee from "@/motion/LogoMarquee";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
    FiArrowUpRight,
    FiUsers,
    FiBookOpen,
    FiTarget,
    FiHeart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

type ServiceItem = {
    title: string;
    desc: string;
    href: string;
    icon: React.ReactNode;
    image: string;
};
export default function Services() {
    const items: ServiceItem[] = [
        {
            title: "Enoksis",
            desc: "Eğitime ‘mizaç merkezli’ perspektif sunan, yeni, özgün ve nitelikli bir eğitim yaklaşımıdır. Mizaçların farklılıklarını esas alır ve mizaç merkezli rehberlik süreçlerinden oluşur.",
            href: "/hizmetlerimiz",
            icon: <FiUsers className="w-7 h-7" />,
            image: "/hero-1.jpg",
        },
        {
            title: "EnneagramİK",
            desc: "EnneagramİK raporlamaları ile, yönetim, işe alım, kariyer yönetimi, ekip oluşturma, eğitim planlama, personel ve müşteri ilişkileri yönetimi süreçlerinde şirket ve eğitim kurumlarına destek olur.",
            href: "/egitimlerimiz",
            icon: <FiBookOpen className="w-7 h-7" />,
            image: "/hero-2.jpg",
        },
        {
            title: "Enrehet",
            desc: "Enrehet, Rehber Öğretmenler için tasarlanmış bireysel ya da grup halinde uygulanabilen, mizaçlar özelinde hazırlanmış Rehberlik Etkinlikleri'dir.",
            href: "/mizac-tipleri",
            icon: <FiTarget className="w-7 h-7" />,
            image: "/hero-3.jpg",
        },
        {
            title: "Enneagram Eğitimleri",
            desc: "Enneagram eğitimleri doğuştan sahip olduğumuz mizaç yapımızı bilmek, tanımak ve farkedebilmekte detaylı ve geniş bir bilgi edinmemizi sağlar.",
            href: "/iletisim",
            icon: <FiHeart className="w-7 h-7" />,
            image: "/hero-1.jpg",
        },
    ];

    const defaultImage = items[0]?.image ?? "/hero-1.jpg";
    const [activeImage, setActiveImage] = useState<string>(defaultImage);

    return (
        <section className="relative py-20 bg-primary font-cormorant text-on-primary">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-10 lg:gap-12 items-start">
                    <div className="lg:row-start-1 lg:col-start-1">
                        <div className="inline-flex items-center rounded-md border border-on-primary/25 px-4 py-2 text-xs tracking-[0.22em] font-[300] bg-primary/30 backdrop-blur-sm">
                            Hizmetlerimiz
                        </div>
                        <h2 className="mt-6 text-3xl md:text-4xl font-[300] leading-[1.05]">
                            Bir den fazla alanda, size özel hizmetlerimizle yanınızdayız.
                        </h2>
                    </div>
                    <div className="lg:row-start-1 lg:col-start-2 mt-16">
                        <p className="max-w-xl text-on-primary text-xl font-[300] leading-relaxed">
                            Kurumsal ve bireysel ihtiyaçlara özel; eğitim, analiz ve danışmanlık
                            hizmetleriyle dönüşümü destekliyoruz.
                        </p>
                    </div>
                    <div className="lg:row-start-2 lg:col-start-1">
                        <div className="relative w-full max-w-[660px] mt-8">
                            <div className="relative aspect-[4/4] w-full overflow-hidden border border-on-primary/15 bg-primary/20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImage}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
                                        transition={{ duration: 0.1, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={activeImage}
                                            alt="Services"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 660px"
                                            priority={false}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="pointer-events-none absolute inset-0 bg-black/5" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:row-start-2 lg:col-start-2">
                        <div className="space-y-0 border-t border-on-primary/15">
                            {items.map((it) => (
                                <Link
                                    key={it.title}
                                    href={it.href}
                                    className="group block border-b border-on-primary/15 py-7"
                                    onMouseEnter={() => setActiveImage(it.image)}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="mt-1 text-secondary group-hover:text-hover transition-colors">
                                            {it.icon}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-6">
                                                <h3 className="text-2xl md:text-3xl font-[300] leading-snug">
                                                    {it.title}
                                                </h3>

                                                <div className="text-on-primary/60 group-hover:text-hover transition-colors">
                                                    <FiArrowUpRight className="w-6 h-6" />
                                                </div>
                                            </div>

                                            <p className="mt-2 text-on-primary/75 font-[200] leading-relaxed max-w-[520px]">
                                                {it.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/hizmetlerimiz"
                                className="inline-flex items-center justify-center rounded px-6 py-3 bg-secondary hover:bg-hover text-on-primary font-[300] transition-colors"
                            >
                                Tüm Hizmetleri Gör
                            </Link>
                        </div>
                    </div>
                </div>
                <LogoMarquee />

            </div>
        </section>
    );
}
