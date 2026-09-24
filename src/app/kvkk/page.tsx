
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni | Enneagram Eğitim & Danışmanlık",
    description:
        "Enneagram Eğitim ve Danışmanlık Sağlık Limited Şirketi kişisel verilerin korunması aydınlatma metni.",
    alternates: {
        canonical: "https://www.enneagramegitim.com/kvkk",
    },
};

const company =
    "Enneagram Eğitim ve Danışmanlık Sağlık Limited Şirketi";

// Yayımlamadan önce gerçek bilgilerle doldurun.
const kvkkEmail = "KVKK_EPOSTA_ADRESI";
const companyAddress = "SIRKET_TEBLIGAT_ADRESI";

const rights = [
    "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
    "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,",
    "Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
    "Kişisel verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,",
    "Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme,",
    "Kanunda öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,",
    "Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
    "Münhasıran otomatik sistemler vasıtasıyla yapılan analizler sonucunda aleyhinize bir sonuç ortaya çıkmasına itiraz etme,",
    "Kişisel verilerinizin kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
];

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

            <div className="space-y-4 pl-0 text-[15px] leading-8 text-slate-600 sm:pl-[52px]">
                {children}
            </div>
        </section>
    );
}

export default function KvkkPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            {/* PAGE HEADER */}
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
                        <span className="text-white/80">KVKK</span>
                    </nav>

                    <div className="mb-5 inline-flex items-center rounded-full border border-[#0794c7]/30 bg-[#0794c7]/10 px-4 py-2 text-xs font-medium tracking-wider text-sky-300">
                        KİŞİSEL VERİLERİN KORUNMASI
                    </div>

                    <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                        KVKK Aydınlatma Metni
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                        Kişisel verilerinizin işlenmesine ilişkin bilgilendirme
                        ve 6698 sayılı Kanun kapsamındaki haklarınız.
                    </p>
                </div>
            </header>

            {/* CONTENT */}
            <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
                <article className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm sm:px-12 sm:py-8">
                    <div className="border-b border-slate-200 py-7">
                        <p className="text-[15px] leading-8 text-slate-600">
                            {company} olarak kişisel verilerinizin
                            korunmasına önem veriyoruz. Bu aydınlatma metni,
                            internet sitemizdeki iletişim formu ve analitik
                            teknolojiler kapsamında gerçekleştirilen kişisel
                            veri işleme faaliyetleri hakkında bilgi vermek
                            amacıyla hazırlanmıştır.
                        </p>
                    </div>

                    <Section number="01" title="Veri Sorumlusu">
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu
                            kapsamında veri sorumlusu:
                        </p>

                        <p className="font-medium text-[#101827]">
                            {company}
                        </p>

                        <p>
                            İnternet sitesi:{" "}
                            <a
                                href="https://www.enneagramegitim.com"
                                className="text-[#0794c7] hover:underline"
                            >
                                www.enneagramegitim.com
                            </a>
                        </p>
                    </Section>

                    <Section number="02" title="İşlenen Kişisel Veriler">
                        <p>
                            İnternet sitemizdeki iletişim formunu
                            doldurmanız hâlinde aşağıdaki kişisel
                            verileriniz işlenmektedir:
                        </p>

                        <ul className="list-disc space-y-1 pl-5">
                            <li>Ad ve soyad</li>
                            <li>E-posta adresi</li>
                            <li>Telefon numarası</li>
                            <li>Mesaj alanında paylaştığınız bilgiler</li>
                        </ul>

                        <p>
                            Ayrıca, çerez tercihlerinize ve kullanılan
                            analitik teknolojilerin yapılandırmasına bağlı
                            olarak internet sitesi ziyaret ve etkileşim
                            verileriniz işlenebilir.
                        </p>
                    </Section>

                    <Section
                        number="03"
                        title="Kişisel Verilerin İşlenme Amaçları"
                    >
                        <p>
                            İletişim formu aracılığıyla ilettiğiniz kişisel
                            verileriniz aşağıdaki amaçlarla işlenmektedir:
                        </p>

                        <ul className="list-disc space-y-1 pl-5">
                            <li>İletişim taleplerinizin alınması,</li>
                            <li>Mesajlarınızın değerlendirilmesi ve yanıtlanması,</li>
                            <li>
                                Talep ettiğiniz eğitim ve danışmanlık hizmetleri
                                hakkında bilgi verilmesi,
                            </li>
                            <li>
                                İletişim süreçlerinin yürütülmesi.
                            </li>
                        </ul>

                        <p>
                            Analitik teknolojiler ise internet sitemizin
                            kullanımını anlamak, ziyaretçi etkileşimlerini
                            analiz etmek ve kullanıcı deneyimini geliştirmek
                            amacıyla kullanılmaktadır.
                        </p>
                    </Section>

                    <Section
                        number="04"
                        title="Toplama Yöntemi ve Hukuki Sebep"
                    >
                        <p>
                            İletişim formunda paylaştığınız bilgiler,
                            formu doldurarak göndermeniz yoluyla elektronik
                            ortamda toplanmaktadır.
                        </p>

                        <p>
                            Bu veriler, talebinizin niteliğine göre
                            KVKK&apos;nın 5. maddesinde düzenlenen
                            sözleşmenin kurulması veya ifası için gerekli
                            olma ya da temel hak ve özgürlüklerinize zarar
                            vermemek kaydıyla veri sorumlusunun meşru
                            menfaati hukuki sebeplerine dayanılarak işlenebilir.
                        </p>

                        <p>
                            Açık rıza gerektiren analitik çerezler ve
                            benzeri teknolojiler bakımından ise açık
                            rızanız esas alınır.
                        </p>
                    </Section>

                    <Section
                        number="05"
                        title="Kişisel Verilerin Aktarılması"
                    >
                        <p>
                            İletişim formu aracılığıyla paylaştığınız
                            bilgiler, taleplerinizin değerlendirilmesi
                            amacıyla şirketimizin ilgili yetkilileri
                            tarafından işlenmektedir.
                        </p>

                        <p>
                            İnternet sitesi ve e-posta altyapısının
                            işletilmesi kapsamında, hizmetin gerektirdiği
                            ölçüde teknik hizmet sağlayıcıları tarafından
                            da veri işlenmesi söz konusu olabilir.
                        </p>

                        <p>
                            Google Analytics kullanımı kapsamında Google
                            tarafından veri işlenmesi ve yurt dışına
                            veri aktarımı söz konusu olabileceğinden,
                            bu işlemler yürürlükteki mevzuat
                            çerçevesinde değerlendirilir.
                        </p>
                    </Section>

                    <Section
                        number="06"
                        title="Çerezler ve Analitik Teknolojiler"
                    >
                        <p>
                            İnternet sitemizde Google Analytics ve
                            Google Tag Manager kullanılmaktadır.
                            Bu teknolojiler, internet sitesi
                            etkileşimlerinin ölçülmesine ve
                            analiz edilmesine yardımcı olmaktadır.
                        </p>

                        <p>
                            Zorunlu olmayan çerezlere ilişkin
                            tercihlerinizi sitemizdeki çerez
                            yönetimi alanından belirleyebilirsiniz.
                        </p>

                        <p>
                            Ayrıntılı bilgi için{" "}
                            <Link
                                href="/cerez-politikasi"
                                className="font-medium text-[#0794c7] hover:underline"
                            >
                                Çerez Politikası
                            </Link>{" "}
                            sayfamızı inceleyebilirsiniz.
                        </p>
                    </Section>

                    <Section
                        number="07"
                        title="KVKK Kapsamındaki Haklarınız"
                    >
                        <p>
                            KVKK&apos;nın 11. maddesi uyarınca,
                            kişisel verilerinizle ilgili aşağıdaki
                            haklara sahipsiniz:
                        </p>

                        <ul className="list-disc space-y-2 pl-5">
                            {rights.map((right) => (
                                <li key={right}>{right}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section
                        number="08"
                        title="Başvuru ve İletişim"
                    >
                        <p>
                            KVKK kapsamındaki haklarınıza ilişkin
                            taleplerinizi, mevzuatta belirtilen
                            başvuru yöntemlerini kullanarak
                            şirketimize iletebilirsiniz.
                        </p>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                            <p className="font-semibold text-[#101827]">
                                {company}
                            </p>

                            <p className="mt-3">
                                E-posta: enneagramegitim@gmail.com
                            </p>

                            <p>
                                Posta adresi: Molla Gürani, Zaviye Sk. No:4 Kat:3, 34096 Fatih/İstanbul
                            </p>
                        </div>

                        <p>
                            Normal elektronik posta üzerinden yapılan
                            resmî başvurularda, daha önce şirketimize
                            bildirdiğiniz ve sistemimizde kayıtlı
                            bulunan e-posta adresinizi kullanmanız
                            gerekmektedir. Mevzuatta öngörülen
                            diğer başvuru yöntemlerinden de
                            yararlanabilirsiniz.
                        </p>

                        <p>
                            Başvurularınız, talebinizin niteliğine göre
                            en kısa sürede ve en geç otuz gün içinde
                            sonuçlandırılır.
                        </p>
                    </Section>
                </article>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#0794c7]"
                    >
                        <span aria-hidden="true">←</span>
                        Ana Sayfaya Dön
                    </Link>

                    <Link
                        href="/cerez-politikasi"
                        className="text-sm font-medium text-[#0794c7] hover:underline"
                    >
                        Çerez Politikası →
                    </Link>
                </div>
            </div>
        </main>
    );
}