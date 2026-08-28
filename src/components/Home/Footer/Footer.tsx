import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#111827] text-white">

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

                <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-hover/10 blur-[150px]" />

            </div>

            <div className="relative z-10">

                {/* CTA */}

                <div className="border-b border-white/10 bg-secondary/40">

                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 text-center lg:flex-row lg:text-left">

                        <div>

                            <p className="text-sm uppercase tracking-[0.35em] text-secondary">

                                ENNEAGRAM EĞİTİM

                            </p>

                            <h2 className="mt-4 text-3xl font-light md:text-5xl">

                                Kendinizi keşfetmeye hazır mısınız?

                            </h2>

                        </div>

                        <Link
                            href="/iletisim"
                            className="rounded-full bg-secondary px-8 py-4 font-medium transition hover:bg-hover"
                        >

                            Bizimle İletişime Geç

                        </Link>

                    </div>

                </div>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-[1.2fr_.8fr_.8fr]">
                    <div>

                        <Link href="/" className="inline-block">

                            <Image
                                src="/Logo.png.png"
                                alt="Enneagram Eğitim"
                                width={320}
                                height={320}
                                className="object-contain"
                            />

                        </Link>

                        <p className="mt-6 max-w-md text-lg font-light leading-9 text-white/70">

                            Enneagram Eğitim & Danışmanlık; bireysel gelişim,
                            kurumsal dönüşüm ve eğitim süreçlerinde mizaç merkezli
                            yaklaşımlar sunar. Amacımız insanların kendilerini ve
                            birbirlerini daha doğru anlamalarına katkı sağlamaktır.

                        </p>

                        <div className="mt-10 flex items-center gap-4">

                            <a
                                href="https://www.instagram.com/enneagramegitim/"
                                target="_blank"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/enneagramegitim/"
                                target="_blank"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="https://www.youtube.com/@tv.enneagram"
                                target="_blank"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                            >
                                <FaYoutube size={18} />
                            </a>

                            <a
                                href="https://x.com/enneagramegitim"
                                target="_blank"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                            >
                                <FaTwitter size={18} />
                            </a>

                            <a
                                href="https://wa.me/905557597345"
                                target="_blank"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                            >
                                <FaWhatsapp size={18} />
                            </a>

                        </div>

                    </div>
                    {/* CENTER */}

                    <div>

                        <span className="text-sm uppercase tracking-[0.3em] text-secondary">
                            Hızlı Menü
                        </span>

                        <ul className="mt-8 space-y-5">

                            {[
                                { label: "Hakkımızda", href: "/hakkimizda" },
                                { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                                { label: "Eğitimlerimiz", href: "/egitimlerimiz" },
                                { label: "Enneagram", href: "/enneagram" },
                                { label: "Mizaç Tipleri", href: "/mizac-tipleri" },
                                { label: "Blog", href: "/blog" },
                                { label: "İletişim", href: "/iletisim" },
                            ].map((item) => (

                                <li key={item.href}>

                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-3 text-lg text-white/70 transition-all duration-300 hover:text-white"
                                    >

                                        <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover:w-8" />

                                        {item.label}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>
                    {/* RIGHT */}

                    <div>

                        <span className="text-sm uppercase tracking-[0.3em] text-secondary">
                            İletişim
                        </span>

                        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                            <div className="space-y-6">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                                        Adres
                                    </p>

                                    <p className="mt-2 leading-8 text-white/80">
                                        Molla Gürani Mah. Zaviye Sok. No:4 Kat:3
                                        <br />
                                        Fatih / İstanbul
                                    </p>

                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                                        E-posta
                                    </p>

                                    <a
                                        href="mailto:bilgi@enneagramegitim.com"
                                        className="mt-2 block text-white transition hover:text-secondary"
                                    >
                                        bilgi@enneagramegitim.com
                                    </a>

                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                                        Telefon
                                    </p>

                                    <a
                                        href="tel:+905557597345"
                                        className="mt-2 block text-white transition hover:text-secondary"
                                    >
                                        +90 555 759 73 45
                                    </a>

                                </div>

                            </div>

                            <Link
                                href="/iletisim"
                                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-secondary px-6 py-4 font-medium transition hover:bg-hover"
                            >
                                İletişime Geç
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-white/10">

                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/60 lg:flex-row">

                        <p>
                            © {new Date().getFullYear()} Enneagram Eğitim & Danışmanlık. Tüm hakları saklıdır.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">

                            <Link
                                href="/kvkk"
                                className="transition hover:text-white"
                            >
                                KVKK
                            </Link>

                            <Link
                                href="/gizlilik-politikasi"
                                className="transition hover:text-white"
                            >
                                Gizlilik Politikası
                            </Link>

                            <Link
                                href="/cerez-politikasi"
                                className="transition hover:text-white"
                            >
                                Çerez Politikası
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}
