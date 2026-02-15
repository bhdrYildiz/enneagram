export type MizacItem = {
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  heroLabel?: string;
  coreDesire?: string;
  coreFear?: string;
  longDescription?: string;
  traits?: string[];
  quote?: string;
  relatedSlugs?: string[];
};

export const mizacTipleri: MizacItem[] = [
  {
      slug: "mizac-1",
      title: "Mizaç 1",
      heroLabel: "Reformcu",
      subtitle: "Temel ana arayış: Doğru eylem ve kusursuzluk.",
      image: "/mizaclar.png",
      coreDesire: "İyi, erdemli ve dengeli olmak; kendi standartlarına göre doğru yaşamak.",
      coreFear: "Bozuk, kötü ya da kusurlu olmak ve bunun başkaları tarafından fark edilmesi.",
      longDescription: `Mizaç 1 kişiler, dürüstlüğe, ahlaki doğruluğa ve mükemmelliğe derin bir bağlılık duyarlar. İçlerinde her zaman neyin doğru, neyin yanlış olduğunu söyleyen güçlü bir iç ses taşırlar.

Dünyayı olduğundan çok olması gerektiği gibi görürler. Aksaklıkları, eksiklikleri, hataları anında fark ederler — hem dışarıda hem de içlerinde. Bu farkındalık onları güçlü bir iyileştirme dürtüsüyle yaşatır.

İşlerinde son derece titiz ve güvenilirdirler. Verilen sözün tutulması, kurallara uyulması, haksızlığa ses çıkarılması onlar için doğal bir sorumluluktur.`,
      traits: ["Mükemmeliyetçi", "İlkeli & dürüst", "Sorumluluk sahibi", "Eleştirel iç ses", "Reform dürtüsü", "Öz-disiplinli"],
      quote: "Mükemmel olan iyinin düşmanıdır — ama Mizaç 1 için bu ikilem asla bitmez.",
      relatedSlugs: ["mizac-2", "mizac-7", "mizac-4"],
  },
  {
      slug: "mizac-2",
      title: "Mizaç 2",
      heroLabel: "Yardımsever",
      subtitle: "Temel ana arayış: Duygusal paylaşımda bulunmak ve sevilen bir kişi olmak.",
      image: "/afis2.jpg",
      coreDesire: "Sevilmek, takdir edilmek ve başkalarına vazgeçilmez olmak.",
      coreFear: "Sevilmemeye, istenilmemeye ya da ihtiyaç duyulmamaya değer bulmak.",
      longDescription: `Mizaç 2 kişiler, başkalarının ihtiyaçlarını sezgisel olarak fark eden, sıcak ve cömert bireylerdir. Sevdiklerinin iyiliği için büyük fedakarlıklar yaparlar.

İlişkilere büyük önem verirler; bağlantı kurmak, destek olmak ve duygusal yakınlık hissetmek onlar için yaşamın merkezidir. Ancak bu güçlü yardım etme dürtüsü bazen kendi ihtiyaçlarını göz ardı etmelerine yol açar.

Sağlıklı halleriyle Mizaç 2'ler gerçek anlamda şefkatli, destekleyici ve ilham verici bireylerdir.`,
      traits: ["Sıcak & cömert", "Empatik", "İlişki odaklı", "Fedakâr", "Sezgisel", "Duygusal zeka"],
      quote: "Sevmek vermektir — Mizaç 2 bunu her nefesiyle yaşar.",
      relatedSlugs: ["mizac-1", "mizac-3", "mizac-4"],
  },
  {
      slug: "mizac-3",
      title: "Mizaç 3",
      heroLabel: "Başarıcı",
      subtitle: "Temel ana arayış: İşlevsellik ve yetkinliklerde üstün olmak.",
      image: "/afis3.jpg",
      coreDesire: "Değerli, başarılı ve takdir edilen biri olmak.",
      coreFear: "Değersiz, başarısız ya da sıradan biri olmak.",
      longDescription: `Mizaç 3 kişiler, enerjik, hedef odaklı ve uyum yeteneği yüksek bireylerdir. Başarı onlar için sadece bir sonuç değil, kimliklerinin bir parçasıdır.

Hızlı düşünür, hızlı hareket ederler. Hedeflerini net belirler ve bu hedeflere ulaşmak için büyük bir kararlılık gösterirler. Ortama kolayca uyum sağlarlar.

Sağlıklı halleriyle Mizaç 3'ler hem kendileri hem de çevreleri için ilham kaynağı olan, gerçek anlamda değerli bireylerdir.`,
      traits: ["Hedef odaklı", "Uyumlu", "Karizmatik", "Hırslı", "Pratik zeka", "Liderlik"],
      quote: "Başarı bir varış noktası değil, Mizaç 3 için bir yaşam biçimidir.",
      relatedSlugs: ["mizac-1", "mizac-6", "mizac-9"],
  },
  {
      slug: "mizac-4",
      title: "Mizaç 4",
      heroLabel: "Bireyci",
      subtitle: "Temel ana arayış: Duygusal derinlik, anlam ve özgün kendilik.",
      image: "/afis1.jpg",
      coreDesire: "Kendisi olmak, özgün kimliğini bulmak ve derin anlam taşıyan bir yaşam sürmek.",
      coreFear: "Kimliksiz, sıradan ve anlamsız olmak.",
      longDescription: `Mizaç 4 kişiler, derin duygusal dünyaları, güçlü estetik duyarlılıkları ve özgünlük arayışlarıyla tanınırlar. Yüzeysel olmaktan kaçınır, derinliği ararlar.

Güzeli, anlamlıyı ve otantik olanı fark etme konusunda eşsiz bir yetenekleri vardır. Bu hassasiyet onları yaratıcı alanlarda çoğunlukla öne çıkarır.

Sağlıklı halleriyle Mizaç 4'ler, insanlığın duygusal derinliğini dile getirebilen, dönüştürücü ve ilham verici bireylerdir.`,
      traits: ["Özgün & yaratıcı", "Duygusal derinlik", "Estetik duyarlılık", "İç gözlem", "Anlamlılık arayışı", "Empatik"],
      quote: "Mizaç 4, kaybolmuş olanı ararken aslında her zaman kendini bulmaya çalışır.",
      relatedSlugs: ["mizac-1", "mizac-2", "mizac-5"],
  },
  {
      slug: "mizac-5",
      title: "Mizaç 5",
      heroLabel: "Araştırmacı",
      subtitle: "Temel ana arayış: Her şeyi tam bilmek ve bağımsız yetkinlik.",
      image: "/afis1.jpg",
      coreDesire: "Yetkin, bilgili ve kendi kendine yetebilir olmak.",
      coreFear: "Yetersiz, bilgisiz ya da başkalarına muhtaç olmak.",
      longDescription: `Mizaç 5 kişiler, meraklı, analitik ve derin düşünce yeteneğine sahip bireylerdir. Bildikleri ve anladıkları dünya onlara güven verir.

Gözlemci bir yapıya sahiptirler; çoğunlukla hayatı uzaktan inceler, derinlemesine analiz ederler. Sosyal enerjilerini dikkatli kullanır, yalnızlıkta güç bulurlar.

Sağlıklı halleriyle Mizaç 5'ler, çığır açan fikirler üreten, vizyoner ve derin bilgi birikimi olan bireylerdir.`,
      traits: ["Analitik", "Meraklı", "Bağımsız", "Gözlemci", "Derin düşünür", "Uzmanlaşma"],
      quote: "Bilgi, Mizaç 5 için hem sığınak hem de özgürlüktür.",
      relatedSlugs: ["mizac-4", "mizac-6", "mizac-7"],
  },
  {
      slug: "mizac-6",
      title: "Mizaç 6",
      heroLabel: "Sadık",
      subtitle: "Temel ana arayış: Zihinsel netlik, kesinlik ve hayata karşı destek.",
      image: "/afis1.jpg",
      coreDesire: "Güvenlik, destek ve rehberlik bulmak; güvenilir sistemlere ait olmak.",
      coreFear: "Desteksiz kalmak, terk edilmek ya da savunmasız olmak.",
      longDescription: `Mizaç 6 kişiler, sorumlu, güvenilir ve topluluğa bağlı bireylerdir. Sadakat onlar için hem verdikleri hem de bekledikleri temel bir değerdir.

Çevrelerindeki olası tehlikeleri önceden sezebilirler; bu öngörü yetenekleri onları hem iyi planlayıcı hem de değerli danışman yapar. Belirsizlikten rahatsız olurlar.

Sağlıklı halleriyle Mizaç 6'lar güvenilir, cesaretli ve toplulukları için vazgeçilmez bireylerdir.`,
      traits: ["Sadık & güvenilir", "Sorumlu", "Öngörülü", "Topluluk odaklı", "Pratik", "Cesaretli"],
      quote: "Mizaç 6, güven inşa etmek için her şeyi göze alır.",
      relatedSlugs: ["mizac-3", "mizac-5", "mizac-9"],
  },
  {
      slug: "mizac-7",
      title: "Mizaç 7",
      heroLabel: "Hevesli",
      subtitle: "Temel ana arayış: Keşif, yenilik ve keyifli deneyim.",
      image: "/afis1.jpg",
      coreDesire: "Mutlu, tatmin olmuş ve hayattan doyum alan biri olmak.",
      coreFear: "Acı çekmek, sıkılmak ya da ihtiyaçlardan yoksun kalmak.",
      longDescription: `Mizaç 7 kişiler, enerjik, iyimser ve yaşamı büyük bir heyecanla kucaklayan bireylerdir. Yeni deneyimler, fikirler ve olasılıklar onlar için sürekli bir davet niteliğindedir.

Geniş bir yelpazeye ilgi duyarlar; bir konudan diğerine kolayca geçebilirler. Zor durumları olumlu bir perspektifle yeniden çerçeveleme konusunda ustadırlar.

Sağlıklı halleriyle Mizaç 7'ler, neşelerini ve vizyonlarını çevrelerine yayan, dönüştürücü bireylerdir.`,
      traits: ["Enerjik & iyimser", "Çok yönlü", "Spontane", "Vizyoner", "Eğlenceli", "Yaratıcı"],
      quote: "Mizaç 7 için hayat, dolu dolu yaşanmayı bekleyen sonsuz bir macera kitabıdır.",
      relatedSlugs: ["mizac-1", "mizac-5", "mizac-8"],
  },
  {
      slug: "mizac-8",
      title: "Mizaç 8",
      heroLabel: "Meydan Okuyucu",
      subtitle: "Temel ana arayış: Varlığını koruma ve güç arayışı.",
      image: "/afis1.jpg",
      coreDesire: "Kendini korumak, güçlü olmak ve kendi hayatını kontrol etmek.",
      coreFear: "Başkaları tarafından kontrol edilmek, zarar görmek ya da güçsüz kalmak.",
      longDescription: `Mizaç 8 kişiler, güçlü, kararlı ve doğrudan bireylerdir. Liderlik onlar için doğal bir eğilimdir; güç ve kontrol arayışı kimliklerinin merkezindedir.

Çevrelerindeki güç dinamiklerini anında okurlar. Haksızlığa karşı sert bir tutum sergilerler ve zayıfları koruma konusunda güçlü bir içgüdüleri vardır.

Sağlıklı halleriyle Mizaç 8'ler, başkalarını güçlendiren, adaletli ve dönüştürücü liderlerdir.`,
      traits: ["Güçlü & kararlı", "Lider", "Koruyucu", "Doğrudan", "Cesur", "Adalet duygusu"],
      quote: "Mizaç 8'in gücü, onu tanıyanlarca bir kalkan gibi hissedilir.",
      relatedSlugs: ["mizac-2", "mizac-5", "mizac-7"],
  },
  {
      slug: "mizac-9",
      title: "Mizaç 9",
      heroLabel: "Arabulucu",
      subtitle: "Temel ana arayış: İçsel güç, huzur ve duyumsal rahatlık.",
      image: "/afis1.jpg",
      coreDesire: "İç huzura kavuşmak, bütünlük ve uyum içinde yaşamak.",
      coreFear: "Kayıp, ayrılık ya da çevreyle bağını koparmak.",
      longDescription: `Mizaç 9 kişiler, kabul edici, destekleyici ve sakinleştirici bir enerjiye sahip bireylerdir. Çevrelerindeki insanlara huzur verirler ve doğal bir arabulucu etkisi yaratırlar.

Farklı bakış açılarını anlama ve sentezleme konusunda ustadırlar. Bu özellik onları hem değerli bir dinleyici hem de uyum yaratıcısı kılar.

Sağlıklı halleriyle Mizaç 9'lar, toplulukları bir arada tutan, iyileştirici ve dönüştürücü bireylerdir.`,
      traits: ["Kabul edici", "Huzurlu", "Arabulucu", "Sabırlı", "Destekleyici", "Bütünleştirici"],
      quote: "Mizaç 9'un sessizliği, içinde barındırdığı derinliğin yalnızca küçük bir yansımasıdır.",
      relatedSlugs: ["mizac-3", "mizac-6", "mizac-1"],
  },
];