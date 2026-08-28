'use client';

import Image from "next/image";
import LogoMarquee from "@/motion/LogoMarquee";
import Link from "next/link";
import React from "react";
import {
    FiArrowUpRight,
    FiUsers,
    FiBookOpen,
    FiTarget,
    FiHeart,
} from "react-icons/fi";
import { motion } from "framer-motion";

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
            desc: "Eğitime mizaç merkezli perspektif sunan, özgün ve nitelikli bir eğitim yaklaşımıdır. Mizaç farklılıklarını esas alır ve rehberlik süreçlerini destekler.",
            href: "/hizmetlerimiz/enoksis",
            icon: <FiUsers className="w-6 h-6" />,
            image: "/hizmetler/enoksishero.png",
        },
        {
            title: "EnneagramİK",
            desc: "Yönetim, işe alım, kariyer, ekip oluşturma, eğitim planlama ve iletişim süreçlerinde kurumlara mizaç temelli destek sunar.",
            href: "/hizmetlerimiz/enneagramik",
            icon: <FiBookOpen className="w-6 h-6" />,
            image: "/hizmetler/enneagramikhero.jpeg",
        },
        {
            title: "Enrehet",
            desc: "Rehber öğretmenler için bireysel ya da grup halinde uygulanabilen, mizaçlar özelinde hazırlanmış rehberlik etkinlikleri sunar.",
            href: "/hizmetlerimiz/enrehet",
            icon: <FiTarget className="w-6 h-6" />,
            image: "/hizmetler/enherethero.jpg",
        },
        {
            title: "Enneagram Eğitimleri",
            desc: "Mizaç yapısını tanımayı, fark etmeyi ve bireysel gelişim sürecini daha bilinçli şekilde yönetmeyi destekleyen eğitimler sunar.",
            href: "/hizmetlerimiz/egitimler",
            icon: <FiHeart className="w-6 h-6" />,
            image: "/hizmetler/enneagramhero.jpg",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-primary py-24 text-on-primary">

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/[0.04]" />
                <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full border border-secondary/[0.08]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-3xl">
                        <span className="text-xs font-medium uppercase tracking-[0.32em] text-secondary md:text-sm">
                            Hizmetlerimiz
                        </span>

                        <h2 className="mt-5 text-4xl font-light leading-[1.1] md:text-5xl lg:text-6xl">
                            İhtiyacınıza uygun
                            <br />
                            çözümler sunuyoruz.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-on-primary/65 md:text-lg">
                            Eğitimden kurumsal danışmanlığa kadar geliştirdiğimiz çözümler; bireylerin, ekiplerin ve kurumların gelişimini desteklemek için tasarlandı.
                        </p>
                    </div>

                    <Link href="/hizmetlerimiz" className="group hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-secondary lg:inline-flex">
                        Tüm Hizmetleri Gör
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">

                    {items.map((item, index) => (
                        <motion.div key={item.title} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>

                            <Link href={item.href} className="group block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:border-secondary/40 hover:bg-white/[0.055]">

                                <div className="relative h-[240px] overflow-hidden bg-white/[0.03] md:h-[270px]">
                                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />

                                    <div className="absolute left-6 top-6 flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-xs text-white backdrop-blur-md">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-secondary backdrop-blur-md">
                                        {item.icon}
                                    </div>

                                </div>

                                <div className="p-7 md:p-8">

                                    <h3 className="text-2xl font-light leading-tight text-white md:text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 line-clamp-3 text-base leading-7 text-on-primary/60">
                                        {item.desc}
                                    </p>

                                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                                        <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                                            Enneagram Eğitim & Danışmanlık
                                        </span>

                                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-secondary transition-all duration-300 group-hover:gap-4">
                                            İncele
                                            <FiArrowUpRight />
                                        </span>

                                    </div>

                                </div>

                            </Link>

                        </motion.div>
                    ))}

                </div>

                <div className="mt-12 text-center lg:hidden">
                    <Link href="/hizmetlerimiz" className="inline-flex items-center gap-3 rounded-full border border-secondary/50 px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-secondary transition-all duration-300 hover:bg-secondary hover:text-white">
                        Tüm Hizmetleri Gör
                        <FiArrowUpRight />
                    </Link>
                </div>

            </div>

            <div className="mt-20">
                <LogoMarquee />
            </div>

        </section>
    );
}