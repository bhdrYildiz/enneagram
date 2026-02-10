'use client';

import Image from 'next/image';
import {
    BedDouble,
    ShieldCheck,
    KeyRound
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInLeft, fadeInRight, fadeUp, stagger } from '@/app/lib/animations';
import PageHero from '@/components/ui/PageHero';

export default function AboutClient() {
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
                                Yerel İmkanlar
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-base leading-relaxed text-primary font-[300] tracking-wide">
                                Otelimiz Ürgüp ilçe merkezinde yer almaktadır. Ürgüp otogarına 300 metre mesafede bulunmaktadır. Çarşı merkezine 500 metre mesafede bulunmaktadır.
                                Kapadokya&apos;da yer alan gezi ve örenyerlerine araba ile 10 - 15 dakikada ulaşabilirsiniz.
                            </motion.p>

                            <motion.div variants={fadeUp} className="space-y-5 pt-4">
                                {[
                                    {
                                        title: 'Yerel Restoranlar',
                                        text: 'Çarşı merkezinde yer alan restoranlarımızda yerel lezzetleri deneyimleyebilirsiniz.',
                                    },
                                    {
                                        title: 'Konum',
                                        text: 'Ürgüp otogarından yürüyerek 5 dakikada otelimize ulaşabilirsiniz.',
                                    },
                                    {
                                        title: 'Gezi ve Örenyerleri',
                                        text: 'Kapadokya\'da yer alan gezi ve örenyerlerine araba ile 10 - 15 dakikada ulaşabilirsiniz.',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-secondary">
                                            ★
                                        </div>
                                        <div>
                                            <p className="text-lg tracking-wide text-primary font-[300]">{item.title}</p>
                                            <p className="text-sm text-primary font-[300] tracking-wide">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                '/images/otelBahce/resim9.jpeg',
                                '/images/otelBahce/resim14.jpeg',
                                '/images/otelBahce/resim15.jpeg',
                            ].map((src, index) => (
                                <motion.div
                                    key={src}
                                    variants={fadeInRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="relative h-[320px] md:h-[480px] max-w-[560px] overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src={src}
                                        alt={`Yerel imkanlar ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 360px"
                                        className="object-cover"
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
                                    title: 'GÜVENLİ KONAKLAMA',
                                    text:
                                        'Misafirlerimizin güvenliği için temizlik ve hijyen standartlarını titizlikle uygularız.',
                                    icon: <ShieldCheck className="h-6 w-6" />,
                                },
                                {
                                    title: '24 SAAT İPTAL HAKKI',
                                    text:
                                        'Planlarınız değişirse, uygun koşullarda 24 saat içinde iptal kolaylığı sunuyoruz.',
                                    icon: <KeyRound className="h-6 w-6" />,
                                },
                                {
                                    title: 'TAM ODA DONANIMI',
                                    text:
                                        'Odalarımız konforunuz için gerekli tüm detaylarla donatılmıştır.',
                                    icon: <BedDouble className="h-6 w-6" />,
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="group border border-black/10 bg-white text-primary transition-all duration-600 ease-out hover:-translate-y-2 hover:shadow-2xl hover:bg-primary hover:text-white"
                                >
                                    <div className="px-8 py-12 text-center space-y-6">
                                        <div className="mx-auto h-14 w-14 bg-secondary text-white flex items-center justify-center">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-lg tracking-[0.2em]">{card.title}</h3>
                                        <p className="text-sm leading-relaxed text-primary/70 group-hover:text-white/80 transition-colors duration-800">
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
                        backgroundImage: "url('/images/otelBahce/resim11.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/60" />

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
                        <div className="text-white space-y-4">
                            <p className="text-xs tracking-[0.35em] uppercase text-secondary transition-all duration-500 group-hover:text-white">
                                REZERVASYON
                            </p>
                            <h2 className="text-4xl md:text-5xl tracking-wide leading-snug transition-transform duration-700 ease-out group-hover:-translate-y-0.5">
                                ÖZEL TEKLİFLER İÇİN
                                <br />
                                DOĞRUDAN REZERVASYON
                            </h2>
                            <p className="text-sm text-white/80 max-w-md transition-colors duration-500 group-hover:text-white/90">
                                Doğrudan rezervasyonlarda daha iyi fiyat, öncelikli destek ve özel avantajlar sunuyoruz.
                            </p>
                        </div>

                        <div className="bg-white text-primary p-10 shadow-xl transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl">
                            <div className="space-y-6">
                                {[
                                    { title: "En İyi Fiyat Garantisi", text: "Doğrudan rezervasyonlarda özel fiyat avantajı." },
                                    { title: "Öncelikli Oda Yükseltme", text: "Uygunluk durumuna göre oda yükseltme ayrıcalığı." },
                                    { title: "Yeme-İçme İndirimi", text: "Otel hizmetlerinde indirimli fiyatlar." },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-b border-black/10 pb-4 transition-all duration-500 hover:border-black/25"
                                    >
                                        <p className="text-lg tracking-wide text-primary font-[300] transition-transform duration-500 hover:translate-x-1">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-primary font-[300] tracking-wide">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/reservation"
                                prefetch={false}
                                className="mt-6 inline-flex items-center justify-center border border-black/30 px-8 py-3 text-sm tracking-widest text-primary
                                transition-all duration-500 hover:border-black hover:bg-[#1f2d34] hover:text-white hover:-translate-y-0.5"
                            >
                                REZERVASYON YAP
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
                                    href="https://www.instagram.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.facebook.com/urgupyildizhotel/"
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
                                    '/images/room-106/106-4.jpeg',
                                    '/images/otelBahce/resim2.jpg',
                                    '/images/room-104/104-1.jpg',
                                    '/images/otelBahce/resim4.jpg'
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
                                    href="https://www.instagram.com/urgupyildizhotel/"
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