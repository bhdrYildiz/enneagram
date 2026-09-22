import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.enneagramegitim.com";

  const routes = [
    "",
    "/hakkimizda",

    "/hizmetlerimiz",
    "/hizmetlerimiz/enoksis",
    "/hizmetlerimiz/enneagramik",
    "/hizmetlerimiz/egitimler",
    "/hizmetlerimiz/turkiye-enneagram-akademisi",
    "/hizmetlerimiz/ennelog",
    "/hizmetlerimiz/enrehet",
    "/hizmetlerimiz/enneagram-sempozyumu",
    "/hizmetlerimiz/enneagram-tv-ve-yayincilik",

    "/egitimlerimiz",
    "/egitimlerimiz/enneagram-isiginda-donusum-atolyesi",
    "/egitimlerimiz/temel-enneagram-egitimi",
    "/egitimlerimiz/2-seviye-enneagram-egitimi",
    "/egitimlerimiz/enneagram-iliskiler-egitimi",
    "/egitimlerimiz/cocuk-merkezli-enneagram-egitimi",
    "/egitimlerimiz/profesyonel-kocluk-egitimi-60-saat",

    "/enneagram",
    "/enneagram/enneagram-kavramlari",

    "/mizac-tipleri",
    "/mizac-tipleri/mizac-1",
    "/mizac-tipleri/mizac-2",
    "/mizac-tipleri/mizac-3",
    "/mizac-tipleri/mizac-4",
    "/mizac-tipleri/mizac-5",
    "/mizac-tipleri/mizac-6",
    "/mizac-tipleri/mizac-7",
    "/mizac-tipleri/mizac-8",
    "/mizac-tipleri/mizac-9",

    "/blog",
    "/blog/kendini-tanimak-yetmez-enneagramda-kendini-yakalamak",
    "/blog/enneagram-yeni-bir-ruhsal-yolculuk-icin-gecmisi-uzun-yillara-dayanan-oldukca-kullanisli-eski-bir-aracti",
    "/blog/oyle-bir-harita-dusunun-ki-size-giden-yolu-gostersin-enneagram",
    "/blog/mizac-ve-sinav-motivasyonu",

    "/iletisim",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/hizmetlerimiz" ||
            route === "/egitimlerimiz" ||
            route === "/enneagram" ||
            route === "/mizac-tipleri" ||
            route === "/blog"
          ? 0.9
          : 0.8,
  }));
}
