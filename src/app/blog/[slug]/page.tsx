import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { getAllBlogPosts, getBlogPostBySlug } from "@/app/blog/data/BlogPost";
import BlogSidebar from "@/app/blog/BlogSidebar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import PageHero from "@/components/ui/PageHero";

const BASE_URL = "https://www.enneagramegitim.com";

type PageParams = { slug: string };

function formatDateBadge(iso: string) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return { day: "--", monthYear: "--" };
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const year = d.getFullYear().toString().slice(-2);
    return { day, monthYear: `${month} ${year}` };
}

export function generateStaticParams() {
    return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { slug } = await params;

    const post = getBlogPostBySlug(slug);
    if (!post) return {};

    const url = `${BASE_URL}/blog/${post.slug}`;
    const ogImage = post.coverImage.startsWith("http")
        ? post.coverImage
        : `${BASE_URL}${post.coverImage}`;

    const keywords = Array.from(
        new Set([...(post.tags ?? []), ...(post.categories ?? [])])
    );

    return {
        title: `${post.title} | Enneagram Eğitim`,
        description: post.excerpt,
        keywords,

        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1,
            },
        },

        alternates: { canonical: url },

        openGraph: {
            title: `${post.title} | Enneagram Eğitim`,
            description: post.excerpt,
            url,
            siteName: "Enneagram Eğitim",
            images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
            locale: "tr_TR",
            type: "article",
            publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
            authors: post.author ? [post.author] : ["Enneagram Eğitim"],
            section: (post.categories && post.categories[0]) ? post.categories[0] : undefined,
            tags: post.tags ?? undefined,
        },

        twitter: {
            card: "summary_large_image",
            title: `${post.title} | Enneagram Eğitim`,
            description: post.excerpt,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage(
    { params }: { params: Promise<PageParams> }
) {
    const { slug } = await params;

    const post = getBlogPostBySlug(slug);
    if (!post) notFound();

    const allPosts = getAllBlogPosts();
    const currentIndex = allPosts.findIndex((x) => x.slug === post.slug);
    const newerPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;
    const previousPost =
        currentIndex >= 0 && currentIndex < allPosts.length - 1
            ? allPosts[currentIndex + 1]
            : undefined;

    const allTags = Array.from(new Set(allPosts.flatMap((x) => x.tags ?? []))).sort((a, b) =>
        a.localeCompare(b, "tr")
    );
    const allCategories = Array.from(new Set(allPosts.flatMap((x) => x.categories ?? []))).sort(
        (a, b) => a.localeCompare(b, "tr")
    );
    const recentPosts = allPosts.slice(0, 3).map((x) => ({
        slug: x.slug,
        title: x.title,
        coverImage: x.coverImage,
        author: x.author,
        publishedAt: x.publishedAt,
    }));

    const badge = formatDateBadge(post.publishedAt);
    const metaTags = (post.tags ?? []).slice(0, 4);
    const shareUrl = `${BASE_URL}/blog/${post.slug}`;
    return (
        <>
            <main className="bg-white font-cormorant">
                <PageHero
                    title="Blog"
                    subtitle="Blog Yazılarımız"
                    backgroundImage="/enneagram_banner.jpg"
                    breadcrumbs={[
                        { label: "ANA SAYFA", href: "/" },
                        { label: "BLOG", href: "/blog" },
                        { label: post.title },
                    ]}
                />

                <section className="py-16 md:py-20">
                    <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">
                            <div>
                                <div className="mb-10">
                                    <Link href="/blog" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary/50 transition-colors duration-300 hover:text-secondary">
                                        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                                        Blog'a Dön
                                    </Link>
                                </div>
                                <article>
                                    <header className="mb-10">

                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.17em] text-primary/45">

                                            <span>{badge.day} {badge.monthYear}</span>

                                            <span className="h-1 w-1 rounded-full bg-secondary" />

                                            <span>{post.author ?? "Enneagram Eğitim"}</span>

                                            {metaTags.length > 0 && (
                                                <>
                                                    <span className="h-1 w-1 rounded-full bg-secondary" />
                                                    <span>{metaTags.join(" • ")}</span>
                                                </>
                                            )}

                                        </div>

                                        <h1 className="mt-6 max-w-[850px] text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.08] tracking-[-0.025em] text-primary">
                                            {post.title}
                                        </h1>

                                        {post.excerpt && (
                                            <p className="mt-6 max-w-[760px] text-lg md:text-xl leading-8 text-primary/60">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        <div className="mt-8 h-px w-20 bg-secondary" />

                                    </header>


                                    {/* KAPAK GÖRSELİ */}
                                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] bg-primary/[0.03]">

                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, 900px"
                                            className="object-cover"
                                        />

                                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.05]" />

                                    </div>


                                    {/* İÇERİK */}
                                    <div className="mx-auto mt-14 max-w-[760px] overflow-x-hidden break-words">

                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h1: ({ children }) => (
                                                    <h2 className="mt-12 mb-5 text-3xl md:text-4xl font-medium leading-tight text-primary">
                                                        {children}
                                                    </h2>
                                                ),

                                                h2: ({ children }) => (
                                                    <h2 className="mt-12 mb-5 text-2xl md:text-3xl font-medium leading-tight text-primary">
                                                        {children}
                                                    </h2>
                                                ),

                                                h3: ({ children }) => (
                                                    <h3 className="mt-10 mb-4 text-xl md:text-2xl font-medium leading-tight text-primary">
                                                        {children}
                                                    </h3>
                                                ),

                                                p: ({ children }) => (
                                                    <p className="mb-7 text-[17px] md:text-[18px] leading-[1.9] text-primary/80">
                                                        {children}
                                                    </p>
                                                ),

                                                ul: ({ children }) => (
                                                    <ul className="mb-8 list-disc space-y-3 pl-6 text-[17px] leading-[1.8] text-primary/80 marker:text-secondary">
                                                        {children}
                                                    </ul>
                                                ),

                                                ol: ({ children }) => (
                                                    <ol className="mb-8 list-decimal space-y-3 pl-6 text-[17px] leading-[1.8] text-primary/80 marker:text-secondary">
                                                        {children}
                                                    </ol>
                                                ),

                                                li: ({ children }) => (
                                                    <li>
                                                        {children}
                                                    </li>
                                                ),

                                                blockquote: ({ children }) => (
                                                    <blockquote className="relative my-10 overflow-hidden rounded-r-2xl border-l-2 border-secondary bg-primary/[0.035] px-7 py-7 text-lg italic leading-8 text-primary/75">
                                                        {children}
                                                    </blockquote>
                                                ),

                                                a: ({ href, children }) => (
                                                    <a href={href} className="font-medium text-secondary underline decoration-secondary/30 underline-offset-4 transition-colors hover:text-primary" rel={href?.startsWith("http") ? "noreferrer noopener" : undefined} target={href?.startsWith("http") ? "_blank" : undefined}>
                                                        {children}
                                                    </a>
                                                ),

                                                strong: ({ children }) => (
                                                    <strong className="font-semibold text-primary">
                                                        {children}
                                                    </strong>
                                                ),
                                            }}
                                        >
                                            {post.content}
                                        </ReactMarkdown>

                                    </div>


                                    {/* PAYLAŞ */}
                                    <div className="mx-auto mt-16 max-w-[760px] border-t border-black/10 pt-8">

                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                            <span className="text-[11px] uppercase tracking-[0.22em] text-primary/45">
                                                Bu Yazıyı Paylaş
                                            </span>

                                            <div className="flex items-center gap-2">

                                                {[
                                                    {
                                                        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                                                        label: "Facebook",
                                                        icon: <FaFacebookF />,
                                                    },
                                                    {
                                                        href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
                                                        label: "Twitter",
                                                        icon: <FaTwitter />,
                                                    },
                                                    {
                                                        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                                                        label: "LinkedIn",
                                                        icon: <FaLinkedinIn />,
                                                    },
                                                ].map((s) => (
                                                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-primary/10 text-sm text-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-white">
                                                        {s.icon}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto mt-12 max-w-[900px]">

                                        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/[0.08] md:grid-cols-2">

                                            {previousPost ? (
                                                <Link href={`/blog/${previousPost.slug}`} className="group flex min-h-[150px] items-center gap-5 p-6 transition-colors duration-300 hover:bg-primary/[0.025] md:border-r md:border-black/[0.08]">

                                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-primary/[0.04]">
                                                        <Image src={previousPost.coverImage} alt={previousPost.title} fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                                    </div>

                                                    <div className="min-w-0">

                                                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/40">
                                                            ← Önceki Yazı
                                                        </span>

                                                        <p className="mt-2 line-clamp-2 text-lg leading-snug text-primary transition-colors group-hover:text-secondary">
                                                            {previousPost.title}
                                                        </p>

                                                    </div>

                                                </Link>
                                            ) : (
                                                <div className="hidden md:block" />
                                            )}

                                            {newerPost ? (
                                                <Link href={`/blog/${newerPost.slug}`} className="group flex min-h-[150px] items-center justify-between gap-5 border-t border-black/[0.08] p-6 transition-colors duration-300 hover:bg-primary/[0.025] md:border-t-0">

                                                    <div className="min-w-0 md:text-right">

                                                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/40">
                                                            Sonraki Yazı →
                                                        </span>

                                                        <p className="mt-2 line-clamp-2 text-lg leading-snug text-primary transition-colors group-hover:text-secondary">
                                                            {newerPost.title}
                                                        </p>

                                                    </div>

                                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-primary/[0.04]">
                                                        <Image src={newerPost.coverImage} alt={newerPost.title} fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                                    </div>

                                                </Link>
                                            ) : (
                                                <div className="hidden md:block" />
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <BlogSidebar categories={allCategories} tags={allTags} recentPosts={recentPosts} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}