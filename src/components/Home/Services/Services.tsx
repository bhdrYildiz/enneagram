'use client'

import LogoMarquee from "@/motion/LogoMarquee";
import Link from "next/link";
import React, { useState } from "react";
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
            desc: "Eğitime ‘mizaç merkezli’ perspektif sunan, yeni, özgün ve nitelikli bir eğitim yaklaşımıdır. Mizaçların farklılıklarını esas alır ve mizaç merkezli rehberlik süreçlerinden oluşur.",
            href: "/hizmetlerimiz/enoksis",
            icon: <FiUsers className="w-7 h-7" />,
            image: "/enoksishero.png",
        },
        {
            title: "EnneagramİK",
            desc: "EnneagramİK raporlamaları ile, yönetim, işe alım, kariyer yönetimi, ekip oluşturma, eğitim planlama, personel ve müşteri ilişkileri yönetimi süreçlerinde şirket ve eğitim kurumlarına destek olur.",
            href: "/hizmetlerimiz/enneagramik",
            icon: <FiBookOpen className="w-7 h-7" />,
            image: "/enneagramikhero.jpeg",
        },
        {
            title: "Enrehet",
            desc: "Enrehet, Rehber Öğretmenler için tasarlanmış bireysel ya da grup halinde uygulanabilen, mizaçlar özelinde hazırlanmış Rehberlik Etkinlikleri'dir.",
            href: "/hizmetlerimiz/enrehet",
            icon: <FiTarget className="w-7 h-7" />,
            image: "/enherethero.jpg",
        },
        {
            title: "Enneagram Eğitimleri",
            desc: "Enneagram eğitimleri doğuştan sahip olduğumuz mizaç yapımızı bilmek, tanımak ve farkedebilmekte detaylı ve geniş bir bilgi edinmemizi sağlar.",
            href: "/hizmetlerimiz/egitimler",
            icon: <FiHeart className="w-7 h-7" />,
            image: "/enneagramhero.jpg",
        },
    ];

    return (
        <section className="relative py-24 bg-primary text-on-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl">
                    <span className="uppercase tracking-[0.35em] text-secondary text-sm font-medium">
                        Hizmetlerimiz
                    </span>
                    <h2 className="mt-6 text-4xl lg:text-6xl font-light leading-tight">
                        İhtiyacınıza uygun
                        <br />
                        çözümler sunuyoruz.
                    </h2>
                    <p className="mt-6 text-on-primary/70 text-lg leading-8">
                        Eğitimden kurumsal danışmanlığa kadar geliştirdiğimiz
                        tüm hizmetler; bireylerin, ekiplerin ve kurumların
                        gelişimini desteklemek için tasarlandı.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-20">

                    {items.map((item, index) => (

                        <motion.div

                            key={item.title}

                            whileHover={{
                                y: -8
                            }}

                            transition={{
                                duration: .25
                            }}

                        >

                            <Link
                                href={item.href}
                                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 min-h-[320px] transition-all duration-300 hover:border-secondary hover:bg-white/[0.06]"
                            >

                                <div>

                                    <div className="flex items-center justify-between">

                                        <span className="text-6xl font-light text-white/10 transition-all duration-300 group-hover:text-secondary/30">

                                            {String(index + 1).padStart(2, "0")}

                                        </span>

                                        <div className="text-secondary transition-all duration-300 group-hover:rotate-45">

                                            {item.icon}

                                        </div>
                                    </div>
                                    <h3 className="mt-10 text-3xl font-light">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 leading-8 text-on-primary/70">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="mt-12 flex items-center gap-3 text-secondary opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <span>İncele</span>
                                    <FiArrowUpRight />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">

                    <Link
                        href="/hizmetlerimiz"
                        className="inline-flex items-center gap-3 rounded-full border border-secondary px-8 py-4 hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                        Tüm Hizmetleri Gör
                        <FiArrowUpRight />
                    </Link>

                </div>

                <div className="mt-24">
                    <LogoMarquee />
                </div>

            </div>
        </section>
    );
}
