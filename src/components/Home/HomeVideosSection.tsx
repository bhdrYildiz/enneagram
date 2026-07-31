'use client';

import { motion } from 'framer-motion';
import VideoLightbox from '@/app/lib/VideoLightbox';

const videos = [
    {
        title: 'Bizim çocuk ders çalışmıyor...',
        src: '/videos/video3.mp4',
        poster: '/videos/videoDeneme-2.png',
    },
    {
        title: 'Çocuğunuzu yeterince tanıyor musunuz?',
        src: '/videos/video2.mp4',
        poster: '/videos/videoDeneme-1.png',
    },
    {
        title: 'İlişkiler doğduğumuz andan itibaren karşılaştığımız süreçlerdir...',
        src: '/videos/video4.mp4',
        poster: '/videos/videoDeneme-3.png',
    },
    {
        title: 'Enneagramda uzmanlaşmanızı sağlayan çok önemli bir eğitim...',
        src: '/videos/video5.mp4',
        poster: '/videos/videoDeneme-4.png',
    },
];

export default function HomeVideosSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Başlık */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <span className="uppercase tracking-[0.35em] text-secondary font-semibold text-sm">
                        Enneagram Eğitim & Danışmanlık
                    </span>

                    <h2 className="text-4xl lg:text-6xl font-light text-primary mt-4">
                        Videolarımız
                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8 text-lg">
                        Enneagram, aile, çocuk gelişimi ve kişisel farkındalık üzerine
                        uzmanlarımızın hazırladığı kısa videoları keşfedin.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                >
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {videos.slice(1).map((video, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: .25 }}
                                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                            >

                                <div className="overflow-hidden">

                                    <VideoLightbox
                                        src={video.src}
                                        poster={video.poster}
                                        alt={video.title}
                                        variant="thumbnail"
                                        className="aspect-[9/16] cursor-pointer"
                                    />

                                </div>

                                <div className="p-6">

                                    <h4 className="text-xl font-semibold text-primary leading-8 group-hover:text-secondary transition-colors">

                                        {video.title}

                                    </h4>

                                    <button
                                        className="
                                        mt-6 inline-flex items-center gap-2 font-semibold text-secondary group-hover:gap-4 transition-all"
                                    >

                                        Videoyu İzle

                                        <svg
                                            width="18"
                                            height="18"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M5 12H19M19 12L13 6M19 12L13 18"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}