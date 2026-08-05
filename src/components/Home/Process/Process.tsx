'use client'

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from 'next/image'

type Step = {
    no: string
    title: string
    desc: string
    image: string
}

export default function Process() {
    const steps: Step[] = [
        {
            no: '01',
            title: 'Okul',
            desc:
                'Değişen dünya ve yeni arayışların eşiğinde özellikle eğitim alanında ‘iyileştirici’ ve ‘dönüştürücü’ sonuçlar için mizaç merkezli yaklaşımlar ve mizaca yönelik eğitim süreçleri ve rehberlik yaklaşımları geliştirilmelidir.',
            image: '/enoksishero.png',
        },
        {
            no: '02',
            title: 'Kendini bil',
            desc:
                'Her insan doğuştan getirdiği ve ömür boyu taşıyacağı mizacın kişisel gelişim aşamalarını, potansiyel kabiliyet ve imkanlarını tanımalı, enerji ve kaynaklarını daha verimli ve maksimum fayda ile kullanmalı.',
            image: '/enherethero.jpg',
        },
        {
            no: '03',
            title: 'İş Hayatı',
            desc:
                'Kalıcı’ ve ‘sürdürülebilir’ sonuçlar ve verimli üretim için iş ortamlarında kurulacak takım ve ekipler, organizasyon yapısına uygun mizaçlara sahip kişilerden oluşturulmalı. Bu ihtiyacın karşılanmasında enneagram bilgisi ve mizaç yaklaşımı insan kaynakları için önemli kolaylıklar sağlar.',
            image: '/hakkimizda_1.jpg',
        },
        {
            no: '04',
            title: 'Aile',
            desc:
                'Aile fertleri birbirlerinin mizaç farklılıklarını fark etmeli, bu farklılıkları aile saadeti ve huzuru için olumlu yönde kullanma becerisi geliştirmeli. Enneagram bilgisi yardımıyla karı-koca ve çocuk-ebeveyn ilişkileri daha sağlıklı kurulabilir.',
            image: '/enneagram_banner_2.jpg',
        },
    ]

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <span className="uppercase tracking-[0.35em] text-secondary text-sm">

                        Enneagram

                    </span>

                    <h2 className="mt-5 text-4xl lg:text-6xl font-light text-primary">

                        Nerelerde Kullanılır?

                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">

                        Mizaç merkezli yaklaşım; okuldan aileye,
                        kurumlardan bireysel gelişime kadar birçok
                        alanda kalıcı dönüşüm sağlar.

                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {steps.map((step, index) => (

                        <motion.div

                            key={step.no}

                            whileHover={{
                                y: -8
                            }}

                            transition={{
                                duration: .25
                            }}

                        >

                            <Link

                                href="/hizmetlerimiz"

                                className="
                            group
                            block
                            rounded-3xl
                            overflow-hidden
                            bg-white
                            border
                            border-slate-200
                            shadow-lg
                            hover:shadow-2xl
                            transition-all
                            duration-300
                            "

                            >

                                <div className="relative h-72 overflow-hidden">

                                    <Image

                                        src={step.image}

                                        alt={step.title}

                                        fill

                                        className="
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105
                                    "

                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                </div>

                                <div className="p-8">

                                    <span className="text-secondary text-5xl font-light">

                                        {step.no}

                                    </span>

                                    <h3 className="mt-4 text-3xl font-light text-primary">

                                        {step.title}

                                    </h3>

                                    <p className="mt-5 text-gray-600 leading-8">

                                        {step.desc}

                                    </p>

                                    <div

                                        className="
                                    mt-8
                                    inline-flex
                                    items-center
                                    gap-3
                                    text-secondary
                                    group-hover:gap-5
                                    transition-all
                                    "

                                    >

                                        Daha Fazla

                                        <FiArrowUpRight />

                                    </div>

                                </div>

                            </Link>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    )
}