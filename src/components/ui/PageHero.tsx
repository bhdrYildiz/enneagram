'use client';

import Link from 'next/link';

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PageHeroProps = {
    title: string;
    subtitle: string;
    backgroundImage: string;
    breadcrumbs: BreadcrumbItem[];
};

export default function PageHero({
    title,
    subtitle,
    backgroundImage,
    breadcrumbs,
}: PageHeroProps) {
    const lastIndex = Math.max(0, breadcrumbs.length - 1);

    return (
        <section
            className="relative h-[420px] bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >

            {/* İçerik */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-2 lg:px-4 flex items-center">

                <div className="text-left text-white max-w-2xl">

                    <h1 className="text-4xl md:text-5xl font-light tracking-[0.15em] mb-4">
                        {title}
                    </h1>

                    <p className="text-sm md:text-base tracking-[0.2em] text-gray-100">
                        {subtitle}
                    </p>

                    <nav
                        className="mt-8 flex justify-start gap-2 text-xs md:text-sm tracking-wider"
                        aria-label="Breadcrumb"
                    >
                        {breadcrumbs.map((item, idx) => {
                            const isLast = idx === lastIndex;

                            const content =
                                item.href && !isLast ? (
                                    <Link
                                        href={item.href}
                                        className="hover:text-secondary transition-colors hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span>{item.label}</span>
                                );

                            return (
                                <span
                                    key={`${item.label}-${idx}`}
                                    className="inline-flex gap-2"
                                >
                                    {content}

                                    {!isLast && (
                                        <span aria-hidden="true">•</span>
                                    )}
                                </span>
                            );
                        })}
                    </nav>

                </div>
            </div>
        </section>
    );
}