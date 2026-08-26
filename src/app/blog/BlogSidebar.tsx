"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

type RecentPost = {
    slug: string;
    title: string;
    coverImage: string;
    author?: string;
    publishedAt: string;
};

function formatDateSide(iso: string) {
    try {
        return new Date(iso).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    } catch {
        return iso;
    }
}

export default function BlogSidebar(props: {
    categories: string[];
    tags: string[];
    recentPosts: RecentPost[];
}) {
    const categories = useMemo(() => props.categories.filter(Boolean).slice(0, 10), [props.categories]);
    const tags = useMemo(() => props.tags.filter(Boolean).slice(0, 12), [props.tags]);

    return (
        <aside className="lg:sticky lg:top-28 self-start space-y-8">

            {/* KURUM KARTI */}
            <div className="rounded-[1.75rem] border border-black/[0.08] bg-white p-7 text-center">

                <div className="flex justify-center">
                    <div className="relative h-[92px] w-[96px] overflow-hidden rounded-full border border-black/[0.08] bg-white">
                        <Image src="/Logo.png.png" alt="Enneagram Eğitim" fill sizes="92px" className="object-contain p-2" />
                    </div>
                </div>

                <h3 className="mt-5 text-xl font-medium text-primary">
                    Enneagram Eğitim & Danışmanlık
                </h3>

                <p className="mt-3 text-sm leading-6 text-primary/55">
                    Mizaç temelli farkındalık, eğitim ve gelişim içerikleri.
                </p>

                <div className="mt-6 flex justify-center gap-2">

                    <Link href="https://www.instagram.com/enneagramegitim/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" prefetch={false} className="grid h-9 w-9 place-items-center rounded-full border border-primary/10 text-sm text-primary/60 transition-all hover:border-secondary hover:bg-secondary hover:text-white">
                        <FaInstagram />
                    </Link>

                    <Link href="https://www.facebook.com/enneagramegitim" aria-label="Facebook" target="_blank" rel="noopener noreferrer" prefetch={false} className="grid h-9 w-9 place-items-center rounded-full border border-primary/10 text-sm text-primary/60 transition-all hover:border-secondary hover:bg-secondary hover:text-white">
                        <FaFacebookF />
                    </Link>

                    <Link href="https://www.youtube.com/@tv.enneagram/videos" aria-label="YouTube" target="_blank" rel="noopener noreferrer" prefetch={false} className="grid h-9 w-9 place-items-center rounded-full border border-primary/10 text-sm text-primary/60 transition-all hover:border-secondary hover:bg-secondary hover:text-white">
                        <FaYoutube />
                    </Link>

                    <Link href="https://wa.me/905557597345" aria-label="Whatsapp" target="_blank" rel="noopener noreferrer" prefetch={false} className="grid h-9 w-9 place-items-center rounded-full border border-primary/10 text-sm text-primary/60 transition-all hover:border-secondary hover:bg-secondary hover:text-white">
                        <FaWhatsapp />
                    </Link>

                </div>

            </div>


            {/* ARAMA */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-5">

                <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-primary/45">
                    Blog'da Ara
                </p>

                <form action="/blog" method="get" className="flex overflow-hidden rounded-xl border border-black/10">
                    <input name="q" placeholder="Arama yapın..." className="w-full bg-transparent px-4 py-3 text-sm text-primary outline-none placeholder:text-primary/30" />
                    <button type="submit" aria-label="Arama yapın" className="grid w-12 shrink-0 place-items-center bg-primary text-white transition-colors hover:bg-secondary">
                        <span className="text-lg leading-none">⌕</span>
                    </button>
                </form>
            </div>

            {/* KATEGORİLER */}
            {categories.length > 0 && (
                <div>

                    <div className="mb-4 flex items-center justify-between">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-primary/45">
                            Kategoriler
                        </p>

                        <span className="h-px w-10 bg-secondary/60" />
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white">

                        {categories.map((c, index) => (
                            <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} className={`flex items-center justify-between px-5 py-4 text-sm text-primary/70 transition-all hover:bg-primary/[0.025] hover:text-secondary ${index !== categories.length - 1 ? "border-b border-black/[0.06]" : ""}`} prefetch={false}>
                                <span>{c}</span>
                                <span className="text-xs text-primary/25">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}


            {/* SON YAZILAR */}
            {props.recentPosts.length > 0 && (
                <div>

                    <div className="mb-4 flex items-center justify-between">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-primary/45">
                            Son Yazılar
                        </p>

                        <span className="h-px w-10 bg-secondary/60" />
                    </div>

                    <div className="space-y-4">

                        {props.recentPosts.slice(0, 3).map((p) => (
                            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4 rounded-2xl border border-black/[0.08] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]" prefetch={false}>

                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-primary/[0.04]">
                                    <Image src={p.coverImage} alt={p.title} fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>

                                <div className="min-w-0">

                                    <p className="line-clamp-2 text-sm font-medium leading-snug text-primary transition-colors group-hover:text-secondary">
                                        {p.title}
                                    </p>

                                    <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-primary/35">
                                        {formatDateSide(p.publishedAt)}
                                    </p>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>
            )}
            {tags.length > 0 && (
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-primary/45">
                            Etiketler
                        </p>

                        <span className="h-px w-10 bg-secondary/60" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((t) => (
                            <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className="rounded-full border border-primary/10 bg-white px-4 py-2 text-xs text-primary/60 transition-all hover:border-secondary hover:bg-secondary hover:text-white" prefetch={false}>
                                {t}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
}