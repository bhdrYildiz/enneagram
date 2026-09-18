"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState<"cookie" | "kvkk" | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setShow(true);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem("cookieConsent", "all");
        setShow(false);
    };

    const acceptNecessary = () => {
        localStorage.setItem("cookieConsent", "necessary");
        setShow(false);
    };

    if (!show) return null;

    return (
        <>
            {/* COOKIE BANNER */}
            {!modal && (
                <div className="fixed bottom-0 left-0 right-0 z-[99999] p-4 md:p-6">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-[0_12px_50px_rgba(0,0,0,0.30)]">
                        <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
                            <div className="max-w-3xl">
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                                        <Cookie
                                            className="h-5 w-5 text-secondary"
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <h2 className="text-lg font-semibold text-white">
                                        Çerez Tercihleriniz
                                    </h2>
                                </div>

                                <p className="text-sm leading-6 text-white/70">
                                    Size daha iyi bir deneyim sunabilmek, web sitemizin
                                    performansını analiz etmek ve hizmetlerimizi geliştirmek
                                    amacıyla çerezlerden yararlanıyoruz. Zorunlu çerezler web
                                    sitesinin çalışması için gereklidir. Diğer çerezler ise
                                    yalnızca tercihiniz doğrultusunda kullanılacaktır.
                                </p>

                                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs">

                                    <button
                                        type="button"
                                        onClick={() => setModal("cookie")}
                                        className="font-medium text-secondary transition-colors hover:text-hover"
                                    >
                                        Çerez Politikası
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setModal("kvkk")}
                                        className="font-medium text-white/60 transition-colors hover:text-white"
                                    >
                                        Aydınlatma Metni
                                    </button>

                                </div>
                            </div>

                            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                                <button
                                    onClick={acceptNecessary}
                                    className="whitespace-nowrap cursor-pointer rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                                >
                                    Sadece Zorunlu
                                </button>

                                <button
                                    onClick={acceptAll}
                                    className="whitespace-nowrap cursor-pointer rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-hover hover:shadow-lg"
                                >
                                    Tümünü Kabul Et
                                </button>

                            </div>
                        </div>
                        <div className="h-1 w-full bg-secondary" />
                    </div>
                </div>
            )}

            {mounted &&
                modal &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                        onClick={() => setModal(null)}
                        style={{
                            position: "fixed",
                            inset: 0,
                        }}
                    >
                        <div
                            className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                            style={{
                                height: "85vh",
                                maxHeight: "calc(100vh - 32px)",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* HEADER */}
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-6 py-6">
                                    <h2 className="pr-6 text-xl font-bold text-primary">
                                        {modal === "cookie"
                                            ? "Çerez Politikası"
                                            : "Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni"}
                                    </h2>

                                    <button
                                        type="button"
                                        onClick={() => setModal(null)}
                                        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                                        aria-label="Kapat"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="mx-6 h-px bg-gray-200" />
                            </div>

                            {/* SADECE BU ALAN SCROLL OLACAK */}
                            <div
                                className="px-6 py-6 text-sm leading-7 text-gray-700 md:px-8"
                                style={{
                                    flex: "1 1 auto",
                                    minHeight: 0,
                                    overflowY: "auto",
                                }}
                            >
                                {modal === "cookie" ? (
                                    <CookiePolicy />
                                ) : (
                                    <KvkkPolicy />
                                )}
                            </div>

                            {/* FOOTER */}
                            <div
                                className="bg-white"
                                style={{
                                    flex: "0 0 auto",
                                }}
                            >
                                <div className="mx-6 h-px bg-gray-200" />

                                <div className="flex justify-end px-6 py-4">
                                    <button
                                        type="button"
                                        onClick={() => setModal(null)}
                                        className="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                                    >
                                        Kapat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default CookieConsent;

const CookiePolicy = () => {
    return (
        <div className="space-y-5">

            <p>
                Enneagram Eğitim & Danışmanlık olarak internet sitemizi ziyaret
                eden kullanıcıların gizliliğine önem veriyoruz. Bu Çerez Politikası,
                internet sitemizde kullanılan çerezler ve benzeri teknolojiler
                hakkında bilgi vermek amacıyla hazırlanmıştır.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                1. Çerez Nedir?
            </h3>

            <p>
                Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız
                aracılığıyla cihazınıza kaydedilebilen küçük veri dosyalarıdır.
                İnternet sitesinin doğru şekilde çalışmasını sağlamak, tercihlerinizi
                hatırlamak ve kullanıcı deneyimini geliştirmek amacıyla kullanılabilir.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                2. Hangi Çerezleri Kullanıyoruz?
            </h3>

            <h4 className="font-semibold text-gray-900">
                Zorunlu Çerezler
            </h4>

            <p>
                Web sitesinin temel işlevlerinin çalışması için gerekli olan
                çerezlerdir. Güvenlik, oturum yönetimi ve çerez tercihlerinizin
                hatırlanması amacıyla kullanılabilir.
            </p>

            <h4 className="font-semibold text-gray-900">
                İşlevsel Çerezler
            </h4>

            <p>
                Tercihlerinizi hatırlamak ve daha kişiselleştirilmiş bir kullanım
                deneyimi sağlamak amacıyla kullanılabilir.
            </p>

            <h4 className="font-semibold text-gray-900">
                Performans ve Analitik Çerezleri
            </h4>

            <p>
                İnternet sitesinin kullanımını analiz etmek ve hizmetlerimizi
                geliştirmek amacıyla kullanılabilir. Gerekli olduğu durumlarda
                yalnızca tercihiniz doğrultusunda etkinleştirilir.
            </p>

            <h4 className="font-semibold text-gray-900">
                Reklam ve Pazarlama Çerezleri
            </h4>

            <p>
                İlgi alanlarınıza uygun içerik ve hizmetlerin sunulabilmesi amacıyla
                kullanılabilir ve gerekli olduğu durumlarda yalnızca açık tercihiniz
                doğrultusunda etkinleştirilir.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                3. Çerez Tercihleriniz
            </h3>

            <p>
                Çerez tercih ekranı üzerinden yalnızca zorunlu çerezlerle devam
                edebilir veya izin verdiğiniz diğer çerezlerin kullanılmasını
                kabul edebilirsiniz.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                4. Kişisel Verilerin Korunması
            </h3>

            <p>
                Çerezler aracılığıyla kişisel veri işlenmesi halinde söz konusu
                veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili
                mevzuata uygun olarak işlenmektedir.
            </p>

            <p className="pt-3 text-xs text-gray-400">
                Son Güncelleme: Ağustos 2026
            </p>

        </div>
    );
};

const KvkkPolicy = () => {
    return (
        <div className="space-y-5">

            <p>
                Enneagram Eğitim & Danışmanlık olarak kişisel verilerinizin
                güvenliğine ve gizliliğine önem veriyoruz.
            </p>

            <p>
                İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması
                Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin
                bilgilendirme amacıyla hazırlanmıştır.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                1. Veri Sorumlusu
            </h3>

            <p>
                Kişisel verileriniz, veri sorumlusu sıfatıyla Enneagram Eğitim &
                Danışmanlık tarafından işlenebilmektedir.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                2. İşlenebilecek Kişisel Veriler
            </h3>

            <ul className="list-disc space-y-2 pl-5">
                <li>Ad ve soyad</li>
                <li>Telefon numarası</li>
                <li>E-posta adresi</li>
                <li>İletişim formu bilgileri</li>
                <li>Talep, öneri ve mesaj içerikleri</li>
                <li>IP ve bağlantı bilgileri</li>
                <li>Çerez tercihleri</li>
            </ul>

            <h3 className="text-lg font-semibold text-primary">
                3. Kişisel Verilerin İşlenme Amaçları
            </h3>

            <ul className="list-disc space-y-2 pl-5">
                <li>Talep ve soruların yanıtlanması</li>
                <li>Ürün ve hizmetler hakkında bilgi verilmesi</li>
                <li>Eğitim ve danışmanlık hizmetlerinin yürütülmesi</li>
                <li>Müşteri ilişkilerinin yönetilmesi</li>
                <li>İnternet sitesinin güvenliğinin sağlanması</li>
                <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
            </ul>

            <h3 className="text-lg font-semibold text-primary">
                4. Kişisel Verilerin Toplanması
            </h3>

            <p>
                Kişisel verileriniz iletişim formları, elektronik posta, telefon,
                çerezler ve internet sitesi üzerindeki elektronik işlemler
                aracılığıyla toplanabilir.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                5. Kişisel Verilerin Aktarılması
            </h3>

            <p>
                Kişisel verileriniz gerekli olduğu durumlarda hizmet sağlayıcılar,
                teknoloji altyapı sağlayıcıları ve kanunen yetkili kamu kurum ve
                kuruluşlarıyla paylaşılabilir.
            </p>

            <h3 className="text-lg font-semibold text-primary">
                6. KVKK Kapsamındaki Haklarınız
            </h3>

            <ul className="list-disc space-y-2 pl-5">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse bilgi talep etme</li>
                <li>Yanlış veya eksik verilerin düzeltilmesini isteme</li>
                <li>Şartların oluşması halinde silinmesini isteme</li>
                <li>Verilerin aktarıldığı üçüncü kişileri öğrenme</li>
                <li>Kanuna aykırı işlem nedeniyle zararın giderilmesini talep etme</li>
            </ul>

            <h3 className="text-lg font-semibold text-primary">
                7. İletişim
            </h3>

            <div className="rounded-xl bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">
                    Enneagram Eğitim & Danışmanlık
                </p>

                <p>E-posta: bilgi@enneagramegitim.com</p>
                <p>Adres: Molla Gürani, Zaviye Sk. No:4 Kat:3, 34096 Fatih/İstanbul</p>
            </div>

            <p className="pt-3 text-xs text-gray-400">
                Son Güncelleme: Ağustos 2026
            </p>

        </div>
    );
};