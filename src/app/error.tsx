"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
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
        <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-background px-6 py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(7,148,199,0.10),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(6,183,159,0.07),transparent_30%)]" />

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[8%] top-[14%] h-40 w-40 rounded-full border border-secondary/10" />
                <div className="absolute bottom-[10%] right-[8%] h-56 w-56 rounded-full border border-hover/10" />
                <div className="absolute right-[22%] top-[18%] h-20 w-20 rounded-full border border-primary/5" />
            </div>

            <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
                <div>
                    <div className="mb-5 inline-flex items-center rounded-full border border-alt/10 bg-alt/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-alt">
                        Beklenmeyen Bir Hata Oluştu
                    </div>

                    <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-primary md:text-6xl">
                        Yol kısa süreliğine kesildi.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-primary/65 md:text-lg">
                        Sayfayı görüntülerken beklenmeyen bir sorunla karşılaştık. Tekrar deneyebilir veya ana sayfaya dönerek devam edebilirsiniz.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button onClick={reset} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-lg">
                            Tekrar Dene
                        </button>

                        <Link href="/" className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-secondary/40 hover:text-secondary">
                            Ana Sayfaya Dön
                        </Link>
                    </div>

                    {error.digest && (
                        <p className="mt-6 text-xs text-primary/35">
                            Hata kodu: {error.digest}
                        </p>
                    )}
                </div>

                <div className="flex justify-center">
                    <div className="relative flex h-[330px] w-[330px] items-center justify-center md:h-[400px] md:w-[400px]">
                        <div className="absolute inset-0 rounded-full border border-secondary/10" />
                        <div className="absolute inset-[14%] rounded-full border border-primary/5" />
                        <div className="absolute inset-[28%] rounded-full border border-hover/10" />

                        <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] bg-secondary/15" />
                        <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 -rotate-[38deg] bg-hover/15" />
                        <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary/10" />

                        <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-primary text-white shadow-[0_24px_70px_rgba(31,39,50,0.22)] md:h-44 md:w-44">
                            <span className="text-5xl font-semibold leading-none md:text-6xl">!</span>
                            <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/50">
                                HATA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}