'use client';

import Image from 'next/image';
import {
    ShieldCheck,
    KeyRound,
    School
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInRight, fadeUp, stagger } from '@/app/lib/animations';
import PageHero from '@/components/ui/PageHero';

export default function AboutClient() {

    const logos = [
        { src: "/thy-logo.png", alt: "Logo 1" },
        { src: "/dyson-logo.png", alt: "Logo 2" },
        { src: "/maya-logo.png", alt: "Logo 3" },
        { src: "/bilfen-logo.png", alt: "Logo 4" },
        { src: "/vizyon-logo.png", alt: "Logo 5" },
        { src: "/bilim-koleji-logo.png", alt: "Logo 6" },
        { src: "/ago-logo.jpg", alt: "Logo 7" },
        { src: "/armagan-logo.png", alt: "Logo 8" },
        { src: "/yom-logo.png", alt: "Logo 9" },
    ];

    return (
        <>
            <main className="flex flex-col font-cormorant bg-[#ffffff]">
                <PageHero
                    title="HAKKIMIZDA"
                    subtitle="- ENNEAGRAM EĞİTİM&apos;İ KEŞFEDİN -"
                    backgroundImage="/enneagram-slayder1.jpg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'HAKKIMIZDA' },
                    ]}
                />
                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.1fr] gap-14 items-start">
                            <div className="grid grid-cols-2 gap-6 items-stretch">
                                <div className="relative overflow-hidden">
                                    <div className="relative h-[575px] mt-12 w-full overflow-hidden">
                                        <Image
                                            src="/hakkimizda_1.jpg"
                                            alt="Enneagram Eğitim"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 520px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <div className="relative h-[520px] w-full overflow-hidden">
                                        <Image
                                            src="/enneagram_image_2.jpg"
                                            alt="Enneagram Eğitim"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 520px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-primary">
                                <div className="inline-flex items-center px-5 py-2 rounded-md border border-black/10 text-xs tracking-[0.35em] uppercase text-primary">
                                    HAKKIMIZDA
                                </div>

                                <h2 className="mt-6 text-4xl md:text-6xl leading-[1.05] tracking-wide font-[300]">
                                    Tutkuyla bağlı olduğunuz gelişim yolu
                                    <br />
                                    sizin için burada
                                </h2>

                                <p className="mt-8 text-base md:text-lg leading-relaxed text-primary/80 max-w-2xl font-[300] tracking-wide">
                                    Enneagram Eğitim, mizaç ve kişilik dinamiklerini anlamaya yönelik programlarla
                                    bireylerin ve ekiplerin potansiyelini açığa çıkarmayı hedefler. Uygulamalı içerikler,
                                    ölçümleme ve rehberlik süreçleriyle sürdürülebilir dönüşüm sağlar.
                                </p>

                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div className="border-t border-black/10 pt-6">
                                        <p className="text-xs tracking-[0.35em] uppercase text-primary/70">
                                            01. KATILIMCI
                                        </p>
                                        <p className="mt-4 text-5xl md:text-6xl font-[200] text-primary">
                                            1000<span className="text-secondary">+</span>
                                        </p>
                                    </div>

                                    <div className="border-t border-black/10 pt-6">
                                        <p className="text-xs tracking-[0.35em] uppercase text-primary/70">
                                            02. MEMNUNİYET
                                        </p>
                                        <p className="mt-4 text-5xl md:text-6xl font-[200] text-primary">
                                            100<span className="text-secondary">%</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <Link
                                        href="/iletisim"
                                        className="inline-flex items-center justify-center px-8 py-3 border border-black/20 text-sm tracking-widest
            text-primary hover:bg-primary hover:text-white transition"
                                    >
                                        BİLGİ AL
                                    </Link>

                                    <Link
                                        href="/egitimlerimiz"
                                        className="inline-flex items-center justify-center px-8 py-3 border border-primary text-sm tracking-widest
            text-secondary hover:bg-secondary hover:text-white transition"
                                    >
                                        EĞİTİMLER
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white">
                    <div className="max-w-[1280px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-24 mt-12 items-start">
                        <motion.div
                            className="lg:sticky lg:top-28 space-y-8 text-primary"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.p variants={fadeUp} className="text-base font-[300] tracking-[0.35em] text-secondary uppercase">
                                ENNEAGRAM EĞİTİM & DANIŞMANLIK
                            </motion.p>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl tracking-wide">
                                Referanslarımız
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="text-base leading-relaxed text-primary font-[300] tracking-wide"
                            >
                                Farklı sektörlerden seçkin kurum ve markalarla uzun soluklu iş birlikleri
                                yürütüyoruz. Her projede güven, kalite ve sürdürülebilir değer üretmeyi
                                odağımıza alıyoruz.
                            </motion.p>

                            <motion.div variants={fadeUp} className="space-y-5 pt-4">
                                {[
                                    {
                                        title: "Kurumsal İş Birlikleri",
                                        text: "Ulusal ve uluslararası ölçekte faaliyet gösteren markalarla stratejik projeler geliştiriyoruz.",
                                    },
                                    {
                                        title: "Eğitim ve Danışmanlık",
                                        text: "Eğitim kurumları ve organizasyonlara özel, ihtiyaç odaklı çözümler sunuyoruz.",
                                    },
                                    {
                                        title: "Güven ve Süreklilik",
                                        text: "Uzun vadeli iş ilişkileri kurarak, birlikte büyümeyi ve değer üretmeyi hedefliyoruz.",
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-secondary">
                                            ★
                                        </div>
                                        <div>
                                            <p className="text-lg tracking-wide text-primary font-[300]">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-primary font-[300] tracking-wide">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {logos.map((logo, index) => (
                                <motion.div
                                    key={logo.src}
                                    variants={fadeInRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="
                relative
                h-[140px]
                w-full
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                border border-neutral-200
                bg-white
                transition
                duration-300
                hover:scale-[1.04]
                hover:shadow-lg
            "
                                >
                                    <Image
                                        src={logo.src}
                                        alt={`Logo ${index + 1}`}
                                        width={140}
                                        height={80}
                                        className="object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "KÖKLÜ UZMANLIK",
                                    text:
                                        "Enneagram alanında Türkiye’de öncü yaklaşım ve yıllara yayılan saha deneyimiyle, güvenilir bir eğitim ve danışmanlık sunuyoruz.",
                                    icon: <ShieldCheck className="h-6 w-6" />,
                                },
                                {
                                    title: "UYGULAMALI GELİŞİM",
                                    text:
                                        "Kişi ve ekip dinamiklerini anlayan, pratiğe dönük içeriklerle farkındalığı davranışa dönüştüren programlar tasarlıyoruz.",
                                    icon: <KeyRound className="h-6 w-6" />,
                                },
                                {
                                    title: "KURUMA ÖZEL ÇÖZÜMLER",
                                    text:
                                        "İhtiyaç analiziyle başlayan; iletişim, liderlik ve kurum kültürüne özel tasarlanan eğitim ve danışmanlık süreçleri yürütüyoruz.",
                                    icon: <School className="h-6 w-6" />,
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="group border border-black/30 bg-white text-primary transition-all duration-600 ease-out hover:-translate-y-2 hover:shadow-2xl hover:bg-primary hover:text-white"
                                >
                                    <div className="px-8 py-12 text-center space-y-6">
                                        <div className="mx-auto h-14 w-14 bg-secondary text-white flex items-center justify-center">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-lg tracking-[0.2em]">{card.title}</h3>
                                        <p className="text-sm leading-relaxed text-primary group-hover:text-white/80 transition-colors duration-800">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className="relative bg-white overflow-hidden group"
                    style={{
                        backgroundImage: "url('/enneagram_banner.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/60" />

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
                        <div className="text-white space-y-4">
                            <p className="text-base tracking-[0.35em] uppercase text-secondary transition-all duration-500 group-hover:text-white">
                                EĞİTİM & DANIŞMANLIK
                            </p>
                            <h2 className="text-4xl md:text-5xl tracking-wide leading-snug transition-transform duration-700 ease-out group-hover:-translate-y-0.5">
                                KURUMUNUZ İÇİN
                                <br />
                                ÜCRETSİZ KEŞİF GÖRÜŞMESİ
                            </h2>
                            <p className="text-sm text-white max-w-md transition-colors duration-500 group-hover:text-white/90">
                                İhtiyacınızı birlikte netleştirelim; size en uygun eğitim/danışmanlık yol haritasını paylaşalım.
                            </p>
                        </div>

                        <div className="bg-white text-primary p-10 shadow-xl transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl">
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "İhtiyaç Analizi",
                                        text: "Hedef, ekip yapısı ve mevcut durumu hızlıca değerlendiririz.",
                                    },
                                    {
                                        title: "Kişiye/Kuruma Özel Tasarım",
                                        text: "Eğitim içeriğini ve akışı kurum kültürünüze göre kurgularız.",
                                    },
                                    {
                                        title: "Ölçülebilir Kazanımlar",
                                        text: "Süreç sonunda gelişimi takip edebileceğiniz net çıktılar sunarız.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-b border-black/30 pb-4 transition-all duration-500 hover:border-black/45"
                                    >
                                        <p className="text-lg tracking-wide font-semibold text-primary font-[200] transition-transform duration-500 hover:translate-x-1">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-primary font-[300] tracking-wide">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/iletisim"
                                prefetch={false}
                                className="mt-6 inline-flex items-center justify-center border border-black/30 px-8 py-3 text-sm tracking-widest text-primary
                transition-all duration-500 hover:border-secondary hover:bg-secondary hover:text-white hover:-translate-y-0.5"
                            >
                                GÖRÜŞME PLANLA
                            </Link>
                        </div>
                    </div>
                </section>


                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-20">
                        <div className="space-y-6 text-primary text-center">
                            <h2 className="text-4xl md:text-6xl tracking-wide">
                                Sosyal Medya&apos;da Takip Edin
                            </h2>
                            <p className="text-base text-primary/80">
                                Güncel görseller ve son haberlerimiz sosyal medya hesaplarımızda:
                            </p>
                            <div className="flex items-center justify-center gap-6 text-sm tracking-widest uppercase">
                                <Link
                                    href="https://www.instagram.com/enneagramegitim/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.facebook.com/enneagramegitim/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Facebook
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-10 w-full">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    '/afis1.jpg',
                                    '/afis2.jpg',
                                    '/afis3.jpg',
                                    '/afissonSite.png'
                                ].map((src, index) => (
                                    <div key={index} className="relative aspect-square hover:scale-105 transition-all duration-300 overflow-hidden bg-white">
                                        <Image
                                            src={src}
                                            alt={`Instagram ${index + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
                                <Link
                                    href="https://www.instagram.com/enneagramegitim/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-black/40 px-8 py-3 text-sm tracking-widest text-primary transition-all duration-300 hover:border-black hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    INSTAGRAM&apos;DA TAKİP ET
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};