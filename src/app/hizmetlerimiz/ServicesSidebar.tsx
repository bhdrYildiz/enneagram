"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Service } from "@/app/hizmetlerimiz/_data/services";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function ServicesSidebar({ services }: { services: Service[] }) {
    const pathname = usePathname();

    return (
        <aside className="space-y-8">
            {/* Liste */}
            <div className="border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl tracking-wide text-primary mb-5">Diğer Hizmetler</h3>

                <ul className="space-y-2">
                    {services.map((s) => {
                        const href = `/hizmetlerimiz/${s.slug}`;
                        const active = pathname === href;

                        return (
                            <li key={s.slug}>
                                <Link
                                    href={href}
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
                                            "absolute inset-0 rounded-full",
                                            "bg-secondary",
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
                                        <span className={["text-[18px] leading-none", active ? "opacity-100" : "opacity-95"].join(" ")}>
                                            {s.title}
                                        </span>
                                    </span>

                                    <span
                                        className={[
                                            "relative text-lg",
                                            "transition-transform duration-300",
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

            <div className="p-8 text-center border border-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <div className="flex justify-center">
                    <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden border border-black/10">
                        <Image
                            src="/Logo.png"
                            alt="enneagram egitim"
                            fill
                            sizes="110px"
                            className="object-contain rounded-full bg-primary/20"
                        />
                    </div>
                </div>

                <p className="mt-5 text-xl font-[300] text-primary">
                    Enneagram Eğitim & Danışmanlık
                </p>

                <p className="mt-2 text-base text-primary leading-relaxed">
                    İletişime Geçin!
                </p>

                {/* Dikey Sosyal Alan */}
                <div className="flex flex-row justify-center items-center gap-4 mt-6 text-primary">
                    <Link
                        href="https://www.instagram.com/enneagramegitim/"
                        aria-label="Instagram"
                        className="hover:text-secondary transition"
                    >
                        <FaInstagram size={20} />
                    </Link>

                    <Link
                        href="https://www.instagram.com/enneagramegitim/"
                        aria-label="Facebook"
                        className="hover:text-secondary transition"
                    >
                        <FaFacebookF size={20} />
                    </Link>

                    <Link
                        href="https://www.youtube.com/enneagramegitim/"
                        aria-label="Youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                        className="hover:text-secondary transition"
                    >
                        <FaYoutube size={20} />
                    </Link>

                    <Link
                        href="https://wa.me/905303897163"
                        aria-label="Whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                        className="hover:text-secondary transition"
                    >
                        <FaWhatsapp size={20} />
                    </Link>
                </div>
            </div>

        </aside>
    );
}
