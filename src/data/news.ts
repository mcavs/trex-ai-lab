export interface NewsItem {
  id: string;
  tag_en: string;
  tag_tr: string;
  title_en: string;
  title_tr: string;
  href?: string;
  date: string;
  expires?: string; // ISO date string YYYY-MM-DD
}

export const news: NewsItem[] = [
  {
    id: "ieee-asyu-rashomon-ale",
    tag_en: "conference",
    tag_tr: "konferans",
    title_en:
      "Our paper 'Towards Reliable Feature Explanations in Correlated Data: A Rashomon Accumulated Local Effects Framework' (Yiğitcan Yardımcı & Mustafa Çavuş) is now published on IEEE Xplore.",
    title_tr:
      "Yiğitcan Yardımcı ve Mustafa Çavuş imzalı 'Towards Reliable Feature Explanations in Correlated Data: A Rashomon Accumulated Local Effects Framework' başlıklı bildirimiz IEEE Xplore'da yayınlandı.",
    href: "https://doi.org/10.1109/ASYU71790.2026.11772211",
    date: "2026-11-18",
    expires: "2027-02-28",
  },
  {
    id: "ieee-asyu-shap-sigma",
    tag_en: "conference",
    tag_tr: "konferans",
    title_en:
      "Our paper 'SHAP-σ: A Label-Free Rashomon Pipeline for Multivariate Time-Series Anomaly Detection' (Uğur Dar, Jeriek Van den Abeele, Mustafa Çavuş & Sara Malacarne) is now published on IEEE Xplore.",
    title_tr:
      "Uğur Dar, Jeriek Van den Abeele, Mustafa Çavuş ve Sara Malacarne imzalı 'SHAP-σ: A Label-Free Rashomon Pipeline for Multivariate Time-Series Anomaly Detection' başlıklı bildirimiz IEEE Xplore'da yayınlandı.",
    href: "https://doi.org/10.1109/ASYU71790.2026.11772297",
    date: "2026-11-18",
    expires: "2027-02-28",
  },
  {
    id: "ubk2026-yigitcan",
    tag_en: "conference",
    tag_tr: "kongre",
    title_en:
      "Yiğitcan Yardımcı presented our study 'Investigating the Variability of Feature-Importance Explanations across Predictive Models and Explanation Methods in Survival Analysis' at the XXVII. National & X. International Biostatistics Congress (11–14 November 2026 · İzmir, Türkiye).",
    title_tr:
      "Yiğitcan Yardımcı, 'Sağkalım Analizinde Değişken Önemi Açıklamalarının Tahmin Modeli ve Açıklama Yöntemine Bağlı Değişkenliğinin İncelenmesi' başlıklı çalışmamızı XXVII. Ulusal ve X. Uluslararası Biyoistatistik Kongresi'nde sundu (11–14 Kasım 2026 · İzmir, Türkiye).",
    date: "2026-11-13",
    expires: "2026-12-31",
  },
];
