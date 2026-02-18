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

export default async function EducationDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const education = educations.find((e) => e.slug === slug);
    if (!education) return notFound();

    const related = educations
        .filter((e) => e.category === education.category && e.slug !== education.slug)
        .slice(0, 4);

    return (
        <main className="bg-white font-cormorant">
            <PageHero
                title={education.title}
                subtitle="- EĞİTİM DETAYI -"
                backgroundImage={"/enneagram_banner.jpg"}
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "EĞİTİMLERİMİZ", href: "/egitimlerimiz" },
                    { label: education.title },
                ]}
            />

            <section className="bg-white">
                <div className="max-w-[1200px] mx-auto px-6 py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
                        <div className="rounded-md border border-black/10 bg-white p-6 md:p-8 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md border border-black/10 bg-white">
                                <Image
                                    src={education.poster}
                                    alt={education.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    priority
                                />
                            </div>

                            <h1 className="mt-8 text-3xl md:text-4xl text-primary tracking-wide font-semibold leading-tight">
                                {education.title}
                            </h1>

                            <p className="mt-3 text-primary/70 text-lg">{education.priceText}</p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm tracking-widest uppercase text-white shadow-sm transition hover:bg-secondary"
                                >
                                    WhatsApp’tan Bilgi Al
                                </Link>
                                <Link
                                    href="/egitimlerimiz"
                                    className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-6 py-3 text-sm tracking-widest uppercase text-primary shadow-sm transition hover:bg-secondary hover:text-white"
                                >
                                    Tüm Eğitimler
                                </Link>
                            </div>

                            {!!education.intro?.length && (
                                <div className="mt-10 space-y-5 text-lg leading-relaxed text-primary/80">
                                    {education.intro.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </div>
                            )}

                            {(education.topicsTitle || education.topics?.length) && (
                                <div className="mt-12">
                                    <h2 className="text-2xl md:text-3xl text-primary tracking-wide font-semibold">
                                        {education.topicsTitle ?? "Bu Eğitimde Neler Var?"}
                                    </h2>

                                    {education.topicsIntro && (
                                        <p className="mt-4 text-lg leading-relaxed text-primary/80">
                                            {education.topicsIntro}
                                        </p>
                                    )}

                                    {!!education.topics?.length && (
                                        <ul className="mt-6 space-y-3 text-primary/80">
                                            {education.topics.map((t) => (
                                                <li key={t} className="flex gap-3">
                                                    <span className="mt-2 h-[6px] w-[6px] rounded-md bg-secondary shrink-0" />
                                                    <span className="text-lg leading-relaxed">{t}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}

                            {(education.audienceTitle || education.audience) && (
                                <div className="mt-12">
                                    <h2 className="text-2xl md:text-3xl text-primary tracking-wide font-semibold">
                                        {education.audienceTitle ?? "Kimler Katılabilir?"}
                                    </h2>
                                    {education.audience && (
                                        <p className="mt-4 text-lg leading-relaxed text-primary/80">
                                            {education.audience}
                                        </p>
                                    )}
                                </div>
                            )}

                            {!!education.comments?.length && (
                                <div className="mt-14">
                                    <h2 className="text-2xl md:text-3xl text-primary tracking-wide font-semibold">
                                        Yorumlar
                                    </h2>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {education.comments.map((c, idx) => (
                                            <div
                                                key={idx}
                                                className="
                                                group
                                                rounded-xl
                                                border border-black/10
                                                bg-white
                                                p-6
                                                shadow-md
                                                transition-all duration-300 ease-out
                                                hover:-translate-y-2
                                                hover:shadow-2xl
                                                hover:border-secondary/40
                                                cursor-pointer
                                                "
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-primary font-semibold text-lg transition-colors duration-300 group-hover:text-secondary">
                                                            {c.name}
                                                            {c.role ? (
                                                                <span className="text-primary/80 font-normal"> · {c.role}</span>
                                                            ) : null}
                                                        </p>
                                                        {c.date && (
                                                            <p className="text-sm text-primary/90 mt-1">{c.date}</p>
                                                        )}
                                                    </div>
                                                    <Stars rating={c.rating} />
                                                </div>

                                                <p className="mt-4 text-primary/80 text-base leading-relaxed">
                                                    {c.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <aside className="lg:sticky lg:top-24">
                            <div className="rounded-md border border-black/10 bg-white p-6 md:p-7 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                                <h3 className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
                                    Eğitim Bilgileri
                                </h3>

                                <div className="mt-6 space-y-4 text-primary/80">
                                    {education.schedule && (
                                        <div className="rounded-md, bg-black/5 p-4">
                                            <p className="text-sm tracking-widest uppercase text-primary/60">Saat / Format</p>
                                            <p className="mt-1 text-lg">{education.schedule}</p>
                                        </div>
                                    )}

                                    {education.durationText && (
                                        <div className="rounded-md bg-black/5 p-4">
                                            <p className="text-sm tracking-widest uppercase text-primary/60">Süre</p>
                                            <p className="mt-1 text-lg">{education.durationText}</p>
                                        </div>
                                    )}

                                    {education.instructor && (
                                        <div className="rounded-md bg-black/5 p-4">
                                            <p className="text-sm tracking-widest uppercase text-primary/60">Eğitimci</p>
                                            <p className="mt-1 text-lg">{education.instructor}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6">
                                    <Link
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm tracking-widest uppercase text-white shadow-sm transition hover:bg-secondary"
                                    >
                                        WhatsApp’tan Ulaş
                                    </Link>

                                    <p className="mt-3 text-sm text-primary/60 leading-relaxed">
                                        Buraya tıklayarak WhatsApp hattımızdan bize ulaşabilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {!!related.length && (
                        <div className="mt-16 p-8">
                            <h2 className="text-3xl md:text-4xl text-primary tracking-wide font-semibold">
                                İlgili Eğitimler
                            </h2>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {related.map((it) => (
                                    <Link
                                        key={it.slug}
                                        href={`/egitimlerimiz/${it.slug}`}
                                        className="group"
                                    >
                                        <div className="relative w-full aspect-square overflow-hidden rounded-md bg-white border border-black/10 shadow-sm">
                                            <Image
                                                src={it.poster}
                                                alt={it.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>

                                        <h3 className="mt-4 text-lg font-semibold text-primary leading-snug">
                                            {it.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-primary/70">{it.priceText}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
