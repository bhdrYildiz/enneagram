'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PageHeroProps = {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    breadcrumbs: BreadcrumbItem[];
};

export default function PageHero({
    title,
    subtitle,
    backgroundImage,
    breadcrumbs,
}: PageHeroProps) {
    const readySent = useRef(false);
    const lastIndex = Math.max(0, breadcrumbs.length - 1);

    const sendReady = () => {
        if (readySent.current) return;

        readySent.current = true;
        window.dispatchEvent(new Event('page-hero-ready'));
    };

    useEffect(() => {
        readySent.current = false;

        if (!backgroundImage) {
            requestAnimationFrame(sendReady);
        }
    }, [backgroundImage]);

    return (
        <section data-page-hero className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f8fa]">
            {backgroundImage && (
                <>
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center opacity-[0.3]"
                        onLoad={sendReady}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#f7f8fa]/50 to-[#f7f8fa]" />
                </>
            )}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/[0.08] md:h-[520px] md:w-[520px]" />
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.04] md:h-[360px] md:w-[360px]" />
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-secondary/[0.08]" />
                <div className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full border border-primary/[0.05]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[290px] max-w-7xl items-center justify-center px-6 py-14 md:min-h-[360px] md:py-16">
                <div className="mx-auto max-w-4xl text-center">

                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-px w-8 bg-secondary/60 md:w-12" />

                        <span className="text-[10px] uppercase tracking-[0.3em] text-secondary md:text-xs">
                            ENNEAGRAM EĞİTİM & DANIŞMANLIK
                        </span>

                        <span className="h-px w-8 bg-secondary/60 md:w-12" />
                    </div>

                    <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-primary sm:text-5xl md:text-[56px] lg:text-[62px]">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary/55 sm:text-base md:text-lg md:leading-8">
                            {subtitle}
                        </p>
                    )}

                    <nav className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-primary/40 md:text-[11px]" aria-label="Breadcrumb">
                        {breadcrumbs.map((item, idx) => {
                            const isLast = idx === lastIndex;

                            return (
                                <span key={`${item.label}-${idx}`} className="inline-flex items-center gap-3">
                                    {item.href && !isLast ? (
                                        <Link href={item.href} className="transition-colors duration-300 hover:text-secondary">
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className={isLast ? 'font-medium text-primary/65' : ''}>
                                            {item.label}
                                        </span>
                                    )}

                                    {!isLast && <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-secondary/80" />}
                                </span>
                            );
                        })}
                    </nav>

                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 bg-secondary/70" />
        </section>
    );
}