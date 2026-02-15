"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mizacTipleri } from "./_data/mizac-tipleri";

export default function MizacDetaySidebar() {
    const pathname = usePathname();

    return (
        <aside className="lg:sticky lg:top-28 self-start space-y-8">
            {/* ── Tüm mizaç tipleri listesi ── */}
            <div className="border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl tracking-wide text-primary mb-5">Mizaç Tipleri</h3>

                <ul className="space-y-2">
                    {mizacTipleri.map((m) => {
                        const active = pathname === `/mizac-tipleri/${m.slug}`;
                        return (
                            <li key={m.slug}>
                                <Link
                                    href={`/mizac-tipleri/${m.slug}`}
                                    className={[
                                        "group relative flex items-center justify-between",
                                        "rounded-full px-5 py-3",
                                        "transition-colors duration-300",
                                        active ? "text-white" : "text-primary",
                                    ].join(" ")}
                                >
                                    <span
                                        className={[
                                            "absolute inset-0 rounded-full bg-secondary",
                                            "origin-left scale-x-0",
                                            "transition-transform duration-900 ease-out",
                                            active ? "scale-x-100" : "group-hover:scale-x-100",
                                        ].join(" ")}
                                    />

                                    <span className="relative flex items-center gap-3">
                                        <span
                                            className={[
                                                "h-2 w-2 rounded-full",
                                                active ? "bg-white/90" : "bg-primary/70 group-hover:bg-white/90",
                                            ].join(" ")}
                                        />
                                        <span className="text-[18px] leading-none opacity-95">
                                            {m.slug}
                                        </span>
                                    </span>

                                    <span
                                        className={[
                                            "relative text-lg transition-transform duration-300",
                                            active ? "translate-x-0" : "group-hover:translate-x-1",
                                            active ? "opacity-100" : "opacity-80 group-hover:opacity-100",
                                        ].join(" ")}
                                        aria-hidden
                                    >
                                        ↗
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* ── CTA ── */}
            <div className="border border-black/10 bg-white p-8 text-center shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <p className="text-xs font-semibold tracking-[0.45em] uppercase text-secondary mb-3">
                    Mizacını Keşfet
                </p>
                <p className="text-xl font-[300] text-primary">Hangi Tiptens in?</p>
                <p className="mt-2 text-base text-primary/70 leading-relaxed">
                    Kısa test ile mizaç tipini öğren.
                </p>
                <div className="mt-6">
                    <Link
                        href="/mizac-tipini-kesfet"
                        className="block px-6 py-3 bg-[#1c2c34] text-white text-sm tracking-[0.25em] uppercase hover:bg-secondary transition-colors duration-300"
                    >
                        Testi Başlat
                    </Link>
                </div>
            </div>

        </aside>
    );
}