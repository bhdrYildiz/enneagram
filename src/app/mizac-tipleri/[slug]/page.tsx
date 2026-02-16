import MizacDetayClient from "./MizacDetayClient";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <MizacDetayClient slug={slug} />;
}
