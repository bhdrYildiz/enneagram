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
        title: 'Çocuğunuzu yeterince tanıyor musunuz? ',
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

const HomeVideosSection = () => {
    return (
        <section className="relative py-16 bg-white font-cormorant">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-block">
                        <p className="text-base text-secondary font-semibold uppercase tracking-[0.3em] mb-3">
                            Enneagram Eğitim & Danışmanlık
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1c2c34] mb-6 mt-4">
                            Videolarımız
                        </h2>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        style={{ transformStyle: 'flat' }}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <VideoLightbox
                            src={videos[0].src}
                            poster={videos[0].poster}
                            alt={videos[0].title}
                            className="rounded-md shadow-lg mt-4"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {videos.slice(1).map((video, index) => (
                            <div key={index} className="flex gap-4 items-center">
                                <div className="w-44 h-48 flex-shrink-0 rounded-md overflow-hidden shadow-md">
                                    <VideoLightbox
                                        src={video.src}
                                        poster={video.poster}
                                        alt={video.title}
                                        variant="thumbnail"
                                        className="rounded-md shadow-none"
                                    />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-primary leading-snug">
                                    {video.title}
                                </h3>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeVideosSection;