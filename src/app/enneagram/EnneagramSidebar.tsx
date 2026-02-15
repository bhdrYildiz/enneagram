"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string };

export default function EnneagramSidebar({
    title = "Sayfa İçeriği",
    items,
}: {
    title?: string;
    items: Item[];
}) {
    const pathname = usePathname();

    return (
        <aside className="lg:sticky lg:top-28 self-start space-y-8">
            <div className="border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl tracking-wide text-primary mb-5">{title}</h3>

                <ul className="space-y-2">
                    {items.map((it) => {
                        const active = pathname === it.href;
                        return (
                            <li key={it.href}>
                                <Link
                                    href={it.href}
                                    className={[
                                        "group relative flex items-center justify-between",
                                        "rounded-full px-5 py-3",
                                        "border border-transparent",
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
                                            {it.label}
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
            <div className="border border-black/10 bg-white p-8 text-center shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <p className="text-xs font-semibold tracking-[0.45em] uppercase text-secondary mb-3">
                    Eğitimler & İletişim
                </p>
                <p className="text-xl font-[300] text-primary">Eğitimlere Göz Atın</p>
                <p className="mt-2 text-base text-primary/70 leading-relaxed">
                    Programlar, içerikler ve kayıt bilgileri.
                </p>

                <div className="mt-6 flex justify-center gap-3">
                    <Link
                        href="/egitimlerimiz"
                        className="px-6 py-3 border border-black/10 text-sm tracking-[0.25em] uppercase text-primary hover:border-primary hover:text-white hover:bg-secondary transition"
                    >
                        Eğitimler
                    </Link>
                    <Link
                        href="/iletisim"
                        className="px-6 py-3 bg-[#1c2c34] text-white text-sm tracking-[0.25em] uppercase hover:bg-secondary transition"
                    >
                        İletişim
                    </Link>
                </div>
            </div>
        </aside>
    );
}
