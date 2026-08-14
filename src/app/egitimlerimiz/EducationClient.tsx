"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import type { EducationItem } from "./_data/educations";

function Card({ it, index }: { it: EducationItem; index: number }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Link href={`/egitimlerimiz/${it.slug}`} className="block">

                <div className="relative aspect-[1/1] overflow-hidden bg-gray-100">
                    <Image src={it.poster} alt={it.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="p-7">
                    <h3 className="mt-5 text-xl md:text-2xl leading-snug text-primary tracking-wide transition-colors duration-300 group-hover:text-secondary">
                        {it.title}
                    </h3>

                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-black/10 pt-5">

                        <div>
                            <span className="block text-[10px] uppercase tracking-[0.2em] text-primary/40">
                                Ücret
                            </span>

                            <span className="mt-1 block text-base text-primary">
                                {it.priceText}
                            </span>
                        </div>

                        <span className="text-xs uppercase tracking-[0.15em] text-primary transition-all duration-300 group-hover:text-secondary">
                            İncele →
                        </span>

                    </div>

                </div>

            </Link>
        </article>
    );
}

export default function EducationClient({ items }: { items: EducationItem[] }) {
    return (
        <main className="bg-white font-cormorant">

            <PageHero
                title="EĞİTİM VE ATÖLYELER"
                subtitle="EĞİTİMLERİMİZİ KEŞFEDİN"
                backgroundImage="/banner4.png"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "EĞİTİMLERİMİZ" },
                ]}
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">

                <div className="max-w-4xl mx-auto text-center">

                    <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
                        ENNEAGRAM EĞİTİM & DANIŞMANLIK
                    </span>

                    <h1 className="mt-5 text-5xl md:text-6xl text-primary leading-tight tracking-wide">
                        Kendinizi Tanıyın,
                        <br />
                        <span className="text-secondary">Hayatınızı Derinleştirin</span>
                    </h1>

                    <div className="mx-auto mt-8 h-px w-24 bg-secondary" />

                    <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-9 text-primary/70">
                        Enneagram ve mizaç merkezli eğitimlerimizle kendinizi
                        daha yakından tanımanıza, çevrenizi daha iyi anlamanıza
                        ve sahip olduğunuz potansiyeli fark etmenize yardımcı
                        olacak çalışmalar sunuyoruz.
                    </p>

                </div>


                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

                    {items.map((it, index) => (
                        <Card key={it.id} it={it} index={index} />
                    ))}

                </div>


                <div className="mt-24 border-t border-black/10 pt-16">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        <div>
                            <span className="text-4xl text-secondary">
                                01
                            </span>

                            <h3 className="mt-4 text-2xl text-primary">
                                Kendini Tanı
                            </h3>

                            <p className="mt-3 text-base leading-7 text-primary/65">
                                Mizaç yapınızı keşfederek güçlü yönlerinizi,
                                ihtiyaçlarınızı ve gelişim alanlarınızı daha
                                yakından tanıyın.
                            </p>
                        </div>

                        <div>
                            <span className="text-4xl text-secondary">
                                02
                            </span>

                            <h3 className="mt-4 text-2xl text-primary">
                                Başkalarını Anla
                            </h3>

                            <p className="mt-3 text-base leading-7 text-primary/65">
                                Farklı mizaç yapılarını tanıyarak ilişkilerinizde
                                daha güçlü bir anlayış ve iletişim geliştirin.
                            </p>
                        </div>

                        <div>
                            <span className="text-4xl text-secondary">
                                03
                            </span>

                            <h3 className="mt-4 text-2xl text-primary">
                                Gelişimini Destekle
                            </h3>

                            <p className="mt-3 text-base leading-7 text-primary/65">
                                Enneagram bilgisini hayatınızın farklı alanlarında
                                kullanarak kişisel ve profesyonel gelişiminizi
                                destekleyin.
                            </p>
                        </div>

                    </div>

                </div>


                <div className="mt-24 overflow-hidden rounded-3xl bg-primary px-8 py-14 md:px-14 md:py-16">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10">

                        <div>

                            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">
                                BİZE ULAŞIN
                            </span>

                            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl text-white leading-tight">
                                Hangi eğitimin sizin için
                                uygun olduğunu birlikte keşfedelim.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
                                Eğitimlerimiz hakkında detaylı bilgi almak,
                                içerikleri incelemek veya kayıt süreciyle
                                ilgili sorularınızı iletmek için bizimle
                                iletişime geçebilirsiniz.
                            </p>

                        </div>

                        <Link href="/iletisim" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-secondary px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:gap-5">
                            İletişime Geçin
                            <span className="text-base">↗</span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}