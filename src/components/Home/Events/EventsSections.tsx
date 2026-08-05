"use client";

import Image from "next/image";
import Link from "next/link";
import TextMarquee from "@/motion/TextMarquee";
import { FiClock, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


type EventItem = {
    id: string;
    day: string;
    monthLabel: string;
    year: string;
    title: string;
    time: string;
    dateText: string;
    location: string;
    href: string;
    image: string;
};

const events: EventItem[] = [
    {
        id: "1",
        day: "23",
        monthLabel: "Mart",
        year: "2026",
        title: "Enneagrama ve Tiplere Giriş Eğitimi",
        time: "19.00 – 23.00",
        dateText: "23 Mart 2026",
        location: "Online",
        href: "https://www.rehberimiz.com/uygulamali-enneagram-egitimleri-1-kur-enneagrama-ve-tiplere-giris/",
        image: "/egitimler/enneagramavetipleregiris.png",
    },
    {
        id: "2",
        day: "05",
        monthLabel: "Nisan",
        year: "2026",
        title: "Temel Enneagram Eğitimi",
        time: "19.30 – 22.30",
        dateText: "Video Kayıt",
        location: "Online",
        href: "https://www.rehberimiz.com/temel-enneagram-egitimi/",
        image: "/egitimler/temelenneagram.png",
    },
    {
        id: "3",
        day: "14",
        monthLabel: "Mayıs",
        year: "2026",
        title: "Çocuk Merkezli Enneagram Eğitimi",
        time: "19.30 – 22.30",
        dateText: "Video Kayıt",
        location: "Online",
        href: "https://www.rehberimiz.com/cocuk-merkezli-enneagram-egitimi/",
        image: "/egitimler/cocukmerkezli.png",
    },
];

export default function EventsSection() {

    const [activeImage, setActiveImage] = useState(events[0].image);

    return (
        <section className="relative py-20 bg-on-primary font-[300] text-on-primary">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_1fr]">
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-2 rounded-md border-2 border-primary" />

                        <div className="relative rounded-md bg-[#234b43] px-6 py-10 text-white shadow-sm md:px-10">
                            <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
                                <div className="absolute -left-24 top-10 h-72 w-72 rounded-md bg-white/10 blur-3xl" />
                                <div className="absolute bottom-0 right-10 h-64 w-64 rounded-md bg-white/10 blur-3xl" />
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.12),transparent_55%)]" />
                            </div>

                            <div className="relative">
                                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                                    Yaklaşan Etkinlikler
                                </h2>

                                <div className="mt-10 space-y-8">
                                    {events.map((e, idx) => (
                                        <div
                                            key={e.id}
                                            onMouseEnter={() => setActiveImage(e.image)}
                                            onClick={() => setActiveImage(e.image)}
                                            className={`relative cursor-pointer rounded-xl p-2 transition-all duration-300 ${activeImage === e.image
                                                ? "bg-white/10"
                                                : "hover:bg-white/5"
                                                }`}
                                        >
                                            <div className="flex items-start gap-5">
                                                <div className="shrink-0">
                                                    <div className="w-[84px] overflow-hidden rounded-md bg-white text-[#234b43] shadow-sm">
                                                        <div className="px-3 py-3 text-center text-3xl font-semibold leading-none">
                                                            {e.day}
                                                        </div>
                                                        <div className="bg-[#d2a64b] px-3 py-2 text-center text-xs font-medium tracking-wide text-[#123a33]">
                                                            {e.monthLabel}, {e.year}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <h3 className="truncate text-xl font-semibold md:text-2xl">
                                                            {e.title}
                                                        </h3>

                                                        <Link
                                                            href={e.href}
                                                            className="mt-1 inline-flex shrink-0 items-center gap-2 rounded-md border border-primary px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
                                                            aria-label={`${e.title} detay`}
                                                        >
                                                            <FiArrowUpRight className="h-5 w-5" />
                                                        </Link>
                                                    </div>

                                                    <div className="mt-3 space-y-2 text-sm text-white/80">
                                                        <div className="flex items-center gap-2">
                                                            <FiClock className="h-4 w-4" />
                                                            <span>
                                                                {e.time} • {e.dateText}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <FiMapPin className="h-4 w-4" />
                                                            <span className="truncate">{e.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {idx !== events.length - 1 && (
                                                <div className="mt-8 h-px w-full bg-white/15" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-2 rounded-md border-2 border-primary" />
                        <div className="relative min-h-[320px] overflow-hidden rounded-md bg-zinc-200 shadow-sm md:min-h-full">
                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={activeImage}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.35 }}
                                >

                                    <Image
                                        src={activeImage}
                                        alt="Etkinlik"
                                        fill
                                        className="object-cover"
                                    />

                                </motion.div>

                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-black/10" />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <TextMarquee />
                </div>
            </div>
        </section >
    );

}
