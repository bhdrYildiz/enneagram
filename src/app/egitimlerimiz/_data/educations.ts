export type EducationComment = {
  name: string;
  role?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

export type EducationItem = {
  id: string;
  slug: string;
  title: string;
  priceText: string;
  poster: string;
  href?: string;
  intro?: string[];
  topicsTitle?: string;
  topicsIntro?: string;
  topics?: string[];
  audienceTitle?: string;
  audience?: string;
  schedule?: string;
  durationText?: string;
  instructor?: string;
  comments?: EducationComment[];
};

export const WHATSAPP_URL = "https://wa.me/905435406443";

export const educations: EducationItem[] = [
  {
    id: "donusum-atolyesi",
    slug: "enneagram-isiginda-donusum-atolyesi",
    title: "İsmail Acarkan’la Enneagram Işığında Dönüşüm Atölyesi",
    priceText: "₺6,000.00 – ₺7,000.00",
    poster: "/egitimler/enneagramisiginda.jpg",
    intro: [
      "Kendinizi daha derinlemesine tanımaya, içsel dönüşüm yolculuğunuzu başlatmaya hazır mısınız? 12 hafta sürecek olan bu özel atölye, haftada 1 gün, 3 saat boyunca, hayatınıza yeni bir perspektif kazandırmak ve içsel dünyanızı keşfetmenize yardımcı olmak için tasarlandı.",
      "Atölye boyunca, Enneagram’ın derin bilgeliğini kullanarak kendilik kavramını yeniden tanımlamayı ve hayatınıza yeni bir anlayışla yaklaşmayı öğrenme fırsatı bulacaksınız.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Bu Atölyede Hangi Konuları Çalışacağız?",
    topicsIntro:
      "Bu atölye, interaktif sorular, gözlem çalışmaları ve grup dinamikleriyle dolu olacak, böylece her katılımcı kendi dönüşüm yolculuğunu en verimli şekilde yaşayacak. Sınırlı kontenjanla sadece 12 katılımcı kabul edilecektir. Kendinizi keşfetmek ve dönüştürmek için bu fırsatı kaçırmayın!",
    topics: [
      "Kendilik Kavramı",
      "Kendimizi Gözlemlemek",
      "Özdeşleşme ve Ayrışma",
      "Kimliklerden Özgürleşme",
      "Hikâyelerimizi Fark Etmek ve Hikâyemizin Dışına Çıkmak",
      "Rahat ve Stres Rotalarının Üzerinde Çalışmak",
      "Arzu ve Korkuları Gözlemlemek ve Özgürleşmek",
      "Dirençler ve Dirençleri Aşmak",
    ],
    audienceTitle: "Kimler Katılabilir?",
    audience:
      "Minimum (Modül1) Temel Enneagram Eğitimi ve (Modül2) 2.Seviye Enneagram Eğitimi’ni tamamlamış olmak.",
    durationText: "36 saat",
    instructor: "İsmail Acarkan",
    schedule:
      "19.30 – 22.30 saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
    comments: [
      {
        name: "H.K",
        role: "Aile Danışmanı",
        rating: 5,
        text: "Enneagram derinlestikce zihnin ufuklarini açan bir metodoloji. Derinlestikce kendimi farklı açılardan görmek çok keyifli. Ayrıca danışmanlıkta kullanımı özellikle ilk zamanlarda pratik olarak danışanın kendini fark etmesine sebep oluyor. Ayrıca bu dönüşüm eğitiminde her ders sanki şu içiyormuş gibi içsel bir ferahlamaya ve yenilenmeye kapı açtı şeklinde hissediyorum.",
        date: "2025-08-19",
      },
      {
        name: "Gamze Kuru.",
        role: "PDR Uzmanı",
        rating: 5,
        text: "Uzun zamandır aradığım, cevabını buldum zannettiğim soruların gerçek cevabını bu eğitim vesilesiyle buldum diyebilirim. Sanki gözümde bir buğu vardı da o kalkmış, her şey daha berraklaşmış gibi hissettim. Allah razı olsun hocam, çok önemli ve değerli bir hizmet veriyorsunuz. Siz bir kapı araladınız hakikate, güzel bir vesile oldunuz. inşaAllah öğrendiklerimizi hakkıyla yaşamak da nasip olur.",
        date: "2025-02-28",
      },
    ],
  },
  {
    id: "modul-1-temel",
    slug: "temel-enneagram-egitimi",
    title: "Modül 1 – Temel Enneagram Eğitimi",
    priceText: "₺3,250.00 – ₺3,500.00",
    poster: "/egitimler/afis3.jpg",
    intro: [
      "Enneagram Mizaç Merkezli Kişilik metodolojisinin temel kavramlarının, 9 mizaç yapısının anlatıldığı Enneagram’ın ilk basamak eğitimidir.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro:
      "Eğitim, kendini tanıma ve başkalarını anlamaya dair bir farkındalık kazanılmasını amaçlar. Güçlü yönlerin keşfi, potansiyel riskleri anlama, hayatında tekrarlayan sorunların kökenini fark etme, verimli ve anlamlı bir hayat yaşayabilme adına mizaç zemini üzerine oluşan ve gelişen kişilik tipleri hakkında bilgi sahibi olup, bu bilgiyi hayatın tüm alanlarında kullanabilmeyi hedefler.",
    topics: [
      "İnsana bütüncül yaklaşım",
      "Mizaç ve kişiliğin kökeni",
      "Enneagram nedir?",
      "Enneagram’ın tarihçesi",
      "Enneagram sisteminin dinamikleri",
      "Enneagramda tipler ve temel arayışları",
      "Mizaç tiplerinin düşünce, duygu ve davranış tarzları",
      "Mizaçların kanat etkileri",
      "Mizaçların stres ve rahat hatları.",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience:
      "Öğretmenler, rehber öğretmenler, anne-babalar, psikologlar, ekip yöneticileri, koçlar, mentorlar, girişimciler, okul yöneticileri, insan kaynakları profesyonelleri, senaryo-hikâye yazarları, reklamcılar, kendini tanımak ve başkalarını anlamak isteyen herkes katılabilir.",
    durationText: "12 saat",
    instructor: "İsmail Acarkan",
    schedule:
      "19.30 – 22.30 saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
    comments: [
      {
        name: "S.B.E",
        role: "Öğretmen",
        rating: 5,
        text: "Enneagram eğitimi sayesinde kendimi daha yakından tanıma fırsatı buldum. Davranış kalıplarımı ve iç motivasyonlarımı fark etmek, hem kişisel gelişimime hem de insan ilişkilerime olumlu katkı sağladı ve sağlamaya devam edecektir. Eğitim içeriği sade ve etkileyiciydi. Katıldığım için çok memnunum, emeği geçen herkese teşekkür ederim.",
        date: "2025-08-19",
      },
      {
        name: "M. T.",
        role: "PDR Uzmanı",
        rating: 5,
        text: "Mizacımın çocukluğumdan bu yana bana ne kattığı ya da mizacımdan dolayı nelerden geri kaldığımı fark ettim. İncindiğim, zorlandığım, kendimle alakalı sorguladığım neden bunu ben böyle yaptım dediğim birçok konuda cevap buldum. Kendimi hayatta nasıl korumam gerektiğini henüz öğrenemesem de en azından bunun temelini attım farkındalık oluşturarak.",
        date: "2025-02-28",
      },
    ],
  },
  {
    id: "modul-2-ikinci-seviye",
    slug: "2-seviye-enneagram-egitimi",
    title: "Modül 2 – 2. Seviye Enneagram Eğitimi",
    priceText: "₺5,000.00",
    poster: "/egitimler/2.seviye.jpg",
    intro: [
      "Temel Enneagram Eğitimini tamamlayıp öğrenilen Enneagram kavramları ve mizaçlar hakkında daha detaylı bilgiler edinmek, derinleşmek ve ilerlemek isteyenler için düzenlenen bir eğitimdir.",
      "Bu Eğitimimiz Online’dır.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro:
      "Temel Enneagram Eğitimini tamamlayıp öğrenilen Enneagram kavramları ve mizaçlar hakkında daha detaylı bilgiler edinmek, derinleşmek ve ilerlemek isteyenler için düzenlenen bir eğitimdir.",
    topics: [
      "Psikolojik boyutun merkezleri ve bölümleri",
      "Mizaçların duygusal takılmaları",
      "Merkezleri uyumlu ve dengeli kullanmak",
      "Eylemsel, duygusal ve zihinsel tuzaklar",
      "Genellemelerin yanlışlığı",
      "Mizaç farkındalığı ve ebeveynlik",
      "Enneagram’ın tarihçesi",
      "Enneagram hakkında yapılan bilimsel çalışmalar",
      "Kişilik kuramları ve Enneagram",
      "Mizaç tiplerinin ayrıntılı temel özellikleri",
      "Temel ve ikincil arayışlar",
      "Mizaç tiplerinin doğal yetenekleri",
      "Kanat mizacın ana mizaç üzerine etkileri",
      "Mizaç tiplerinin rahat-stres hattıyla ilişkisi",
      "Mizaç tiplerinin sınırlandırıcı bilinçaltı inançları",
      "Mizaç tiplerinin başa çıkma stratejileri",
      "Mizaç tiplerinin iç diyalogları",
      "Mizaç tiplerinin çekindikleri-aradıkları şeyler ve tamamlanma yolları",
      "Mizaç tiplerinin yapmakta zorlanacağı şeyler",
      "Mizaç tiplerinin manipülasyon tarzı",
      "Mizaç tiplerinin iletişimde kör noktaları",
      "Mizaç tiplerinin algılama filtreleri",
      "Mizaç tiplerinin çatışma tarzları",
      "Mizaç tiplerinin dönüştürücü değerleri",
      "Mizaç tiplerinin iletişimde beklentileri",
      "Mizaç tiplerinin savunma mekanizmaları",
      "Mizaç tiplerinin sağlık seviyelerine genel bakış",
      "Mizaç tiplerinin potansiyel psikolojik hastalıkları",
      "Alt tiplere genel bakış ve mizaç tipleri üzerindeki etkisi",
      "Mizaç tiplerinin ilişki dinamikleri: İlişkilerde yapmaya çalışması gerekenler, kaçınması gerekenler",
      "Mizaç tiplerinin çocuklukları",
      "Mizaç tiplerinin ebeveynlikleri",
      "Mizaç tiplerinin mesleki eğilimleri",
      "Mizaç tiplerinin benzeşme ve karışma noktaları",
      "Her mizaç tipi için gelişim önerileri",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience:
      "Temel Enneagram Eğitimini tamamlamış, Enneagram konusunda derinleşmek isteyen herkes katılabilir.",
    durationText: "24 saat",
    instructor: "İsmail Acarkan",
    schedule:
      "19.30 – 22.30 saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
    comments: [
      {
        name: "Gülay ÖZMENLİKAN",
        role: "Öğretmen",
        rating: 5,
        text: "Enneagram eğitimleri sayesinde insanların yaptığı davranışların altında yatan sebebin aslında mizaç kaynaklı olduğunu öğrenmiş oldum. Kendimi bu alanda geliştirebileceğimi farkına vardım. Bu yüzden teşekkür ederim bizlere böylesi yararlı eğitimler verdiğiniz için.",
        date: "2024-10-13",
      },
      {
        name: "Ş. K",
        role: "Aile Danışmanı",
        rating: 5,
        text: "Kişi tanımlamasına dair bilgi ve yaklaşım farklılığı katmakla birlikte eksik ve tamamlanası gereken kısımların neler olduğunu daha sağlıklı seviye ulaşım için nelerin olması ve nasıl olunması gerektiğini kazanımladım. Mesleki ve sosyal alanda büyük bir artı puanla yol aldığımı hissediyor ve görebiliyorum. ",
        date: "2024-05-23",
      },
    ],
  },
  {
    id: "modul-5-iliskiler",
    slug: "enneagram-iliskiler-egitimi",
    title: "Modül 5 – Enneagram İlişkiler Eğitimi",
    priceText: "₺550.00 – ₺6,000.00",
    poster: "/egitimler/enneagramiliskileregitimi.jpg",
    intro: [
      "İlişkilerde ortaya çıkan duygu, düşünce ve davranışlarımız doğuştan sahip olduğumuz mizaç yapımızdan kök alır. Bir diğeriyle ilişkideki uyumumuz, mizaçlarımıza bağlı olan imkân ve riskleri beraberinde taşır. Bu imkânları değerlendirmek ve risklerinden kaçınmak için sahip olduğumuz mizaç yapımızı bilmeye ve tanımaya ihtiyacımız vardır. Bu sayede bilinçli ve sağlıklı ilişkiler kurabilir ve geliştirebiliriz.",
      "Eğitimin ilk günü İlişkilere Giriş, sonraki her gün bir mizacın ilişkileri ele alınır. Kendi mizacınızın olduğu güne müstakil olarak katılmanız mümkündür. Tarih kısmında katılmak isteğiniz mizacı seçerek satın alma işlemini gerçekleştirebilirsiniz.",
      "Eğitimimiz Online’dır. Eğitim sonunda eğitimin tümüne katılanlara Katılım Belgesi verilmektedir.",
      "Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro:
      "İlişkilerde ortaya çıkan duygu, düşünce ve davranışlarımız doğuştan sahip olduğumuz mizaç yapımızdan kök alır. Bir diğeri yle ilişkideki uyumumuz, mizaçlarımıza bağlı olan imkân ve riskleri beraberinde taşır. Bu imkânları değerlendirmek ve risklerinden kaçınmak için sahip olduğumuz mizaç yapımızı bilmeye ve tanımaya ihtiyacımız vardır. Bu sayede bilinçli ve sağlıklı ilişkiler kurabilir ve geliştirebiliriz.",
    topics: [
      "İlişkilerde problemler",
      "Mizaç bilgisinin ilişkilere katkısı",
      "İletişim nedir?",
      "İç iletişim ve dış iletişim",
      "İhtiyaçlar ve beklentiler",
      "İlişki ve iletişim dünyasında insan",
      "Dinleme tarzları",
      "Sağlıklı iletişim",
      "İletişimin önündeki engeller",
      "Sevgi nedir?",
      "İlişkilerdeki temel eğilimler",
      "Çekim ve uyum",
      "Enneagram mizaç tipleri ve ihtiyaçlar",
      "Daha sağlıklı iletişim için atılabilecek adımlar",
      "İlişkiler, duygular ve duygusal zekâ",
      "Empati ve sempati nedir?",
      "Anlamak ve yargılamak",
      "Muhatabın davranışlarını yorumlamak",
      "İlişkilerde bağlanma",
      "İlişkilerde uyumu bozan tavırlar",
      "İlişki zehirleri",
      "Esneklik ve kabullenme",
      "Enneagram mizaç tiplerinin ilişki dünyası",
      "Her bir mizaçla nasıl geçinilir?",
      "Her bir mizaç için gelişim önerileri",
      "Mizaçlara göre ideal ilişki",
      "Enneagram’da ilişki uyumu ve çatışma",
      "Mizaçların ilişki dinamikleri",
      "Her bir mizacın ilişkilerinde kaçınması gerekenler",
      "Her bir mizacın ilişkilerinde yapmaya çalışması gerekenler",
      "Her bir mizacın diğer mizaçlarla muhtemel sorunları ve anlaşma noktaları",
      "Mizaçlar ilişkilerde potansiyel risklerini nasıl yönetmeli?",
    ],
    audienceTitle: "Kimler Katılabilir?",
    audience:
      "12 saatlik Temel Enneagram Eğitimini tamamlamış olan herkes katılabilir. Eğitimin tamamına veya her bir mizacın ilişki dinamiklerinin işleneceği günlerde müstakil olarak katılmak mümkündür.",
    durationText: "25 saat",
    instructor: "İsmail Acarkan",
    schedule:
      "Online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz ve giriş linki bu grup üzerinden paylaşılacaktır.",
    comments: [
      {
        name: "E.E",
        role: "Mühendis",
        rating: 5,
        text: "İsmail Beyin kitaplarından da, anlatım tarzından da, hem psikoloji hem tasavvuf hemen Enneagram metodolojisini birleştirmesinden de çok nasipleniyorum. Canlı eğitimlere katılamasam da sonradan dinleyip eksiklerimi tamamlamaya; tavsiyelerine uygun okumalar/ düşünme yöntemleriyle katkı düzeyini arttırmaya gayret ediyorum. Çok teşekkür ediyorum herşey için.",
        date: "2025-02-14",
      },
      {
        name: "Mervenur UZGUR",
        role: "Editör",
        rating: 5,
        text: "Enneagram benim kendimi tanıma yolculuğumda kademeli şekilde ilerlememde yardımcı oluyor, yolculuk boyunca refakatçi gibi adeta; Enneagram merkezli ilişkiler eğitimi çok daha spesifik bir yaklaşımla nokta atışı ayrıntılı bilgilendirmesi çok kıymetliydi. Her eğitim sonrası mutlaka farkındalığımı artıracak yaklaşımlar elde ediyorum.",
        date: "2024-01-02",
      },
    ],
  },
  {
    id: "cocuk-merkezli-enneagram",
    slug: "cocuk-merkezli-enneagram-egitimi",
    title: "Çocuk Merkezli Enneagram Eğitimi",
    priceText: "₺3,250.00",
    poster: "/egitimler/cocukmerkezliegitim.jpg",
    intro: [
      "Bu eğitim, 9 mizacın “Çocuk Merkezli” olarak ele alındığı ‘Enneagram Gelişim Modülü’ eğitimlerindendir.",
      "Eğitimimiz Online’dır.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro:
      "Bu eğitim ile çocuklarla çalışan uzmanların ve ebeveynlerin onları daha yakından tanıyarak, çocukların sağlıklı kişilik gelişimlerine eşlik edebilmeleri için yetişkinlere farkındalık kazandırma ve temel bilgileri verme amaçlanır.",
    topics: [
      "İnsana bütüncül yaklaşım",
      "Mizaç ve kişiliğin kökeni",
      "Enneagram nedir?",
      "Enneagram’ın tarihçesi",
      "Enneagram sisteminin dinamikleri",
      "Çocuklardaki farklılıkların sebepleri",
      "Çocukların mizaçlarına göre temel arayışları ve bu arayışlarının sonuçları",
      "Çocukların mizaçlarına göre temel kaçınmaları ve korkuları",
      "Çocukların mizaçlarına göre motivasyon noktaları",
      "Çocukların mizaçlarına göre arkadaşlık ve ilişki tarzı",
      "Çocukların mizaçlarına göre eğitimciden ve ebeveynden beklentileri",
      "Çocukların mizaçlarına göre ödev algısı ve ödev yapma tarzı",
      "Öğrencilerin mizaçlarına göre sosyalleşme algısı",
      "Gelişim önerileri ve dikkat edilmesi gereken noktalar",
      "Çocukların mizaçlarına göre düşünce, duygu ve davranış tarzları",
      "Mizaçların kanat etkileri",
      "Mizaçların stres ve rahat hatları",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience:
      "Öğretmenler, rehber öğretmenler, anne-babalar, psikologlar, okul/kurs yönetici ve çalışanları, eğitim koçları, aile danışmanları ve çocuklardaki mizaç farklılıklarını öğrenmek isteyen herkes bu eğitime katılabilir.",
    durationText: "12 saat",
    instructor: "Muammer Küçükyazıcı",
    schedule:
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    comments: [
      {
        name: "H.K",
        role: "Mühendis",
        rating: 5,
        text: "Verimli geçen bir eğitimdi. Tuğba Hanımın anlatımı akıcı, berrak, enerjikti. Tanıdığım insanları farklı bir gözle değerlendirmeye başladım. Yeni bir bakış açısı kazandırdı. Aslında uzun zamandır zihnimde dönen nesirlere bir başlık bulmuş gibiyim. Benim hayatımda yeni sayfalar açacak gibi duruyor “Enneagram” olgusu. Emeği geçen herkese başta Tuğba hanım olmak üzere teşekkür ederim. Sanırım Tuğba hocam bu yoldaki ilk hocam olarak kalbimde hep özel bir yere sahip olacak.",
        date: "2024-12-08",
      },
      {
        name: "M. K",
        role: "Psikolog/PDR Uzmanı",
        rating: 5,
        text: "Enneagramın hayata açılan bir pencere olduğunu düşünüyorum. Özellikle önce kendimin, sonra da çevremdeki kişilerin mizaçlarını anladığım ve bununla ilgili nasıl bir yol alabileceğimi net bir şekilde öğrendiğim verimli bir eğitim geçirdim. Eğitim öncesinde kendi çıkarımlarımla farklı bir mizaçta olduğumu düşünürken, eğitim sonunda asıl mizacımın 9 olduğunu öğrendim. Yine çalışma hayatımda çocuklarla olan temasıma ışık tutacak bilgileri kazanmış oldum. Tüm enneagram ekibine bize bu eğitimi sağladığı için teşekkürlerimi sunuyorum!",
        date: "2024-09-16",
      },
    ],
  },
  {
    id: "profesyonel-kocluk-egitimi",
    slug: "profesyonel-kocluk-egitimi-60-saat",
    title: "PROFESYONEL KOÇLUK EĞİTİMİ (60 Saat)",
    priceText: "₺15,000.00",
    poster: "/egitimler/profesyonelkoc.jpg",

    intro: [
      "Bu eğitimde amaç kişilerin koçluk zihin yapısına sahip olmalarını sağlamak ve “koçvari yaklaşım” pratiklerinin yaşam biçimi hâline gelmesine vesile olarak iletişim süreçlerini güçlendirmektir.",
      "Eğitim 10.00 – 16.00 saatlerinde, online olarak yapılmaktadır.",
      "Eğitim tarihinden 1 gün önce katılımcılar eğitim WhatsApp grubuna eklenir. Online eğitim giriş linki ve diğer bilgiler bu grup üzerinden paylaşılır.",
      "Banka havalesi ile yapılan ödemelerde %10 indirim uygulanmaktadır. Ödeme sayfasında banka havalesi seçildiğinde sistem indirimi otomatik olarak uygular.",
    ],

    topicsTitle: "Eğitimin İçeriği",
    topicsIntro:
      "Profesyonel Koçluk Eğitimi kapsamında koçluk zihin yapısı, koçvari yaklaşım ve temel koçluk uygulamalarına yönelik kapsamlı bir eğitim süreci yürütülmektedir.",

    topics: [
      "ÇSGB – MYK Koç (Seviye 6) Ulusal Meslek Standardı",
      "Ulusal Yeterlilik",
      "Koçluk temel kavramları",
      "4 koçluk aracı",
    ],

    audienceTitle: "Kimler Katılabilir?",

    audience: `İçsel Dönüşüm ve Farkındalık Arayışındakiler: Öz potansiyelini keşfetmeyi, sınırlarını aşmayı ve hayatını daha anlamlı bir vizyonla yeniden şekillendirmeyi arzulayan bireyler.

İletişim Sanatında Ustalaşmak İsteyenler: Derinlemesine dinleme ve stratejik soru sorma becerileri kazanarak hem özel hem de iş hayatındaki insan ilişkilerini nitelikli bir seviyeye taşımak isteyenler.

Vizyoner Liderler ve Yöneticiler: Yönetim becerilerini koçluk yetkinlikleriyle harmanlayarak, ekiplerinin performansını ve motivasyonunu maksimize etmeyi amaçlayan üst düzey profesyoneller.

İnsan Odaklı Meslek Mensupları: Eğitimciler, İK profesyonelleri, psikolojik danışmanlar ve rehberlik uzmanları gibi mevcut uzmanlıklarını koçluk araçlarıyla güçlendirmek isteyenler.

Yaşam Standartlarını ve Esenliğini Yükseltmeyi Hedefleyenler: Günlük hayatın karmaşasında denge kurmak, iç huzura ulaşmak ve daha doyumlu bir yaşam sürmek için köklü bir değişim arayanlar.`,

    schedule: "Eylül – Ekim 2026",
    durationText: "60 Saat",
    instructor: "Ekrem Özden, PCC, MYK Belgeli Profesyonel Koç, Mentör",

    comments: [
      {
        name: "Guner KULMAÇ",
        text: "Bu egitimde kocluk zihin yapisina sahip oldum kocluk yolculugum icin benim icin harika bir baslangic oldu bu egitim de hem teorik hem pratik bir egitim sureci oldu, ogrendik uyguladik egitimi tamamladik, basda ekrem hocamiza ve emegi gecen herkese tesekkurler.",
        rating: 5,
      },
      {
        name: "Mervenur",
        text: "Profesyonel koçluk eğitimi, aldığım en doğru kararmış, eğitimin her aşamasında bir farkındalık geliştirmek, her geçen gün o zihin yapısına biraz daha yaklaştığını gözlemlemek, eğitime olan motivasyonumu hep dinç tuttu. Daha önce koçluk alanında eğitin almamış olmak, ilk olarak Ekrem hocamızla başlamak benim en büyük şansım oldu. İyiki",
        rating: 5,
      },
    ],
  },
  {
    id: "enneagram-ile-kocluk",
    slug: "enneagram-ile-kocluk",
    title:
      "Enneagram ile Koçluk: İnsanın Özüne Yolculuk ve Profesyonel Dönüşüm",
    priceText: "₺6,000.00",
    poster: "/egitimler/enneagramilekocluk.jpg",

    intro: [
      "Bu eğitim, koçlara sadece bir kişilik modeli sunmakla kalmaz; aynı zamanda insanın bütünlüğüne dair derin bir bakış açısı kazandırır.",
      "Enneagram ile koçluk; koçların müşterilerinin ihtiyaçlarını daha hızlı belirlemesine, her mizaç tipine özel gelişim yolları oluşturmasına ve daha derin, kalıcı sonuçlar elde etmesine yardımcı olur.",
      "Eğitim 20.00 – 23.00 saatlerinde, Zoom platformu üzerinden online olarak yapılmaktadır.",
      "Eğitim tarihinden 1 gün önce katılımcılar eğitim WhatsApp grubuna eklenir. Online eğitim giriş linki ve diğer bilgiler bu grup üzerinden paylaşılır.",
      "Banka havalesi ile yapılan ödemelerde %10 indirim uygulanmaktadır. Ödeme sayfasında banka havalesi seçildiğinde sistem indirimi otomatik olarak uygular.",
    ],

    topicsTitle: "Eğitim Kazançları",
    topicsIntro:
      "Enneagram ile Koçluk eğitimi sonunda katılımcıların koçluk süreçlerinde kullanabilecekleri temel kazanımlar:",

    topics: [
      "Müşterinizin temel motivasyonlarını ve sınırlayıcı inançlarını hızlıca analiz etme yetisi.",
      "9 farklı mizaç tipine özgü, sonuç odaklı eylem planları geliştirme becerisi.",
      "Müşterinizin stres ve rahatlama hatlarını takip ederek gelişimini profesyonel olarak destekleme.",
      "Kendi kör noktalarınızı keşfederek koçluk performansınızı en üst seviyeye çıkarma.",
    ],

    audienceTitle: "Kimler Katılabilir?",

    audience: `Bu modül, koçluk görüşmelerinde daha derin dönüşümler hedefleyen, temel koçluk eğitimi almış ve müşterisinin mizaç yapısına uygun “özel” bir yol arkadaşlığı sunmak isteyen tüm profesyonel koçlar için tasarlanmıştır.

Siz de profesyonel koçluk sanatınızı Enneagram’ın binlerce yıllık bilgeliği ve modern psikolojinin verileriyle taçlandırabilirsiniz.`,
    schedule: "AĞUSTOS 2026",
    durationText: "15 Saat",
    instructor: "Ekrem Özden, PCC / Muammer Küçükyazıcı",
  },
];
