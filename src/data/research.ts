/** Research areas shown on the home & research pages. Edit freely. */
export interface ResearchArea {
  id: string;
  title_en: string;
  title_tr: string;
  desc_en: string;
  desc_tr: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "predictive-multiplicity",
    title_en: "Predictive Multiplicity & the Rashomon Effect",
    title_tr: "Öngörü Çokluğu ve Rashomon Etkisi",
    desc_en:
      "Many near-equally-accurate models can disagree on individual predictions. We study this multiplicity and quantify the uncertainty it creates for high-stakes decisions.",
    desc_tr:
      "Benzer başarıya sahip birçok model bireysel tahminlerde ayrışabilir. Bu çokluğu inceliyor ve yüksek riskli kararlar için yarattığı belirsizliği ölçüyoruz.",
  },
  {
    id: "xai",
    title_en: "Explainable & Trustworthy ML",
    title_tr: "Açıklanabilir ve Güvenilir ML",
    desc_en:
      "We develop and benchmark explanation methods — counterfactuals, partial dependence, glocal explanations — that stay reliable under model multiplicity and AutoML.",
    desc_tr:
      "Model çokluğu ve AutoML altında güvenilir kalan açıklama yöntemleri geliştirip değerlendiriyoruz — karşı-olgular, kısmi bağımlılık, glocal açıklamalar.",
  },
  {
    id: "imbalanced",
    title_en: "Imbalanced Classification",
    title_tr: "Dengesiz Sınıflandırma",
    desc_en:
      "We analyze how balancing, filtering, and resampling affect model behavior, stability, and the quality of explanations.",
    desc_tr:
      "Dengeleme, filtreleme ve yeniden örneklemenin model davranışını, kararlılığını ve açıklamaların kalitesini nasıl etkilediğini analiz ediyoruz.",
  },
  {
    id: "counterfactual-applications",
    title_en: "Counterfactual Explanations in Practice",
    title_tr: "Uygulamada Karşı-Olgusal Açıklamalar",
    desc_en:
      "We bring actionable, recourse-style explanations to real decisions in finance, education, and predictive maintenance.",
    desc_tr:
      "Uygulanabilir, çözüm-odaklı açıklamaları finans, eğitim ve kestirimci bakım gibi gerçek kararlara taşıyoruz.",
  },
  {
    id: "applied-statistics",
    title_en: "Applied Statistics & Hypothesis Testing",
    title_tr: "Uygulamalı İstatistik ve Hipotez Testi",
    desc_en:
      "Robust tests for comparing groups under unequal variance and non-normality, penalized power analysis, and open R tooling for inference.",
    desc_tr:
      "Eşit olmayan varyans ve normal-dışılık altında grup karşılaştırması için sağlam testler, cezalandırılmış güç analizi ve çıkarım için açık R araçları.",
  },
];
