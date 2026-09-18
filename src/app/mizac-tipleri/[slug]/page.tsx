import MizacDetayClient from "./MizacDetayClient";
import { mizacTipleri } from "../_data/mizac-tipleri";

export function generateStaticParams() {
    return mizacTipleri.map((mizac) => ({
        slug: mizac.slug,
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return <MizacDetayClient slug={slug} />;
}