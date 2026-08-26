"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const RouteTransition = () => {
    const pathname = usePathname();

    const [loading, setLoading] = useState(false);

    const targetPathRef = useRef<string | null>(null);
    const routeCommittedRef = useRef(false);
    const heroReadyRef = useRef(false);
    const heroRegisteredRef = useRef(false);
    const loadingStartedAtRef = useRef(0);
    const finishTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const heroCheckTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const finishNavigation = () => {
        if (!routeCommittedRef.current) return;
        if (!heroReadyRef.current) return;

        const minimumDuration = 400;
        const elapsed = Date.now() - loadingStartedAtRef.current;
        const remaining = Math.max(0, minimumDuration - elapsed);

        if (finishTimeoutRef.current) {
            clearTimeout(finishTimeoutRef.current);
        }

        finishTimeoutRef.current = setTimeout(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setLoading(false);

                    targetPathRef.current = null;
                    routeCommittedRef.current = false;
                    heroReadyRef.current = false;
                    heroRegisteredRef.current = false;
                    finishTimeoutRef.current = null;
                });
            });
        }, remaining);
    };

    useEffect(() => {
        if (!loading) return;
        if (!targetPathRef.current) return;
        if (pathname !== targetPathRef.current) return;

        routeCommittedRef.current = true;

        if (heroCheckTimeoutRef.current) {
            clearTimeout(heroCheckTimeoutRef.current);
        }

        heroCheckTimeoutRef.current = setTimeout(() => {
            if (!heroRegisteredRef.current) {
                heroReadyRef.current = true;
                finishNavigation();
                return;
            }

            finishNavigation();
        }, 150);
    }, [pathname, loading]);

    useEffect(() => {
        const handleHeroWait = (event: Event) => {
            const customEvent = event as CustomEvent<{ pathname: string }>;

            if (!customEvent.detail) return;
            if (!targetPathRef.current) return;
            if (customEvent.detail.pathname !== targetPathRef.current) return;

            heroRegisteredRef.current = true;
            heroReadyRef.current = false;
        };

        const handleHeroReady = (event: Event) => {
            const customEvent = event as CustomEvent<{ pathname: string }>;

            if (!customEvent.detail) return;
            if (!targetPathRef.current) return;
            if (customEvent.detail.pathname !== targetPathRef.current) return;

            heroRegisteredRef.current = true;
            heroReadyRef.current = true;

            finishNavigation();
        };

        window.addEventListener("page-hero-wait", handleHeroWait);
        window.addEventListener("page-hero-ready", handleHeroReady);

        return () => {
            window.removeEventListener("page-hero-wait", handleHeroWait);
            window.removeEventListener("page-hero-ready", handleHeroReady);
        };
    }, []);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.button !== 0) return;
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

            const target = event.target as HTMLElement | null;

            if (!target) return;

            const anchor = target.closest("a");

            if (!anchor) return;

            const href = anchor.getAttribute("href");

            if (!href) return;
            if (href.startsWith("#")) return;
            if (href.startsWith("mailto:")) return;
            if (href.startsWith("tel:")) return;
            if (href.startsWith("javascript:")) return;
            if (anchor.target === "_blank") return;
            if (anchor.hasAttribute("download")) return;

            const url = new URL(anchor.href, window.location.href);

            if (url.origin !== window.location.origin) return;

            const targetPath = url.pathname;

            if (targetPath === window.location.pathname && url.search === window.location.search) return;

            if (finishTimeoutRef.current) {
                clearTimeout(finishTimeoutRef.current);
                finishTimeoutRef.current = null;
            }

            if (heroCheckTimeoutRef.current) {
                clearTimeout(heroCheckTimeoutRef.current);
                heroCheckTimeoutRef.current = null;
            }

            targetPathRef.current = targetPath;
            routeCommittedRef.current = false;
            heroReadyRef.current = false;
            heroRegisteredRef.current = false;
            loadingStartedAtRef.current = Date.now();

            setLoading(true);
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);

            if (finishTimeoutRef.current) {
                clearTimeout(finishTimeoutRef.current);
            }

            if (heroCheckTimeoutRef.current) {
                clearTimeout(heroCheckTimeoutRef.current);
            }
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-background">
            <div className="relative flex flex-col items-center px-6 text-center">
                <div className="relative mb-8 h-44 w-44 md:h-52 md:w-52">
                    <div className="absolute inset-0 rounded-full border border-secondary/15" />
                    <div className="absolute inset-[12%] rounded-full border border-primary/10" />
                    <div className="absolute inset-[24%] rounded-full border border-hover/10" />

                    <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] bg-secondary/20" />
                    <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-[38deg] bg-hover/20" />
                    <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary/15" />

                    <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 animate-pulse rounded-full bg-secondary" />
                    <div className="absolute right-[13%] top-[15%] h-3 w-3 animate-pulse rounded-full bg-hover [animation-delay:120ms]" />
                    <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 animate-pulse rounded-full bg-secondary [animation-delay:240ms]" />
                    <div className="absolute bottom-[15%] right-[13%] h-3 w-3 animate-pulse rounded-full bg-hover [animation-delay:360ms]" />
                    <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 animate-pulse rounded-full bg-secondary [animation-delay:480ms]" />
                    <div className="absolute bottom-[15%] left-[13%] h-3 w-3 animate-pulse rounded-full bg-hover [animation-delay:600ms]" />
                    <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 animate-pulse rounded-full bg-secondary [animation-delay:720ms]" />
                    <div className="absolute left-[13%] top-[15%] h-3 w-3 animate-pulse rounded-full bg-hover [animation-delay:840ms]" />
                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-secondary [animation-delay:960ms]" />

                    <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_20px_60px_rgba(31,39,50,0.18)] md:h-28 md:w-28">
                        <span className="text-xl font-semibold tracking-[0.18em] text-white">EED</span>
                    </div>
                </div>

                <div>
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-secondary/40" />
                        <span className="text-[10px] uppercase tracking-[0.28em] text-secondary">Enneagram Eğitim & Danışmanlık</span>
                        <span className="h-px w-8 bg-secondary/40" />
                    </div>

                    <p className="text-lg font-medium text-primary md:text-xl">Sayfa hazırlanıyor</p>
                    <p className="mt-2 text-sm text-primary/45">İçerikler ve görseller yükleniyor</p>
                </div>
            </div>
        </div>
    );
};

export default RouteTransition;