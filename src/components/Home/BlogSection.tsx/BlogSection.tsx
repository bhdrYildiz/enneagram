"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllBlogPosts } from "@/app/blog/data/BlogPost";

function formatDateBadge(iso: string) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
    if (!m) return { day: "--", monthYear: "--" };

    const year = m[1].slice(-2);
    const month = m[2]; 
    const day = m[3]; 

    return { day, monthYear: `${month} / ${year}` };
}

export default function BlogSection() {
    const posts = getAllBlogPosts().slice(0, 6);

    return (
        <section className="bg-on-primary py-24 font-[300] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <span className="h-px w-14 bg-secondary/70" />
                        <p className="text-sm md:text-base uppercase tracking-[0.35em] text-secondary font-bold">
                            BLOG YAZILARI
                        </p>
                        <span className="h-px w-14 bg-secondary/70" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[300] text-primary tracking-wide mb-4">
                        ENNEAGRAM REHBERİ
                    </h2>
                    <p className="text-primary leading-relaxed text-base font-[300] tracking-wide max-w-3xl mx-auto mb-12">
                        Enneagram Hakkında Ayrıntılı Bilgiler
                    </p>
                </div>

                <div className="relative group/nav">
                    <button
                        type="button"
                        aria-label="Önceki"
                        className="blog-swiper-prev hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 h-14 w-14 rounded-full border border-black/10 bg-white/80 backdrop-blur transition
            opacity-0 pointer-events-none cursor-pointer group-hover:opacity-100 group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto"
                    >
                        <span className="text-2xl text-primary leading-none">‹</span>
                    </button>
                    <button
                        type="button"
                        aria-label="Sonraki"
                        className="blog-swiper-next hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 h-14 w-14 rounded-full border border-black/10 bg-white/80 backdrop-blur transition
            opacity-0 pointer-events-none cursor-pointer group-hover:opacity-100 group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto"
                    >
                        <span className="text-2xl text-primary leading-none">›</span>
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".blog-swiper-prev",
                            nextEl: ".blog-swiper-next",
                        }}
                        spaceBetween={28}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="blog-swiper"
                    >
                        {posts.map((post) => {
                            const badge = formatDateBadge(post.publishedAt);
                            return (
                                <SwiperSlide key={post.slug}>
                                    <article>
                                        <Link href={`/blog/${post.slug}`} className="block group" prefetch={false}>
                                            <div className="relative overflow-hidden">
                                                <div className="relative h-[320px] md:h-[420px] overflow-hidden shadow-lg">
                                                    <Image
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 520px"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>

                                                <div className="absolute left-5 top-5 h-[86px] w-[86px] bg-[#1c2c34] text-white flex flex-col items-center justify-center shadow-lg">
                                                    <div className="text-4xl font-light leading-none">
                                                        {badge.day}
                                                    </div>
                                                    <div className="text-xs tracking-wider mt-1 opacity-90">
                                                        {badge.monthYear}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-7">
                                                <h3 className="text-2xl md:text-3xl font-[300] text-primary leading-snug mb-3">
                                                    {post.title}
                                                </h3>
                                                <p className="text-primary font-[300] leading-relaxed text-base tracking-light line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                        </Link>
                                    </article>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div className="flex justify-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white px-10 py-3 text-sm font-semibold font-[300] tracking-wider transition-colors duration-300"
                        prefetch={false}
                    >
                        TÜM YAZILARI GÖR
                    </Link>
                </div>
            </div>
        </section>
    );
}