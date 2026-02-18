import Link from "next/link";
import Image from "next/image";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTripadvisor,
    FaWhatsapp,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary text-on-primary font-sans">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 text-center md:text-left">

                    <div className="space-y-5 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-[300] tracking-wide">
                            İletişim
                        </h3>

                        <p className="leading-relaxed font-[200]">
                            Molla Gürani, Zaviye Sk. No:4 Kat:3, 34096
                            <br />
                            Fatih/İstanbul
                        </p>

                        <div className="space-y-2">
                            <p className="flex items-center justify-center md:justify-start gap-3">
                                <FaEnvelope className="text-secondary shrink-0" />
                                <a
                                    href="mailto:info@yildizhotelcappadocia.com"
                                    className="hover:underline break-all font-[200]"
                                >
                                    bilgi@enneagrameğitim.com
                                </a>
                            </p>

                            <p className="flex items-center justify-center md:justify-start gap-3">
                                <FaPhoneAlt className="text-secondary shrink-0" />
                                <a
                                    href="tel:+903843414610"
                                    className="hover:underline font-[200]"
                                >
                                    0555 759 73 45
                                </a>
                            </p>

                            <p className="flex items-center justify-center md:justify-start gap-3">
                                <FaWhatsapp className="text-secondary shrink-0" />
                                <a
                                    href="https://wa.me/905557597345"
                                    target="_blank"
                                    className="hover:underline font-[200]"
                                >
                                    0555 759 73 45
                                </a>
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-5 pt-2 text-xl">
                            <a className="hover:text-hover transition-colors" href="https://www.instagram.com/enneagramegitim/" target="_blank">
                                <FaInstagram />
                            </a>
                            <a className="hover:text-hover transition-colors" href="https://www.facebook.com/enneagramegitim/" target="_blank">
                                <FaFacebookF />
                            </a>
                            <a className="hover:text-hover transition-colors" href="https://www.x.com/enneagramegitim/" target="_blank">
                                <FaTwitter />
                            </a>
                            <a className="hover:text-hover transition-colors" href="https://www.youtube.com/@tv.enneagram" target="_blank">
                                <FaYoutube />
                            </a>
                            <a className="hover:text-hover transition-colors" href="https://wa.me/905557597345" target="_blank">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-[300] tracking-wide">
                            Keşfet
                        </h3>

                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-6 font-[200]">
                            {[
                                { label: "Hakkımızda", href: "/hakkimizda" },
                                { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                                { label: "Eğitimlerimiz", href: "/egitimlerimiz" },
                                { label: "Enneagram", href: "/enneagram" },
                                { label: "Mizaç tipleri", href: "/mizac-tipleri" },
                                { label: "Blog", href: "/blog" },
                                { label: "İletişim", href: "/iletisim" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-hover transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-[300] tracking-wide">
                            Rezervasyon
                        </h3>

                        <div className="border border-background/20 bg-background/5 p-6 w-full flex flex-col items-center md:items-center">
                            <div className="relative h-24 w-44">
                                <Image src="/Logo.png" alt="Yıldız Hotel Logo" fill className="object-contain" />
                            </div>

                            <p className="mt-4 text-sm text-on-primary font-[200] text-center md:text-left">
                                Rezervasyon ve sorularınız için bizimle iletişime geçin.
                            </p>

                            <Link
                                href="/iletisim"
                                className="mt-5 w-full text-center px-4 py-3 rounded
                  bg-secondary hover:bg-hover text-on-primary font-[300] transition-colors"
                            >
                                İletişime Geç
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-background/20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 text-center text-sm font-[200]">
                    © {new Date().getFullYear()} Enneagram Eğitim ve Danışmanlık
                </div>
            </div>
        </footer>
    );
}
