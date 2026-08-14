"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mizacTipleri } from "./_data/mizac-tipleri";

export default function MizacDetaySidebar() {
    const pathname = usePathname();
    return (
        <aside className="lg:sticky lg:top-28 self-start">
            <div className="border-t border-primary/15">

                <div className="py-6 border-b border-primary/10">
                    <p className="text-xs font-semibold tracking-[0.35em] uppercase text-secondary">
                        Bölüm
                    </p>
                    <h3 className="mt-2 text-2xl font-light tracking-wide text-primary">
                        Mizaç Tipleri
                    </h3>
                </div>

                <nav aria-label="Mizaç Tipleri menüsü">
                    <ul>
                        {mizacTipleri.map((m, index) => {
                            const active =
                                pathname === `/mizac-tipleri/${m.slug}`;

                            return (
                                <li key={m.slug}>
                                    <Link
                                        href={`/mizac-tipleri/${m.slug}`}
                                        className={[
                                            "group relative flex items-center gap-5 py-5",
                                            "border-b border-primary/10",
                                            "transition-all duration-300",
                                            active
                                                ? "text-primary"
                                                : "text-primary/65 hover:text-primary",
                                        ].join(" ")}
                                    >

                                        {/* NUMBER */}
                                        <span
                                            className={[
                                                "text-xs tracking-[0.15em] font-semibold",
                                                "transition-colors duration-300",
                                                active
                                                    ? "text-secondary"
                                                    : "text-primary/35 group-hover:text-secondary",
                                            ].join(" ")}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* ACTIVE INDICATOR */}
                                        <span
                                            className={[
                                                "absolute left-0 bottom-0 h-[2px]",
                                                "bg-secondary transition-all duration-300",
                                                active
                                                    ? "w-10"
                                                    : "w-0 group-hover:w-6",
                                            ].join(" ")}
                                        />

                                        {/* TITLE */}
                                        <span className="flex-1 text-[16px] leading-tight">
                                            {m.title}
                                        </span>

                                        {/* ARROW */}
                                        <span
                                            className={[
                                                "text-base transition-all duration-300",
                                                active
                                                    ? "text-secondary translate-x-0"
                                                    : "text-primary/35 group-hover:text-secondary group-hover:translate-x-1",
                                            ].join(" ")}
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

            </div>


            {/* CTA */}
            <div className="mt-12 border border-primary/10 p-7">

                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-secondary">
                    ENNEAGRAM EĞİTİMLERİ
                </p>

                <h4 className="mt-4 text-xl font-light leading-snug text-primary">
                    Enneagram yolculuğunuzu
                    <br />
                    derinleştirin.
                </h4>

                <p className="mt-4 text-sm leading-relaxed text-primary/60">
                    Eğitim programlarımızı ve içeriklerimizi keşfedin.
                </p>

                <Link
                    href="/egitimlerimiz"
                    className="group mt-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary"
                >
                    <span className="relative">
                        Eğitimleri İncele
                        <span className="absolute left-0 -bottom-2 h-px w-full bg-secondary transition-all duration-300 group-hover:w-1/2" />
                    </span>

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>

            </div>

        </aside>
    );
}