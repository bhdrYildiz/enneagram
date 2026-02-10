'use client'

import Image from 'next/image'
import { useInView } from '@/components/Helper/useInView'

type Step = {
    no: string
    title: string
    desc: string
    image: string
    accentClass: string
}

export default function Process() {
    const steps: Step[] = [
        {
            no: '01',
            title: 'Okul',
            desc:
                'Değişen dünya ve yeni arayışların eşiğinde özellikle eğitim alanında ‘iyileştirici’ ve ‘dönüştürücü’ sonuçlar için mizaç merkezli yaklaşımlar ve mizaca yönelik eğitim süreçleri ve rehberlik yaklaşımları geliştirilmelidir.',
            image: '/hero-1.jpg',
            accentClass: 'text-secondary',
        },
        {
            no: '02',
            title: 'Kendini bil',
            desc:
                'Her insan doğuştan getirdiği ve ömür boyu taşıyacağı mizacın kişisel gelişim aşamalarını, potansiyel kabiliyet ve imkanlarını tanımalı, enerji ve kaynaklarını daha verimli ve maksimum fayda ile kullanmalı.',
            image: '/hero-2.jpg',
            accentClass: 'text-[#f2994a]',
        },
        {
            no: '03',
            title: 'İş Hayatı',
            desc:
                'Kalıcı’ ve ‘sürdürülebilir’ sonuçlar ve verimli üretim için iş ortamlarında kurulacak takım ve ekipler, organizasyon yapısına uygun mizaçlara sahip kişilerden oluşturulmalı. Bu ihtiyacın karşılanmasında enneagram bilgisi ve mizaç yaklaşımı insan kaynakları için önemli kolaylıklar sağlar.',
            image: '/hero-3.jpg',
            accentClass: 'text-hover',
        },
        {
            no: '04',
            title: 'Aile',
            desc:
                'Aile fertleri birbirlerinin mizaç farklılıklarını fark etmeli, bu farklılıkları aile saadeti ve huzuru için olumlu yönde kullanma becerisi geliştirmeli. Enneagram bilgisi yardımıyla karı-koca ve çocuk-ebeveyn ilişkileri daha sağlıklı kurulabilir.',
            image: '/hero-1.jpg',
            accentClass: 'text-alt',
        },
    ]

    return (
        <section className="bg-on-primary text-primary">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
                <div className="mt-12 space-y-12 md:space-y-16">
                    {steps.map((s, i) => (
                        <StepRow key={s.no} step={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function StepRow({ step, index }: { step: Step; index: number }) {
    const { ref, inView } = useInView<HTMLDivElement>({
        threshold: 0.18,
        rootMargin: '0px 0px -15% 0px',
    })

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 120}ms` }}
            className={`relative transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_240px] gap-4 lg:gap-6 items-center">
                <div className="flex items-center gap-6">
                    <div className={`text-7xl md:text-8xl font-[300] leading-none ${step.accentClass}`}>
                        {step.no}
                    </div>
                    <div className="text-3xl md:text-4xl font-[300] leading-tight">
                        {step.title}
                    </div>
                </div>

                <div className="flex justify-start lg:justify-center">
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-primary bg-primary">
                        <Image src={step.image} alt={step.title} fill className="object-cover" />
                    </div>
                </div>

                <div className="text-primary font-[300] leading-relaxed w-[280px] tracking-wide">
                    {step.desc}
                </div>
            </div>

            <div className="mt-10 h-px bg-primary/10" />
        </div>
    )
}
