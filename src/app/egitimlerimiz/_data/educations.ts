export type EducationCategory = "enneagram-egitimleri" | "enneagram-gelisim-atolyeleri";

export type EducationComment = {
  name: string;
  role?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string; // "2026-02-01"
};

export type EducationItem = {
  id: string;
  slug: string;
  title: string;
  priceText: string;
  poster: string; 
  category: EducationCategory;
  href?: string;

    // Detay sayfası
    intro?: string[];       // paragraf paragraf
    topicsTitle?: string;   // "Bu Atölyede Hangi Konuları Çalışacağız?"
    topicsIntro?: string;   // o başlığın altındaki kısa paragraf
    topics?: string[];      // maddeler
    audienceTitle?: string; // "Kimler Katılabilir?"
    audience?: string;      // tek paragraf
    schedule?: string;      // "19.30 – 22.30 online..."
    durationText?: string;  // "36 saat"
    instructor?: string;    // "İsmail Acarkan"

    comments?: EducationComment[];

};

export const CATEGORY_META: Record<
  EducationCategory,
  { title: string; description: string }
> = {
  "enneagram-egitimleri": {
    title: "Enneagram Eğitimleri",
    description: `Enneagram eğitimleri doğuştan sahip olduğumuz mizaç yapımızı bilmek, tanımak ve fark edebilmekte detaylı ve geniş bir bilgi edinmemizi sağlar. Enneagram eğitimleri ile kişi potansiyel imkân ve kabiliyetlerinin farkına varır. Bu potansiyellerini geliştirebilme ve risklerini iyileştirebilme imkânına sahip olur.

Enneagram eğitimleri ile temelde kişinin kendinin farkına varması ve kendi dışındakini anlayabilmesi amaçlanır.`,
  },
  "enneagram-gelisim-atolyeleri": {
    title: "Enneagram Gelişim Atölyeleri",
    description: `Enneagram eğitimleri doğuştan sahip olduğumuz mizaç yapımızı bilmek, tanımak ve fark edebilmekte detaylı ve geniş bir bilgi edinmemizi sağlar. Enneagram eğitimleri ile kişi potansiyel imkân ve kabiliyetlerinin farkına varır. Bu potansiyellerini geliştirebilme ve risklerini iyileştirebilme imkânına sahip olur.

Enneagram eğitimleri ile temelde kişinin kendinin farkına varması ve kendi dışındakini anlayabilmesi amaçlanır.`,
  },
};

export const WHATSAPP_URL = "https://wa.me/905435406443";


export const educations: EducationItem[] = [
  {
    id: "donusum-atolyesi",
    slug: "enneagram-isiginda-donusum-atolyesi",
    title: "İsmail Acarkan’la Enneagram Işığında Dönüşüm Atölyesi",
    priceText: "₺6,000.00 – ₺7,000.00",
    poster: "/enneagramisiginda.jpg",
    category: "enneagram-gelisim-atolyeleri",
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
    poster: "/afis3.jpg",
    category: "enneagram-egitimleri",
    intro:[
      "Enneagram Mizaç Merkezli Kişilik metodolojisinin temel kavramlarının, 9 mizaç yapısının anlatıldığı Enneagram’ın ilk basamak eğitimidir.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır."
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Eğitim, kendini tanıma ve başkalarını anlamaya dair bir farkındalık kazanılmasını amaçlar. Güçlü yönlerin keşfi, potansiyel riskleri anlama, hayatında tekrarlayan sorunların kökenini fark etme, verimli ve anlamlı bir hayat yaşayabilme adına mizaç zemini üzerine oluşan ve gelişen kişilik tipleri hakkında bilgi sahibi olup, bu bilgiyi hayatın tüm alanlarında kullanabilmeyi hedefler.",
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
    audience: "Öğretmenler, rehber öğretmenler, anne-babalar, psikologlar, ekip yöneticileri, koçlar, mentorlar, girişimciler, okul yöneticileri, insan kaynakları profesyonelleri, senaryo-hikâye yazarları, reklamcılar, kendini tanımak ve başkalarını anlamak isteyen herkes katılabilir.",
    durationText: "12 saat",
    instructor: "İsmail Acarkan",
    schedule: "19.30 – 22.30 saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
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
    poster: "/2.seviye.jpg",
    category: "enneagram-egitimleri",
    intro:[
      "Temel Enneagram Eğitimini tamamlayıp öğrenilen Enneagram kavramları ve mizaçlar hakkında daha detaylı bilgiler edinmek, derinleşmek ve ilerlemek isteyenler için düzenlenen bir eğitimdir.",
      "Bu Eğitimimiz Online’dır.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Temel Enneagram Eğitimini tamamlayıp öğrenilen Enneagram kavramları ve mizaçlar hakkında daha detaylı bilgiler edinmek, derinleşmek ve ilerlemek isteyenler için düzenlenen bir eğitimdir.",
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
    audience: "Temel Enneagram Eğitimini tamamlamış, Enneagram konusunda derinleşmek isteyen herkes katılabilir.",
    durationText: "24 saat",
    instructor: "İsmail Acarkan",
    schedule: "19.30 – 22.30 saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
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
    id: "modul-3-gelisim-seviyeleri",
    slug: "enneagram-gelisim-seviyeleri-egitimi",
    title: 'Modül 3 – Gelişim Seviyeleri Eğitimi "Psikolojik Sağlık Seviyeleri Eğitimi"',
    priceText: "₺550.00 – ₺5,000.00",
    poster: "/psikolojiksaglikseviyeleri.jpg",
    category: "enneagram-egitimleri",
    intro:[
      "Temel Enneagram Eğitimlerimize katılıp Enneagram konusunda daha da derinleşmek ve ilerlemek isteyenler için Enneagram Gelişim Seviyeleri “Psikolojik Sağlık Seviyeleri Eğitimi” Gelişim Seviyeleri “Psikolojik Sağlık Seviyeleri”, Enneagram’ın dinamik bir yapı olmasını sağlayan en önemli unsurlarından biridir.",
      "Eğitimimiz Online’dır. Eğitim süresi toplam 10 gün/30 saattir.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 20.00 – 23.00 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır."
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Kişilik tipleri sabit yapılar değildir; birey, hayatı algılama biçiminde kendi mizaç tipinin temel endişesine ne ölçüde teslim olduğu ya da bu endişeden ne ölçüde özgürleştiğine bağlı olarak bir skala üzerinde hareket eder.Enneagram sistemine göre her mizaç tipi, sabit bir kalıptan ziyade, psikolojik sağlık seviyesine bağlı olarak değişen dokuz farklı sağlık seviyesinde kendini gösterir. Kişi bu seviyeler arasında yer değiştirdikçe, aynı mizaç yapısı içinde çok farklı tepkiler, düşünme biçimleri ve ilişki kurma tarzları sergileyebilir.",
    topics: [
      "Gelişim Seviyeleri ve işlevleri nelerdir?",
      "Sağlıklı Seviyelerin özellikleri",
      "Ortalama Seviyelerin özellikleri",
      "Sağlıksız Seviyelerin özellikleri",
      "Her bir mizaç tipinin 9 sağlık seviyesi üzerinden incelenmesi",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience: "12 saatlik Temel Enneagram Eğitimini tamamlamış olan herkes katılabilir.",
    durationText: "30 saat",
    instructor: "Abdullah Alçiçek",
    schedule: "20.00 – 23.00 saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
    comments: [
      {
        name: "Betül Gülçimen",
        role: "Öğrenci", 
        rating: 5,
        text: "Her üst katmandaki eğitim Enneagramı daha iyi anlamama ve bir mizacı, bir insanı anlayabilmek için sorularımın cevaplarını aldığım dersler oldu. Kendim hakkında başkalarıyla çok kıyaslama yapmam nedeniyle bir sürü soru vardı aklımda, bir çoğunun nedenini anlayıp bir yere oturtmama sebep oldu. Enneagram en kısa yoldan kestirmeli pskiloji okulu diyebilirim…",
        date: "2024-06-28",
      },
      {
        name: "Kübra Zümrüt Orhan",
        role: "Akademisyen",
        rating: 5,
        text: "Özellikle gelişim seviyeleri eğitimi beni çok etkiledi. İnsanın psikolojik sağlık bakımından ne kadar yükselebileceğini ve ne kadar düşebileceğini görmek çok çarpıcıydı. İnsanın mizacını, alt tipini ve gelişim seviyesini bilmesi kendisine yapabileceği en büyük iyilik diye düşünüyorum. Enneagramla ilgilenenlere bu eğitimi muhakkak tavsiye ederim.",
        date: "2024-02-08",
      },
    ],
  },
  {
    id: "modul-4-alt-tipler",
    slug: "enneagram-alt-tipler-egitimi",
    title: "Modül 4 – Alt Tipler Eğitimi",
    priceText: "₺550.00 – ₺5,000.00",
    poster: "/afis2.jpg",
    category: "enneagram-egitimleri",
    intro:[
      "Enneagram’ın insanın yapısını derinlemesine açıklayabilme kapasitesinin önemli bir kısmı da Alt Tiplerden ileri gelir. Temel Enneagram eğitiminde anlatılan dokuz kişilik tipinin kendi içerisinde tekrar üçe ayrılması ile ortaya çıkan 27 tipe Alt Tipler ya da İçgüdüsel Alt Tipler adı verilir.",
      "Alt Tipler aynı tip içerisindeki kişilerin bazen nasıl olup da birbirlerinden bu derece farklı olabildiklerini anlamamızda son derece açıklayıcı bir araçtır.",
      "Eğitimimiz Online’dır. Eğitim süresi toplam 10 gün/30 saattir.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 20.00 – 23.00 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır."
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Her bir tip için Kendini Koruma, Yakın İlişki Kurma ve Sosyalleşme içgüdülerinin o tipte birbirinden çok farklı üç tipi nasıl ortaya çıkardığını katılımcılara anlatmak bu eğitimin temel amacıdır.",
    topics: [
      "İçgüdü merkezleri ve işlevleri nelerdir?",
      "Alt Tip Nedir? Mizaç ve kişiliği nasıl etkiler?",
      "Alt Tip kavramları nelerdir?",
      "Her bir mizaç tipinin 3 alt tip üzerinden incelenmesi",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience: "12 saatlik Temel Enneagram Eğitimini tamamlamış olan herkes katılabilir.",
    durationText: "30 saat",
    instructor: "Abdullah Alçiçek",
    schedule: "20.00 – 23.00  saatlerinde online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz.",
    comments: [
      {
        name: "E.A",
        role: "Yazılımcı/Analist",
        rating: 5,
        text: "Bugüne kadar aynı mizaca sahip olup çok farklı davranışlar gösteren kişiler arasındaki farklılıkların temel sebeplerini bu ders ile öğrenmiş oldum. Derste aktarılan “Alt tipleri bilmeden yapılan ana mizaç tespitlerinin yarısı hatalıdır.” sözünün gerçek hayattaki karşılığını da görmüş olduk. Derslerde gösterilen örnekler, filmler üzerinden alt tip analizlerinin yapılması derse olan iştiyakımın artmasına sebep oldu ve dersi daha eğlenceli ve anlaşılır kıldı. Bu format için Abdullah hocamıza teşekkür ediyorum.",
        date: "2025-05-02",
      },
      {
        name: "A.D",
        role: "Profesyonel Koç",
        rating: 5,
        text: "Enneagram eğitimlerime altı yıl önce başladım. Temel enneagram, uzmanlık eğitimi, çocuk, ilişkiler şeklinde farklı kurumlardan eğitimler almıştım. Fakat enneagrama dair ben de eksik bir taraf vardı. Bu eğitim yapbozun en büyük parçasını yerine oturttu diyebilirim. Abdullah beyin derinlemesine anlatım biçiminin benim mizacıma göre daha tatmin edici ve akılda kalıcı olduğunu fark etmiş olmam enneagram hakkında yapacağım çalışmalarda ilerleyeceğim tekniği belirlemede çok etkili olduğunu söyleyebilirim. Teşekkür ederim.",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: "modul-5-iliskiler",
    slug: "enneagram-iliskiler-egitimi",
    title: "Modül 5 – Enneagram İlişkiler Eğitimi",
    priceText: "₺550.00 – ₺6,000.00",
    poster: "/enneagramiliskileregitimi.jpg",
    category: "enneagram-egitimleri",
    intro:[
      "İlişkilerde ortaya çıkan duygu, düşünce ve davranışlarımız doğuştan sahip olduğumuz mizaç yapımızdan kök alır. Bir diğeriyle ilişkideki uyumumuz, mizaçlarımıza bağlı olan imkân ve riskleri beraberinde taşır. Bu imkânları değerlendirmek ve risklerinden kaçınmak için sahip olduğumuz mizaç yapımızı bilmeye ve tanımaya ihtiyacımız vardır. Bu sayede bilinçli ve sağlıklı ilişkiler kurabilir ve geliştirebiliriz.",
      "Eğitimin ilk günü İlişkilere Giriş, sonraki her gün bir mizacın ilişkileri ele alınır. Kendi mizacınızın olduğu güne müstakil olarak katılmanız mümkündür. Tarih kısmında katılmak isteğiniz mizacı seçerek satın alma işlemini gerçekleştirebilirsiniz.",
      "Eğitimimiz Online’dır. Eğitim sonunda eğitimin tümüne katılanlara Katılım Belgesi verilmektedir.",
      "Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "İlişkilerde ortaya çıkan duygu, düşünce ve davranışlarımız doğuştan sahip olduğumuz mizaç yapımızdan kök alır. Bir diğeri yle ilişkideki uyumumuz, mizaçlarımıza bağlı olan imkân ve riskleri beraberinde taşır. Bu imkânları değerlendirmek ve risklerinden kaçınmak için sahip olduğumuz mizaç yapımızı bilmeye ve tanımaya ihtiyacımız vardır. Bu sayede bilinçli ve sağlıklı ilişkiler kurabilir ve geliştirebiliriz.",
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
      "Mizaçlar ilişkilerde potansiyel risklerini nasıl yönetmeli?"
    ],
    audienceTitle: "Kimler Katılabilir?",
    audience:
      "12 saatlik Temel Enneagram Eğitimini tamamlamış olan herkes katılabilir. Eğitimin tamamına veya her bir mizacın ilişki dinamiklerinin işleneceği günlerde müstakil olarak katılmak mümkündür.",
    durationText: "25 saat",
    instructor: "Abdullah Alçiçek",
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
    id: "uygulamali-enneagram-1-kur",
    slug: "uygulamali-enneagram-egitimleri-1-kur-enneagrama-ve-tiplere-giris",
    title: "Uygulamalı Enneagram Eğitimleri 1. Kur Enneagrama ve Tiplere Giriş",
    priceText: "₺10,000.00",
    poster: "/enneagramavetipleregiris.png",
    category: "enneagram-egitimleri",
    intro:[
      "Enneagramı sadece teorik olarak öğrenmek istemiyorsanız ve bunu hayatınızda gerçek bir dönüşüm aracı olarak kullanmak istiyorsanız, bu eğitim tam size göre.",
      "Eğitimimiz Online’dır. Eğitim süresi toplam 11 hafta/44 saattir.",
      "Eğitim sonunda “Uygulayıcı Enneagram Eğitimcisi” Belgesi verilmektedir.",
      "Eğitim 19.00 – 23.00 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Bu programda Enneagram’ı kitap bilgisi olarak değil, gerçek hayat örnekleriyle çalışan bir yetkinlik olarak öğreneceksiniz. Gerçek vaka örnekleri, ilişki senaryoları, hayat hikayeleri ve iş dünyasından alınan somut durumlarla tiplerin davranışlarını, motivasyonlarını ve kendilerini ifade ediş biçimlerini derinlemesine analiz edeceğiz. Bol miktarda uygulama ve pratik çalışma ile öğrendiğiniz her kavramın günlük hayattaki karşılığını net ve somut bir şekilde göreceksiniz.",
    topics: [
      "Enneagram’ı sadece hafızanızda kalan bir bilgi olmaktan çıkarıp, koçlukta, terapide, liderlikte ve ilişkilerde kullanabileceğiniz güçlü bir araç haline getirmek.",
      "Enneagramı sadece teorik olarak öğrenmek istemiyorsanız ve bunu hayatınızda gerçek bir dönüşüm aracı olarak kullanmak istiyorsanız, bu eğitim tam size göre.",
    ],
    audienceTitle: "Kimler Katılabilir?",
    audience:
      "Koçlar, terapistler, eğitimciler, psikologlar ve danışmanlar İK profesyonelleri, liderler ve yöneticiler, kişisel gelişim alanında derinleşmek isteyen herkes Enneagram’ı bilip pratikte kullanmakta zorlananlar Enneagram’a sıfırdan başlamak isteyen herkes katılabilir.",
    durationText: "44 saat",
    instructor: "Abdullah Alçiçek",
    schedule:
      "Online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce WhatsApp grubuna ekleneceksiniz ve giriş linki bu grup üzerinden paylaşılacaktır.",    
    comments: [
      {
        name: "",
        role: "",
        rating: 5,
        text: "",
        date: "",
      },
      {
        name: "",
        role: "",
        rating: 5,
        text: "",
        date: "",
      },
    ],
  },
  {
    id: "film-atolyesi",
    slug: "film-atolyesi",
    title: "Enneagram Film Atölyesi",
    priceText: "₺550.00 – ₺2,000.00",
    poster: "/enneagramfilatolyesi.jpg",
    category: "enneagram-gelisim-atolyeleri",
    intro:[
      "Çoklu alımlarda (4 Adet Atölye) İndirim! Banka Havalesi İle Yapılan Ödemelerde İLAVE Yüzde 10 İndirim!",
      "( Tarih seçerken ‘Çoklu Alım’ seçeneğini seçtiğinizde indirimli fiyat görüntülenmektedir.)",
      "Güncel film instagram.com/enneagramegitim hesabımızda yayınlanmaktadır.",
      "Atölyemiz online’dır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Bu atölyeler Enneagram eğitimlerinde teorik olarak işlenen mizaç tiplerinin film karakteri analizi yapılarak pekiştirilmesi, mizaç tipleri analizi konusunda katılımcıların bilgilerini sürekli güncellemeleri ve pratik hale getirmeleri için düzenlenir.",
    topics: [
      "Her hafta duyurulan film, atölye öncesinde katılımcılarca izlenerek filmdeki ana karakterlerin Enneagram mizaç tiplerinin tespiti/tahmini yapılır. ",
      "Atölye içerisinde filmdeki ana karakterler, Ana Mizaç, Kanat Mizaç, Alt Tip ve Gelişim Seviyeleri bakımından irdelenir. Duygu, düşünce ve davranış motivasyonları üzerinde durulur.",
      "Tutarlı bir şekilde kurgulanmış film karakterlerinin Enneagram mizaç tiplerini incelemek ve karakterlerin birbirleri ile ilişkilerini, bu ilişkilerdeki davranışlarını, tepkilerini ve motivasyonları analiz ederek Enneagram mizaç tiplerini görmektir.",
      "Teorik bilgilerin pratiğe aktarılması amaçlanır.",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience: "Enneagram Film Atölyeleri programı herkese açıktır. Temel Seviye Enneagram bilgisi olması yeterlidir.",
    durationText: "2+ saat",
    instructor: "Abdullah Alçiçek",
    schedule: "Güncel film instagram.com/enneagramegitim hesabımızda yayınlanmaktadır.",
    comments: [
      {
        name: "G.B",
        role: "",
        rating: 5,
        text: "1 seneyi geçti, günlük yaşamımızda karşılaşma ihtimalimizin zor olduğu tipleri her halleri ile görebiliyoruz, bana en önemli katkısı hayatımda sağlıksız olarak mevcut olan bazı mizaç tiplerinden uzak duruyorken en sağlıklı hallerini görüp bu tiplere olan saygımın artmasıdır. Abdullah hocamız zaten kendi alanında son derece yetkin, her geri bildirimi özenle dinleyip üzerine düşünen bir eğitmen. Beyin fırtınası havasında geçen film atölyelerine katılmanızı tavsiye ederim",
        date: "2022-07-01",
      },
      {
        name: "S. A. D",
        role: "",
        rating: 5,
        text: "ilm atolyelerine Ekim ayindan beri duzenli katiliyorum imkani olan herkese cok cok tavsiye ediyorum. Butun bu egitimlerde ogrendigimiz herseyin hem saglamasi hem de uygulama alani. Ogrendim anladim saniyor insan ama ben kendi adima cogu zaman filmdeki karakterleri dogru analiz edemiyorum. Mizaci dogru tuttursam kanat ya da alt tipden illa bir fire veriyorum, oyleki kendi mizac tipim 9’un oldugu filmde bile dogru teshis yapamadim 😅Abdullah Hoca cok guzel ornekler seciyor, cok ince ayrintilarina kadar farklari anlatiyor. Kendi adima her atolyede yeni birseyler ogreniyorum. Kendime bir hedef koydum, ne zaman artik istikrarli bir sekilde filmdeki karakterleri dogru tespit etmeye baslarsam iste o zaman ben enneagrami ogrendim diyebilecegim 😅insallah",
        date: "2022-07-01",
      },
    ],
  },
  {
    id: "kisilik-analizi-atolyesi",
    slug: "enneagram-ile-kisilik-analizi-atolyesi",
    title: "Enneagram ile Kişilik Analizi Atölyesi",
    priceText: "₺550.00 – ₺2,000.00",
    poster: "/enneagramkisilikatolyesi.jpg",
    category: "enneagram-gelisim-atolyeleri",
    intro:[
      "Ünlü isimlerin incelendiği “Enneagram Kişilik Analiz Atölyesi” Enneagram eğitimlerinde teorik olarak işlenen mizaç tiplerinin, kişilerin karakter analizinin yapılarak pekiştirilmesi, mizaç tipleri analizi konusunda katılımcıların bilgilerini sürekli güncellemeleri ve pratik hale getirmeleri için düzenlenir.",
      "Çoklu alımlarda (4 Adet Atölye) İndirim! Banka Havalesi İle Yapılan Ödemelerde İLAVE Yüzde 10 İndirim!",
      "( Tarih seçerken ‘Çoklu Alım’ seçeneğini seçtiğinizde indirimli fiyat görüntülenmektedir. )",
      "Güncel ünlü isim instagram.com/enneagramegitim hesabımızda yayınlanmaktadır.",
      "Atölyemiz online’dır."
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Her hafta duyurulan tanınmış bir kişi, atölye öncesinde katılımcılarca sosyal platformlardan izlenerek, karakterin Enneagram mizaç tiplerinin tespiti/tahmini yapılır. Ana Mizaç, Kanat Mizaç, Alt Tip ve Gelişim Seviyeleri bakımından irdelenir. Duygu, düşünce ve davranış motivasyonları üzerinde durulur.",
    topics: [
      "Her hafta duyurulan film, atölye öncesinde katılımcılarca izlenerek filmdeki ana karakterlerin Enneagram mizaç tiplerinin tespiti/tahmini yapılır. ",
      "Atölye içerisinde filmdeki ana karakterler, Ana Mizaç, Kanat Mizaç, Alt Tip ve Gelişim Seviyeleri bakımından irdelenir. Duygu, düşünce ve davranış motivasyonları üzerinde durulur.",
      "Tutarlı bir şekilde kurgulanmış film karakterlerinin Enneagram mizaç tiplerini incelemek ve karakterlerin birbirleri ile ilişkilerini, bu ilişkilerdeki davranışlarını, tepkilerini ve motivasyonları analiz ederek Enneagram mizaç tiplerini görmektir.",
      "Teorik bilgilerin pratiğe aktarılması amaçlanır.",
    ],
    audienceTitle: "Kimler Katılabilir ?",
    audience: "“Enneagram Kişilik Analiz Atölyeleri” programı herkese açıktır. Temel Seviye Enneagram bilgisi olması yeterlidir.",
    durationText: "2+ saat",
    instructor: "Abdullah Alçiçek",
    schedule: "Güncel film instagram.com/enneagramegitim hesabımızda yayınlanmaktadır.",
    comments: [
      {
        name: "",
        role: "",
        rating: 5,
        text: "",
        date: "",
      },
      {
        name: "",
        role: "",
        rating: 5,
        text: "",
        date: "",
      },
    ],
  },
  {
    id: "cocuk-merkezli-enneagram",
    slug: "cocuk-merkezli-enneagram-egitimi",
    title: "Çocuk Merkezli Enneagram Eğitimi",
    priceText: "₺3,250.00",
    poster: "/cocukmerkezliegitim.jpg",
    category: "enneagram-egitimleri",
    intro:[
      "Bu eğitim, 9 mizacın “Çocuk Merkezli” olarak ele alındığı ‘Enneagram Gelişim Modülü’ eğitimlerindendir.",
      "Eğitimimiz Online’dır.",
      "Eğitim sonunda Katılım Belgesi verilmektedir.",
      "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
    ],
    topicsTitle: "Eğitim İçeriği",
    topicsIntro: "Bu eğitim ile çocuklarla çalışan uzmanların ve ebeveynlerin onları daha yakından tanıyarak, çocukların sağlıklı kişilik gelişimlerine eşlik edebilmeleri için yetişkinlere farkındalık kazandırma ve temel bilgileri verme amaçlanır.",
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
    audience: "Öğretmenler, rehber öğretmenler, anne-babalar, psikologlar, okul/kurs yönetici ve çalışanları, eğitim koçları, aile danışmanları ve çocuklardaki mizaç farklılıklarını öğrenmek isteyen herkes bu eğitime katılabilir.",
    durationText: "12 saat",
    instructor: "Muammer Küçükyazıcı",
    schedule: "Eğitim 19.30 – 22.30 saatlerinde, online olarak yapılmaktadır. Eğitim tarihinden 1 gün önce eğitimin WhatsApp grubuna ekleneceksiniz ve online eğitim için giriş linki ve diğer bilgiler bu gruptan sizinle paylaşılacaktır.",
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
];
