'use client';

import {
  MapPin,
  Phone,
  Navigation,
  ChevronDown
} from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Image from 'next/image';

export default function ContactClient() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    setStatus(null);

    const form = new FormData(formEl);

    const name = String(form.get("fullName") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    const phoneRegex = /^05[0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      setStatus({ type: "error", msg: "Lütfen ad soyad giriniz." });
      return;
    }

    if (!phoneRegex.test(phone)) {
      setStatus({
        type: "error",
        msg: "Lütfen geçerli bir telefon numarası giriniz (05XXXXXXXXX).",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        msg: "Lütfen geçerli bir e-posta adresi giriniz.",
      });
      return;
    }

    if (!message) {
      setStatus({ type: "error", msg: "Lütfen mesaj alanını doldurunuz." });
      return;
    }

    setIsSending(true);

    const payload = {
      source: "contact",
      name: String(form.get("fullName") || "").trim(),
      email: String(form.get("email") || "").trim(),
      subject: String(form.get("subject") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus({ type: "error", msg: data.error || "Gönderim başarısız." });
        return;
      }

      setStatus({ type: "ok", msg: "Mesajınız alındı. En kısa sürede dönüş yapacağız." });
      formEl.reset()
    } catch (err) {
      console.error("FETCH_ERROR:", err);
      setStatus({ type: "error", msg: "Bağlantı hatası. Lütfen tekrar deneyin." });
    } finally {
      setIsSending(false);
    }
  }

  const faqs = [
    {
      question: 'Eğitimlere nasıl katılabilirim?',
      answer:
        'Sitemizden katılmak istediğiniz eğitimin ödemesini yaptıktan sonra ilgili birimimiz size ulaşıp eğitime katılma noktasında süreç boyunca size destek verecekler.'
    },
    {
      question: 'Gün ve saatleri nasıl öğrenebilirim?',
      answer:
        'Katılmak istediğiniz eğitim için ödeme yapmadan önce eğitimin tarihini seçtiğinizde saat bilgileri görünmektedir.'
    },
    {
      question: 'Sınav var mı? Sertifika veriliyor mu?',
      answer:
        'Eğitimlerimizden sonra sınav yapılmamaktadır. Eğitimlere katılmanız yeterlidir. Eğitimlerimizin ardından eposta adresinize isminize özel katılım sertifikası gönderilmektedir. Sertifikalarımızın e- devlette görünmesi için çalışmalarımız devam etmekte olup şu an için görünmemektedir.'
    },
    {
      question: 'Ücret ve ödeme bilgilerini nedir?',
      answer:
        'Bütün eğitimlerimizin ücretleri kendi sayfasında yayınlanmaktadır. Ödemelerinizi kredi kartı ile veya havale ile kolaylıkla yapabilirsiniz.'
    },
    {
      question: 'Kayıt ve döküman veriliyor mu?',
      answer:
        'Evet, eğitim kayıtlarına daha sonra da ulaşabiliyorsunuz. Eğitimle ilgili dökümanlar da yine aynı şekilde pdf olarak tarafınıza iletilmektedir.'
    },
    {
      question: 'Eğitimler online mı, yüzyüze mi?',
      answer:
        'Eğitimlerimiz online olarak yapılmaktadır. Bunun yanında 15 kişilik ekiplere yüzyüze eğitimler planlanabilmektedir. Bunun için iletişim kısmından bize ulaşabilirsiniz.'
    },
    {
      question: 'Eğitim sonrasında ne tür kaynaklara ulaşabilirim?',
      answer:
        'Uzun süredir Enneagram konusunda uzmanlaşan ekibimiz instagram, linkedin, youtube üzerinden bilgilendirmeler ve yayınlar yapmaktadır. Ennelog uygulamamızdaki mizaç merkezli içerikler uzun süre yararlanabileceğiniz niteliktedir.'
    }
  ];

  return (
    <>
      <main className="bg-[#ffffff] font-[300] text-primary">
        <PageHero
          title="İLETİŞİM"
          subtitle="- BİZİMLE İLETİŞİME GEÇİN -"
          backgroundImage="/enneagram_banner.jpg"
          breadcrumbs={[
            { label: 'ANA SAYFA', href: '/' },
            { label: 'İLETİŞİM' },
          ]}
        />

        <section className="bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="w-full h-[620px] border border-black/10">
                <iframe
                  title="Enneagram Eğitim ve Danışmanlık Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.384168512859!2d28.93649687615355!3d41.01685041889692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa382ec143fb3%3A0xda016a5de5bf299d!2zRW5uZWFncmFtIEXEn2l0aW0gdmUgRGFuxLHFn21hbmzEsWs!5e0!3m2!1str!2str!4v1770749479774!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-3xl tracking-wide leading-relaxed text-primary font-semibold">
                    ENNEAGRAM İLE İLGİLİ BİLGİ Mİ ALMAK İSTİYORSUNUZ ?
                  </h2>
                  <p className="text-base leading-relaxed tracking-wide text-primary">
                    Enneagram eğitimlerimiz ile ilgili sorularınız için iletişime geçebilirsiniz!
                  </p>
                </div>

                <div className="space-y-6 text-primary">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors duration-200 hover:border-hover hover:text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base tracking-wide uppercase text-primary mb-1">Konum</p>
                      <p className="text-sm text-primary">
                        Molla Gürani, Zaviye Sk. No:4 Kat:3, 34096 Fatih/İstanbul
                      </p>
                      <Link
                        href="https://www.google.com/maps/dir//Enneagram+E%C4%9Fitim+ve+Dan%C4%B1%C5%9Fmanl%C4%B1k,+Molla+G%C3%BCrani,+Zaviye+Sk.+No:4+Kat:3,+34096+Fatih%2F%C4%B0stanbul/@38.6257885,34.9175808,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14caa382ec143fb3:0xda016a5de5bf299d!2m2!1d28.9390718!2d41.0168464?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#ab9a8b] font-bold hover:underline inline-block mt-2 hover:text-black transition-colors"
                      >
                        Yol Tarifi Al
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors duration-200 hover:border-hover hover:text-secondary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base tracking-wide uppercase text-primary mb-1">İletişim</p>
                      <p className="text-sm text-primary">0543 540 64 43</p>
                      <p className="text-sm text-primary">bilgi@enneagramegitim.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors duration-200 hover:border-hover hover:text-secondary">
                      <Navigation className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base tracking-wide uppercase text-primary mb-1">Sosyal</p>
                      <p className="text-sm text-primary">
                        Sosyal medyada bizi takip edin.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Link
                          href="https://www.facebook.com/enneagramegitim"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors hover:border-hover hover:text-secondary"
                          aria-label="Facebook"
                        >
                          <FaFacebook className="h-4 w-4" />
                        </Link>

                        <Link
                          href="https://www.instagram.com/enneagramegitim"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors hover:border-hover hover:text-secondary"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="h-4 w-4" />
                        </Link>
                        <Link
                          href="https://www.x.com/enneagramegitim"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors hover:border-hover hover:text-secondary"
                          aria-label="Instagram"
                        >
                          <FaTwitter className="h-4 w-4" />
                        </Link>

                        <Link
                          href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors hover:border-hover hover:text-secondary"
                          aria-label="TripAdvisor"
                        >
                          <FaYoutube className="h-4 w-4" />
                        </Link>
                        <Link
                          href="https://wa.me/905XXXXXXXXX"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-primary transition-colors hover:border-hover hover:text-secondary"
                          aria-label="WhatsApp"
                        >
                          <FaWhatsapp className="h-4 w-4" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-black/10">
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="text-center text-primary mb-8">
              <p className="text-base tracking-widest uppercase text-primary mb-12">
                Enneagram ile ilgili sıkça sorulan sorular
              </p>
              <div className="h-px w-full bg-black/10" />
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="border-b border-black/10"
                  >
                    <button
                      className="w-full flex items-center justify-between py-6 text-left text-primary hover:text-black transition-transform duration-600"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg md:text-xl tracking-wide text-primary font-[300]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-600 ${isOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-sm leading-relaxed font-[300] tracking-wide text-primary">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl tracking-wide text-primary font-[300]">
                    Bir Sorunuz mu Var?
                  </h2>
                  <p className="text-base text-primary tracking-wide">
                    Formu doldurun, en kısa sürede size dönüş yapalım.
                  </p>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="text-sm tracking-wide text-primary">Adınız</span>
                    <input
                      type="text"
                      name="fullName"
                      className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-secondary/50"
                      placeholder="Ad Soyad"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm tracking-wide text-black">E-posta</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-posta (ornek@mail.com)"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="Geçerli bir e-posta adresi giriniz"
                      className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-secondary/50"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm tracking-wide text-black">Telefon</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefon (05XXXXXXXXX)"
                      inputMode="numeric"
                      maxLength={11}
                      pattern="^05[0-9]{9}$"
                      title="Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                      }}
                      className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-secondary/50"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm tracking-wide text-black">Konu</span>
                    <input
                      type="text"
                      name="subject"
                      className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-secondary/50"
                      placeholder="Rezervasyon / Bilgi"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm tracking-wide text-black">Mesajınız</span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Mesajiniz (En az 10 karakter)"
                      minLength={10}
                      title="Mesaj en az 10 karakter olmalıdır"
                      className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-secondary/50 resize-none"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`inline-flex items-center gap-2 border border-black/40 px-8 py-3 text-sm tracking-widest text-primary transition-all duration-300 hover:border-black hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-lg
                                        ${isSending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {isSending ? "GÖNDERİLİYOR..." : "GÖNDER"}
                  </button>
                  {status && (
                    <div
                      className={`text-sm tracking-wide ${status.type === "ok" ? "text-green-700" : "text-red-700"
                        }`}
                    >
                      {status.msg}
                    </div>
                  )}
                </form>
              </div>

              <div className="relative w-full h-[620px] mt-32 overflow-hidden border border-black/10 bg-white">
                <Image
                  src="/ozgurluk.jpeg"
                  alt="İletişim"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-20">
            <div className="space-y-6 text-primary text-center">
              <h2 className="text-4xl md:text-6xl tracking-wide">
                Sosyal Medya&apos;da Takip Edin
              </h2>
              <p className="text-base text-primary/80">
                Güncel görseller ve son haberlerimiz sosyal medya hesaplarımızda:
              </p>
              <div className="flex items-center justify-center gap-6 text-sm tracking-widest uppercase">
                <Link
                  href="https://www.instagram.com/enneagramegitim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/enneagramegitim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Facebook
                </Link>
              </div>
            </div>

            <div className="mt-12 bg-white p-10 w-full">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  '/egitimler/afis1.jpg',
                  '/egitimler/afis2.jpg',
                  '/egitimler/afis3.jpg',
                  '/egitimler/afissonSite.png'
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-square hover:scale-105 transition-all duration-300 overflow-hidden bg-white"
                  >
                    <Image
                      src={src}
                      alt={`Instagram ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  href="https://www.instagram.com/enneagramegitim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-black/40 px-8 py-3 text-sm tracking-widest text-primary transition-all duration-300 hover:border-black hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
                >
                  INSTAGRAM&apos;DA TAKİP ET
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}