import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

type Member = {
    role: string;
    name: string;
    image: string;
    socials?: {
        instagram?: string;
        linkedin?: string;
        x?: string;
    };
};

export default function OurTeam() {
    const members: Member[] = [
        {
            role: "EĞİTİMCİ",
            name: "Abdullah Alçiçek",
            image: "/abdullahçicek.png",
            socials: { instagram: "#", linkedin: "#", x: "#" },
        },
        {
            role: "EĞİTİMCİ",
            name: "Muammer Küçükyazıcı",
            image: "/muammerkckyazıcı.jpg",
            socials: { instagram: "#", linkedin: "#", x: "#" },
        },
        {
            role: "EĞİTİMCİ",
            name: "İsmail Acarkan",
            image: "/ismailacarkan.jpeg",
            socials: { instagram: "#", linkedin: "#", x: "#" },
        },
    ];

    const sectionRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);


    return (
        <section ref={sectionRef} className="bg-primary text-foreground">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-20">
                <div className="text-center flex flex-col items-center">
                    <div className="inline-flex items-center rounded-md border border-foreground/20 px-4 py-2 text-xs tracking-[0.22em] font-[300]">
                        EKİBİMİZ
                    </div>

                    <h2 className="mt-6 text-4xl md:text-6xl font-[300] leading-[1.05]">
                        Ekibimizle
                        tanışın.
                    </h2>

                    <p className="mt-6 text-foreground/75 font-[200] leading-relaxed max-w-xl">
                        Farklı perspektiflerle çalışan, deneyimli ve alanında uzman bir ekip.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                    {members.map((m, idx) => (
                        <TeamCard key={m.name} m={m} inView={inView} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamCard({ m, inView, index }: { m: Member; inView: boolean; index: number }) {

    return (
        <article
            className={[
                "w-full max-w-[360px] group",
                "transition-transform duration-500 will-change-transform",
                // giriş animasyonu
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-[300] text-foreground/70">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                {m.role}
            </div>

            <div className="mt-4 relative aspect-[4/5] w-full overflow-hidden bg-foreground/5">
                {/* hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/55 via-black/15 to-transparent z-[1]" />

                <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* sosyal ikonlar: hover’da alttan gelsin */}
                <div className="absolute bottom-4 left-4 right-4 z-[2] flex items-center gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    {m.socials?.instagram && (
                        <a
                            href={m.socials.instagram}
                            className="w-10 h-10 rounded-full bg-white/90 text-black hover:bg-hover transition flex items-center justify-center"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-4 h-4" />
                        </a>
                    )}

                    {m.socials?.linkedin && (
                        <a
                            href={m.socials.linkedin}
                            className="w-10 h-10 rounded-full bg-white/90 text-black hover:bg-hover transition flex items-center justify-center"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>
                    )}

                    {m.socials?.x && (
                        <a
                            href={m.socials.x}
                            className="w-10 h-10 rounded-full bg-white/90 text-black hover:bg-hover transition flex items-center justify-center"
                            aria-label="X"
                        >
                            <FaXTwitter className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-2xl md:text-3xl font-[300]">{m.name}</h3>
            </div>
        </article>
    );
}
