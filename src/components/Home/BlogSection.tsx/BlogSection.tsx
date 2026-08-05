"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllBlogPosts } from "@/app/blog/data/BlogPost";

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
                        className="blog-swiper !pb-4"
                    >
                        {posts.map((post) => (
                            <SwiperSlide key={post.slug} className="flex h-auto">
                                <article className="flex h-full w-full">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        prefetch={false}
                                        className="group flex h-full w-full flex-col rounded-[30px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]"
                                    >
                                        {/* IMAGE */}

                                        <div className="relative aspect-[5/4] overflow-hidden bg-slate-100">
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width:768px)100vw,520px"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                            <div className="absolute bottom-6 left-6">
                                                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-xl">
                                                    Enneagram
                                                </span>
                                            </div>
                                        </div>

                                        {/* CONTENT */}

                                        <div className="flex flex-1 flex-col p-8">
                                            <h3 className="line-clamp-2 min-h-[64px] text-2xl font-light leading-snug text-primary transition-colors group-hover:text-secondary">
                                                {post.title}
                                            </h3>

                                            <p className="mt-5 flex-1 line-clamp-3 text-gray-600 leading-8">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-8 border-t border-slate-200 pt-6 flex items-center justify-between">
                                                <span className="text-sm text-gray-500">
                                                    {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    })}
                                                </span>

                                                <span className="inline-flex items-center gap-2 font-semibold text-secondary transition-all duration-300 group-hover:gap-4">
                                                    Oku

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="m12 5 7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            </SwiperSlide>
                        ))}
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