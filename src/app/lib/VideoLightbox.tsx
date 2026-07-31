'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };

    }, [open]);

    return (
        <>

            {!triggerOnly && (

                <button
                    onClick={() => setOpen(true)}
                    className={[
                        "group relative w-full overflow-hidden",
                        variant === "large"
                            ? "aspect-[16/9]"
                            : "aspect-[9/16]",
                        className
                    ].join(" ")}
                >

                    <Image
                        src={poster}
                        alt={alt}
                        fill
                        className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        "
                    />

                    <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-black/10
                        to-black/10
                        "
                    />

                    {/* Play Button */}

                    <div
                        className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        "
                    >

                        <div
                            className="
                            w-20
                            h-20
                            rounded-full
                            bg-white/20
                            backdrop-blur-md
                            border
                            border-white/30
                            shadow-2xl
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:bg-secondary
                            "
                        >

                            <svg
                                width="34"
                                height="34"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>

                        </div>

                    </div>

                </button>

            )}

            {triggerOnly && (

                <button
                    onClick={() => setOpen(true)}
                    className="w-full"
                >
                    {trigger}
                </button>

            )}

            {typeof window !== 'undefined' && createPortal(

                <AnimatePresence>

                    {open && (

                        <motion.div

                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}

                            className="
                            fixed
                            inset-0
                            z-[9999]
                            bg-black/80
                            backdrop-blur-md
                            flex
                            items-center
                            justify-center
                            p-4
                            "

                            onClick={() => setOpen(false)}

                        >

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    scale: .92,
                                    y: 30
                                }}

                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0,
                                    scale: .92,
                                    y: 30
                                }}

                                transition={{
                                    duration: .35
                                }}

                                className="
                                relative
                                w-full
                                max-w-6xl
                                "

                                onClick={(e) => e.stopPropagation()}

                            >

                                {/* Close */}

                                <button

                                    onClick={() => setOpen(false)}

                                    className="
                                    absolute
                                    -top-16
                                    right-0
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-white/10
                                    backdrop-blur-md
                                    border
                                    border-white/20
                                    text-white
                                    text-xl
                                    hover:bg-white/20
                                    transition
                                    z-20
                                    "

                                >

                                    ✕

                                </button>

                                <div
                                    className="
                                    rounded-3xl
                                    overflow-hidden
                                    bg-black
                                    shadow-[0_25px_80px_rgba(0,0,0,.45)]
                                    "
                                >

                                    <video

                                        src={src}

                                        controls

                                        autoPlay

                                        playsInline

                                        preload="metadata"

                                        className="
                                        w-full
                                        max-h-[85vh]
                                        bg-black
                                        "

                                    />

                                </div>

                            </motion.div>

                        </motion.div>

                    )}

                </AnimatePresence>,
                document.body
            )}

        </>

    );

}