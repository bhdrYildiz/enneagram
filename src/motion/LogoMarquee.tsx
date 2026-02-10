"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { logos } from "@/constant/constant";

const SPEED = 60;

export default function LogoMarquee() {
    const x = useMotionValue(0);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useAnimationFrame((_, delta) => {
        const el = trackRef.current;
        if (!el) return;

        const half = el.scrollWidth / 2;
        const next = x.get() - (SPEED * delta) / 1000;

        x.set(next <= -half ? 0 : next);
    });

    return (
        <div className="relative overflow-hidden border-t border-on-primary/10 pt-6 mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent" />

            <motion.div style={{ x }} className="flex">
                <div ref={trackRef} className="flex shrink-0">
                    <LogoSet />
                    <LogoSet />
                </div>
            </motion.div>
        </div>
    );
}

function LogoSet() {
    return (
        <div className="flex items-center gap-10 pr-10 py-4">
            {logos.map((logo) => (
                <div
                    key={logo.src}
                    className="relative h-10 w-[120px] opacity-80 hover:opacity-100 transition"
                >
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="120px"
                    />
                </div>
            ))}
        </div>
    );
}
