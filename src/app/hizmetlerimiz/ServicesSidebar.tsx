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

            {/* HİZMETLER MENÜSÜ */}

            <div className="border-t border-black/10 pt-6">

                <div className="mb-7">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">
                        HİZMETLERİMİZ
                    </span>

                    <h3 className="mt-2 text-2xl text-primary">
                        Diğer Çalışmalarımız
                    </h3>
                </div>

                <nav>
                    <ul>
                        {services.map((s, index) => {
                            const href = `/hizmetlerimiz/${s.slug}`;
                            const active = pathname === href;

                            return (
                                <li key={s.slug} className="border-b border-black/10 last:border-b-0">
                                    <Link href={href} className={`group relative flex items-center gap-4 py-4 transition-all duration-300 ${active ? "text-secondary" : "text-primary hover:text-secondary"}`}>

                                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-secondary transition-all duration-300 ${active ? "h-7" : "group-hover:h-5"}`} />

                                        <span className={`flex-1 text-[17px] leading-tight transition-all duration-300 ${active ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                                            {s.title}
                                        </span>

                                        <span className={`text-base transition-all duration-300 ${active ? "translate-x-0 opacity-100" : "opacity-30 group-hover:translate-x-1 group-hover:opacity-100"}`}>
                                            ↗
                                        </span>

                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="relative overflow-hidden border rounded-lg border-black/10 bg-primary p-8 text-center">
                <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full border border-secondary/10" />
                <div className="absolute -left-20 -bottom-20 w-44 h-44 rounded-full border border-secondary/10" />
                <div className="relative z-10">
                    <div className="flex justify-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/10 bg-white">
                            <Image src="/Logo.png.png" alt="Enneagram Eğitim & Danışmanlık" fill sizes="96px" className="object-contain" />
                        </div>
                    </div>

                    <p className="mt-6 text-xl text-white leading-tight">
                        Enneagram Eğitim
                        <br />
                        <span className="text-secondary">& Danışmanlık</span>
                    </p>

                    <p className="mt-4 text-sm leading-6 text-white/55">
                        Mizaç merkezli eğitim ve danışmanlık çalışmalarımız hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
                    </p>

                    <Link href="/iletisim" className="mt-6 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:gap-5 hover:border-secondary hover:text-secondary">
                        İletişime Geçin
                        <span className="text-sm">↗</span>
                    </Link>

                    <div className="mt-7 pt-6 border-t border-white/10 flex justify-center items-center gap-5 text-white/60">

                        <Link href="https://www.instagram.com/enneagramegitim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-secondary">
                            <FaInstagram size={18} />
                        </Link>

                        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-secondary">
                            <FaFacebookF size={17} />
                        </Link>

                        <Link href="https://www.youtube.com/enneagramegitim/" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="transition-colors hover:text-secondary">
                            <FaYoutube size={19} />
                        </Link>

                        <Link href="https://wa.me/905435406443" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp" className="transition-colors hover:text-secondary">
                            <FaWhatsapp size={19} />
                        </Link>

                    </div>

                </div>

            </div>

        </aside>
    );
}