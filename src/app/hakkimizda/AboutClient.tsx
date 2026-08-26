'use client';

import Image from 'next/image';
import { FaShieldAlt, FaKey, FaSchool } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInRight, fadeUp, stagger } from '@/app/lib/animations';
import PageHero from '@/components/ui/PageHero';

export default function AboutClient() {

    const logos = [
        { src: "/logo/thy-logo.png", alt: "Logo 1" },
        { src: "/logo/dyson-logo.png", alt: "Logo 2" },
        { src: "/logo/maya-logo.png", alt: "Logo 3" },
        { src: "/logo/bilfen-logo.png", alt: "Logo 4" },
        { src: "/logo/vizyon-logo.png", alt: "Logo 5" },
        { src: "/logo/bilim-koleji-logo.png", alt: "Logo 6" },
        { src: "/logo/ago-logo.jpg", alt: "Logo 7" },
        { src: "/logo/armagan-logo.png", alt: "Logo 8" },
        { src: "/logo/A&D.png", alt: "Logo 10" },
        { src: "/logo/final-özel-basaksehir.png", alt: "Logo 11" },
        { src: "/logo/kızılay-yatırım.png", alt: "Logo 12" },
        { src: "/logo/kulturgen.png", alt: "Logo 13" },
        { src: "/logo/serendip-koleji.png", alt: "Logo 14" },
    ];
    return (
        <>
            <main className="flex flex-col font-cormorant bg-[#ffffff]">
                <PageHero
                    title="Hakkımızda"
                    subtitle="Keşfedin ve Bize Ulaşın"
                    backgroundImage="/enneagram-slayder1.jpg"
                    breadcrumbs={[
                        { label: 'Ana Sayfa', href: '/' },
                        { label: 'Hakkımızda' },
                    ]}
                />
                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-28 md:py-36">
                        <div className="max-w-5xl">
                            <p className="text-xs tracking-[0.35em] uppercase text-secondary">
                                ENNEAGRAM EĞİTİM & DANIŞMANLIK
                            </p>

                            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-wide font-[300] text-primary">
                                İnsanı anlamak,
                                <br />
                                gelişimi dönüştürür.
                            </h1>

                            <p className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-primary/70 font-[300] tracking-wide">
                                Mizaç ve kişilik dinamiklerini merkeze alan eğitim, danışmanlık ve
                                ölçümleme sistemleriyle bireylerin, eğitim kurumlarının ve
                                organizasyonların gelişim süreçlerine eşlik ediyoruz.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="bg-primary text-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-28">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                            <div>
                                <p className="text-xs tracking-[0.35em] uppercase text-secondary">
                                    HAKKIMIZDA
                                </p>

                                <h2 className="mt-6 text-4xl md:text-5xl leading-tight font-[300] tracking-wide">
                                    İnsanı merkeze alan
                                    <br />
                                    bütüncül bir yaklaşım.
                                </h2>
                            </div>

                            <div>
                                <p className="text-base md:text-lg leading-8 text-white/75 font-[300] tracking-wide">
                                    Enneagram Eğitim & Danışmanlık; bireylerin, ailelerin,
                                    eğitim kurumlarının ve organizasyonların insanı daha
                                    derinlikli tanımasına yardımcı olan mizaç merkezli eğitim,
                                    danışmanlık ve ölçümleme sistemleri geliştirir.
                                </p>

                                <div className="mt-12 grid grid-cols-2 gap-8">
                                    <div className="border-t border-white/20 pt-6">
                                        <p className="text-5xl font-[200]">
                                            100.000<span className="text-secondary">+</span>
                                        </p>
                                        <p className="mt-3 text-xs tracking-[0.25em] text-white/60 uppercase">
                                            Katılımcı
                                        </p>
                                    </div>

                                    <div className="border-t border-white/20 pt-6">
                                        <p className="text-5xl font-[200]">
                                            15<span className="text-secondary">+</span>
                                        </p>
                                        <p className="mt-3 text-xs tracking-[0.25em] text-white/60 uppercase">
                                            Yıllık Deneyim
                                        </p>
                                    </div>
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
                h-[120px]
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
                                    icon: <FaShieldAlt className="h-6 w-6" />,
                                },
                                {
                                    title: "UYGULAMALI GELİŞİM",
                                    text:
                                        "Kişi ve ekip dinamiklerini anlayan, pratiğe dönük içeriklerle farkındalığı davranışa dönüştüren programlar tasarlıyoruz.",
                                    icon: <FaKey className="h-6 w-6" />,
                                },
                                {
                                    title: "KURUMA ÖZEL ÇÖZÜMLER",
                                    text:
                                        "İhtiyaç analiziyle başlayan; iletişim, liderlik ve kurum kültürüne özel tasarlanan eğitim ve danışmanlık süreçleri yürütüyoruz.",
                                    icon: <FaSchool className="h-6 w-6" />,
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
                    <div className="absolute inset-0 transition-transform duration-1600 ease-out group-hover:scale-[1.03]" />
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
                                        <p className="text-lg tracking-wide font-extralight text-primary transition-transform duration-500 hover:translate-x-1">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-primary font-light tracking-wide">
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
                                    '/sosyalmedya1.png',
                                    '/sosyalmedya2.png',
                                    '/sosyalmedya3.png',
                                    '/sosyalmedya4.png'
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