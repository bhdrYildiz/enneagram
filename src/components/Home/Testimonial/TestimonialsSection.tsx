'use client';

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { testimonials } from "@/constant/constant";
import type { Swiper as SwiperType } from "swiper";

export default function TestimonialsSection() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [active, setActive] = useState(0);

    return (
        <section className="relative bg-on-primary/95 py-20 font-cormorant overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
                <div className="relative">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        speed={800}
                        onSwiper={(swiper: SwiperType) => {
                            swiperRef.current = swiper;
                            setActive(swiper.realIndex ?? 0);
                        }}
                        onSlideChange={(swiper: SwiperType) => {
                            setActive(swiper.realIndex ?? 0);
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text-center py-12 px-4 md:px-12"
                                >
                                    <div className="flex justify-center mb-8">
                                        <FaQuoteLeft className="text-secondary opacity-40" size={64} />
                                    </div>

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1c2c34] mb-8 tracking-wide uppercase inline-block pb-2">
                                        {testimonial.highlight}
                                    </h3>

                                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-[800px] mx-auto">
                                        {testimonial.text}
                                    </p>

                                    <div className="flex justify-center gap-2 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-secondary" size={20} />
                                        ))}
                                    </div>

                                    <p className="text-sm md:text-base text-[#1c2c34] uppercase tracking-[0.2em] font-light">
                                        {testimonial.name}
                                    </p>
                                    <p className="mt-3 text-sm tracking-[0.25em] text-emerald-600 font-semibold uppercase">
                                        {testimonial.title}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => swiperRef.current?.slideToLoop(i)}
                                aria-label={`Slide ${i + 1}`}
                                className={`h-2.5 rounded-full transition-all ${active === i
                                    ? "w-8 bg-primary"
                                    : "w-2.5 bg-primary/30 hover:bg-primary/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
