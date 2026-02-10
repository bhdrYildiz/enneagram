"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

export default function TextMarquee({
    text = "ENNEAGRAM EĞİTİM & DANIŞMANLIK &",
    speed = 70,
    className,
}: {
    text?: string;
    speed?: number;
    className?: string;
}) {
    const x = useMotionValue(0);

    useAnimationFrame((t, delta) => {
        const currentX = x.get();
        const newX = currentX - (speed * delta) / 1000;
        if (newX < -800) {
            x.set(0);
        } else {
            x.set(newX);
        }
    });

    return (
        <div className={"bg-on-primary " + (className ?? "")}>
            <motion.div style={{ x }} className="flex whitespace-nowrap py-2 text-3xl font-semibold text-secondary/90">
                {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="mx-4">{text}</span>
                ))}
            </motion.div>
        </div>
    );
}