export const languages = {
  en: "English",
  tr: "Türkçe",
} as const;

export const defaultLang = "en";
export type Lang = keyof typeof languages;

/**
 * UI string dictionary. Keep keys identical across languages.
 * Content (blog/team/papers) lives in content collections, not here —
 * this is only for chrome/labels.
 */
export const ui = {
  en: {
    "site.name": "trex.ai",
    "site.fullName": "Trustworthy & Explainable AI Lab",
    "site.tagline": "Trustworthy & Explainable AI Lab",
    "site.description":
      "Trustworthy & Explainable AI Lab (trex.ai) researches explainable and trustworthy artificial intelligence — making model decisions transparent, faithful, and accountable.",

    "nav.home": "Home",
    "nav.team": "Team",
    "nav.papers": "Papers",
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "theme.toggle": "Toggle theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "lang.toggle": "Change language",

    "home.hero.title": "A clear view into explainable AI.",
    "home.hero.subtitle":
      "We build methods that make machine learning models transparent, faithful, and trustworthy.",
    "home.hero.cta.projects": "Our projects",
    "home.hero.cta.papers": "Read papers",
    "home.projects.title": "Funded & ongoing projects",
    "home.projects.all": "All projects",
    "home.papers.title": "Recent papers",
    "home.papers.all": "All papers",
    "home.blog.title": "From the blog",
    "home.blog.all": "All posts",
    "home.team.title": "The team",
    "home.team.all": "Meet the team",
    "home.join.title": "Join us",
    "home.join.body":
      "We are always looking for curious minds. Reach out if you want to work on explainable AI.",
    "home.join.cta": "Get in touch",

    "team.title": "Team",
    "team.members": "Members",
    "team.collaborators": "Collaborators",
    "team.alumni": "Alumni",

    "papers.title": "Papers",
    "papers.equalContrib": "equal contribution",
    "papers.link.arxiv": "arXiv",
    "papers.link.pdf": "PDF",
    "papers.link.doi": "DOI",
    "papers.link.code": "Code",
    "papers.link.openreview": "OpenReview",

    "blog.title": "Blog",
    "blog.readMore": "Read more",
    "blog.readingTime": "min read",
    "blog.by": "by",
    "blog.backToBlog": "← Back to blog",
    "blog.noTranslation":
      "This post is not available in English yet. Read it in Turkish:",
    "blog.readIn": "Read in",

    "projects.title": "Projects",
    "projects.intro":
      "Funded and active research projects conducted at trex.ai (Trustworthy & Explainable AI Lab):",
    "projects.status": "Status",
    "projects.grant": "Grant",

    "contact.title": "Contact",
    "contact.intro": "Get in touch with trex.ai (Trustworthy & Explainable AI Lab).",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.social": "Find us",

    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with Astro · Hosted on GitHub Pages",

    "404.title": "Page not found",
    "404.body": "The page you are looking for does not exist.",
    "404.home": "Go home",
  },
  tr: {
    "site.name": "trex.ai",
    "site.fullName": "Trustworthy & Explainable AI Lab",
    "site.tagline": "Trustworthy & Explainable AI Lab",
    "site.description":
      "Trustworthy & Explainable AI Lab (trex.ai), güvenilir ve açıklanabilir yapay zeka üzerine araştırma yapar — model kararlarını şeffaf, sadık ve hesap verebilir kılar.",

    "nav.home": "Anasayfa",
    "nav.team": "Ekip",
    "nav.papers": "Makaleler",
    "nav.blog": "Blog",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    "theme.toggle": "Temayı değiştir",
    "theme.light": "Açık",
    "theme.dark": "Koyu",
    "lang.toggle": "Dili değiştir",

    "home.hero.title": "Açıklanabilir yapay zekaya berrak bir bakış.",
    "home.hero.subtitle":
      "Makine öğrenmesi modellerini şeffaf, sadık ve güvenilir kılan yöntemler geliştiriyoruz.",
    "home.hero.cta.projects": "Projelerimiz",
    "home.hero.cta.papers": "Makaleleri oku",
    "home.projects.title": "Yürütülen projeler",
    "home.projects.all": "Tüm projeler",
    "home.papers.title": "Son makaleler",
    "home.papers.all": "Tüm makaleler",
    "home.blog.title": "Blogdan",
    "home.blog.all": "Tüm yazılar",
    "home.team.title": "Ekip",
    "home.team.all": "Ekibi tanı",
    "home.join.title": "Bize katıl",
    "home.join.body":
      "Meraklı zihinleri her zaman arıyoruz. Açıklanabilir yapay zeka üzerine çalışmak istersen bize ulaş.",
    "home.join.cta": "İletişime geç",

    "team.title": "Ekip",
    "team.members": "Üyeler",
    "team.collaborators": "İş birlikçiler",
    "team.alumni": "Mezunlar",

    "papers.title": "Makaleler",
    "papers.equalContrib": "eşit katkı",
    "papers.link.arxiv": "arXiv",
    "papers.link.pdf": "PDF",
    "papers.link.doi": "DOI",
    "papers.link.code": "Kod",
    "papers.link.openreview": "OpenReview",

    "blog.title": "Blog",
    "blog.readMore": "Devamını oku",
    "blog.readingTime": "dk okuma",
    "blog.by": "yazan",
    "blog.backToBlog": "← Bloga dön",
    "blog.noTranslation":
      "Bu yazı henüz Türkçe mevcut değil. İngilizce okuyabilirsin:",
    "blog.readIn": "Şu dilde oku:",

    "projects.title": "Projeler",
    "projects.intro":
      "trex.ai (Trustworthy & Explainable AI Lab) bünyesinde yürütülen ve desteklenen güncel araştırma projeleri:",
    "projects.status": "Durum",
    "projects.grant": "Destek",

    "contact.title": "İletişim",
    "contact.intro": "trex.ai (Trustworthy & Explainable AI Lab) ile iletişime geçin.",
    "contact.email": "E-posta",
    "contact.address": "Adres",
    "contact.social": "Bizi bulun",

    "footer.rights": "Tüm hakları saklıdır.",
    "footer.builtWith": "Astro ile üretildi · GitHub Pages'te barındırılıyor",

    "404.title": "Sayfa bulunamadı",
    "404.body": "Aradığınız sayfa mevcut değil.",
    "404.home": "Anasayfaya dön",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
