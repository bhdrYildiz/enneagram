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
    longDescription: `İkincil arayışlar: İdeal olanı aramak, davranışlarında tutarlı ve akılcı olmaya çalışmak, doğru ile yanlışı ayırt etmek, sorumluluklarını eksiksiz yerine getirmek ve mükemmeliyete yönelim göstermek.

Kendi dilinden;
Ciddi, prensipli, idealist, standartları olan, akılcı ve mantıklı hareket eden biriyim. Yaptığım işi tam, doğru ve olabildiğince iyi yapmaya çalışırım. Düzenli ve titiz olup ayrıntılara, kaliteye ve bir işi gerektiği gibi tamamlamaya özen gösteririm.

Bilgi, gözlem ve verileri tanımlayan, sınıflandıran, kıyaslayan; dikkatlice analiz edip sonuçlar çıkarmaya çalışan bir zihinsel yapıya sahibim. Hata, eksik ve yanlışları çabuk fark eder ve mümkünse bunları düzeltmeye çalışırım. Bir şeyin daha doğru, daha düzenli veya daha nitelikli yapılabileceğini düşündüğümde bunu görmezden gelmek benim için kolay değildir.

Kendimi geliştirmek kadar çevremdeki insanların ve içinde bulunduğum sistemlerin de gelişmesini önemserim. Bu nedenle zaman zaman eleştirel, düzeltici veya fazla kuralcı görünebilirim. Ancak bunun arkasında çoğunlukla işleri doğru yapma, sorumlulukları yerine getirme ve ortaya nitelikli bir sonuç çıkarma isteğim vardır.

Görev ve sorumluluklarımı tam olarak yerine getirmeye gayret ederim. Yapmam gereken bir şeyi eksik bıraktığımda veya kendi standartlarımın altında kaldığımı düşündüğümde bundan rahatsız olabilirim. Kendime karşı yüksek beklentilerim olduğu için içimde sürekli neyin daha iyi yapılabileceğini sorgulayan güçlü bir değerlendirme mekanizması çalışır. Gelişimimde ise her şeyin kusursuz olmak zorunda olmadığını, bazen yeterince iyi olanı kabul etmenin de değerli olduğunu fark etmek bana esneklik kazandırır.`,
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
    longDescription: `İkincil arayışlar: Duygularını göstermek ve paylaşmak, ilgi ve değer gördüğü ilişkiler kurmak, insanların ihtiyaçlarına duyarlı olmak, yardımcı olmak ve karşılıklı sevgi bağlarını güçlendirmek.

Kendi dilinden;
Ağırlıklı olarak duygusal olan, ilişkilerini çok önemseyen, arkadaş canlısı, sevgiye değer veren, cana yakın, konuşkan ve kolay iletişim kurabilen bir yapıya sahibim. İnsanlarla aramda sıcak, samimi ve karşılıklı bir bağ oluşması benim için önemlidir.

İlişkilerimde ilgi, sevgi ve değer görmeyi ve göstermeyi önemseyen şefkatli ve sıcakkanlı biriyim. İnsanların neye ihtiyaç duyduğunu çoğu zaman onlar söylemeden fark edebilir; destek olmak, yardımcı olmak ve karşımdaki kişinin kendisini iyi hissetmesini sağlamak isteyebilirim.

Çevremdekileri memnun etmeye, ihtiyaçlarını fark edip yardım etmeye, kırmamaya ve mümkün olduğunca “hayır” dememeye çalışırım. İnsanlarla kurduğum bağlar benim için yalnızca sosyal ilişkiler değildir; kendimi değerli ve ait hissetmemde de önemli bir yere sahip olabilir.

Bununla birlikte benim de ihtiyaçlarımın ve beklentilerimin fark edilmesini isterim. Verdiğim ilginin, emeğin veya desteğin görülmediğini düşündüğümde kırılabilir, alınabilir ya da sitem edebilirim. Bazen kendi ihtiyaçlarımı açıkça söylemek yerine karşımdaki kişinin bunları kendiliğinden anlamasını bekleyebilirim.

İnsanlara sunduğum sevgi, destek ve şefkat güçlü yanlarımdandır. Gelişimimde ise başkalarının ihtiyaçları kadar kendi ihtiyaçlarımı da fark etmek, gerektiğinde sınır koyabilmek ve değerimin yalnızca insanlar için yaptıklarıma bağlı olmadığını görmek bana daha dengeli ilişkiler kurma imkânı verir.`,
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
    longDescription: `İkincil arayışlar: En yetkin, etkin ve işlevsel kişi olmaya çalışmak, hayranlık uyandıran bir imaja sahip olmak, hedefe ve başarıya odaklanmak, potansiyelini görünür sonuçlara dönüştürmek.

Kendi dilinden;
Kimliğim ve etkinliğimle hayranlık uyandırmayı seven, başarılı ve etkileyici olmaktan hoşlanan, bir şeyler başardığımda kendimi değerli ve önemli hisseden; statü, performans ve görünümü önemseyen bir yapıya sahibim.

Sonuca ulaşıncaya kadar hedefime odaklanabilen, hırslı, enerjik ve rekabetçi biriyim. Önümde net bir hedef olduğunda enerjimi hızlı biçimde organize edebilir ve şartlara uyum sağlayabilirim. Zamanı verimli kullanmayı, gereksiz ayrıntılarda kaybolmadan sonuç almayı ve yaptığım işin somut bir karşılığını görmeyi önemserim.

Kendimi ve çevremdekileri motive etmek, insanları bir hedef etrafında harekete geçirmek, yeteneklerimi ve yaptıklarımı etkileyici biçimde sunmak konusunda doğal bir beceri gösterebilirim. Gerektiğinde amacım doğrultusunda şartlara kolayca adapte olabilir ve farklı ortamlarda benden beklenen rolü hızla anlayabilirim.

Başarısızlık ve yetersiz görünmek benim için zorlayıcı olabilir. Bu nedenle bazen yorulduğumu, üzüldüğümü veya zorlandığımı fark etmeden hedefe doğru ilerlemeye devam edebilirim. Duygularımın performansımı yavaşlatmasına izin vermemeye çalışırken kendi iç dünyamla bağlantımı ikinci plana atabilirim.

Başarma isteğim, yüksek motivasyonum ve uyum becerim önemli güçlerimdir. Gelişimimde ise değerimin yalnızca başarılarımdan, performansımdan veya başkalarının takdirinden oluşmadığını fark etmek; zaman zaman durup gerçekten ne istediğimi ve ne hissettiğimi anlamak bana daha bütünlüklü bir başarı anlayışı kazandırır.`,
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
    longDescription: `İkincil arayışlar: Kendini bulmaya çalışmak, anlaşılmak, hayata anlamlı ve özgün bir katkıda bulunmak, duyguların derinliğini keşfetmek ve kendine özgü bir kimlik oluşturmak.

Kendi dilinden;
Duygusal yanı güçlü, ancak hislerini her zaman göstermeyen, romantik, hassas, empati kurmayı önemseyen, özgünlüğe ve bireyselliğe değer veren; kendime ve çevreme karşı samimi ve dürüst olmaya çalışan biriyim.

Yaşadıklarım ve hissettiklerim üzerinde derinlemesine düşünür, kendimi ve duygularımı anlamaya çalışırım. Benim için yalnızca bir olayın ne olduğu değil, bende ne hissettirdiği ve ne anlam taşıdığı da önemlidir. İnsanların ve olayların yüzeyde görünen taraflarının arkasındaki anlamı fark etmeye eğilimliyim.

Anlamayı ve anlaşılmayı önemseyen, duygu ve deneyimlerde derinliği seven, tutkulu bir yapıya sahibim. Yaptıklarımın sıradan olmamasını; beni, bakış açımı ve özgünlüğümü yansıtmasını isterim. Hayatın önemli gördüğüm alanlarında anlam, güzellik, estetik ve özgünlük ararım.

Duygusal hassasiyetim sayesinde insanların yaşadıklarını derinden hissedebilir ve güçlü bir empati geliştirebilirim. Bununla birlikte değişen duygu durumlarım nedeniyle bazen oldukça canlı ve üretken, bazen daha hüzünlü ve içe dönük olabilirim. Anlaşılmadığımı veya kendimi tam olarak ifade edemediğimi hissettiğimde iç dünyama çekilebilirim.

Özgünlük, derinlik ve anlam üretme kapasitem önemli güçlerimdir. Gelişimimde ise her duygunun beni tanımlamadığını fark etmek, sahip olduklarımı görebilmek ve anlamlı olanın her zaman yoğun olmak zorunda olmadığını kabul etmek bana daha dengeli bir iç dünya kazandırır.`,
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
    longDescription: `İkincil arayışlar: Olaylara dahil olmadan analitik gözlem yapmak, araştırmak ve düşünmek, bilgi yoluyla dünyayı anlamlandırmak, yeterlilik geliştirmek ve bağımsızlığını korumak.

Kendi dilinden;
Mantıklı ve soyut düşünebilen, bilgiye derin bir merak duyan, yalnız kalmaktan rahatsız olmayan, ağırlıklı olarak içe dönük; kendimi ve olayları duygulardan bağımsız biçimde gözlemleyip rasyonel ve nesnel analiz yapmaya eğilimli biriyim.

Özellikle ilgilendiğim alanlarda yüzeysel bilgiyle yetinmek yerine uzmanlaşmayı ve derinleşmeyi önemserim. Bir konuyu gerçekten anlamadan onun hakkında kesin konuşmak istemem. Araştırmak, düşünmek, kavramlar arasında bağlantılar kurmak ve zihnimde tutarlı bir çerçeve oluşturmak benim için oldukça değerlidir.

Düşünmek benim için başlı başına bir iştir. Olayların içine hemen dahil olmak yerine önce gözlemlemek, anlamak ve yeterli bilgiye sahip olmak isterim. Bilmediğim veya hazırlıksız olduğum bir konuda harekete geçmek beni rahatsız edebilir. Bu nedenle dışarıdan mesafeli görünsem de zihnimde yoğun bir değerlendirme süreci yaşanıyor olabilir.

Sosyal ilişkilerde kişisel alanımı ve bağımsızlığımı önemserim. Aşırı hareketli ortamlar, yoğun duygusal talepler veya sürekli iletişim beklentisi beni yorabilir. Enerjimi, zamanımı ve dikkatimi kontrollü kullanmak isterim. Kendi kendime yetebilmek bana güven verir.

Analiz, gözlem ve uzmanlaşma kapasitem önemli güçlerimdir. Gelişimimde ise her şeyi tamamen anlamayı beklemeden deneyimin içine girebilmek, bilgimi paylaşmak ve insanlarla duygusal temas kurmanın bağımsızlığımı ortadan kaldırmadığını görmek yaşamla daha güçlü bağ kurmamı sağlar.`,
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
    longDescription: `İkincil arayışlar: Bilgi ve veri toplamak, tehlike, risk ve zarardan kaçınmak, güvenilir seçenekleri değerlendirmek, belirsizlikleri azaltmak ve güvenli karar ile eylemi bulmak.

Kendi dilinden;
Kendimi güven ve emniyet içinde hissetmeyi önemseyen, tedbirli, temkinli, meraklı ve sorgulayıcı biriyim. Karşılaşabileceğim durumları önceden değerlendirmek ve ihtiyaç duyabileceğim bilgiye sahip olmak beni rahatlatır.

İnsanlara hemen güvenmek yerine onları ve içinde bulunduğum şartları gözlemlemek isterim. Ancak güven duyduğum insanlara karşı oldukça sadık, güvenilir, sorumluluk sahibi ve destekleyici olabilirim. Benim için güven yalnızca söylenen sözlerle değil; tutarlılık, şeffaflık ve davranışlarla oluşur.

Problemleri ve potansiyel tehlikeleri önceden fark etmeye yatkın bir zihnim vardır. Başkalarının gözden kaçırdığı riskleri görebilir, olası sonuçları hesaplayabilir ve kötü ihtimallere karşı hazırlık yapabilirim. Bu özelliğim doğru kullanıldığında güçlü bir öngörü ve sorumluluk becerisine dönüşür.

Zarara uğramaktan veya yanlış karar vermekten kaçındığım için karar verme sürecim zaman zaman uzayabilir. Zihnim farklı ihtimaller arasında gidip gelebilir ve “Ya şöyle olursa?” soruları çoğalabilir. Belirsizlik arttığında güvenilir bilgiye, netliğe veya görüşüne güvendiğim insanların desteğine ihtiyaç duyabilirim.

Sadakatim, riskleri fark etme becerim ve sorumluluk duygum önemli güçlerimdir. Gelişimimde ise bütün ihtimalleri kontrol etmenin mümkün olmadığını kabul etmek, kendi değerlendirmelerime daha fazla güvenmek ve belirsizlik içinde de adım atabileceğimi deneyimlemek içsel güvenimi güçlendirir.`,
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
    longDescription: `İkincil arayışlar: Hayal ederek gerçekliğe alternatifler oluşturmak, kolay ve keyifli olanı aramak, yeni şeyler denemek, merakını gidermek, seçeneklerini çoğaltmak ve hayatın sunduğu deneyimleri keşfetmek.

Kendi dilinden;
Keşfetmeyi ve yeni şeyler deneyimlemeyi seven, mantığıyla hareket eden, olumsuz duygulara uzun süre takılmak istemeyen, iyimser, meraklı, dışa dönük, neşeli, konuşkan ve girişken biriyim.

Kısıtlanmaktan hoşlanmam. Spontane ve heyecan verici deneyimleri sever, monotonluktan çabuk sıkılabilirim. Önümde farklı seçeneklerin bulunması bana özgürlük hissi verir. Yeni insanlar, fikirler, yerler ve deneyimler zihnimi canlı tutar.

Düşünce çağrışımlarım hızlıdır. Birbirinden farklı görünen fikirler arasında bağlantılar kurabilir, yeni olasılıklar üretebilir ve bir problemin alternatif çözümlerini hızla görebilirim. Gelecekte yapabileceklerimi düşünmek çoğu zaman bana enerji verir.

Problemler karşısında hızlı ve pratik çözümler ararım. Zorlayıcı bir durumun içinde uzun süre kalmak yerine çıkış yollarını, olumlu tarafları veya yeni seçenekleri görmeye çalışırım. Ancak bu eğilim bazen sıkıntı veren duyguları yeterince yaşamadan başka bir deneyime yönelmeme neden olabilir.

Enerjim, merakım, yaratıcılığım ve seçenek üretebilme kapasitem önemli güçlerimdir. Gelişimimde ise her zaman yeni bir seçeneğe geçmek yerine başladığım şeyde kalabilmek, zorlayıcı duygularla da temas edebilmek ve derinleşmenin özgürlüğümü azaltmadığını fark etmek deneyimlerimden daha fazla doyum almamı sağlar.`,
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
    longDescription: `İkincil arayışlar: Aktif biçimde koruyucu olmak, etkin olmak, öne çıkmak, kontrolü elinde tutmak, güçlü ve bağımsız hareket etmek, gerektiğinde mücadele ederek sınırlarını korumak.

Kendi dilinden;
Cesur, kararlı, ön alan, kendinden emin, otoriter, insanları etkilemeyi seven, güçlü ve bağımsız olmayı önemseyen, risk almaktan çekinmeyen, zorluklara karşı dayanıklı; mücadeleden ve çatışmadan kolay kolay kaçınmayan biriyim.

Bir durum karşısında uzun süre beklemek yerine harekete geçmeyi tercih ederim. Ne istediğimi bildiğimde bunu açık biçimde ifade eder, karşıma çıkan engellerle mücadele etmekten çekinmem. İnsanların kararlı, net ve dürüst olmasını önemserim.

Adaletsizliğe karşı oldukça hassasım. Kendimin veya değer verdiğim birinin haksızlığa uğradığını düşündüğümde güçlü biçimde tepki gösterebilirim. Zayıfı ve güçsüzü koruma eğilimim vardır. Dışarıdan sert veya güçlü görünsem de içimde herkese göstermediğim koruyucu, merhametli ve hassas bir taraf bulunur.

Öfkemi ve rahatsızlığımı gizlemek yerine doğrudan ifade etmeye eğilimliyim. Kararsızlık, pasiflik ve dolaylı iletişim beni zorlayabilir. Açık sözlü, net ve direkt olmayı tercih ederim. Bu doğrudanlık bazen karşımdaki kişi tarafından sertlik olarak algılanabilir.

Cesaretim, dayanıklılığım, liderlik ve koruyuculuk yönüm önemli güçlerimdir. Gelişimimde ise gücün yalnızca mücadele etmek veya kontrol etmek olmadığını; gerektiğinde güvenmek, dinlemek, geri çekilmek ve hassas tarafımı gösterebilmenin de güçlü olmakla birlikte var olabileceğini fark etmek ilişkilerimi derinleştirir.`,
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
    longDescription: `İkincil arayışlar: Huzuru korumak, rahat ve rahatlatıcı olana yönelmek, bütünlük ve uyumu bozmamak, çatışmaları azaltmak ve çevresiyle dengeli ilişkiler kurmak.

Kendi dilinden;
Barış ve uzlaşmayı önceleyen, uyum ve huzuru arayan, sabırlı, sakin, çatışma ve gerilimden kaçınan; insanları oldukları gibi kabul etmeye çalışan biriyim. Bulunduğum ortamda gereksiz gerginlik oluşmasını istemem ve farklı insanların bir arada uyum içinde bulunabilmesini önemserim.

Başkalarının bakış açılarını anlamakta oldukça başarılı olabilirim. Bir konuda tek bir tarafı görmek yerine farklı görüşlerin haklı yanlarını fark edebilirim. Bu özelliğim insanlar arasında uzlaştırıcı ve sakinleştirici bir rol üstlenmemi sağlayabilir.

Uyum ve huzuru bozmamak adına kendi ihtiyaçlarımı, önceliklerimi veya rahatsızlıklarımı zaman zaman geri plana atabilirim. Ne istediğimi bildiğim hâlde bunu açıkça ifade etmek yerine şartlara uyum sağlamayı tercih edebilirim.

Olayları ve durumları birçok açıdan değerlendirdiğim için harekete geçmek ve önceliklerimi belirlemek zaman alabilir. Bu nedenle dışarıdan yavaş, kararsız veya erteleyen biri gibi görünebilirim. Aslında çoğu zaman zihnimde herkes ve her şey için en uygun dengeyi bulmaya çalışırım.

Üzerime gelindiğinde veya istemediğim bir şeye zorlandığımda öncelikle öfkemi ve tepkimi kontrol etmeye çalışırım. Açık çatışmadan kaçınmam nedeniyle rahatsızlıklarımı biriktirebilirim; biriken öfke ise zaman zaman beklenmedik biçimde ortaya çıkabilir.

Sakinliğim, kapsayıcılığım, sabrım ve farklı insanları bir araya getirebilme becerim önemli güçlerimdir. Gelişimimde ise kendi isteklerimin de diğer insanların istekleri kadar önemli olduğunu fark etmek, önceliklerimi belirlemek ve gerektiğinde açıkça “Ben bunu istiyorum” diyerek harekete geçmek içsel gücümü daha görünür hâle getirir.`,
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
