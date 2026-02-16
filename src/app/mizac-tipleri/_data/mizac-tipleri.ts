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
};

export const mizacTipleri: MizacItem[] = [
  {
    slug: "mizac-1",
    title: "Mizaç 1",
    heroLabel: "Reformcu",
    subtitle: "Temel ana arayış: Doğru eylem ve kusursuzluk.",
    image: "/mizaclar/mizac-1.png",
    coreDesire:
      "İyi, erdemli ve dengeli olmak; kendi standartlarına göre doğru yaşamak.",
    coreFear:
      "Bozuk, kötü ya da kusurlu olmak ve bunun başkaları tarafından fark edilmesi.",
    longDescription: `İkincil arayışlar: İdeal olanı aramak, davranışlarında tutarlı ve akılcı olmaya çalışmak,mükemmeliyete yönelim göstermek.

Kendi dilinden;
Ciddi, prensipli, idealist, standartları olan akılcı ve mantıklı hareket eden biriyim. Yaptığım işi tam ve olabildiğince mükemmel yapmaya çalışırım. Düzenli ve titiz olup ayrıntılara, kaliteye ve bir işi gereği gibi tam olarak yapmaya özen gösteririm.
Bilgi, gözlem ve verileri tanımlayan, sınıflandıran, kıyaslayan dikkatlice analiz edip sonuçlar çıkarmaya çalışan bir zihinsel yapıya sahibim. Hata, eksik ve yanlışları çabuk fark eder ve mümkünse mutlaka düzeltmeye çalışırım. Kendimi ve
çevremdekileri geliştirmeye çalışır, hata ve yanlışlar nedeniyle uyarırım. Görev ve sorumluluklarımı tam olarak yerine getirmeye gayret ederim, bunu yapamadığımda çok rahatsızlık olurum.`,
    traits: [
      "Mükemmeliyetçi",
      "İlkeli & dürüst",
      "Sorumluluk sahibi",
      "Eleştirel iç ses",
      "Reform dürtüsü",
      "Öz-disiplinli",
    ],
    quote:
      "Mükemmel olan iyinin düşmanıdır — ama Mizaç 1 için bu ikilem asla bitmez.",
  },
  {
    slug: "mizac-2",
    title: "Mizaç 2",
    heroLabel: "Yardımsever",
    subtitle:
      "Temel ana arayış: Duygusal paylaşımda bulunmak ve sevilen bir kişi olmak.",
    image: "/mizaclar/mizac-2.png",
    coreDesire: "Sevilmek, takdir edilmek ve başkalarına vazgeçilmez olmak.",
    coreFear:
      "Sevilmemeye, istenilmemeye ya da ihtiyaç duyulmamaya değer bulmak.",
    longDescription: `İkincil arayışlar: Duygularını göstermek ve paylaşmak, ilgi ve değer gördüğü ilişkiler kurmak, ihtiyaçlara duyarlı olmak ve yardımlaşmak.


Kendi dilinden;
Ağırlıklı olarak duygusal olan, ilişkilerini çok önemseyen, arkadaş canlısı, sevgiye çok değer veren, cana yakın, konuşkan, çabuk ve kolay iletişim kurabilen bir yapıya sahibim.
İlişkilerinde ilgi, sevgi ve değer görmeyi ve göstermeyi çok önemseyen şefkatli ve sıcakkanlı biriyim. Çevremdekileri memnun etmeye, ihtiyaçlarını fark edip yardım etmeye, kırmamaya ve mümkün oldukça ‘hayır’ dememeye çalışırım.
Bununla birlikte ihtiyaç ve beklentilerim konusunda çevremdekilerin de duyarlı olmasını beklerim. Olumsuz söz ve tavırlar karşısında alınır ve rahatsız olurum.
Zaman zaman sitem edip küskünlük yaşasam da bunu uzatmak istemem. Hak ettiğim ilgi, sevgi ve takdiri göremediğimde sitem edebilir, hatta bazen kızabilirim.`,
    traits: [
      "Sıcak & cömert",
      "Empatik",
      "İlişki odaklı",
      "Fedakâr",
      "Sezgisel",
      "Duygusal zeka",
    ],
    quote: "Sevmek vermektir — Mizaç 2 bunu her nefesiyle yaşar.",
  },
  {
    slug: "mizac-3",
    title: "Mizaç 3",
    heroLabel: "Başarıcı",
    subtitle: "Temel ana arayış: İşlevsellik ve yetkinliklerde üstün olmak.",
    image: "/mizaclar/mizac-3.png",
    coreDesire: "Değerli, başarılı ve takdir edilen biri olmak.",
    coreFear: "Değersiz, başarısız ya da sıradan biri olmak.",
    longDescription: `İkincil arayışlar: En yetkin/etkin ve en işlevsel kişi olmaya çalışmak, hayranlık uyandıran bir imaja sahip olmak, hedefe ve başarıya odaklanıp ulaşmak.

    Kendi dilinden;
Kimliğim ve etkinliğimle hayranlık uyandırmayı seven, başarılı ve etkileyici olmaktan hoşlanan, bir şeyler başardığımda kendimi değerli ve önemli hisseden, statü ve görünümü önemseyen bir yapıya sahibim.
Sonuca ulaşıncaya kadar hedefine odaklanabilen, hırslı, enerjik ve rekabetçi biriyim. Benim için başarmak ve çevremde hayranlık uyandırmak önemlidir. Başarısızlığa ve yenilgiye hiç tahammül edemem. Kendimi ve çevremi motive etmek ve ikna etmek, yeteneklerimi ve yapıp ettiklerimi ilgi çekici ve hayranlık uyandırıcı şekilde sunarak insanları etkilemek konusunda yetenekliyim.
Gerektiğinde amacım doğrultusunda şartlara kolayca adapte olmakta ve diplomatik davranmakta zorlanmam.
Sonuca hızlı, pratik ve en kısa yoldan ulaşmak için gereken ne ise yapar, olumsuzlukların ve duygularımın işime ve hedefime ulaşmama engel olmasına izin vermem.`,
    traits: [
      "Hedef odaklı",
      "Uyumlu",
      "Karizmatik",
      "Hırslı",
      "Pratik zeka",
      "Liderlik",
    ],
    quote: "Başarı bir varış noktası değil, Mizaç 3 için bir yaşam biçimidir.",
  },
  {
    slug: "mizac-4",
    title: "Mizaç 4",
    heroLabel: "Bireyci",
    subtitle: "Temel ana arayış: Duygusal derinlik, anlam ve özgün kendilik.",
    image: "/mizaclar/mizac-4.png",
    coreDesire:
      "Kendisi olmak, özgün kimliğini bulmak ve derin anlam taşıyan bir yaşam sürmek.",
    coreFear: "Kimliksiz, sıradan ve anlamsız olmak.",
    longDescription: `İkincil arayışlar; Kendini bulmaya çalışan, anlaşılmak ve hayata anlamlı katkıdabulunmak istemek, anlam arayan ve duygularını yoğun ve derin yaşamak.

    Kendi dilinden;
Duygusal yanı ağır basan, ancak hislerini her zaman göstermeyen, romantik, hassas, empati kurmayı önemseyen, özgünlüğe ve bireyselliğe çok önem veren, kendime ve çevreme karşı samimi ve dürüst olmaya çalışan biriyim. Yaşadıklarım ve hissettiklerim üzerinde derinlemesine düşünür, kendimi ve duygularımı anlamaya çalışırım.
Anlamayı ve anlaşılmayı çok önemseyen, duygu ve deneyimlerde derinliği seven, tutkulu bir yapıya sahibim. Yapıp ettiklerimin derin, anlamlı ve benzersiz olmasını isterim. Hayatın önemli gördüğüm alanlarında mutlaka anlam, güzellik ve estetik ararım. Değişen duygu durumlarım nedeniyle bazen çok neşeli ve canlı, bazen de çok hüzünlü ve içe kapanık olabilirim.
Hassas ve kolay incinebilir bir yapıya sahip olmakla birlikte bunu çok göstermemeye çalışırım. Muhataplarımın beni doğru anlamasını ve hassasiyetlerimi fark etmesini isterim/beklerim.`,
    traits: [
      "Özgün & yaratıcı",
      "Duygusal derinlik",
      "Estetik duyarlılık",
      "İç gözlem",
      "Anlamlılık arayışı",
      "Empatik",
    ],
    quote:
      "Mizaç 4, kaybolmuş olanı ararken aslında her zaman kendini bulmaya çalışır.",
  },
  {
    slug: "mizac-5",
    title: "Mizaç 5",
    heroLabel: "Araştırmacı",
    subtitle: "Temel ana arayış: Her şeyi tam bilmek ve bağımsız yetkinlik.",
    image: "/mizaclar/mizac-5.png",
    coreDesire: "Yetkin, bilgili ve kendi kendine yetebilir olmak.",
    coreFear: "Yetersiz, bilgisiz ya da başkalarına muhtaç olmak.",
    longDescription: `İkincil arayışlar: Dahil olmadan analitik gözlem yapmaya çalışan, araştırıp düşünmek isteyen, kendinde güven ve yeterliliğe sahip olmaya çalışan.

Kendi dilinden;
Mantıklı, soyut düşünebilen, tüm derinliği ile bilgiye meraklı olan, yalnız kalmaktan rahatsız olmayan, ağırlıklı olarak içe dönük, kendini ve olayları duygulardan bağımsız olarak gözlemleyip rasyonel ve nesnel analiz yapmaya eğilimli biriyim. Özellikle ilgilendiğim alanda uzmanlaşmayı ve derinleşmeyi önemserim.
Düşünmek benim için başlı başına bir iştir. İçlerine girmeksizin olayları ve insanları objektif olarak gözlemleyip, analiz etmeye ve anlamaya çalışırım. Sosyal ilişkilerde biraz mesafeliyim. Kalabalık ortamlardan, aşırı hareketli ve dürtüsel davranan insanlardan, duygusal dışavurumlardan pek hoşlanmam. Bağımsız olmaya ve kendi kendime yetmeye çalışırım, gerektiğinde azla yetinebilir ve bağımlılıklarımı azaltabilirim.`,
    traits: [
      "Analitik",
      "Meraklı",
      "Bağımsız",
      "Gözlemci",
      "Derin düşünür",
      "Uzmanlaşma",
    ],
    quote: "Bilgi, Mizaç 5 için hem sığınak hem de özgürlüktür.",
  },
  {
    slug: "mizac-6",
    title: "Mizaç 6",
    heroLabel: "Sadık",
    subtitle:
      "Temel ana arayış: Zihinsel netlik, kesinlik ve hayata karşı destek.",
    image: "/mizaclar/mizac-6.png",
    coreDesire:
      "Güvenlik, destek ve rehberlik bulmak; güvenilir sistemlere ait olmak.",
    coreFear: "Desteksiz kalmak, terk edilmek ya da savunmasız olmak.",
    longDescription: `İkincil arayışlar: Bilgi ve veri toplamaya çalışan, tehlike-risk ve zarardan kaçınan, güvenli karar ve eylemi arayışı.

Kendi dilinden;
Kendimi güven ve emniyet içinde hissetmeyi çok önemseyen, tedbirli, temkinli, meraklı ve sorgulayıcı biriyim. Gereksinim duyabileceğim her türlü bilgi ve veriyi öğrenmeye çalışırım. İnsanlara kolay güvenemem. Ama güvendiğim insanlara karşı sadık, güvenilir ve destekleyici olurum. Muhatabımda küçük bir ima veya gizli bir niyet hissettiğimde kendimi geri çeker ve durumu sorgularım. Problemlere ve potansiyel tehlikelere karşı dikkatli ve kontrolcü bir zihnim var. Kararlarımı duygulardan çok mantık ve akıl çerçevesinde vermeye çalışırım.
Zarara uğramaktan ve yanlış yapmaktan çokça kaçındığım için karar verme sürecim uzun sürer. Bu süreçte zihnim, ihtimaller arasında sürekli gidip gelir. Süreci kontrol edemediğim durumlarda veya olumsuzluklar ve belirsizlikler karşısında gergin ve kaygılı olmaya meyilliyim. Emin olmadığım durumlarda bir tercihte bulunmakta zorlanırım. Her zaman güvenilir ve bilgili bir otoriteye ihtiyaç duyarım.`,
    traits: [
      "Sadık & güvenilir",
      "Sorumlu",
      "Öngörülü",
      "Topluluk odaklı",
      "Pratik",
      "Cesaretli",
    ],
    quote: "Mizaç 6, güven inşa etmek için her şeyi göze alır.",
  },
  {
    slug: "mizac-7",
    title: "Mizaç 7",
    heroLabel: "Hevesli",
    subtitle: "Temel ana arayış: Keşif, yenilik ve keyifli deneyim.",
    image: "/mizaclar/mizac-7.png",
    coreDesire: "Mutlu, tatmin olmuş ve hayattan doyum alan biri olmak.",
    coreFear: "Acı çekmek, sıkılmak ya da ihtiyaçlardan yoksun kalmak.",
    longDescription: `İkincil arayışlar; Hayal ederek gerçekliğe alternatif oluşturabilmek, kolay ve keyifli olanı aramak, denemek ve merakını yeterince gidermek.

Kendi dilinden;
Keşfetmeyi ve yeni şeyler deneyimlemeyi seven, mantığıyla hareket eden, duygulara takılmayan, iyimser, meraklı, dışa dönük, neşeli, konuşkan ve girişken biriyim. Kısıtlanmaktan hoşlanmayan, spontan, heyecan verici deneyimlerden hoşlanan, monotonluktan (tekdüzelikten) çabuk sıkılan, rahat ve keyfine düşkün biriyim.
Birçok seçenek ve alternatifin olmasını isteyen, vizyoner, geleceğe odaklı, hızlı ve biraz aceleci biriyim. Düşünce çağrışımlarım hızlı olup olaylar ve fikirler arasında hızla bağlantılar kurabilen, pratik düşünen, yeni fikirlere açık bir yapıya sahibim.
Dikkatim kolayca daha cazip ve çekici olan şeye yönelebilir. Problemler karşısında ve zor durumlarda hızlı ve pratik çözümler ararım. Bulamadığımda ise sorunlara takılmam ve önüme bakmayı tercih ederim.`,
    traits: [
      "Enerjik & iyimser",
      "Çok yönlü",
      "Spontane",
      "Vizyoner",
      "Eğlenceli",
      "Yaratıcı",
    ],
    quote:
      "Mizaç 7 için hayat, dolu dolu yaşanmayı bekleyen sonsuz bir macera kitabıdır.",
  },
  {
    slug: "mizac-8",
    title: "Mizaç 8",
    heroLabel: "Meydan Okuyucu",
    subtitle: "Temel ana arayış: Varlığını koruma ve güç arayışı.",
    image: "/mizaclar/mizac-8.png",
    coreDesire: "Kendini korumak, güçlü olmak ve kendi hayatını kontrol etmek.",
    coreFear:
      "Başkaları tarafından kontrol edilmek, zarar görmek ya da güçsüz kalmak.",
    longDescription: `İkincil arayışlar: Aktif koruyuculuk, etkin olmak, öne çıkma ve hükmedicilik.

Kendi dilinden;
Cesur, kararlı, ön alan, kendinden emin, otoriter, insanları etkilemeyi seven, güçlü ve bağımsız olmayı önemseyen, risk almaktan çekinmeyen, zorluklara karşı dayanıklı, mücadeleden ve çatışmadan kaçınmayan biriyim. Ancak içimde herkese göstermediğim çok merhametli bir yönüm vardır.
Çabuk öfkelenirim ve öfkemi açıkça, çekinmeden ifade ederim. Zayıfı ve güçsüzü korurum, adaletsizliğe asla tahammül edemem ve mutlaka hakkımı alıncaya kadar da sonuna kadar her türlü çatışmayı göze alırım.
Kararsızlık, pasiflik ve boyun eğmeye asla tahammül edemeyen, müdahaleci, kararlı, iş bitirici hızlı ve aceleci biriyim. Başkalarının hakkımda ne düşündüğünü pek de dikkate almam. Açık sözlüyüm, net ve direkt konuşurum.`,
    traits: [
      "Güçlü & kararlı",
      "Lider",
      "Koruyucu",
      "Doğrudan",
      "Cesur",
      "Adalet duygusu",
    ],
    quote: "Mizaç 8'in gücü, onu tanıyanlarca bir kalkan gibi hissedilir.",
  },
  {
    slug: "mizac-9",
    title: "Mizaç 9",
    heroLabel: "Arabulucu",
    subtitle: "Temel ana arayış: İçsel güç, huzur ve duyumsal rahatlık.",
    image: "/mizaclar/mizac-9.png",
    coreDesire: "İç huzura kavuşmak, bütünlük ve uyum içinde yaşamak.",
    coreFear: "Kayıp, ayrılık ya da çevreyle bağını koparmak.",
    longDescription: `İkincil arayışlar: Huzuru korumak, rahat ve rahatlatıcı olana yönelmek, bütünlük ve uyumu bozmamak.

Kendi dilinden;
Barış ve uzlaşmayı önceleyen, uyum ve huzuru arayan, sabırlı, sakin, çatışma ve gerilimden kaçınan, sosyal ortamlarda görmezden gelinmekten hoşlanmayan ancak öne çıkmayı da pek tercih etmeyen biriyim. İnsanları olduğu gibi kabul etmeye, rahatsızlık ve gerilime neden olmamaya çalışırım. Uyum ve huzuru bozmamak adına ihtiyaçlarımı erteleyebilirim.
Olayları ve durumları her açıdan görmeye çalıştığım için harekete geçmek ve önceliklerimi belirlemek zaman alır. Bu yüzden hızlı tepki vermeyen, karar ve eylemlerini erteleyen biri gibi görünebilirim. 
Zor ve karmaşık sorunları, uygun olmayan müdahalelerle içinden çıkılmaz hale getirmektense zamanla çözüleceğini ümit ederek akışına bırakmayı tercih ederim. Üstüme gelindiğinde veya istemediğim bir şeye zorlandığımda öncelikle öfkemi ve tepkimi kontrol etmeye çalışırım. Olumsuz durumlar karşısında açıkça çatışmamaya eğilimliyim ancak biriken öfkem bazen aşırı ve ani patlamalar şeklinde ortaya çıkabilir.`,
    traits: [
      "Kabul edici",
      "Huzurlu",
      "Arabulucu",
      "Sabırlı",
      "Destekleyici",
      "Bütünleştirici",
    ],
    quote:
      "Mizaç 9'un sessizliği, içinde barındırdığı derinliğin yalnızca küçük bir yansımasıdır.",
  },
];
