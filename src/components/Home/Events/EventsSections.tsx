// app/components/EventsSection.tsx (veya components/EventsSection.tsx)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoMarquee from "@/motion/LogoMarquee";
import TextMarquee from "@/motion/TextMarquee";

type EventItem = {
    id: string;
    day: string;        // "22"
    monthLabel: string; // "Aralık"
    year: string;       // "2026"
    title: string;
    time: string;       // "10:00 - 18:00"
    dateText: string;   // "6 Kasım 2026"
    location: string;
    href: string;
};

const events: EventItem[] = [
    {
        id: "1",
        day: "22",
        monthLabel: "Aralık",
        year: "2026",
        title: "Thrift Store & Expo Showcase",
        time: "10:00 – 18:00",
        dateText: "6 Kasım 2026",
        location: "Nevşehir / Kapadokya",
        href: "/etkinlikler/thrift-expo",
    },
    {
        id: "2",
        day: "01",
        monthLabel: "Ocak",
        year: "2027",
        title: "Business Networking Buluşması",
        time: "12:00 – 17:00",
        dateText: "10 Ocak 2027",
        location: "Göreme / Kapadokya",
        href: "/etkinlikler/networking",
    },
    {
        id: "3",
        day: "14",
        monthLabel: "Ocak",
        year: "2027",
        title: "Global D2C Conference ’27",
        time: "09:30 – 16:30",
        dateText: "14 Ocak 2027",
        location: "Ürgüp / Kapadokya",
        href: "/etkinlikler/global-d2c",
    },
];

function IconClock(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                stroke="currentColor"
                strokeWidth="1.6"
                opacity="0.95"
            />
            <path
                d="M12 6.6v5.8l3.9 2.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M12 12.2a2.2 2.2 0 1 0-2.2-2.2 2.2 2.2 0 0 0 2.2 2.2Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>
    );
}

function IconArrow(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M7 17 17 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M10 7h7v7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function EventsSection() {
    return (
        <section className="relative py-20 bg-on-primary font-[300] text-on-primary">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_1fr]">
                    {/* LEFT */}
                    <div className="relative">
                        {/* BORDER FRAME (separate) */}
                        <div className="pointer-events-none absolute -inset-2 rounded-md border-2 border-primary" />

                        {/* CONTENT */}
                        <div className="relative rounded-md bg-[#234b43] px-6 py-10 text-white shadow-sm md:px-10">
                            {/* subtle pattern */}
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
                                        <div key={e.id} className="relative">
                                            <div className="flex items-start gap-5">
                                                {/* date card */}
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

                                                {/* content */}
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
                                                            <IconArrow className="h-5 w-5" />
                                                        </Link>
                                                    </div>

                                                    <div className="mt-3 space-y-2 text-sm text-white/80">
                                                        <div className="flex items-center gap-2">
                                                            <IconClock className="h-4 w-4" />
                                                            <span>
                                                                {e.time} • {e.dateText}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <IconPin className="h-4 w-4" />
                                                            <span className="truncate">{e.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* divider */}
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
                            <Image
                                src="/hero-1.jpg"
                                alt="Etkinlik görseli"
                                fill
                                className="object-cover"
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-black/10" />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <TextMarquee />
                </div>
            </div>
        </section>
    );

}
