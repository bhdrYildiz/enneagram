'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    const targetPath = useRef<string | null>(null);
    const startedAt = useRef(0);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.button !== 0) return;
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

            const element = event.target as HTMLElement | null;
            const anchor = element?.closest('a');

            if (!anchor) return;
            if (anchor.target === '_blank') return;
            if (anchor.hasAttribute('download')) return;

            const href = anchor.getAttribute('href');

            if (!href) return;
            if (href.startsWith('#')) return;
            if (href.startsWith('mailto:')) return;
            if (href.startsWith('tel:')) return;

            const url = new URL(anchor.href, window.location.href);

            if (url.origin !== window.location.origin) return;

            const currentPath = window.location.pathname;
            const currentSearch = window.location.search;

            const nextPath = url.pathname;
            const nextSearch = url.search;

            if (currentPath === nextPath && currentSearch === nextSearch) return;

            // Aynı sayfada sadece query/search parametresi değişiyorsa
            // global sayfa loader'ını çalıştırma.
            if (currentPath === nextPath) return;

            targetPath.current = nextPath;
            startedAt.current = Date.now();

            setLoading(true);
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, []);

    useEffect(() => {
        if (!loading) return;
        if (!targetPath.current) return;
        if (pathname !== targetPath.current) return;

        const timeout = window.setTimeout(() => {
            const hero = document.querySelector('[data-page-hero]');

            if (!hero) {
                setLoading(false);
                targetPath.current = null;
            }
        }, 100);

        return () => window.clearTimeout(timeout);
    }, [pathname, loading]);

    useEffect(() => {
        const handleHeroReady = () => {
            if (!loading) return;

            const minimumTime = 250;
            const elapsed = Date.now() - startedAt.current;
            const remaining = Math.max(0, minimumTime - elapsed);

            window.setTimeout(() => {
                setLoading(false);
                targetPath.current = null;
            }, remaining);
        };

        window.addEventListener('page-hero-ready', handleHeroReady);

        return () => {
            window.removeEventListener('page-hero-ready', handleHeroReady);
        };
    }, [loading]);

    return (
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-background transition-all duration-500 ${loading ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}>
            <div className="flex flex-col items-center px-6">

                <div className="relative h-36 w-36">

                    <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full border border-secondary/15">
                        {Array.from({ length: 9 }).map((_, index) => {
                            const angle = index * 40;

                            return (
                                <span
                                    key={index}
                                    className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-secondary"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-71px)`,
                                    }}
                                />
                            );
                        })}
                    </div>

                    <div className="absolute inset-[14px] animate-[spin_12s_linear_infinite_reverse] rounded-full border border-primary/10" />

                    <div className="absolute inset-[29px] rounded-full border border-secondary/10" />

                    <div className="absolute left-1/2 top-1/2 h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-secondary/15 [animation-duration:2.5s]" />

                    <div className="absolute left-1/2 top-1/2 flex h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary">
                        <span className="text-[13px] font-medium tracking-[0.22em] text-white">
                            EED
                        </span>
                    </div>

                </div>

                <div className="mt-9 text-center">
                    <p className="text-[10px] uppercase tracking-[0.38em] text-secondary">
                        Enneagram Eğitim
                    </p>
                </div>

                <div className="relative mt-7 h-px w-36 overflow-hidden bg-primary/10">
                    <div className="absolute left-0 top-0 h-full w-1/2 animate-[loadingLine_1.4s_ease-in-out_infinite] bg-secondary" />
                </div>

                <style>{`
                    @keyframes loadingLine {
                        0% {
                            transform: translateX(-100%);
                        }

                        50% {
                            transform: translateX(100%);
                        }

                        100% {
                            transform: translateX(300%);
                        }
                    }
                `}</style>

            </div>
        </div>
    );
}