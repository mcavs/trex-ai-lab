---
title: "Do Saliency Maps Tell the Truth?"
description: "A short tour of when saliency methods are faithful — and when they mislead."
pubDate: 2026-02-03
author: ugur-dar
cover: ../../../assets/blog/saliency.jpg
tags: ["saliency", "faithfulness", "tutorial"]
cardSize: standard
---

Saliency maps are everywhere, but a pretty heatmap is not the same as a faithful
explanation. In this post we look at simple sanity checks every practitioner
should run before trusting an attribution.

## A quick sanity check

<aside class="note"><span class="note-k">Margin note</span> This is the site's signature: explanations live out here, in the margin — exactly what an attribution does to a prediction.</aside>

If randomizing a model's weights barely changes the saliency map, the map is
probably not explaining the model. We walk through this and two more diagnostics.

The most important habit is to treat every explanation as a claim to be tested,
not a picture to be trusted. A heatmap that survives randomization, data
ablation, and re-training is worth far more than a pretty one.
