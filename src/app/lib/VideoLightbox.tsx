'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

type VideoLightboxProps = {
    src: string;
    poster: string;
    alt?: string;
    className?: string;
    triggerOnly?: boolean;
    trigger?: React.ReactNode;
    variant?: 'large' | 'thumbnail';
};

export default function VideoLightbox({
    src,
    poster,
    alt = 'Video',
    className = '',
    triggerOnly = false,
    trigger,
    variant = 'large',
}: VideoLightboxProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };

        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [open]);

    return (
        <>
            {!triggerOnly && (
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className={[
                        'group relative w-full overflow-hidden text-left',
                        variant === 'large'
                            ? 'h-[620px] md:h-[680px] lg:h-[720px]'
                            : 'h-full',
                        className,
                    ].join(' ')}
                    aria-label="Videoyu aç"
                >
                    <Image
                        src={poster}
                        alt={alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        priority={false}
                    />

                    <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-18 h-18 cursor-pointer rounded-full bg-white/85 backdrop-blur shadow-md transition-transform duration-300 group-hover:scale-105">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" />
                        </svg>
                    </span>
                </button>
            )}

            {triggerOnly && (
                <button type="button" onClick={() => setOpen(true)} className="w-full text-left">
                    {trigger}
                </button>
            )}
            {open && typeof window !== 'undefined' && createPortal(
                <div
                    className="fixed inset-0 z-[9999] backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        style={{ width: '90vw', maxWidth: '900px', aspectRatio: '16/9' }}
                        className="relative bg-black/60 rounded-xl overflow-hidden shadow-2xl mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            style={{ position: 'absolute', top: 8, right: 8, zIndex: 10 }}
                            className="w-12 h-12 cursor-pointer rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white text-lg"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                        <video
                            style={{ width: '100%', height: '100%', display: 'block' }}
                            src={src}
                            controls
                            autoPlay
                            playsInline
                            preload="metadata"
                        />
                    </div>
                </div >,
                document.body
            )}
        </>
    );
}