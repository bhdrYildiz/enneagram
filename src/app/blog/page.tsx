import { getAllBlogPosts } from "@/app/blog/data/BlogPost";
import type { Metadata } from "next";
import BlogClient from "@/app/blog/BlogClient";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Blog | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram, mizaç, kişisel gelişim, ilişki dinamikleri ve kurumsal ekip gelişimi üzerine yazılar. Enneagram Eğitim & Danışmanlık blog içeriklerini keşfedin.",
    keywords: [
        "enneagram blog",
        "enneagram yazıları",
        "mizaç blog",
        "enneagram mizaç tipleri",
        "kişisel gelişim enneagram",
        "ilişki dinamikleri enneagram",
        "kurumsal gelişim",
        "ekip iletişimi enneagram",
    ],

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

    alternates: {
        canonical: "https://www.enneagramegitim.com/blog",
    },

    openGraph: {
        title: "Blog | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram ve mizaç temelli içerikler: kişisel gelişim, ilişkiler, liderlik ve ekip dinamikleri.",
        url: "https://www.enneagramegitim.com/blog",
        siteName: "Enneagram Eğitim & Danışmanlık",
        images: [
            {
                url: "https://www.enneagramegitim.com/egitimler/afis1.jpg",
                width: 1200,
                height: 630,
                alt: "Enneagram Eğitim & Danışmanlık Blog",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Blog | Enneagram Eğitim & Danışmanlık",
        description:
            "Enneagram ve mizaç üzerine blog yazıları: kişisel gelişim, ilişkiler, liderlik ve ekip dinamikleri.",
        images: ["https://www.enneagramegitim.com/egitimler/afis1.jpg"],
    },
};

export default function BlogPage() {
    const allPosts = getAllBlogPosts();

    return (
        <Suspense fallback={null}>
            <BlogClient allPosts={allPosts} />
        </Suspense>
    );
}