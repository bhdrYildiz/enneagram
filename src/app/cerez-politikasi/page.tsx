
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Çerez Politikası | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram Eğitim ve Danışmanlık Sağlık Limited Şirketi internet sitesi çerez politikası.",
    alternates: {
        canonical:
            "https://www.enneagramegitim.com/cerez-politikasi",
    },
};

const company =
    "Enneagram Eğitim ve Danışmanlık Sağlık Limited Şirketi";

function Section({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="border-b border-slate-200 py-8 last:border-0">
            <div className="mb-4 flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sm font-semibold text-[#0794c7]">
                    {number}
                </span>

                <h2 className="pt-1 text-xl font-semibold tracking-tight text-[#101827]">
                    {title}
                </h2>
            </div>

            <div className="space-y-4 text-[15px] leading-8 text-slate-600 sm:pl-[52px]">
                {children}
            </div>
        </section>
    );
}

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">

            {/* HEADER */}
            <header className="relative overflow-hidden bg-[#101827]">

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-40 h-[440px] w-[440px] rounded-full border border-white/10"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-24 h-[320px] w-[320px] rounded-full border border-[#0794c7]/20"
                />

                <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">

                    <nav
                        aria-label="Sayfa yolu"
                        className="mb-8 flex items-center gap-2 text-sm text-white/50"
                    >
                        <Link
                            href="/"
                            className="transition-colors hover:text-white"
                        >
                            Ana Sayfa
                        </Link>

                        <span>/</span>

                        <span className="text-white/80">
                            Çerez Politikası
                        </span>
                    </nav>

                    <div className="mb-5 inline-flex items-center rounded-full border border-[#0794c7]/30 bg-[#0794c7]/10 px-4 py-2 text-xs font-medium tracking-wider text-sky-300">
                        GİZLİLİK VE VERİ GÜVENLİĞİ
                    </div>

                    <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                        Çerez Politikası
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                        İnternet sitemizde kullanılan çerezler,
                        analitik teknolojiler ve tercihlerinizi
                        nasıl yönetebileceğiniz hakkında
                        bilgilendirme.
                    </p>

                </div>
            </header>

            {/* CONTENT */}
            <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">

                <article className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm sm:px-12 sm:py-8">

                    {/* INTRO */}
                    <div className="border-b border-slate-200 py-7">
                        <p className="text-[15px] leading-8 text-slate-600">
                            {company} olarak internet sitemizi
                            ziyaret eden kişilerin gizliliğine
                            önem veriyoruz.
                        </p>

                        <p className="mt-4 text-[15px] leading-8 text-slate-600">
                            Bu politika, www.enneagramegitim.com
                            internet sitesinde kullanılan çerezler
                            ve benzeri teknolojiler hakkında
                            bilgi vermek amacıyla hazırlanmıştır.
                        </p>
                    </div>

                    {/* 01 */}
                    <Section number="01" title="Çerez Nedir?">

                        <p>
                            Çerezler, ziyaret ettiğiniz internet
                            siteleri tarafından tarayıcınız
                            aracılığıyla cihazınıza kaydedilebilen
                            küçük veri dosyalarıdır.
                        </p>

                        <p>
                            Çerezler, internet sitesinin
                            çalışmasını sağlamak, kullanıcı
                            tercihlerini hatırlamak ve ziyaretçi
                            etkileşimlerini analiz etmek gibi
                            amaçlarla kullanılabilir.
                        </p>

                    </Section>

                    {/* 02 */}
                    <Section
                        number="02"
                        title="Hangi Teknolojileri Kullanıyoruz?"
                    >

                        <p>
                            İnternet sitemizde aşağıdaki
                            teknolojilerden yararlanılmaktadır:
                        </p>

                        <div className="space-y-4">

                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

                                <h3 className="font-semibold text-[#101827]">
                                    Google Analytics
                                </h3>

                                <p className="mt-2">
                                    İnternet sitemizin kullanımını
                                    analiz etmek, ziyaretçi
                                    etkileşimlerini ölçmek ve
                                    kullanıcı deneyimini geliştirmek
                                    amacıyla kullanılmaktadır.
                                </p>

                                <p className="mt-2">
                                    Yapılandırmaya bağlı olarak
                                    ziyaret ve etkileşim verileri
                                    ile çevrim içi tanımlayıcılar
                                    işlenebilir.
                                </p>

                            </div>

                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

                                <h3 className="font-semibold text-[#101827]">
                                    Google Tag Manager
                                </h3>

                                <p className="mt-2">
                                    İnternet sitemizdeki ölçüm
                                    etiketlerinin yönetilmesi
                                    amacıyla kullanılmaktadır.
                                </p>

                                <p className="mt-2">
                                    Google Tag Manager üzerinden
                                    çalıştırılan etiketler,
                                    kendi işlevlerine bağlı
                                    olarak çerez veya benzeri
                                    teknolojiler kullanabilir.
                                </p>

                            </div>

                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

                                <h3 className="font-semibold text-[#101827]">
                                    Çerez Tercihlerinin Saklanması
                                </h3>

                                <p className="mt-2">
                                    Çerez tercihlerinizi hatırlamak
                                    amacıyla tarayıcınızın
                                    yerel depolama özelliğinden
                                    (localStorage) yararlanıyoruz.
                                </p>

                                <p className="mt-2">
                                    Bu teknoloji, tercihlerinizi
                                    hatırlayarak sonraki
                                    ziyaretlerinizde yeniden
                                    seçim yapmanızı önlemeye
                                    yardımcı olur.
                                </p>

                            </div>

                        </div>

                    </Section>

                    {/* 03 */}
                    <Section
                        number="03"
                        title="Çerezlerin Kullanım Amaçları"
                    >

                        <p>
                            İnternet sitemizde kullanılan
                            teknolojiler aşağıdaki amaçlara
                            hizmet etmektedir:
                        </p>

                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                Çerez tercihlerinizi hatırlamak.
                            </li>

                            <li>
                                İnternet sitesi ziyaretlerini
                                ve etkileşimlerini analiz etmek.
                            </li>

                            <li>
                                Hangi sayfaların ziyaret
                                edildiğini anlamak.
                            </li>

                            <li>
                                İnternet sitemizin kullanımını
                                değerlendirmek ve geliştirmek.
                            </li>
                        </ul>

                    </Section>

                    {/* 04 */}
                    <Section
                        number="04"
                        title="Kullanılan Çerez Kategorileri"
                    >

                        <div className="space-y-5">

                            <div>
                                <h3 className="font-semibold text-[#101827]">
                                    Gerekli Teknolojiler
                                </h3>

                                <p className="mt-2">
                                    Kullanıcıların çerez
                                    tercihlerini saklamak
                                    amacıyla kullanılan
                                    yerel depolama bu
                                    kapsamdadır.
                                </p>

                                <p className="mt-2">
                                    Çerez tercihlerinizin
                                    hatırlanması için kullanılan
                                    bu teknoloji, analitik
                                    çerezlerden farklıdır.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-[#101827]">
                                    Analitik Çerezler
                                </h3>

                                <p className="mt-2">
                                    Google Analytics aracılığıyla
                                    ziyaretçi etkileşimlerinin
                                    analiz edilmesi amacıyla
                                    kullanılabilen çerezlerdir.
                                </p>

                                <p className="mt-2">
                                    Bu çerezlerin açık rızaya
                                    dayalı olarak kullanıldığı
                                    durumlarda, yalnızca
                                    onay vermeniz hâlinde
                                    etkinleştirilmeleri gerekir.
                                </p>
                            </div>

                        </div>

                    </Section>

                    {/* 05 */}
                    <Section
                        number="05"
                        title="Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?"
                    >

                        <p>
                            İnternet sitemizi ziyaret ettiğinizde
                            sunulan çerez bilgilendirme alanı
                            üzerinden tercihlerinizi
                            belirleyebilirsiniz.
                        </p>

                        <p>
                            Analitik çerezleri kabul etmek
                            zorunda değilsiniz. Yalnızca
                            gerekli teknolojilerin
                            kullanılmasını tercih edebilirsiniz.
                        </p>

                        <p>
                            Tarayıcınızın ayarlarından da
                            çerezleri görüntüleyebilir,
                            silebilir veya engelleyebilirsiniz.
                            Bununla birlikte tarayıcı
                            ayarları, yerel depolama
                            tercihlerinizi her zaman
                            aynı şekilde yönetmeyebilir.
                        </p>

                        <p>
                            Daha önce verdiğiniz analitik
                            çerez iznini geri çekebilmeniz
                            için sitemizde çerez tercihlerini
                            yeniden açma imkânı sunulmalıdır.
                        </p>

                    </Section>

                    {/* 06 */}
                    <Section
                        number="06"
                        title="Üçüncü Taraf Hizmetler ve Veri Aktarımı"
                    >

                        <p>
                            Google Analytics ve Google Tag
                            Manager hizmetleri Google
                            tarafından sağlanmaktadır.
                        </p>

                        <p>
                            Kullanılan hizmetlerin
                            yapılandırılmasına bağlı olarak
                            bazı ziyaret ve etkileşim
                            verileri Google tarafından
                            işlenebilir ve yurt dışına
                            aktarım söz konusu olabilir.
                        </p>

                        <p>
                            Google hizmetlerine ilişkin
                            ayrıntılı bilgiye Google&apos;ın
                            gizlilik açıklamalarından
                            ulaşabilirsiniz.
                        </p>

                        <a
                            href="https://policies.google.com/privacy?hl=tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-medium text-[#0794c7] hover:underline"
                        >
                            Google Gizlilik Politikası ↗
                        </a>

                    </Section>

                    {/* 07 */}
                    <Section
                        number="07"
                        title="Kişisel Verileriniz ve Haklarınız"
                    >

                        <p>
                            Çerezler ve benzeri teknolojiler
                            aracılığıyla kişisel veri
                            işlenmesi durumunda, 6698 sayılı
                            Kişisel Verilerin Korunması
                            Kanunu kapsamında haklara
                            sahipsiniz.
                        </p>

                        <p>
                            Kişisel verilerinizin işlenmesine
                            ve haklarınıza ilişkin ayrıntılı
                            bilgiye KVKK Aydınlatma
                            Metnimizden ulaşabilirsiniz.
                        </p>

                        <Link
                            href="/kvkk"
                            className="inline-block font-medium text-[#0794c7] hover:underline"
                        >
                            KVKK Aydınlatma Metni →
                        </Link>

                    </Section>

                    {/* 08 */}
                    <Section
                        number="08"
                        title="İletişim"
                    >

                        <p>
                            Çerez politikamız veya kişisel
                            verilerinizin işlenmesiyle ilgili
                            sorularınız için bizimle
                            iletişime geçebilirsiniz.
                        </p>

                        <p className="font-semibold text-[#101827]">
                            {company}
                        </p>

                        <p>
                            Molla Gürani Mah. Zaviye Sok.
                            No:4 Kat:3, Fatih / İstanbul
                        </p>

                        <a
                            href="mailto:bilgi@enneagramegitim.com"
                            className="block text-[#0794c7] hover:underline"
                        >
                            bilgi@enneagramegitim.com
                        </a>

                        <p>
                            Telefon: +90 555 759 73 45
                        </p>

                    </Section>

                </article>

                {/* BOTTOM NAVIGATION */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0794c7]"
                    >
                        ← Ana Sayfaya Dön
                    </Link>

                    <Link
                        href="/kvkk"
                        className="text-sm font-medium text-[#0794c7] hover:underline"
                    >
                        KVKK Aydınlatma Metni →
                    </Link>

                </div>

            </div>

        </main>
    );
}