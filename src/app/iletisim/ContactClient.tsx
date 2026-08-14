'use client';

import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaArrowRight,
} from 'react-icons/fa';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';

export default function ContactClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<null | {
    type: 'ok' | 'error';
    msg: string;
  }>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    setStatus(null);

    const form = new FormData(formEl);

    const name = String(form.get('fullName') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();

    const phoneRegex = /^05[0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      setStatus({
        type: 'error',
        msg: 'Lütfen ad soyad giriniz.',
      });
      return;
    }

    if (!phoneRegex.test(phone)) {
      setStatus({
        type: 'error',
        msg: 'Lütfen geçerli bir telefon numarası giriniz (05XXXXXXXXX).',
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus({
        type: 'error',
        msg: 'Lütfen geçerli bir e-posta adresi giriniz.',
      });
      return;
    }

    if (!message) {
      setStatus({
        type: 'error',
        msg: 'Lütfen mesaj alanını doldurunuz.',
      });
      return;
    }

    setIsSending(true);

    const payload = {
      source: 'contact',
      name,
      email,
      phone,
      subject,
      message,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus({
          type: 'error',
          msg: data.error || 'Gönderim başarısız.',
        });
        return;
      }

      setStatus({
        type: 'ok',
        msg: 'Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.',
      });

      formEl.reset();
    } catch (err) {
      console.error('FETCH_ERROR:', err);

      setStatus({
        type: 'error',
        msg: 'Bağlantı hatası. Lütfen tekrar deneyin.',
      });
    } finally {
      setIsSending(false);
    }
  }

  const contactOptions = [
    {
      title: 'Eğitimler',
      description:
        'Katılmak istediğiniz eğitimler hakkında bilgi alın ve size uygun programı keşfedin.',
    },
    {
      title: 'Kurumsal Çalışmalar',
      description:
        'Okul, kurum ve ekipler için Enneagram temelli eğitim ve gelişim çalışmalarımız hakkında bilgi alın.',
    },
    {
      title: 'Danışmanlık',
      description:
        'Bireysel veya profesyonel gelişiminize yönelik danışmanlık süreçlerimiz hakkında bizimle iletişime geçin.',
    },
  ];

  const faqs = [
    {
      question: 'Eğitimlere nasıl katılabilirim?',
      answer:
        'Sitemizden katılmak istediğiniz eğitimi seçerek kayıt ve ödeme sürecini tamamlayabilirsiniz. Kayıt sonrasında ilgili ekibimiz sizinle iletişime geçerek eğitim süreciyle ilgili gerekli bilgilendirmeleri paylaşır.',
    },
    {
      question: 'Eğitimlerin tarih ve saatlerini nereden öğrenebilirim?',
      answer:
        'Katılmak istediğiniz eğitimin sayfasında gün ve saat bilgileri güncel olarak paylaşılmaktadır. Kayıt öncesinde eğitim detaylarını ilgili eğitim sayfasından inceleyebilirsiniz.',
    },
    {
      question: 'Eğitim sonunda sertifika veriliyor mu?',
      answer:
        'Eğitimlerimizin ardından katılımcılarımıza isimlerine özel katılım sertifikası gönderilmektedir. Sertifikaların e-Devlet üzerinde görüntülenebilmesi için çalışmalarımız devam etmektedir.',
    },
    {
      question: 'Ücret ve ödeme seçenekleri nelerdir?',
      answer:
        'Eğitim ücretleri ilgili eğitim sayfasında güncel olarak yayınlanmaktadır. Ödemelerinizi kredi kartı veya havale seçenekleriyle gerçekleştirebilirsiniz.',
    },
    {
      question: 'Eğitim kayıtlarına ve dokümanlara daha sonra ulaşabilir miyim?',
      answer:
        'Evet. Eğitim kayıtlarına daha sonra da ulaşabilirsiniz. Eğitim kapsamında paylaşılan dokümanlar da dijital olarak tarafınıza iletilmektedir.',
    },
    {
      question: 'Eğitimler online mı, yüz yüze mi?',
      answer:
        'Eğitimlerimiz ağırlıklı olarak online gerçekleştirilmektedir. Bunun yanında 15 kişilik ekipler için kurumlara özel yüz yüze eğitimler de planlanabilmektedir.',
    },
  ];

  return (
    <>
      <main className="bg-white font-[300] text-primary">

        {/* HERO */}
        <PageHero
          title="BİZİMLE İLETİŞİME GEÇİN"
          subtitle="- ENNEAGRAM YOLCULUĞUNUZ İÇİN BURADAYIZ -"
          backgroundImage="/enneagram_banner.jpg"
          breadcrumbs={[
            { label: 'ANA SAYFA', href: '/' },
            { label: 'İLETİŞİM' },
          ]}
        />

        {/* NASIL YARDIMCI OLABİLİRİZ */}
        <section className="bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-20">

            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.3em] uppercase text-secondary">
                BİZE ULAŞIN
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl tracking-wide font-[300] text-primary leading-tight">
                Size nasıl yardımcı olabiliriz?
              </h2>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-primary/90 max-w-2xl">
                Eğitimlerimiz, danışmanlık süreçlerimiz ve kurumsal
                çalışmalarımız hakkında bilgi almak için bizimle iletişime
                geçebilirsiniz.
              </p>
            </div>

            {/* İLETİŞİM SEÇENEKLERİ */}
            <div className="grid md:grid-cols-3 border-t border-black/10">

              {contactOptions.map((option, index) => (
                <div
                  key={option.title}
                  className={`
                  group py-10 pr-8
                  ${index !== 0 ? 'md:pl-8' : ''}
                  ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-black/10' : ''}
                `}
                >
                  <div className="flex items-center justify-between">

                    <span className="text-xs tracking-[0.25em] text-secondary">
                      0{index + 1}
                    </span>

                    <FaArrowRight
                      className="w-4 h-4 text-primary/40 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-[400] tracking-wide text-primary">
                    {option.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-primary/65 max-w-sm">
                    {option.description}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* İLETİŞİM BİLGİLERİ + HARİTA */}
        <section className="bg-[#f8f7f5]">
          <div className="max-w-[1400px] mx-auto px-6 py-20">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-stretch">

              {/* BİLGİLER */}
              <div className="flex flex-col justify-center">

                <span className="text-xs tracking-[0.3em] uppercase text-secondary">
                  İLETİŞİM BİLGİLERİ
                </span>

                <h2 className="mt-4 text-3xl md:text-4xl font-[300] tracking-wide text-primary">
                  Bize ulaşın
                </h2>

                <p className="mt-5 text-sm md:text-base leading-relaxed text-primary/65 max-w-md">
                  Sorularınız, eğitim talepleriniz veya kurumunuza özel
                  çalışmalar hakkında bilgi almak için bize ulaşabilirsiniz.
                </p>

                <div className="mt-10 space-y-7">

                  {/* ADRES */}
                  <div className="flex items-start gap-5">

                    <div className="w-11 h-11 shrink-0 border border-black/15 flex items-center justify-center">
                      <FaMapMarkerAlt className="w-4 h-4 text-primary/70" />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary/50">
                        ADRES
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-primary max-w-xs">
                        Molla Gürani, Zaviye Sk. No:4 Kat:3
                        <br />
                        34096 Fatih / İstanbul
                      </p>

                      <Link
                        href="https://www.google.com/maps/dir//Enneagram+E%C4%9Fitim+ve+Dan%C4%B1%C5%9Fmanl%C4%B1k,+Molla+G%C3%BCrani,+Zaviye+Sk.+No:4+Kat:3,+34096+Fatih%2F%C4%B0stanbul/@38.6257885,34.9175808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14caa382ec143fb3:0xda016a5de5bf299d!2m2!1d28.9390718!2d41.0168464?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" inline-flex items-center gap-2 mt-3 text-xs tracking-[0.15em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                      >
                        Yol Tarifi Al
                        <FaArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>

                  {/* TELEFON */}
                  <div className="flex items-start gap-5">

                    <div className="w-11 h-11 shrink-0 border border-black/15 flex items-center justify-center">
                      <FaPhone className="w-4 h-4 text-primary/70" />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary/50">
                        TELEFON
                      </p>

                      <a
                        href="tel:+905557597345"
                        className="block mt-2 text-sm text-primary hover:underline underline-offset-4"
                      >
                        0555 759 73 45
                      </a>
                    </div>

                  </div>

                  {/* E-POSTA */}
                  <div className="flex items-start gap-5">

                    <div className="w-11 h-11 shrink-0 border border-black/15 flex items-center justify-center">
                      <FaEnvelope className="w-4 h-4 text-primary/70" />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary/50">
                        E-POSTA
                      </p>

                      <a
                        href="mailto:bilgi@enneagramegitim.com"
                        className="block mt-2 text-sm text-primary hover:underline underline-offset-4"
                      >
                        bilgi@enneagramegitim.com
                      </a>
                    </div>

                  </div>

                  {/* WHATSAPP */}
                  <div className="flex items-start gap-5">

                    <div className="w-11 h-11 shrink-0 border border-black/15 flex items-center justify-center">
                      <FaWhatsapp className="w-4 h-4 text-primary/70" />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary/50">
                        WHATSAPP
                      </p>

                      <a
                        href="https://wa.me/905557597345"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-sm text-primary hover:underline underline-offset-4"
                      >
                        WhatsApp üzerinden yazın
                      </a>
                    </div>

                  </div>

                </div>
              </div>

              {/* HARİTA */}
              <div className="relative min-h-[480px] border border-black/10 bg-white overflow-hidden">

                <iframe
                  title="Enneagram Eğitim ve Danışmanlık Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.384168512859!2d28.93649687615355!3d41.01685041889692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa382ec143fb3%3A0xda016a5de5bf299d!2zRW5uZWFncmFtIEXEn2l0aW0gdmUgRGFuxLHFn21hbmzEsWs!5e0!3m2!1str!2str!4v1770749479774!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

            </div>
          </div>
        </section>
        {/* SIKÇA SORULAN SORULAR */}
        <section className="bg-white border-t border-black/10">
          <div className="max-w-[1200px] mx-auto px-6 py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs tracking-[0.3em] uppercase text-secondary">
                MERAK ETTİKLERİNİZ
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-[300] tracking-wide text-primary">
                Sıkça Sorulan Sorular
              </h2>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary/60">
                Eğitimlerimiz ve başvuru süreçlerimiz hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz.
              </p>
            </div>

            <div className="border-t border-black/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question} className="border-b border-black/10">
                    <button type="button" className="w-full flex items-center justify-between gap-6 py-6 text-left group" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
                      <div className="flex items-center gap-5">
                        <span className="hidden sm:block text-xs tracking-[0.2em] text-primary/30">
                          0{index + 1}
                        </span>

                        <span className="text-base md:text-lg tracking-wide font-[300] text-primary group-hover:text-black transition-colors">
                          {faq.question}
                        </span>
                      </div>

                      <div className={`w-8 h-8 shrink-0 border border-black/15 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white border-primary' : 'text-primary/60 group-hover:border-primary group-hover:text-primary'}`}>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="pb-7 pl-0 sm:pl-10 pr-10">
                          <p className="text-sm md:text-base leading-relaxed text-primary/60 max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* İLETİŞİM FORMU */}
        <section className="bg-[#f8f7f5]">
          <div className="max-w-[1400px] mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-start">

              {/* SOL TARAF */}
              <div className="lg:sticky lg:top-24">
                <span className="text-xs tracking-[0.3em] uppercase text-secondary">
                  İLETİŞİME GEÇİN
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-[300] tracking-wide leading-[1.05] text-primary">
                  Enneagram yolculuğunuz için ilk adımı atın.
                </h2>

                <p className="mt-7 text-base leading-relaxed text-primary/65 max-w-lg">
                  Eğitimlerimiz, danışmanlık süreçlerimiz veya kurumunuza özel çalışmalar hakkında bilgi almak için formu doldurun. Ekibimiz sizinle en kısa sürede iletişime geçsin.
                </p>

                <div className="mt-10 pt-8 border-t border-black/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-black/15 flex items-center justify-center">
                      <FaWhatsapp className="w-4 h-4 text-primary/70" />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary/45">
                        HIZLI İLETİŞİM
                      </p>

                      <a href="https://wa.me/905557597345" target="_blank" rel="noopener noreferrer" className="block mt-1 text-sm text-primary hover:underline underline-offset-4">
                        WhatsApp üzerinden bize ulaşın
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-white p-7 md:p-10 lg:p-12">
                <form className="space-y-8" onSubmit={handleSubmit}>

                  {/* AD SOYAD */}
                  <label className="block">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary/80">
                      Ad Soyad
                    </span>

                    <input type="text" name="fullName" className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-primary outline-none py-3 text-base text-black placeholder:text-primary/30 transition-colors" placeholder="Ad Soyad" required />
                  </label>

                  {/* E-POSTA + TELEFON */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <label className="block">
                      <span className="text-xs tracking-[0.2em] uppercase text-primary/60">
                        E-posta
                      </span>

                      <input type="email" name="email" placeholder="ornek@mail.com" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Geçerli bir e-posta adresi giriniz" className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-primary outline-none py-3 text-base text-black placeholder:text-primary/30 transition-colors" required />
                    </label>

                    <label className="block">
                      <span className="text-xs tracking-[0.2em] uppercase text-primary/60">
                        Telefon
                      </span>

                      <input type="tel" name="phone" placeholder="05XXXXXXXXX" inputMode="numeric" maxLength={11} pattern="^05[0-9]{9}$" title="Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır" onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }} className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-primary outline-none py-3 text-base text-black placeholder:text-primary/30 transition-colors" required />
                    </label>
                  </div>

                  {/* MESAJ */}
                  <label className="block">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary/60">
                      Mesajınız
                    </span>

                    <textarea name="message" rows={5} placeholder="Size nasıl yardımcı olabiliriz?" minLength={10} title="Mesaj en az 10 karakter olmalıdır" className="mt-3 w-full bg-transparent border-b border-black/20 focus:border-primary outline-none py-3 text-base text-black placeholder:text-primary/30 resize-none transition-colors" required />
                  </label>

                  {/* GÖNDER */}
                  <div className="pt-2">
                    <button type="submit" disabled={isSending} className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-black hover:-translate-y-0.5 ${isSending ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}>
                      {isSending ? 'GÖNDERİLİYOR...' : 'MESAJ GÖNDER'}

                      {!isSending && (
                        <FaArrowRight className="w-3 h-3" />
                      )}
                    </button>
                  </div>

                  {/* DURUM MESAJI */}
                  {status && (
                    <div className={`pt-2 text-sm leading-relaxed ${status.type === 'ok' ? 'text-green-700' : 'text-red-700'}`}>
                      {status.msg}
                    </div>
                  )}

                </form>
              </div>
            </div>
          </div>
        </section>
        {/* SOSYAL MEDYA */}
        <section className="bg-white border-t border-black/10">
          <div className="max-w-[1400px] mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">

              {/* BAŞLIK */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-secondary">
                  BİZİ TAKİP EDİN
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-[300] tracking-wide leading-tight text-primary">
                  Enneagram dünyasından
                  <br className="hidden md:block" />
                  haberdar olun.
                </h2>

                <p className="mt-6 text-sm md:text-base leading-relaxed text-primary max-w-xl">
                  Eğitimlerimizden, etkinliklerimizden ve Enneagram üzerine
                  hazırladığımız güncel içeriklerden haberdar olmak için
                  sosyal medya hesaplarımızı takip edin.
                </p>
              </div>

              {/* SOSYAL LİNKLER */}
              <div className="flex flex-wrap gap-3 lg:justify-end">

                <Link
                  href="https://www.instagram.com/enneagramegitim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-black/15 px-5 py-3 text-xs tracking-[0.15em] uppercase text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </Link>

                <Link
                  href="https://www.youtube.com/@tv.enneagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-black/15 px-5 py-3 text-xs tracking-[0.15em] uppercase text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <FaYoutube className="w-4 h-4" />
                  YouTube
                </Link>

                <Link
                  href="https://tr.linkedin.com/company/enneagramegitim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-black/15 px-5 py-3 text-xs tracking-[0.15em] uppercase text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </Link>

              </div>
            </div>

            {/* ALT AYIRICI */}
            <div className="mt-20 pt-8 border-t border-black/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <p className="text-xs tracking-[0.15em] uppercase text-primary/40">
                  Enneagram Eğitim ve Danışmanlık
                </p>

                <div className="flex items-center gap-6">

                  <a
                    href="tel:+905557597345"
                    className="text-xs tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors"
                  >
                    0555 759 73 45
                  </a>

                  <span className="w-px h-4 bg-black/15" />

                  <a
                    href="mailto:bilgi@enneagramegitim.com"
                    className="text-xs tracking-[0.15em] text-primary/60 hover:text-primary transition-colors"
                  >
                    bilgi@enneagramegitim.com
                  </a>

                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
