
"use client";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

type Props = {
    shareUrl: string;
    title: string;
};

export default function ShareButtons({ shareUrl, title }: Props) {

    const shareLinks = [
        {
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            label: "Facebook",
            icon: <FaFacebookF />,
        },
        {
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
            label: "Twitter",
            icon: <FaTwitter />,
        },
        {
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            label: "LinkedIn",
            icon: <FaLinkedinIn />,
        },
        {
            href: `https://wa.me/?text=${encodeURIComponent(`${title}\n${shareUrl}`)}`,
            label: "WhatsApp",
            icon: <FaWhatsapp />,
        },
    ];

    const buttonClass =
        "grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-primary/10 text-sm text-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-white";

    const handleInstagram = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            alert("Bağlantı kopyalandı! Instagram hikâyende paylaşabilirsin.");
        } catch {
            alert("Bağlantı kopyalanamadı.");
        }
    };

    return (
        <div className="mx-auto mt-16 max-w-[760px] border-t border-black/10 pt-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <span className="text-[11px] uppercase tracking-[0.22em] text-primary/45">
                    Bu Yazıyı Paylaş
                </span>

                <div className="flex items-center gap-2">

                    {shareLinks.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            aria-label={s.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonClass}
                        >
                            {s.icon}
                        </a>
                    ))}

                    <button
                        type="button"
                        aria-label="Instagram için bağlantıyı kopyala"
                        title="Instagram için bağlantıyı kopyala"
                        onClick={handleInstagram}
                        className={buttonClass}
                    >
                        <FaInstagram />
                    </button>

                </div>
            </div>
        </div>
    );
}
