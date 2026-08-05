'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '@/constant/constant';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function TestimonialsSection() {
    return (
        <section className="testimonials relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-0 top-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="text-center mb-20"

                >
                    <span className="uppercase tracking-[0.35em] text-secondary font-semibold text-sm">
                        Gerçek Katılımcı Deneyimleri
                    </span>
                    <h2 className="text-4xl lg:text-6xl text-primary font-light mt-5">
                        Katılımcılarımız Ne Diyor?
                    </h2>
                    <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8 text-lg">
                        Enneagram eğitimlerimize katılan öğretmenler,
                        psikolojik danışmanlar ve uzmanların deneyimlerinden
                        bazılarını sizin için derledik.
                    </p>
                </motion.div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="pb-14">
                            <motion.article
                                whileHover={{
                                    y: -8
                                }}
                                transition={{
                                    duration: .25
                                }}
                                className="relative rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full min-h-[430px] flex flex-col"
                            >
                                <FaQuoteLeft

                                    size={70}

                                    className="absolute right-8 top-8 text-secondary/10"

                                />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="text-secondary"
                                        />
                                    ))}
                                </div>
                                <h3
                                    className="
                    text-2xl font-semibold text-primary leading-snug mb-5 pr-12"
                                >
                                    "{testimonial.highlight}"
                                </h3>
                                <p
                                    className="text-gray-600 leading-8 flex-1"
                                >
                                    {testimonial.text}
                                </p>
                                <div className="my-8 h-px bg-slate-200" />
                                <div>
                                    <h4 className="text-lg font-semibold text-primary">

                                        {testimonial.name}

                                    </h4>

                                    <p className="mt-2 uppercase tracking-[0.2em] text-xs font-semibold text-secondary">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </motion.article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}