export type Service = {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    logo: string;
    heroImage?: string;
    content?: string;      
    features?: string[];
  };

export const services = [
    {
        slug: "enneagramik",
        title: "EnneagramİK",
        description:
            "EnneagramİK raporlamaları; yönetim, işe alım, kariyer yönetimi, ekip oluşturma ve eğitim planlama süreçlerinde kurumlara bütüncül bir bakış açısı sunar. İnsan kaynağını mizacı merkeze alarak anlamayı ve doğru pozisyonlandırmayı hedefler.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
            logo: "/Enneagramik.png",
    },
    {
        slug: "aile-rehberimiz",
        title: "Aile Rehberimiz",
        description:
            "Aile Rehberimiz, mizacı merkeze alan bir rehberlik hizmetidir. Çocuğun doğuştan getirdiği mizaç özelliklerini anlayarak ebeveynlere sağlıklı iletişim, yönlendirme ve gelişim süreçlerinde yol gösterir.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
        logo: "/rehberimiz_logo.png",
    },
    {
        slug: "enoksis",
        title: "Enoksis",
        description:
            "Enoksis, eğitime mizaç merkezli bir perspektif sunan özgün ve nitelikli bir eğitim yaklaşımıdır. Mizaç farklılıklarını esas alır; rehberlik, ölçme ve gelişim süreçlerini bu temelde yapılandırır.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
        logo: "/Enoksis.png",
    },
    {
        slug: "enrehet",
        title: "Enrehet",
        description:
            "Enrehet, rehber öğretmenler için tasarlanmış; bireysel ya da grup halinde uygulanabilen, mizaçlara özel hazırlanmış rehberlik etkinliklerinden oluşur. Okul ortamında uygulanabilir ve sürdürülebilir çözümler sunar.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
        logo: "/Ennelog.png",
    },
    {
        slug: "test",
        title: "Test",
        description:
            "Enoksis test modülü, öğrencilerin mizaç tiplerinin bilimsel ve sistematik biçimde tespit edilmesini sağlar. Bu tespitler, eğitim ve rehberlik süreçlerinin sağlıklı şekilde planlanmasına temel oluşturur.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
        logo: "/rehberimiz_logo.png",
    },
    {
        slug: "egitimler",
        title: "Eğitimler",
        description:
            "Enneagram eğitimleri; bireylerin doğuştan getirdikleri mizaç özelliklerini tanımalarını, potansiyel imkan ve kabiliyetlerinin farkına varmalarını sağlar. Gelişim alanlarını güçlendirme ve riskleri iyileştirme imkânı sunar.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",    
        logo: "/TurkiyeEnenagramAkademisi.png",
    },
    {
        slug: "rapor",
        title: "Rapor",
        description:
            "Enoksis’in Enneagram Digital altyapısı ile öğrencilerin mizaç ve kanat mizaçları tespit edilir. Sonuçlar; anlaşılır, detaylı ve rehberlik süreçlerine entegre edilebilir raporlar halinde sunulur.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
        logo: "/Enoksis.png",
    },
    {
        slug: "yayincilik",
        title: "Yayıncılık",
        description:
            "Yayıncılık çalışmalarımız, her çocuğun bireysel farklılıklarını ve mizaç yapısını merkeze alır. Eğitimde tek tip yaklaşımların ötesine geçerek, her birey için özel yollar sunan içerikler üretir.",
        longDescription:
            "Buraya Enoksis hakkında uzun açıklama gelecek... (2-3 paragraf yazabilirsin)",
        logo: "/EnneagramTV.png",
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
  }