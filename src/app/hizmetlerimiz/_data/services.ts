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
        longDescription: `Kişilerde, kişilik yapısını fark etmesi ile birlikte gelen kendini geliştirme yolculuğunda önemli bir kazanım sağlar.
        
        İş, sosyal ve özel hayatında karşısındakini daha iyi anlayıp ilişkilerini sağlıklı şekilde sürdürmesine, kişilik yapısındaki tutum ve davranışların altında yatan nedenleri görüp çözüm geliştirmesine, kişinin verimli çalışabilmesi için daha nitelikli ve huzurlu bir çalışma ortamı oluşturulmasına katkı sunar.`,
        logo: "/Enneagramik.png",
        heroImage: "/enneagramikhero.jpeg",
    },
    {
        slug: "aile-rehberimiz",
        title: "Aile Rehberimiz",
        description:
            "AİLE REHBERİMİZ mizacı merkeze alan bir rehberlik hizmetidir. Hepimiz doğuştan getirdiğimiz bir mizaç yapısı ile doğarız. Bu mizaç yapıları birbirinden farklılık göstermekle birlikte ebeveyn, çevre, kültür ve eğitim gibi dış faktörlerden etki alır. Bu etkiler mizaç yapılarına bağlı olarak duygu, düşünce ve davranış görüntüsüne sebep olur. Mizaç yapımızdaki bu yansımalar yetişkinlikle birlikte kişilik özellikleri olarak kendini gösterir.",
        longDescription:
        `Mizaç yapısının sağlıklı gelişimi psikolojik denge ve olumlu kişilik gelişimine katkı sağlar. Aksi durumlar bireyin kendi ve çevresiyle ilişkilerini ve uyumunu olumsuz etkiler.

        Bu nedenledir ki, kişinin kendi gelişimi ve ilişkilerini yönetme becerisi için mizaç bilgisi ve mizaç merkezli yaklaşımlar kısa, net ve güvenilir bir yol göstericidir.

        Bizler AİLE REHBERİMİZ çalışmamızı bu perspektifle ele alarak Türkiye’de bir ilk olan “Mizaç Merkezli Rehberlik” yaklaşımını geliştirdik.

        Amacımız; kişisel imkan ve kabiliyetlerimizi fark etmek, ilişkilerimizi ve aile bütünlüğümüzü bu dinamikler üzerinden yürüterek; mutlu, huzurlu bireyler ve toplum yapısının oluşmasına katkı sağlamaktır, diyebiliriz.

        - Peki AİLE REHBERİMİZ nedir?

        Uzmanlar eşliğinde, online/çevrimiçi platformlar ve özel geliştirilmiş yazımlarla, detaylı ve nitelikli mizaç bilgilerinin paylaşıldığı, yol ve yön gösterici çalışmalar içeren bir psikolojik destek hizmetidir.

        Kişiye bireysel, eğitim, iş, ilişki ve aile hayatında fayda sağlayacak, kendi psikolojik dinamiklerini tanıtan, pratikte uygulama imkânı bulabileceği ve olumlu sonuçlar almasını sağlayıcı psikolojik destek ve rehberlik uygulamasıdır.

        İnsan hayatının merkezinde olan kişiler arası ilişkilerin sağlıklı kurulabilmesine hizmet eden, ilişki ve iletişimi yüksek bir farkındalıkla yürütebilmeye imkânı sunan, uzman desteği ve içeriği ile sosyal hayatı pozitif yönde etkileyen modern bir gelişim programıdır.

        Aile içi ilişki dinamiklerini mizaç ve kişilik merkezinde ele alıp aile içindeki tüm bireylere kendini tanıma, muhatabını anlama ve sağlıklı aile içi iletişimin aileye özgü tasarlanmasına imkan sunan bir danışmanlık hizmetidir.

        Çiftler arasında romantik ilişkilerin ideal bir noktaya ulaşmasına hizmet eden, ilişkinin karşılıklı psikolojik ihtiyaçlarının bilinmesine ve bu ihtiyaçların giderilmesine ışık tutan, karşılıklı saygı, güven ve sevginin yaşanabilmesine kılavuzluk eden, bireylerin sağlıklı ve verimli ilişkiler yaşamasına hizmet eden bir rehberlik organizasyonudur.

        Anaokulundan üniversiteye tüm eğitim hayatı boyunca yaşa ve sınıfa uygun, mizacı ve dönemsel özellikleri referans alan, motivasyon ve başarıyı artırmaya dair pratikler sunan, öğrencinin kendisine ve/veya ebeveynlerine kişiye özel nokta atış yönergeler ve bilinç artırıcı içerikler ve bilgilendirmeler paylaşan bir eğitim destek faaliyetidir.

        Çocuklarımızı tanıma, onların kabiliyet ve potansiyellerini fark etme, risk ve kısıt alanlarını bilme, karşılıklı olarak verimli, geliştirici bir iletişim oluşturabilme ve mizaçlarına uygun bir ebeveynlik yapabilme pratiğidir.

        Özetle AİLE REHBERİMİZ;
        özelde bireyin kendini, genelde ilişki ve aileyi yüksek bir farkındalığa yönelten, pozitif bir iklim oluşmasına katkı sağlayan, mizaç ve kişilik farklıklarının dikkate alındığı, mizaç yapısına özgü çözümlerin sunulduğu, kullanıcı paneli ve mobil uygulamamız üzerinden içerik paylaşımlarına ve duyurularına ulaşıldığı, her an yanınızda olan kişisel, ilişkisel ve aileye yönelik destek faaliyetlerinden oluşan bir rehberlik hizmetidir.`,
        logo: "/rehberimiz_logo.png",
        heroImage: "/ailerehberimiz.jpg"
    },
    {
        slug: "enoksis",
        title: "Enoksis",
        description:
            "Eğitime ‘mizaç merkezli’ perspektif sunan, yeni, özgün ve nitelikli bir eğitim yaklaşımıdır. Mizaçların farklılıklarını esas alır ve mizaç merkezli rehberlik süreçlerinden oluşur.",
        longDescription:
            `Neyi Amaçlar?
İnsanoğlunun binlerce yıldır en temel arayışı kendini tanımak, anlamak ve geliştirmek olmuştur. Herkesin doğru anlaşılmaya ve tanınmaya ihtiyacı vardır.

Bu ihtiyaç her insan için geçerli olup, özellikle öğrenciler için daha belirgin ve kritik bir öneme sahiptir.

Tüm insanlık bu temel ihtiyacının karşılanması için pratik, etkili ve isabetli yaklaşımlara gereksinim duymaktadır.

Bu yaklaşımların başarısı insanın temeli olan mizaç özelliklerinin doğru anlaşılmasına bağlıdır.

Enneagram metodolojisi ve bilgeliği, mizaçların temel arayışlarını çok net bir şekilde ortaya koymaktadır. Enneagram ilişki içinde olduğumuz yetişkinleri, çocukları doğru anlamayı ve tanımayı sağlar.

Bu çerçevede yapılandırılan ENOKSİS ( Enneagram Okul Sistemi) eğitim alanında mizaçları merkeze alan bir yaklaşımı ortaya koymaktadır.

ENOKSİS, tüm okul sistemleriyle uyumlu bir içeriğe sahiptir ve mevcut sistemlerin verimliliğine nitelikli katkı sağlar.

Özetle diyebiliriz ki;
İçeriği mizaç temelli eğitim ve rehberliktir.
Üç ana başlık ve çalışma alanından oluşur:
1 – Enneagram Eğitim
2 – Enneagram Dijital
3 – Enrehet (Enneagram Rehberlik Etkinlikleri)

Enoksis Hangi Aşamalardan Oluşur?
1 - Enneagram Eğitim
Rehber öğretmen eğitimi ve süpervizyonu.
Öğretmen ve idareci eğitimi.
Veli semineri.

2 - Enoksis Dijital (Test)
Testin uygulanması ve mizaçlarının belirlenmesi.
Dijital yazılım yardımıyla mizaç testi ve raporlama.

3 - Enrehet (Enneagram Rehberlik Etkinlikleri)
Rehber öğretmen eğitimi.
Enneagram rehberlik etkinliklerinin uygulanması.


Enoksis'i daha yakından tanımak için  www.enoksis.com internet adresimizi ziyaret edebilirsiniz.
`,
        logo: "/Enoksis.png",
        heroImage: "/enoksishero.png"
    },
    {
        slug: "enrehet",
        title: "Enrehet",
        description:
            "Enrehet, Rehber Öğretmenler için tasarlanmış bireysel ya da grup halinde uygulanabilen, mizaçlar özelinde hazırlanmış Rehberlik Etkinlikleri'dir. Türkiye’de bir ilk olarak hazırlanan ENREHET, mizaçların potansiyel imkan ve kabiliyetlerini ‘geliştirmek’ ve ‘desteklemek’ amacıyla hazırlanmıştır. Rehberlik alanında bir ilk olmakla birlikte özgün içeriklerden oluşmaktadır.",
        longDescription:
            `Enrehet Hangi Amaçla Geliştirildi?
Eğitim kurumları çocukların gelişimini etkileyen faktörlerin en başında gelir.
Bunun bilincinde olan pek çok eğitimci, öğretimle birlikte eğitimin de yelpazesini geliştirmeye çalışmaktadır.
Enrehet, bu çabayı gösteren kurum ve eğitimcilere nitelikli destek sağlamak amacıyla geliştirilmiştir.
Enrehet, çocuğun okulda aldığı akademik gelişimle birlikte eğitimi ve karakter gelişimini öğrenme sürecinin bir parçası olarak kabul eden eğitimci ve kurumların aradığı bir eğitim modülüdür.
Değişen ve gelişen dünyayı doğru okuyan eğitimciler, kişilik ve karakter gelişiminin önemini biliyor ve bu gelişimine pozitif katkı sağlayacak arayışlara yöneliyor. Çünkü görüyoruz ki, Dünya harika akademik bilgisi olan ama karakter gelişimi oldukça vasat kişilerin elinde oldukça kötü bir yere gidiyor.
Enoksis'in özgün ve en nitelikli kısmını oluşturan Enrehet (Enneagram Rehberlik Etkinlikleri) bu çerçevede çocukların mizaçlarını merkeze alan etkinlikler ortaya koymuştur.

Enrehet Neyi Amaçlar?
Etkinlikler, her mizaç için özel olarak üretilmiştir.
Etkinlikler mizaçların güçlü ve geliştirmesi gereken yönlerini kapsadığından gelişimi bütüncül olarak desteklemektedir.
Çocuğa iyi olduğu alanları fark ettirip kaynak geliştirmesine yardımcı olurken bir yandan da geliştirilmesi gereken yönlerini fark ettirerek gelişimsel bir plan sunar.

Kendi mizaç özelliklerinin potansiyel noktaları ve kabiliyetleri fark eden çocuklar için bu alanlarda gösterilecek gayret için pozitif motivasyon sağlar.
Etkinlikler mizaçlar için özel tasarlandığından yararlandığı teknikler de oldukça çeşitlidir. Etkinlikler, terapötik hikayeler, drama, oyun terapisi, kukla terapisi, imgeleme ve bunun gibi pek çok teknik kullanılarak geliştirilmiştir.
Etkinlik yelpazesinin bu geniş yapısı uygulayıcıya da keyifle uygulama fırsatı sunar.

Neden Enrehet?
Okulu sadece bir öğretim merkezi değil nitelikli bir eğitim yuvasına dönüştürebilmek için.
Okulda geçirilen zamandan maksimum fayda elde etmek için.
Çocuğun bizzat kendisinin gelişimsel açıdan harika bir serüvende olduğunu farketmesi ve kendini tanıyabilmesi için.
Çocuğun kendi dinamiklerini keşfedebilmesi için.
Çocuğun başka bireylerin gelişimsel fark, ihtiyaç ve dinamiklerini keşfedebilmesine yardımcı olmak için.
Çocuğun içgörü kazanması ve benim güçlü yanlarım ve geliştirilmesi gereken yanlarım ne sorusunu sorabilme ve cevabını bulabilmesi için.

Enrehet İçeriğinde Neler Bulunuyor?
Enrehet, Enneagram billgisine sahip, psikoloji ve rehberlik alanında faaliyet gösteren psikolog ve rehber öğretmenler tarafından hazırlanmış özel etkinliklerdir.
Tüm eğitim kademelerini içeren toplam 198 rehberlik etkinliğinden oluşmaktadır.
Etkinlikler mizaçların potansiyel kabiliyet ve riskleri göz önüne alınarak her mizaç için özel olarak hazırlanmıştır. Rehber öğretmene mizaç odaklı rehberlik imkanı sunmaktadır.
Etkinlik uygulamaları basit ve sade protokollere sahiptir.
`,
        logo: "/Ennelog.png",
        heroImage: "/enherethero.jpg"
    },
    {
        slug: "test",
        title: "Test",
        description:
            "ENOKSİS’in test kısmında öğrencilerin mizaç tiplerinin tespiti gerçekleştirilir. Bunun için Enoksis tarafından hazırlanmış olan 99 soruluk 'Enneagram Mizaç Testi' kullanır.",
        longDescription:
            `ENOKSİS’in test kısmında öğrencilerin mizaç tiplerinin tespiti gerçekleştirilir.

Bunun için Enoksis tarafından hazırlanmış olan 99 soruluk 'Enneagram Mizaç Testi' kullanır.

Enneagram Testi, Enoksis tarafından geliştirilen özel bir yazılım yardımı ile uygulanır.

Yazılım, Yönetici Paneli', 'Rehber Paneli', 'Öğrenci Paneli' olarak 3 bölümden oluşur:

Yönetici Paneli ile kurumun sisteme kaydı gerçekleştirir. Yönetici, öğrencilere yönelik yapılan rehberlik faaliyetlerini sistem üzerinden takip edebilir.

Rehber Paneli ile, öğrencilerin test raporları rehber öğretmen tarafından takip edilir. Öğrenciye özel gelişim ve uygulama çalışmaları kayıt altına alınır. Çeşitli duyuru ve etkinlikler öğrenciye veya sınıfa sistem üzerinden paylaşılır. Enrehet etkinliklerinin uygulama takipleri kayıt altında tutulabilir.

Öğrenci Paneli ile, öğrenci mizaç testini gerçekleştirir. Rehber öğretmen onayına bağlı olarak test raporuna ulaşabilir. Rehber öğretmen tarafından yapılan özel not, duyuru ve etkinlik faaliyet bilgilerine ulaşabilir.

Testin cevaplandırılması internet üzerinden gerçekleştirilir.

Her öğrenci kendisi için hazırlanan “özel kod” ile sisteme girişini gerçekleştirir ve testini uygular. Test, bilgisayar, cep telefonu ve tablet benzeri cihazlarla online olarak doldurulur.

Anaokulu ve ilkokul öğrencileri için öğrenciye dair sorular ebeveyni tarafından cevaplandırılır.`,
        logo: "/rehberimiz_logo.png",
        heroImage: "/testhero.jpg",
    },
    {
        slug: "egitimler",
        title: "Eğitimler",
        description:
            "Enneagram eğitimleri doğuştan sahip olduğumuz mizaç yapımızı bilmek, tanımak ve farkedebilmekte detaylı ve geniş bir bilgi edinmemizi sağlar. Enneagram eğitimleri ile kişi potansiyel imkan ve kabiliyetlerinin farkına varır. Bu potansiyellerini geliştirebilme ve risklerini iyileştirebilme imkanına sahip olur. Enneagram eğitimleri ile temelde kişinin kendinin farkına varması ve kendi dışındakini anlamayabilmesi amaçlanır. Enneagram Eğitim&Danışmanlık olarak verdiğimiz bazı eğitim ve seminerlerimiz:",
        longDescription:
            `Enneagram Temel Eğitimi
Eğitim İçeriği:
İnsana Bütüncül Yaklaşım
Mizaç Ve Kişiliğin Kökeni
Enneagram Nedir? Tarihçesi
Enneagram Sisteminin Dinamikleri
Enneagramda Tipler ve Temel Arayışları
Mizaç Tiplerinin Düşünce, Duygu Ve Davranış Tarzları
Mizaçların Kanat Etkileri,
Mizaçların Stres Ve Rahat Hatları
Mizaçların Sağlık Seviyeleri

Eğitimin Amacı:
Eğitim, kendini tanıma ve başkalarını anlamaya dair bir farkındalık kazanılmasını amaçlar. Güçlü yönlerin keşfi, potansiyel riskleri anlama, hayatında tekrarlayan sorunların kökenini fark etme, verimli ve anlamlı bir hayat yaşayabilme adına mizaç zemini üzerine oluşan ve gelişen kişilik tipleri hakkında bilgi sahibi olup, bu bilgiyi hayatın tüm alanlarında kullanabilmeyi hedefler.

Kimler Katılabilir?
Öğretmenler, rehber öğretmenler, anne-babalar, psikologlar, ekip yöneticileri, koçlar, mentorlar, girişimciler, okul yöneticileri, insan kaynakları profesyonelleri, senaryo-hikaye yazarları, reklamcılar, kendini tanımak ve başkalarını anlamak isteyen herkes katılabilir.

Eğitimin Süresi:
2 gün, toplam 12 saat

 

Terapide Enneagram'ın Aktif Kullanımı
Eğitim İçeriği:
Kişilik ve bileşenleri
Temel kişilik kuramları
Enneagrama göre dokuz kişilik tipi
Her kişilik tipinin potansiyel psikopatoloji ile bağlantısı
Her kişilik tipine özgü psikopatolojiye yönelik tedavi yaklaşımı
Her kişilik tipinin sağlık seviyeleri, dönüşüm ve şifa bilgileri

Eğitimin Amacı:
Terapide enneagramın aktif olarak kullanımı; terapiste yolu kısaltan, elindeki alet çantasını zenginleştiren bir yetkinlik sunar. Danışan açısından bakıldığında; terapiye getirdiği soruna sebep olabilecek mizacına bağlı duygu, düşünce ve davranış repertuarını tanıması yanında, kendi kişiliğini derinlemesine anlaması, sadece problemi hakkında değil aynı zamanda “en iyi kendisi” olması sürecinde de rehberlik içerir.

Kimler Katılabilir?
Psikologlar, psikolojik danışmanlar, psikoloji ve pdr öğrencileri

Eğitimin Süresi:
2 gün, toplam 12 saat

Enneagram Uzmanlık Eğitimi
Eğitim İçeriği:
Kadim Bilgeliklerde İnsana dair yaklaşımlar
İnsana bütüncül bakış
Mizaç tiplerinin ayrıntılı temel özellikleri
Kanat mizacın ana mizaç üzerine etkileri
Mizaç tiplerinin rahat-stres hattıyla ilişkisi
Alt tiplere bakış ve mizaç tipleri üzerindeki etkisi
Mizaçların birbiri ile ilişki dinamikleri
Mizaç tiplerinin sağlık seviyeleri ve bu seviyelerde ilerleme yolları
Her mizaç tipi için gelişim önerileri

Eğitimin Amacı:
Enneagrama Giriş eğitiminden sonra kişinin kendisini ve diğer insanları geniş bir pencereden tanıyabilmesi, Enneagram Metodolojisini daha derinlikli olarak kavrayabilmesi, mizaçların birbiri ile ilişki dinamikleri, mizaçların Sağlık Seviyeleri ve Alt Tip Kavramlarının Uzmanlık Eğitimi ile pekiştirilmesi ve daha ileri bir Enneagram bilgisi kazanılması amaçlanmaktadır.

Kimler Katılabilir?
12 saatlik Temel Enneagram Eğitimini tamamlamış olan öğretmenler, rehber öğretmenler, anne-babalar, psikologlar, ekip yöneticileri, koçlar, mentorlar, girişimciler, okul yöneticileri, insan kaynakları profesyonelleri, senaryo-hikaye yazarları, reklamcılar, kendini tanımak ve başkalarını anlamak isteyen herkes katılabilir.

Eğitimin Süresi:
4 gün, toplam 24 saat

Kişiliğin Pin Kodu - Kimsin?
Seminerin İçeriği:
Kendilik farkındalığı
Özdeğer bilinci
Hayata değer katma
Temel mizaç arayışları
Mizaç potansiyelleri ve riskleri
Mizaç motivasyon noktaları
Meslek seçiminde mizaç uygunluğu

Seminerin Amacı:
Kendilik farkındalığıyla özdeğer bilincine ulaşmak, mizaçların arayışlarını bu bilinç gücüyle birleştirmek, öğrenmenin önündeki mizaç engellerini farkedebilme  ve aşabilme motivasyonunu kazanmak, özellikle lise dönemi öğrencileri için bu farkındalığın gücüyle akademik süreçlere yönelik içsel motivasyon gücünü ortaya çıkarmak.

Kimlere Yönelik?
Lise kademesi öğrencilerine yöneliktir..

Seminer Süresi:
90 dk.

Tüm eğitilerimiz için rehberimiz.com sitesini inceleyebilirsiniz.`,    
        logo: "/TurkiyeEnenagramAkademisi.png",
        heroImage: "/enneagramhero.jpg",
    },
    {
        slug: "rapor",
        title: "Rapor",
        description:
            "ENOKSİS'in 'Enneagram Digital' kısmı ile öğrencilerin mizaç tipleri ve kanat mizaçları tespit edilerek, sonuçlar detaylı bir şekilde raporlandırılır. Raporlar Rehber Öğretmen Panelinden takip edilir. Enneagram Mizaç Testi sonunda her öğrenci için detaylı bir 'Mizaç Raporu' sunulur.",
        longDescription:
            `Rapor;
1-Mizaç Kimlik Kartı,
2-Genel Özellikler,
3-Doğal Olumlu Özellikler,
4-Potansiyel Riskler,
5-Tamamlayıcı Özellikler,
6-Strese Neden Olabilecek Durumlar ve Stres Altındaki Tutumlar,
7-Destek ve Gelişim Önerileri,
8- Öğrenme Ortamı,
9-Eğitimciden Beklediği Yaklaşım,
10- Öğrenme Süreci,
11-Motivasyonu ve Konsantrasyonu Azaltan Durumlar,
12-Çalışma Tarzı,
13-Öğrenme Stili,
14-Kendini İfade Etme Tarzı,
15-Uygun Çalışma Alanları,
16-Uygun İşler başlıklarını içerir.
Raporlar ana mizaç ve kanat etkisi altındaki mizaçlar olarak ayrı ayrı sunulmaktadır.`,
        logo: "/Enoksis.png",
        heroImage: "/rapor.jpg",
    },
    {
        slug: "yayincilik",
        title: "Yayıncılık",
        description:
            "Günümüz eğitim dünyasında teknoloji ya da eğitim uygulamalarına yapılan yatırımlara rağmen istenilen sonuçların alınamadığını görüyoruz. Bunun en önemli sebeplerinden biri de öğrencinin bireysel farklılıklarının, kendi imkan ve kabiliyetlerinin ve mizaç yapılarının dikkate alınmamasıdır.",
        longDescription:
            `Her çocuğun ayrı bir alem ayrı bir dünya olduğu gerçeği, ona ulaşmak için özel bir yolu gerekli kılar. Onlara ulaşabilmek için bu yolları bilmeye ihtiyaç vardır.

Bununla birlikte her öğrenci kendine özgü bir öğrenme ve kendini gerçekleştirme süreci yaşamakta, doğuştan getirdiği mizacının yapısal özelliklerini kullanmaktadır. Öğrencinin bu yapısal özelliklerini gerçekleştirebileceği sağlıklı zeminleri oluşturan, öğrencinin bireysel farklılıklarını dikkate alan kurumlarda eğitim gören öğrencilerin daha mutlu, huzurlu ve başarılı olduklarını görmekteyiz.

Bu kurumlarda oluşturulan eğitim ortamının kuvvetlendirilmesi için eğitim materyal ve kaynaklarının da yine çocukların mizaç yapıları ve özelliklerini dikkate alarak hazırlanması fayda sağlayacaktır.

Enneagram Eğitim Danışmanlık olarak bu perspektifle Çalışkan Yayınları’na  MİZU REHBERİM çalışmasını hazırladık. Çalışkan Yayınları tarafından hazırlanan kaynak kitaplar setine Enneagram Eğitim Danışmanlık olarak mizaçların dikkate alındığı özellikler kurguladık.

Bu özellikler çerçevesinde Mizu Rehberim kullanan her öğrenci için bir mizaç testi hazırladık. Mizaç testi sonucunda öğrenciye özel mizaç özelliklerini içeren detaylı bir rapor oluşturduk. Mizu Rehberim kullanan eğitimcilerimizi de bu rapor doğrultusunda öğrencilerini çok kısa sürede tanıma, sahip oldukları potansiyel imkan ve kabiliyetlerini fark etme imkanına kavuşturduk.

Eğitim kitapları içindeki her sayfaya her mizaç özelliğindeki çocukların temel arayışları ve motivasyon noktalarının dikkate alındığı motivasyon cümleleri hazırladık. Bu cümleler ile çocukların kendi farkındalıkları ve kendilerinin motivasyon noktalarını keşfetmelerine yardımcı olacak bir imkan sunduk.


`,
        logo: "/EnneagramTV.png",
        heroImage: "/yayıncılıkhero.jpg",
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
  }