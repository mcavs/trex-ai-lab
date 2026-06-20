# Contributing / Katkı Rehberi

> 🇬🇧 English below · 🇹🇷 Türkçesi aşağıda

All content is plain Markdown. Add a file, open a pull request — once merged, it
goes live automatically. CI checks your frontmatter, so a broken entry can't be
merged.

Tüm içerik düz Markdown'dır. Bir dosya ekleyin, pull request açın — birleştirilince
otomatik yayınlanır. CI frontmatter'ınızı kontrol eder; bozuk bir kayıt
birleştirilemez.

---

## 🇬🇧 English

### Add a blog post

1. Create `src/content/blog/en/your-post.md` (and/or `src/content/blog/tr/your-post.md`).
2. Put your cover image under `src/assets/blog/` (any size — it's resized at build).
3. Use this frontmatter:

```yaml
---
title: "Your title"
description: "One-sentence summary shown on cards."
pubDate: 2026-03-01
author: mustafa-cavus        # your team id = src/content/team/<id>.md
cover: ../../../assets/blog/your-image.jpg   # optional
tags: ["xai", "tutorial"]
cardSize: standard          # featured | standard | compact
translationId: your-post    # optional: same id links the EN and TR versions
draft: false                # true = hidden until ready
---

Your Markdown content here.
```

**Card sizes:** `featured` (big hero, spans full width) · `standard` (normal card)
· `compact` (dense, text-only row).

### Add / update a team member

Create `src/content/team/your-name.md`, put your photo in `src/assets/team/`
(square, **at least 600×600** recommended — it's auto-cropped to a square):

```yaml
---
name: Your Name
role_en: PhD Student
role_tr: Doktora Öğrencisi
bio_en: Short English bio.
bio_tr: Kısa Türkçe biyografi.
photo: ../../assets/team/your-photo.jpg
group: member               # member | collaborator | alumni
order: 10                   # lower = shown first
links:
  scholar: https://...
  github: https://...
  linkedin: https://...
  x: https://...
  website: https://...
  email: you@example.com
---
```

### Add a paper

Create `src/content/papers/your-paper.md`:

```yaml
---
title: "Paper title"
authors: ["Ada Yılmaz*", "Deniz Kaya*", "Co Author"]   # trailing * = equal contribution
venue: "NeurIPS"
year: 2025
blurb_en: "One-sentence contribution (English)."
blurb_tr: "Tek cümlelik katkı (Türkçe)."
thumbnail: ../../assets/papers/your-thumb.jpg          # optional
tags: ["faithfulness"]
featured: false
links:
  arxiv: https://...
  pdf: https://...
  doi: https://...
  code: https://...
  openreview: https://...
---
```

### Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build
npm run check    # type + content validation (same as CI)
```

---

## 🇹🇷 Türkçe

### Blog yazısı ekleme

1. `src/content/blog/en/yaziniz.md` (ve/veya `src/content/blog/tr/yaziniz.md`) oluşturun.
2. Kapak görselini `src/assets/blog/` altına koyun (boyut fark etmez — build'de küçültülür).
3. Yukarıdaki İngilizce bölümdeki frontmatter şablonunu kullanın.

**Kart boyutları:** `featured` (büyük, tam genişlik) · `standard` (normal kart)
· `compact` (yoğun, yalnızca metin).

> Tek bir dilde yazmanız yeterli. Hem EN hem TR sürümü eklerseniz aynı
> `translationId` değerini verin; site yazıyı diğer dile bağlar.

### Ekip üyesi ekleme / güncelleme

`src/content/team/adiniz.md` oluşturun, fotoğrafınızı `src/assets/team/` altına
koyun (kare, **en az 600×600** önerilir — otomatik kareye kırpılır). Alanlar için
yukarıdaki İngilizce şablona bakın.

### Makale ekleme

`src/content/papers/makaleniz.md` oluşturun. Yazar adının sonundaki `*` eşit
katkıyı gösterir. Alanlar için yukarıdaki şablona bakın.

### Yerelde çalıştırma

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run check
```
