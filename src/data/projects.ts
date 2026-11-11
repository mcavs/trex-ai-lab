/** Projects shown on the home & projects pages. */
export interface Project {
  id: string;
  code?: string;
  status_en: string;
  status_tr: string;
  type_en: string;
  type_tr: string;
  title_en: string;
  title_tr: string;
  desc_en: string;
  desc_tr: string;
  funding_en?: string;
  funding_tr?: string;
}

export const projects: Project[] = [
  // 1. (Önceki 2. Proje): 126E831
  {
    id: "partial-dependence-rashomon",
    code: "126E831",
    status_en: "Active",
    status_tr: "Yürürlükte",
    type_en: "TÜBİTAK 1002A",
    type_tr: "TÜBİTAK 1002A",
    funding_en: "TÜBİTAK 1002A (Grant No: 126E831)",
    funding_tr: "TÜBİTAK 1002A (Proje No: 126E831)",
    title_tr: "Kısmi Bağımlılık Temelli Açıklama Yöntemlerinin Güvenilirliğinin Karşılaştırmalı Değerlendirilmesi Ve Rashomon Perspektifi İle İyileştirilmesi",
    title_en: "Comparative Evaluation of the Reliability of Partial Dependence-Based Explanation Methods and Enhancement via the Rashomon Perspective",
    desc_tr: `Bu proje, açıklanabilir yapay zekâda yaygın olarak kullanılan kısmi bağımlılık temelli yöntemlerin (PDP, ICE, ALE, RHALE vb.) farklı veri yapıları ve model aileleri altındaki doğruluk ve tutarlılığını ortak bir deneysel çerçevede karşılaştırmalı olarak değerlendirmeyi amaçlar. Benzer performansa sahip modellerin çelişkili açıklamalar üretmesi sorununu Rashomon perspektifiyle ele alarak mevcut yöntemlerin aralık optimizasyonu ve bölgesel açıklama bileşenlerini iyileştirir. Elde edilen yöntemler açık kaynaklı bir R paketinde birleştirilerek yüksek riskli karar destek sistemleri için kanıta dayalı bir kullanım rehberi sunulacaktır.`,
    desc_en: `This project provides a unified comparative evaluation of partial dependence-based explainability methods (PDP, ICE, ALE, RHALE, etc.) across diverse data structures and model families. It leverages the Rashomon perspective to mitigate conflicting explanations among equally accurate models by enhancing interval optimization and regional attribution components. The developed methods are unified into an open-source R package alongside an evidence-based guideline for trustworthy decision support in high-stakes domains.`,
  },

  // 2. (Önceki 3. Proje): ENFIELD / SHAP-sigma
  {
    id: "rashomon-time-series-enfield",
    status_en: "Active",
    status_tr: "Yürürlükte",
    type_en: "European Union / Horizon Europe - ENFIELD",
    type_tr: "Avrupa Birliği / Horizon Europe - ENFIELD",
    funding_en: "European Union via grant OC4-2025-TES-02 (ENFIELD project, Grant Agreement No. 101120657)",
    funding_tr: "Avrupa Birliği ENFIELD Projesi (Hibe No: OC4-2025-TES-02, Hibe Sözleşmesi No: 101120657)",
    title_tr: "Zaman Serilerinde Açıklama Uyuşmazlığı ve Rashomon Perspektifi ile Etiketsiz Anomali Tespiti",
    title_en: "Leveraging Explanation Disagreement for Label-Free Anomaly Detection in Multivariate Time Series",
    desc_tr: `Avrupa Birliği ENFIELD projesi (Hibe No: OC4-2025-TES-02) kapsamında desteklenen bu çalışma, çok değişkenli zaman serilerinde denetimsiz anomali tespiti ve değişken (KPI) düzeyinde anomali lokalizasyonu için etiket gerektirmeyen SHAP-σ boru hattını geliştirir. Üç iç kalite ölçütünü (Mass-Volume, Excess-Mass ve konsensüs) birleştiren veto kuralıyla seçilen çapa model ile dekorele ortağı eşleştirilerek kompakt bir kalite-çeşitlilik alt kümesi (Rashomon kümesi) oluşturulur. Modeller arasındaki vekil tabanlı SHAP öznitelik uyuşmazlığının standart sapması (dağılım kapısı) kullanılarak, hiçbir etiket verisine ihtiyaç duyulmadan yüksek kesinlikli ve yorumlanabilir KPI lokalizasyonu sağlanır.`,
    desc_en: `Supported by the European Union ENFIELD project (Grant No. OC4-2025-TES-02, GA 101120657), this research develops SHAP-σ, a label-free pipeline for unsupervised multivariate time-series anomaly detection and feature-level (KPI) localization. An anchor detector selected via a label-free veto rule combining Mass-Volume, Excess-Mass, and score consensus is paired with a decorrelated partner inspired by the Rashomon effect. The cross-detector standard deviation of surrogate-based SHAP attributions acts as a dispersion gate, achieving high-precision, interpretable anomaly localization without requiring ground-truth labels.`,
  },

  // 3. (Önceki 1. Proje): 125E452
  {
    id: "predictive-multiplicity-tunability",
    code: "125E452",
    status_en: "Active",
    status_tr: "Yürürlükte",
    type_en: "TÜBİTAK 1002A",
    type_tr: "TÜBİTAK 1002A",
    funding_en: "TÜBİTAK 1002A (Grant No: 125E452)",
    funding_tr: "TÜBİTAK 1002A (Proje No: 125E452)",
    title_tr: "Regresyon Ve Sınıflandırma Modellerinde Tahmin Tutarsızlığı Ve Ayarlanabilirlik: Güvenilir Makine Öğrenmesinde Hiperparametre Seçiminin Rolü",
    title_en: "Predictive Multiplicity and Tunability in Regression and Classification Models: The Role of Hyperparameter Selection in Trustworthy Machine Learning",
    desc_tr: `Bu proje, benzer ortalama başarıma sahip modellerin aynı girdilere farklı tahminler üretmesi olarak tanımlanan tahmin tutarsızlığı (predictive multiplicity) ile modellerin ayarlanabilirliği (tunability) arasındaki ilişkiyi inceler. Sınıflandırma ve regresyon problemlerinde hiperparametre seçimlerinin yalnızca genel model başarımı üzerindeki değil, bireysel tahmin güvenilirliği üzerindeki etkileri istatistiksel ve açıklanabilir yapay zekâ yöntemleriyle sistematik olarak analiz edilir. Amaç, model geliştiriciler için hiperparametre optimizasyonunda yalnızca doğruluğu değil, bireysel düzeyde güvenilirlik ve tutarlılığı da garanti altına alacak kriterler geliştirmektir.`,
    desc_en: `This project investigates the interplay between predictive multiplicity—where near-equally accurate models yield conflicting individual predictions—and model tunability in regression and classification tasks. By systematically analyzing hyperparameter configurations through statistical modeling and explainable AI, the project moves beyond aggregate performance metrics to evaluate individual prediction consistency. The ultimate goal is to provide practitioners with tuning criteria that ensure both high predictive accuracy and individual-level reliability in high-stakes domains.`,
  },
];
