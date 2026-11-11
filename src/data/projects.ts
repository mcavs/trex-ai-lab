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
  {
    id: "predictive-multiplicity-tunability",
    code: "125E452",
    status_en: "Active",
    status_tr: "Yürürlükte",
    type_en: "TÜBİTAK 1002 - Rapid Support",
    type_tr: "TÜBİTAK 1002 - Hızlı Destek (1002-A)",
    funding_en: "TÜBİTAK 1002-A (Grant No: 125E452)",
    funding_tr: "TÜBİTAK 1002-A Hızlı Destek (Proje No: 125E452, Geçici No: 357820)",
    title_tr: "Regresyon Ve Sınıflandırma Modellerinde Tahmin Tutarsızlığı Ve Ayarlanabilirlik: Güvenilir Makine Öğrenmesinde Hiperparametre Seçiminin Rolü",
    title_en: "Predictive Multiplicity and Tunability in Regression and Classification Models: The Role of Hyperparameter Selection in Trustworthy Machine Learning",
    desc_tr: `Makine öğrenmesi modellerinin güvenilirliği, yalnızca genel doğruluk gibi ortalama performans ölçütleriyle değil, aynı zamanda bireysel tahminlerdeki tutarlılıkla da değerlendirilmelidir. Bu bağlamda "tahmin tutarsızlığı" (predictive multiplicity), aynı veri kümesi üzerinde eğitilen modellerin, aynı girdilere farklı çıktılar üretmesi şeklinde tanımlanmakta ve karar verme süreçlerinde önemli belirsizlikler yaratmaktadır. Bu durum; kredi skorlama, işe alım ve tıbbi tanı gibi yüksek riskli uygulamalarda ciddi sonuçlar doğurabilir.

Öte yandan, hiperparametreler bir modelin tahmin gücü ve davranışları üzerinde doğrudan etkilidir. Ancak hiperparametre optimizasyonu süreci genellikle yalnızca ortalama başarım üzerinden yürütülmektedir. Bu proje, hiperparametre seçimlerinin yalnızca model başarımı değil, aynı zamanda tahmin tutarlılığı üzerindeki etkilerini sistematik biçimde incelemeyi amaçlamaktadır. Bu amaçla hem sınıflandırma hem regresyon problemleri üzerinde çalışılacak; çeşitli modeller (örneğin, rastgele orman, destek vektör makineleri, k-en yakın komşu) ve farklı hiperparametre kombinasyonlarıyla yapılan deneyler sonucunda, modellerin "ayarlanabilirliği" (tunability) ile "tahmin tutarsızlığı" arasındaki ilişkiler analiz edilecektir.

Projenin özgün yönü, makine öğrenmesinde genellikle göz ardı edilen tahmin tutarsızlığı kavramını hiperparametre seçimi bağlamında değerlendirmesidir. Ayrıca, bireysel tahminlerdeki kararsızlıkların modellenmesi için istatistiksel yöntemler ve açıklanabilir yapay zekâ araçları kullanılacaktır. Bu analizler sonucunda, model geliştiriciler için hiperparametre seçimi yaparken sadece doğruluk değil, aynı zamanda bireysel düzeyde güvenilirlik sağlayacak kriterlerin geliştirilmesi hedeflenmektedir.

Proje çıktılarının, hem akademik literatüre katkı sağlaması hem de uygulayıcılar için karar destek sistemlerinin daha güvenilir şekilde inşa edilmesine yardımcı olması beklenmektedir.`,
    desc_en: `The trustworthiness of machine learning models must be evaluated not only through aggregate performance metrics like overall accuracy, but also through consistency in individual predictions. In this context, "predictive multiplicity" refers to the phenomenon where equally well-performing models trained on the same data yield conflicting predictions for the same individual instances, introducing substantial uncertainty into decision-making. This carries profound risks in high-stakes domains such as credit scoring, hiring, and medical diagnostics.

Hyperparameters directly govern a model's predictive capacity and behavior; however, hyperparameter optimization is almost universally guided solely by aggregate performance. This project systematically investigates the impact of hyperparameter selection on predictive consistency alongside accuracy. Covering both classification and regression setups across diverse model families (e.g., Random Forests, Support Vector Machines, k-Nearest Neighbors), the study analyzes the intricate relationship between model "tunability" and "predictive multiplicity".

The project uniquely bridges hyperparameter tuning with predictive multiplicity using statistical modeling and explainable AI (XAI) frameworks to formulate reliable tuning criteria that safeguard individual-level reliability without sacrificing accuracy.`,
  },
  {
    id: "partial-dependence-rashomon",
    code: "126E831",
    status_en: "Active",
    status_tr: "Yürürlükte",
    type_en: "TÜBİTAK 1002 - Rapid Support",
    type_tr: "TÜBİTAK 1002 - Hızlı Destek (1002-A)",
    funding_en: "TÜBİTAK 1002-A (Grant No: 126E831)",
    funding_tr: "TÜBİTAK 1002-A Hızlı Destek (Proje No: 126E831, Geçici No: 405565)",
    title_tr: "Kısmi Bağımlılık Temelli Açıklama Yöntemlerinin Güvenilirliğinin Karşılaştırmalı Değerlendirilmesi Ve Rashomon Perspektifi İle İyileştirilmesi",
    title_en: "Comparative Evaluation of the Reliability of Partial Dependence-Based Explanation Methods and Enhancement via the Rashomon Perspective",
    desc_tr: `Açıklanabilir yapay zekâ araştırmalarında Partial Dependence Plots (PDP) yöntemi ile türevleri olan Individual Conditional Expectation (ICE), Accumulated Local Effects (ALE), Differential Accumulated Local Effects (DALE) ve Robust and Heterogeneity-Aware Accumulated Local Effects (RHALE), karmaşık makine öğrenmesi modellerinin tahmin mekanizmalarını anlamak ve değişken etkilerini görselleştirmek amacıyla yaygın olarak kullanılmaktadır. Ancak bu yöntemler; değişkenler arası korelasyon altında ekstrapolasyon yapma, heterojenliği gizleme, etkileşimleri yansıtamama, aralık seçimine duyarlılık ve model kaynaklı varyasyonlar gibi farklı kısıtlara sahiptir. Literatürde her bir yöntem belirli bir probleme çözüm olarak önerilmiş olsa da, bu yöntemlerin birbirine göre üstünlüklerinin hangi veri yapıları ve hangi model aileleri altında geçerli olduğu sistematik ve ortak bir deneysel çerçevede henüz incelenmemiştir. Ayrıca, benzer performansa sahip farklı modellerin çelişkili açıklamalar üretebilmesi açıklama güvenilirliğini zedelemektedir.

Bu projenin temel amacı; PDP, ICE, ALE, DALE, RHALE, Regional Effect Plots with Implicit Interaction Detection (REPID), Stratified Partial Dependence (S-PD), Fast Partial Dependence (FPD), Conditional Partial Dependence (c-PD) ve Conditional Subgroup Partial Dependence (CS-PD) gibi yöntemlerin farklı veri yapıları ve model aileleri altındaki doğruluğunu ve tutarlılığını ortak bir deneysel çerçevede karşılaştırmalı olarak değerlendirmek; Rashomon perspektifini kullanarak mevcut yöntemlerin (özellikle RHALE yöntemindeki aralık seçimi ve bölgesel açıklamalar) yöntemsel bileşenlerini geliştirmek; ele alınan yöntemleri açık kaynaklı bir R paketinde birleştirmek ve uygulayıcılar için kanıta dayalı bir kullanım rehberi sunmaktır.

Proje metodolojisi dört temel iş paketinden oluşmaktadır:
1. Kontrollü sentetik veri senaryoları ve OpenML kıyaslama veri setleri üzerinde yöntemlerin doğruluğunun nicel olarak değerlendirilmesi.
2. Tek bir model yerine Rashomon kümesini dikkate alarak RHALE yönteminin aralık optimizasyonu ve bölgesel açıklama kararlarının iyileştirilmesi.
3. Tüm yöntemleri standart bir arayüzle sunan, test kapsamı yüksek açık kaynaklı bir R paketinin geliştirilmesi.
4. Ampirik bulguların sentezlenerek uygulayıcılar için karar şemaları ve seçim rehberinin oluşturulması.

Proje sonucunda açıklanabilir yapay zekâ literatüründeki yöntem seçimi belirsizliği giderilecek, Rashomon perspektifi açıklama kalitesini artıran yöntemsel bir bileşen olarak sunulacak ve doğrudan kullanılabilecek nitelikli bir açık kaynaklı yazılım aracı kazandırılacaktır.`,
    desc_en: `In explainable artificial intelligence (XAI), Partial Dependence Plots (PDP) and related methods—such as Individual Conditional Expectation (ICE), Accumulated Local Effects (ALE), Differential Accumulated Local Effects (DALE), and Robust and Heterogeneity-Aware Accumulated Local Effects (RHALE)—are widely used to interpret feature effects in complex black-box models. However, existing methods suffer from known limitations under feature correlation, extrapolation, hidden heterogeneity, interaction neglect, interval selection sensitivity, and model-level variance. Crucially, their comparative validity across diverse data properties and model families has lacked systematic benchmarking, and conflicting explanations across equally good models severely undermine explanation fidelity.

This project rigorously compares methods including PDP, ICE, ALE, DALE, RHALE, REPID, S-PD, FPD, c-PD, and CS-PD within a unified experimental framework. Furthermore, it leverages the Rashomon perspective to enhance method components (particularly interval optimization and regional explanations in RHALE), unifies these tools into an open-source R package, and provides evidence-based decision guidance for practitioners in high-stakes settings.`,
  },
  {
    id: "rashomon-time-series-enfield",
    status_en: "Active",
    status_tr: "Yürürlükte",
    type_en: "European Union / Horizon Europe - ENFIELD",
    type_tr: "Avrupa Birliği / Horizon Europe - ENFIELD",
    funding_en: "European Union via grant OC4-2025-TES-02 (ENFIELD project, Grant Agreement No. 101120657)",
    funding_tr: "Avrupa Birliği ENFIELD Projesi (Hibe No: OC4-2025-TES-02, Hibe Sözleşmesi No: 101120657)",
    title_tr: "Zaman Serilerinde Rashomon Tabanlı ve Belirsizlik Farkındalıklı Açıklanabilir Yapay Zekâ",
    title_en: "Rashomon-based Uncertainty-Aware Explainable AI for Time Series",
    desc_tr: `Bu araştırma, Avrupa Birliği tarafından 101120657 sayılı Hibe Sözleşmesi kapsamında yürütülen ENFIELD projesi (OC4-2025-TES-02 hibe çağrısı) aracılığıyla desteklenmektedir.

Proje, zaman serisi verilerinde tahmin ve model belirsizliklerini açıklanabilir yapay zekâ (XAI) çerçevesiyle ele almaktadır. Benzer tahmin başarısına sahip alternatif modellerin (Rashomon kümesi) zaman serisi tahminlerindeki davranış farklılıkları incelenmekte ve zamansal veri yapılarına özgü, belirsizliğe duyarlı ve güvenilir açıklama yöntemleri geliştirilmektedir.`,
    desc_en: `Rashomon-based Uncertainty-Aware Explainable AI for Time Series project, funded by the European Union via grant OC4-2025-TES-02 issued and implemented by the ENFIELD project under grant agreement No. 101120657.

The project investigates predictive and model uncertainty in time series analysis through the lens of explainable AI and the Rashomon effect, developing trustworthy, uncertainty-aware explanation techniques tailored for temporal data dynamics in mission-critical applications.`,
  },
];
