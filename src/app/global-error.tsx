"use client";

import { useEffect } from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="tr">
            <body className="m-0 bg-[#ffffff]">
                <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-16">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(7,148,199,0.10),transparent_35%),radial-gradient(circle_at_18%_82%,rgba(6,183,159,0.07),transparent_30%)]" />

                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute left-[7%] top-[13%] h-44 w-44 rounded-full border border-[#0794c7]/10" />
                        <div className="absolute bottom-[9%] right-[8%] h-60 w-60 rounded-full border border-[#06b79f]/10" />
                        <div className="absolute right-[18%] top-[16%] h-24 w-24 rounded-full border border-[#1f2732]/5" />
                    </div>

                    <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
                        <div>
                            <div className="mb-5 inline-flex items-center rounded-full border border-[#970818]/10 bg-[#970818]/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#970818]">
                                Sistem Hatası
                            </div>

                            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#1f2732] md:text-6xl">
                                Bir şey planlandığı gibi gitmedi.
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-[#1f2732]/65 md:text-lg">
                                Sayfayı görüntülerken beklenmeyen bir teknik sorun oluştu. Tekrar deneyebilir veya ana sayfaya dönebilirsiniz.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button onClick={reset} className="inline-flex items-center justify-center rounded-full bg-[#1f2732] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0794c7] hover:shadow-lg">
                                    Tekrar Dene
                                </button>

                                <a href="/" className="inline-flex items-center justify-center rounded-full border border-[#1f2732]/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#1f2732] transition-all duration-300 hover:border-[#0794c7]/40 hover:text-[#0794c7]">
                                    Ana Sayfaya Dön
                                </a>
                            </div>

                            {error.digest && (
                                <p className="mt-6 text-xs text-[#1f2732]/35">
                                    Hata kodu: {error.digest}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <div className="relative flex h-[340px] w-[340px] items-center justify-center md:h-[420px] md:w-[420px]">
                                <div className="absolute inset-0 rounded-full border border-[#0794c7]/10" />
                                <div className="absolute inset-[14%] rounded-full border border-[#1f2732]/5" />
                                <div className="absolute inset-[28%] rounded-full border border-[#06b79f]/10" />

                                <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[22deg] bg-[#0794c7]/15" />
                                <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-[38deg] bg-[#06b79f]/15" />
                                <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-[#1f2732]/10" />

                                <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[#1f2732] text-white shadow-[0_24px_70px_rgba(31,39,50,0.22)] md:h-48 md:w-48">
                                    <span className="text-5xl font-semibold leading-none md:text-6xl">!</span>
                                    <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/50">
                                        SİSTEM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}