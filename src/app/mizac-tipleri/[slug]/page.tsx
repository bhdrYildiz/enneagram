"use client";

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInCard } from "@/app/lib/animations";
import { mizacTipleri } from "../_data/mizac-tipleri";
import type { MizacItem } from "../_data/mizac-tipleri";
import MizacDetaySidebar from "../MizacDetaySidebar";

// ─── Tip genişletmesi (kendi data dosyana taşı) ─────────────────────────────
export type MizacDetail = MizacItem & {
    number: number;
    heroLabel: string;
    coreDesire: string;
    coreFear: string;
    longDescription: string;
    traits: string[];
    quote: string;
    relatedSlugs: string[];
};

// ─── Mock veri — gerçek kullanımda params.slug ile çek ──────────────────────
const mockDetail: MizacDetail = {
    slug: "mizac-1",
    title: "Mizaç 1",
    number: 1,
    heroLabel: "Reformcu",
    subtitle: "Temel ana arayış: Doğru eylem ve kusursuzluk.",
    image: "/mizaclar.png",
    coreDesire: "İyi, erdemli ve dengeli olmak; kendi standartlarına göre doğru yaşamak.",
    coreFear: "Bozuk, kötü ya da kusurlu olmak ve bunun başkaları tarafından fark edilmesi.",
    longDescription: `Mizaç 1 kişiler, dürüstlüğe, ahlaki doğruluğa ve mükemmelliğe derin bir bağlılık duyarlar. İçlerinde her zaman neyin doğru, neyin yanlış olduğunu söyleyen güçlü bir iç ses taşırlar. Bu ses onları harekete geçirir, üretken kılar; ama aynı zamanda hiçbir zaman yeterince iyi olmadıklarını hissettirerek bunaltır.

Dünyayı olduğundan çok olması gerektiği gibi görürler. Aksaklıkları, eksiklikleri, hataları anında fark ederler — hem dışarıda hem de içlerinde. Bu farkındalık onları güçlü bir iyileştirme dürtüsüyle yaşatır: her şeyi daha iyi, daha doğru, daha adil kılmak isterler.

İşlerinde son derece titiz ve güvenilirdirler. Verilen sözün tutulması, kurallara uyulması, haksızlığa ses çıkarılması onlar için doğal bir sorumluluktur. Ancak bu yüksek standartlar çevresindekilere baskı olarak yansıyabilir ve Mizaç 1'ler eleştirici olarak algılanabilirler — oysa niyetleri yargılamak değil, geliştirmektir.`,
    traits: ["Mükemmeliyetçi & titiz", "İlkeli & dürüst", "Sorumluluk sahibi", "Eleştirel iç ses", "Reform & iyileştirme dürtüsü", "Öz-disiplinli"],
    quote: "Mükemmel olan iyinin düşmanıdır — ama Mizaç 1 için bu ikilem asla bitmez.",
    relatedSlugs: ["mizac-2", "mizac-7", "mizac-4"],
};

// ─── İlgili kart ────────────────────────────────────────────────────────────
function RelatedCard({ slug }: { slug: string }) {
    const item = mizacTipleri.find((m) => m.slug === slug);
    if (!item) return null;
    return (
        <Link href={`/mizac-tipleri/${slug}`} className="group block">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
            </div>
            <p className="mt-3 text-sm tracking-[0.2em] uppercase text-primary font-semibold">
                {item.title}
            </p>
            {item.subtitle && (
                <p className="mt-1 text-xs text-primary/60 leading-relaxed line-clamp-2">
                    {item.subtitle}
                </p>
            )}
        </Link>
    );
}

// ─── Ana sayfa ───────────────────────────────────────────────────────────────
export default function MizacDetayClient() {
    const detail = mockDetail;

    const sidebarItems = [
        { label: "Mizaç Tipleri", href: "/mizac-tipleri" },
        ...mizacTipleri.map((m) => ({
            label: m.title,
            href: `/mizac-tipleri/${m.slug}`,
        })),
    ];

    return (
        <main className="flex flex-col bg-white font-cormorant">
            <PageHero
                title={detail.title.toUpperCase()}
                subtitle={`— ${detail.heroLabel.toUpperCase()} —`}
                backgroundImage={detail.image}
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "MİZAÇ TİPLERİ", href: "/mizac-tipleri" },
                    { label: detail.title.toUpperCase() },
                ]}
            />

            <section className="relative bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">

                        {/* ── Sol: içerik ── */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-8"
                        >

                            {/* Görsel + temel bilgiler */}
                            <motion.article variants={fadeInCard} className="relative group">
                                <div className="relative z-10 rounded-md border border-black/20 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)] overflow-hidden">

                                    {/* Görsel */}
                                    <div className="relative w-full h-72 overflow-hidden">
                                        <Image
                                            src={detail.image}
                                            alt={detail.title}
                                            fill
                                            priority
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            sizes="(max-width: 1024px) 100vw, 65vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-6 left-8">
                                            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-1">
                                                Enneagram
                                            </p>
                                            <p className="text-white text-3xl font-light tracking-wide">
                                                {detail.title} — {detail.heroLabel}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-10 md:p-12">
                                        <p className="text-base tracking-[0.25em] font-semibold uppercase text-primary">
                                            {detail.title}
                                        </p>
                                        <div className="h-px w-24 bg-secondary mt-5 mb-8" />

                                        {detail.subtitle && (
                                            <p className="text-[17px] leading-relaxed text-primary/80 italic mb-8">
                                                {detail.subtitle}
                                            </p>
                                        )}

                                        {/* Arzu / Korku */}
                                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                            {[
                                                { label: "Temel Arzu", text: detail.coreDesire },
                                                { label: "Temel Korku", text: detail.coreFear },
                                            ].map((item) => (
                                                <div key={item.label} className="border border-black/10 p-6 rounded-sm">
                                                    <p className="text-xs tracking-[0.3em] uppercase text-secondary font-semibold mb-3">
                                                        {item.label}
                                                    </p>
                                                    <p className="text-[15px] leading-relaxed text-primary/80">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Özellikler */}
                                        <div className="flex flex-wrap gap-2">
                                            {detail.traits.map((t) => (
                                                <span
                                                    key={t}
                                                    className="border border-black/15 text-primary text-xs tracking-[0.15em] uppercase px-3 py-1.5"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                            {/* Uzun açıklama */}
                            <motion.article variants={fadeInCard} className="relative group">
                                <div className="relative z-10 rounded-md border border-black/20 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                                    <div className="p-10 md:p-12">
                                        <p className="text-lg text-center uppercase tracking-[0.25em] text-primary font-bold mb-8">
                                            GENEL BAKIŞ
                                        </p>
                                        <p className="text-base tracking-[0.25em] font-semibold uppercase text-primary">
                                            {detail.title} Hakkında
                                        </p>
                                        <div className="h-px w-24 bg-secondary mt-5 mb-8" />

                                        <div className="space-y-6">
                                            {detail.longDescription.split("\n\n").map((para, i) => (
                                                <p key={i} className="text-[17px] leading-relaxed text-primary">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                            {/* Alıntı */}
                            <motion.section variants={fadeInCard}>
                                <div className="bg-primary text-white p-10 md:p-12 rounded-md">
                                    <p className="text-base tracking-[0.25em] mb-6 uppercase">
                                        ALINTI ;
                                    </p>
                                    <p className="text-white/90 leading-[40px] text-xl italic font-light">
                                        "{detail.quote}"
                                    </p>
                                </div>
                            </motion.section>

                            {/* İlgili mizaçlar */}
                            <motion.article variants={fadeInCard} className="relative group">
                                <div className="relative z-10 rounded-md border border-black/20 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                                    <div className="p-10 md:p-12">
                                        <p className="text-lg text-center uppercase tracking-[0.25em] text-primary font-bold mb-8">
                                            İLGİLİ MİZAÇ TİPLERİ
                                        </p>
                                        <p className="text-base tracking-[0.25em] font-semibold uppercase text-primary">
                                            Diğer Tipler
                                        </p>
                                        <div className="h-px w-24 bg-secondary mt-5 mb-8" />

                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                            {detail.relatedSlugs.map((slug) => (
                                                <RelatedCard key={slug} slug={slug} />
                                            ))}
                                        </div>

                                        <div className="mt-10">
                                            <Link
                                                href="/mizac-tipleri"
                                                className="inline-flex items-center gap-3 text-sm tracking-[0.28em] uppercase text-primary group/link"
                                            >
                                                <span className="relative font-semibold">
                                                    Tüm Mizaç Tipleri
                                                    <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-secondary" />
                                                </span>
                                                <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                        </motion.div>

                        <MizacDetaySidebar />

                    </div>
                </div>
            </section>
        </main>
    );
}