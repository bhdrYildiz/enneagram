
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MizacDetayClient from "./MizacDetayClient";
import { mizacTipleri } from "../_data/mizac-tipleri";

const BASE_URL = "https://www.enneagramegitim.com";

type PageParams = {
    slug: string;
};

export function generateStaticParams() {
    return mizacTipleri.map((mizac) => ({
        slug: mizac.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<PageParams>;
}): Promise<Metadata> {
    const { slug } = await params;

    const mizac = mizacTipleri.find((item) => item.slug === slug);

    if (!mizac) {
        return {
            title: "Mizaç Bulunamadı",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const mizacNo = Number(slug.replace("mizac-", ""));
    const title = `Enneagram Mizaç ${mizacNo}`;
    const description =
        `Enneagram Mizaç ${mizacNo} özellikleri, temel ihtiyaçları, ` +
        `güçlü yönleri ve gelişim alanları hakkında detaylı bilgi edinin.`;

    const url = `${BASE_URL}/mizac-tipleri/${slug}/`;

    return {
        title,
        description,

        alternates: {
            canonical: url,
        },

        robots: {
            index: true,
            follow: true,
        },

        openGraph: {
            title,
            description,
            url,
            siteName: "Enneagram Eğitim & Danışmanlık",
            locale: "tr_TR",
            type: "article",
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<PageParams>;
}) {
    const { slug } = await params;

    const mizac = mizacTipleri.find((item) => item.slug === slug);

    if (!mizac) {
        notFound();
    }

    return <MizacDetayClient slug={slug} />;
}
