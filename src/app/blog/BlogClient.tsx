"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BlogSidebar from "@/app/blog/BlogSidebar";
import PageHero from "@/components/ui/PageHero";

type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    author?: string;
    publishedAt: string;
    tags?: string[];
    categories?: string[];
};

function formatDateBadge(iso: string) {
    const d = new Date(iso);

    if (Number.isNaN(d.getTime())) {
        return {
            day: "--",
            monthYear: "--",
        };
    }

    const day = d.getDate().toString().padStart(2, "0");

    const month = d
        .toLocaleString("tr-TR", {
            month: "short",
        })
        .toUpperCase();

    const year = d.getFullYear().toString().slice(-2);

    return {
        day,
        monthYear: `${month} ${year}`,
    };
}

export default function BlogClient({
    allPosts,
}: {
    allPosts: BlogPost[];
}) {
    const searchParams = useSearchParams();

    const q = (searchParams.get("q") ?? "")
        .trim()
        .toLowerCase();

    const tag = (searchParams.get("tag") ?? "").trim();

    const category = (
        searchParams.get("category") ?? ""
    ).trim();

    const filtered = allPosts.filter((post) => {
        const matchesQ =
            !q ||
            post.title.toLowerCase().includes(q) ||
            post.excerpt.toLowerCase().includes(q);

        const matchesTag =
            !tag ||
            (post.tags ?? []).includes(tag);

        const matchesCategory =
            !category ||
            (post.categories ?? []).includes(category);

        return (
            matchesQ &&
            matchesTag &&
            matchesCategory
        );
    });

    const pageSize = 4;

    const requestedPage =
        Number(searchParams.get("page") ?? "1") || 1;

    const totalPages = Math.max(
        1,
        Math.ceil(filtered.length / pageSize)
    );

    const safePage = Math.min(
        Math.max(1, requestedPage),
        totalPages
    );

    const start = (safePage - 1) * pageSize;

    const posts = filtered.slice(
        start,
        start + pageSize
    );

    const allTags = Array.from(
        new Set(
            allPosts.flatMap(
                (post) => post.tags ?? []
            )
        )
    ).sort((a, b) =>
        a.localeCompare(b, "tr")
    );

    const categories = Array.from(
        new Set(
            allPosts.flatMap(
                (post) => post.categories ?? []
            )
        )
    ).sort((a, b) =>
        a.localeCompare(b, "tr")
    );

    const recentPosts = allPosts
        .slice(0, 3)
        .map((post) => ({
            slug: post.slug,
            title: post.title,
            coverImage: post.coverImage,
            author: post.author,
            publishedAt: post.publishedAt,
        }));

    const makePageHref = (page: number) => {
        const params = new URLSearchParams();

        if (q) {
            params.set("q", q);
        }

        if (tag) {
            params.set("tag", tag);
        }

        if (category) {
            params.set("category", category);
        }

        params.set("page", String(page));

        return `/blog?${params.toString()}`;
    };

    return (
        <main className="bg-white font-cormorant">
            <PageHero
                title="Blog"
                subtitle="Sizin için hazırladığımız blog yazıları"
                backgroundImage="/blogbanner.png"
                breadcrumbs={[
                    {
                        label: "Ana Sayfa",
                        href: "/",
                    },
                    {
                        label: "Blog",
                    },
                ]}
            />

            <section className="py-20 md:py-24">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">

                        <div>

                            <div className="space-y-14">

                                {posts.map((post) => {
                                    const badge =
                                        formatDateBadge(
                                            post.publishedAt
                                        );

                                    const metaTags = (
                                        post.tags ?? []
                                    ).slice(0, 3);

                                    return (
                                        <article
                                            key={post.slug}
                                            className="group"
                                        >

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="block"
                                            >

                                                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-primary/[0.03]">

                                                    <Image
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 900px"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                                    />

                                                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.05]" />

                                                </div>

                                                <div className="pt-7">

                                                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-primary/40">

                                                        <span>
                                                            {badge.day}{" "}
                                                            {badge.monthYear}
                                                        </span>

                                                        <span className="h-1 w-1 rounded-full bg-secondary/80" />

                                                        <span>
                                                            {post.author ??
                                                                "Enneagram Eğitim"}
                                                        </span>

                                                        {metaTags.length >
                                                            0 && (
                                                                <>
                                                                    <span className="h-1 w-1 rounded-full bg-secondary/80" />

                                                                    <span>
                                                                        {metaTags.join(
                                                                            " • "
                                                                        )}
                                                                    </span>
                                                                </>
                                                            )}

                                                    </div>

                                                    <h2 className="max-w-[850px] text-3xl md:text-4xl font-light leading-[1.15] tracking-[-0.02em] text-primary transition-colors duration-300 group-hover:text-secondary">
                                                        {post.title}
                                                    </h2>

                                                    <p className="mt-5 max-w-[800px] text-base md:text-[17px] leading-8 text-primary/60">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="mt-7 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary/55 transition-all duration-300 group-hover:gap-4 group-hover:text-secondary">
                                                        <span>
                                                            Devamını Oku
                                                        </span>

                                                        <span className="text-base leading-none">
                                                            →
                                                        </span>
                                                    </div>

                                                </div>

                                            </Link>

                                            <div className="mt-12 h-px w-full bg-black/[0.07]" />

                                        </article>
                                    );
                                })}

                            </div>

                            {posts.length === 0 && (
                                <div className="py-16 text-center text-primary/50">
                                    Aramanızla eşleşen blog yazısı bulunamadı.
                                </div>
                            )}

                            <div className="mt-14 flex flex-wrap items-center justify-center gap-2">

                                {Array.from(
                                    {
                                        length: totalPages,
                                    },
                                    (_, index) =>
                                        index + 1
                                ).map((page) => (
                                    <Link
                                        key={page}
                                        href={makePageHref(
                                            page
                                        )}
                                        className={`grid h-10 w-10 place-items-center rounded-full border text-sm transition-all duration-300 ${page ===
                                            safePage
                                            ? "border-primary bg-primary text-white"
                                            : "border-black/10 bg-white text-primary/60 hover:border-secondary hover:text-secondary"
                                            }`}
                                    >
                                        {page}
                                    </Link>
                                ))}

                                {safePage <
                                    totalPages && (
                                        <Link
                                            href={makePageHref(
                                                safePage + 1
                                            )}
                                            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-primary/60 transition-all duration-300 hover:border-secondary hover:text-secondary"
                                            aria-label="Sonraki sayfa"
                                        >
                                            →
                                        </Link>
                                    )}

                            </div>

                        </div>

                        <BlogSidebar
                            categories={categories}
                            tags={allTags}
                            recentPosts={recentPosts}
                        />

                    </div>
                </div>
            </section>
        </main>
    );
}