import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { educations, WHATSAPP_URL } from "../_data/educations";

function Stars({ rating }: { rating: number }) {
    const full = Math.max(0, Math.min(5, rating));
    return (
        <div className="flex items-center gap-1" aria-label={`Puan: ${full}/5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < full ? "text-secondary" : "text-black/20"}>
                    ★
                </span>
            ))}
        </div>
    );
}

export function generateStaticParams() {
    return educations.map((e) => ({ slug: e.slug }));
}

export default async function EducationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const education = educations.find((e) => e.slug === slug);

    if (!education) return notFound();

    const related = educations.filter((e) => e.slug !== education.slug).slice(0, 4);

    return (
        <main className="bg-white font-cormorant">
            <PageHero title={education.title} subtitle="Eğitim Detayı" backgroundImage="/enneagram_banner.jpg" breadcrumbs={[{ label: "ANA SAYFA", href: "/" }, { label: "EĞİTİMLERİMİZ", href: "/egitimlerimiz" }, { label: education.title }]} />

            <section className="bg-white">
                <div className="max-w-[1280px] mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

                        <article className="min-w-0">   
                            <div className="mt-10">
                                <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                                    ENNEAGRAM EĞİTİM & DANIŞMANLIK
                                </span>

                                <h1 className="mt-4 text-4xl md:text-5xl text-primary leading-tight tracking-wide">
                                    {education.title}
                                </h1>

                                <div className="mt-6 flex flex-wrap items-center gap-4">
                                    <span className="text-2xl text-secondary">
                                        {education.priceText}
                                    </span>

                                    <span className="h-5 w-px bg-black/10" />

                                    <span className="text-sm text-primary/60">
                                        Online Eğitim
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5">
                                    WhatsApp’tan Bilgi Al
                                </Link>

                                <Link href="/egitimlerimiz" className="inline-flex items-center justify-center rounded-full border border-black/10 px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-primary transition-all duration-300 hover:border-secondary hover:text-secondary">
                                    Tüm Eğitimler
                                </Link>
                            </div>

                            {!!education.intro?.length && (
                                <div className="mt-14 border-t border-black/10 pt-10 space-y-5 text-lg md:text-xl leading-9 text-primary/75">
                                    {education.intro.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </div>
                            )}

                            {(education.topicsTitle || education.topics?.length) && (
                                <section className="mt-16 border-t border-black/10 pt-12">
                                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                                        EĞİTİM İÇERİĞİ
                                    </span>

                                    <h2 className="mt-3 text-3xl md:text-4xl text-primary tracking-wide">
                                        {education.topicsTitle ?? "Bu Eğitimde Neler Var?"}
                                    </h2>

                                    {education.topicsIntro && (
                                        <p className="mt-5 text-lg leading-8 text-primary/70">
                                            {education.topicsIntro}
                                        </p>
                                    )}

                                    {!!education.topics?.length && (
                                        <div className="mt-8 space-y-4">
                                            {education.topics.map((t, idx) => (
                                                <div key={t} className="flex gap-5 rounded-xl border border-black/10 p-5 transition-all duration-300 hover:border-secondary/40 hover:shadow-sm">
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm text-secondary">
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </span>

                                                    <p className="text-lg leading-8 text-primary/75">
                                                        {t}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            )}

                            {(education.audienceTitle || education.audience) && (
                                <section className="mt-16 border-t border-black/10 pt-12">
                                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                                        KATILIMCILAR
                                    </span>

                                    <h2 className="mt-3 text-3xl md:text-4xl text-primary tracking-wide">
                                        {education.audienceTitle ?? "Kimler Katılabilir?"}
                                    </h2>

                                    {education.audience && (
                                        <div className="mt-6 whitespace-pre-line text-lg leading-9 text-primary/75">
                                            {education.audience}
                                        </div>
                                    )}
                                </section>
                            )}

                            {!!education.comments?.length && (
                                <section className="mt-16 border-t border-black/10 pt-12">
                                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                                        KATILIMCI DENEYİMLERİ
                                    </span>

                                    <h2 className="mt-3 text-3xl md:text-4xl text-primary tracking-wide">
                                        Katılımcılar Ne Diyor?
                                    </h2>

                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {education.comments.map((c, idx) => (
                                            <div key={idx} className="rounded-2xl border border-black/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-lg font-semibold text-primary">
                                                            {c.name}
                                                        </p>

                                                        {c.role && (
                                                            <p className="mt-1 text-sm text-primary/50">
                                                                {c.role}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <Stars rating={c.rating} />
                                                </div>

                                                <p className="mt-5 text-base leading-7 text-primary/70">
                                                    {c.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </article>

                        <aside className="lg:sticky lg:top-24">
                            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)]">

                                <div className="bg-primary px-7 py-6">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">
                                        EĞİTİM DETAYLARI
                                    </span>

                                    <h2 className="mt-2 text-2xl text-white">
                                        Eğitim Bilgileri
                                    </h2>
                                </div>

                                <div className="p-7 space-y-1">

                                    {education.schedule && (
                                        <div className="border-b border-black/10 py-5">
                                            <p className="text-[10px] uppercase tracking-[0.25em] text-primary/40">
                                                Tarih / Format
                                            </p>

                                            <p className="mt-2 text-lg text-primary">
                                                {education.schedule}
                                            </p>
                                        </div>
                                    )}

                                    {education.durationText && (
                                        <div className="border-b border-black/10 py-5">
                                            <p className="text-[10px] uppercase tracking-[0.25em] text-primary/40">
                                                Süre
                                            </p>

                                            <p className="mt-2 text-lg text-primary">
                                                {education.durationText}
                                            </p>
                                        </div>
                                    )}

                                    {education.instructor && (
                                        <div className="py-5">
                                            <p className="text-[10px] uppercase tracking-[0.25em] text-primary/40">
                                                Eğitimci
                                            </p>

                                            <p className="mt-2 text-lg leading-7 text-primary">
                                                {education.instructor}
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-5 border-t border-black/10 pt-6">
                                        <div className="text-center">
                                            <span className="text-[10px] uppercase tracking-[0.25em] text-primary/40">
                                                Eğitim Ücreti
                                            </span>

                                            <p className="mt-2 text-3xl text-secondary">
                                                {education.priceText}
                                            </p>
                                        </div>

                                        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-xs tracking-[0.18em] uppercase text-white transition-all duration-300 hover:bg-secondary">
                                            Kayıt & Bilgi Al
                                        </Link>

                                        <p className="mt-4 text-center text-xs leading-5 text-primary/50">
                                            Eğitim hakkında detaylı bilgi almak için WhatsApp hattımızdan bize ulaşabilirsiniz.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </aside>
                    </div>

                    {!!related.length && (
                        <section className="mt-24 border-t border-black/10 pt-14">
                            <div className="flex items-end justify-between gap-6">
                                <div>
                                    <span className="text-xs uppercase tracking-[0.3em] text-secondary">
                                        DİĞER EĞİTİMLER
                                    </span>

                                    <h2 className="mt-3 text-3xl md:text-4xl text-primary tracking-wide">
                                        İlginizi Çekebilecek Eğitimler
                                    </h2>
                                </div>

                                <Link href="/egitimlerimiz" className="hidden md:inline-flex text-sm uppercase tracking-[0.15em] text-primary transition-colors hover:text-secondary">
                                    Tümünü Gör →
                                </Link>
                            </div>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {related.map((it) => (
                                    <Link key={it.slug} href={`/egitimlerimiz/${it.slug}`} className="group">
                                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-gray-100">
                                            <Image src={it.poster} alt={it.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        </div>

                                        <h3 className="mt-4 text-lg leading-snug text-primary transition-colors group-hover:text-secondary">
                                            {it.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-primary/60">
                                            {it.priceText}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </main>
    );
}