
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#fafcfb] px-6 py-24">

            {/* ARKA PLAN */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -right-32 -top-32 h-[550px] w-[550px] rounded-full bg-[#0794c7]/[0.055] blur-[90px]" />

                <div className="absolute -bottom-48 -left-32 h-[550px] w-[550px] rounded-full bg-[#06b79f]/[0.06] blur-[100px]" />

                {/* Sabit dekoratif çemberler */}
                <div className="absolute -right-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-[#0794c7]/10" />

                <div className="absolute -right-20 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-[#0794c7]/10" />

            </div>

            <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">

                {/* SOL TARAF */}
                <div className="text-center lg:text-left">

                    {/* ÜST ETİKET */}
                    <div className="notfound-reveal notfound-delay-1 mb-8 inline-flex items-center gap-3">

                        <span className="h-px w-8 bg-[#0794c7]" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0794c7]">
                            Sayfa Bulunamadı
                        </span>

                    </div>

                    {/* BAŞLIK */}
                    <h1 className="notfound-reveal notfound-delay-1 max-w-xl text-5xl font-light leading-[1.12] tracking-tight text-[#1f2732] sm:text-6xl lg:text-[72px]">

                        Bazen yollar
                        <br />

                        <span className="font-serif italic text-[#0794c7]">
                            değişir.
                        </span>

                    </h1>

                    {/* AYRAÇ */}
                    <div className="mx-auto mt-8 h-px w-16 bg-[#0794c7]/40 lg:mx-0" />

                    {/* AÇIKLAMA */}
                    <p className="notfound-reveal notfound-delay-2 mx-auto mt-8 max-w-md text-base font-light leading-8 text-[#52616d] lg:mx-0">

                        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
                        Ama keşif yolculuğunuz burada bitmek zorunda değil.

                    </p>

                    {/* BUTONLAR */}
                    <div className="notfound-reveal notfound-delay-3 mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

                        <Link
                            href="/"
                            className="group inline-flex items-center gap-5 rounded-full bg-[#1f2732] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0794c7] hover:shadow-xl"
                        >

                            Ana Sayfaya Dön

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                        </Link>

                        <Link
                            href="/mizac-tipleri"
                            className="group inline-flex items-center gap-3 rounded-full border border-[#1f2732]/15 px-7 py-4 text-sm font-medium text-[#1f2732] transition-all duration-300 hover:border-[#0794c7] hover:text-[#0794c7]"
                        >

                            Mizaçları Keşfet

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>

                        </Link>

                    </div>

                    {/* İLETİŞİM */}
                    <div className="notfound-reveal notfound-delay-3 mt-14">

                        <Link
                            href="/iletisim"
                            className="text-sm text-[#52616d] underline decoration-[#0794c7]/30 underline-offset-8 transition-colors hover:text-[#0794c7]"
                        >
                            Yardıma mı ihtiyacınız var? Bize ulaşın.
                        </Link>

                    </div>

                </div>

                {/* SAĞ TARAF */}
                <div className="relative flex min-h-[350px] items-center justify-center sm:min-h-[480px]">

                    {/* DIŞ ÇEMBER */}
                    <div className="absolute h-[320px] w-[320px] sm:h-[440px] sm:w-[440px]">

                        <div className="nf-orbit absolute inset-0 rounded-full border border-[#0794c7]/20">

                            <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#0794c7] shadow-[0_0_15px_rgba(7,148,199,0.45)]" />

                        </div>

                    </div>

                    {/* İÇ ÇEMBER */}
                    <div className="absolute h-[240px] w-[240px] sm:h-[340px] sm:w-[340px]">

                        <div className="nf-orbit-reverse absolute inset-0 rounded-full border border-[#06b79f]/20">

                            <span className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#06b79f] shadow-[0_0_12px_rgba(6,183,159,0.4)]" />

                        </div>

                    </div>

                    {/* HAREKETLİ DEKORATİF NOKTALAR */}
                    <div className="nf-float absolute right-[12%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#0794c7]/50" />

                    <div className="nf-float-reverse absolute bottom-[22%] left-[12%] h-2 w-2 rounded-full bg-[#06b79f]/60" />

                    {/* MERKEZ */}
                    <div className="relative flex flex-col items-center justify-center">

                        {/* NEFES ALAN ARKA PLAN */}
                        <div className="notfound-glow absolute h-[240px] w-[240px] rounded-full bg-[#0794c7]/[0.09] blur-[65px]" />

                        {/* 404 YAZISI */}
                        <span className="notfound-reveal notfound-delay-2 relative select-none text-[130px] font-extralight leading-none tracking-[-0.09em] text-[#1f2732] sm:text-[180px] lg:text-[210px]">
                            404
                        </span>
                        {/* ALT YAZI */}
                        <div className="notfound-reveal notfound-delay-3 mt-6 flex items-center gap-4">
                            <span className="h-px w-8 bg-[#0794c7]/40" />
                            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#0794c7]">
                                Yeni Bir Yol
                            </span>
                            <span className="h-px w-8 bg-[#0794c7]/40" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ALT DEKORATİF YAZI */}
            <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-[#1f2732]/30 md:block">
                Enneagram Eğitim & Danışmanlık
            </div>
        </main>
    );
}