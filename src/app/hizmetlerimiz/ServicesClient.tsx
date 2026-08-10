"use client";

import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeInCard } from "@/app/lib/animations";
import { services } from "./_data/services";

export default function ServicesClient() {
    return (
        <main className="bg-white font-cormorant overflow-x-hidden">

            <PageHero
                title="HİZMETLERİMİZ"
                subtitle="- ENNEAGRAM EĞİTİM'İ KEŞFEDİN -"
                backgroundImage="/enneagram_banner_2.jpg"
                breadcrumbs={[
                    { label: "ANA SAYFA", href: "/" },
                    { label: "HİZMETLERİMİZ" },
                ]}
            />

            <section className="px-6 py-20 md:py-28">

                {/* GİRİŞ */}

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto text-center">

                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-10 h-px bg-secondary" />
                        <span className="uppercase tracking-[0.3em] text-xs text-secondary">ENNEAGRAM EĞİTİM & DANIŞMANLIK</span>
                        <span className="w-10 h-px bg-secondary" />
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05]">
                        İnsan Odaklı
                        <br />
                        <span className="text-secondary">Gelişim Çözümleri</span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="w-20 h-px bg-secondary mx-auto my-8" />

                    <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-lg md:text-xl text-primary/70 leading-8 md:leading-9">
                        Mizaç merkezli yaklaşımımızla bireylerin, ailelerin, eğitim kurumlarının ve organizasyonların gelişimine katkı sağlayan eğitim, danışmanlık, dijital platform ve yayıncılık çözümleri sunuyoruz.
                    </motion.p>

                </motion.div>


                {/* İSTATİSTİKLER */}

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-5xl mx-auto mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 border-y border-black/10">

                    {[
                        { number: "13+", title: "Yıllık Deneyim" },
                        { number: "100.000+", title: "Ulaşılan Birey" },
                        { number: "500+", title: "Çalışılan Kurum" },
                    ].map((item, index) => (
                        <motion.div key={item.title} variants={fadeUp} className={`text-center py-10 px-6 ${index !== 0 ? "md:border-l border-black/10" : ""}`}>
                            <div className="text-5xl md:text-6xl text-secondary leading-none">{item.number}</div>
                            <div className="mt-4 uppercase tracking-[0.25em] text-xs md:text-sm text-primary/60">{item.title}</div>
                        </motion.div>
                    ))}

                </motion.div>


                {/* HİZMETLER */}

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto mt-28">

                    <motion.div variants={fadeUp} className="flex items-end justify-between gap-6 mb-12 border-b border-black/10 pb-5">
                        <div>
                            <span className="uppercase tracking-[0.3em] text-xs text-secondary">ÇALIŞMA ALANLARIMIZ</span>
                            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Hizmetlerimiz</h2>
                        </div>

                        <span className="hidden md:block text-sm text-primary/40 tracking-widest">
                            {String(services.length).padStart(2, "0")} HİZMET
                        </span>
                    </motion.div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {services.map((service, index) => (
                            <motion.article key={service.slug} variants={fadeInCard} className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-500">

                                <div className="relative h-[360px] overflow-hidden">

                                    <Image
                                        src={service.heroImage}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent" />

                                    <div className="absolute top-6 left-6 flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/10 text-xs text-white backdrop-blur-sm">{String(index + 1).padStart(2, "0")}</span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">ENNEAGRAM EĞİTİM</span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                                        <h3 className="text-3xl md:text-4xl text-white leading-tight">{service.title}</h3>
                                    </div>

                                </div>


                                <div className="p-7 md:p-9">

                                    <p className="text-base md:text-lg leading-8 text-primary/65 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">

                                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/40">
                                            ENNEAGRAM EĞİTİM & DANIŞMANLIK
                                        </span>

                                        <Link href={`/hizmetlerimiz/${service.slug}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary transition-all duration-300 group-hover:gap-4 group-hover:text-secondary">
                                            Detayları İncele
                                            <span className="text-base">↗</span>
                                        </Link>

                                    </div>

                                </div>

                            </motion.article>
                        ))}

                    </div>

                </motion.div>
                {/* NEDEN MİZAÇ MERKEZLİ? */}

                <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-32">

                    <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">

                        <span className="uppercase tracking-[0.3em] text-xs text-secondary">
                            YAKLAŞIMIMIZ
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                            Neden
                            <br />
                            <span className="text-secondary">Mizaç Merkezli?</span>
                        </h2>

                        <p className="mt-7 text-lg md:text-xl leading-8 text-primary/65">
                            Her insanın kendine özgü bir yapısı, motivasyonu ve dünyayı
                            algılama biçimi vardır. Mizaç merkezli yaklaşımımız,
                            bu farklılıkları anlamayı ve gelişim süreçlerini insanın
                            doğasına uygun şekilde ele almayı amaçlar.
                        </p>

                    </motion.div>


                    {/* AVANTAJLAR */}

                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

                        {[
                            {
                                number: "01",
                                title: "Bireysel Farkındalık",
                                text: "Kişinin kendi mizaç yapısını tanımasına, güçlü yönlerini ve gelişim alanlarını fark etmesine yardımcı olur.",
                            },
                            {
                                number: "02",
                                title: "Kişiye Özel Yaklaşım",
                                text: "Her bireyin farklı ihtiyaçlarını dikkate alarak daha anlamlı ve sürdürülebilir gelişim süreçleri oluşturmayı destekler.",
                            },
                            {
                                number: "03",
                                title: "Sağlıklı İlişkiler",
                                text: "Farklı mizaç yapılarını anlamak, iletişimi güçlendirir ve kişiler arasındaki uyumu destekler.",
                            },
                            {
                                number: "04",
                                title: "Kurumsal Gelişim",
                                text: "Ekiplerin farklılıklarını anlamasına, iletişimi güçlendirmesine ve daha uyumlu çalışma ortamları oluşturmasına katkı sağlar.",
                            },
                        ].map((item) => (
                            <motion.article key={item.number} variants={fadeInCard} className="group border border-black/10 rounded-2xl p-7 md:p-8 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)]">

                                <span className="text-sm tracking-[0.2em] text-secondary">
                                    {item.number}
                                </span>

                                <h3 className="mt-8 text-2xl text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-base leading-7 text-primary/60">
                                    {item.text}
                                </p>

                            </motion.article>
                        ))}

                    </motion.div>

                </motion.section>

                <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-32">

                    <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 md:px-16 md:py-20 lg:px-24 text-center">

                        <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full border border-secondary/10" />
                        <div className="absolute -left-24 -bottom-32 w-72 h-72 rounded-full border border-secondary/10" />

                        <div className="relative z-10 max-w-3xl mx-auto">

                            <span className="uppercase tracking-[0.3em] text-xs text-secondary">
                                ENNEAGRAM EĞİTİM & DANIŞMANLIK
                            </span>

                            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                                Kendinizi,
                                <br />
                                <span className="text-secondary">İnsanı ve Farklılıkları</span>
                                <br />
                                Daha İyi Anlayın.
                            </h2>
                            <p className="mt-7 text-lg md:text-xl leading-8 text-white/60">
                                Mizaç merkezli çalışmalarımızı keşfedin ve
                                ihtiyacınıza uygun çözümü birlikte belirleyelim.
                            </p>
                            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                                    İletişime Geçin
                                    <span className="text-base">↗</span>
                                </Link>
                                <Link href="/hakkimizda" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-secondary hover:text-secondary">
                                    Hakkımızda
                                    <span className="text-base">↗</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </section>
        </main>
    );
}