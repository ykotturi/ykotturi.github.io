---
layout: archive
title: "Everyday Design Lab"
permalink: /lab/
redirect_from:
  - /blog/
author_profile: true
---

<!-- Content lives in _data/blog.yml (posts) and _data/news.yml (news). The first post is featured. -->

{% assign featured = site.data.blog | first %}
{% assign featured_external = featured.url | slice: 0, 4 %}

<section class="lab-featured">
  <a href="{{ featured.url }}" class="lab-featured__image-link"{% if featured_external == "http" %} target="_blank" rel="noopener noreferrer"{% endif %}>
    <img src="/images/{{ featured.image }}" alt="{{ featured.alt }}" class="lab-featured__image" style="object-position: {{ featured.image_position | default: 'center top' }};">
  </a>
  <div class="lab-featured__body">
    <p class="lab-kicker">Featured</p>
    <h2 class="lab-featured__title">
      <a href="{{ featured.url }}"{% if featured_external == "http" %} target="_blank" rel="noopener noreferrer"{% endif %}>{{ featured.title }}</a>
    </h2>
    <p class="lab-meta">{{ featured.authors }} &middot; {{ featured.date }}</p>
    <p class="lab-summary">{{ featured.summary }}</p>
  </div>
</section>

{% comment %} Lab News is hidden for now. Remove this comment tag (and the matching endcomment) to show it again.
<h2 class="lab-section-title">Lab News</h2>

<div class="lab-news-grid">
{% for item in site.data.news %}
  <article class="lab-news-card{% unless item.image and item.image != "" %} lab-news-card--text{% endunless %}">
    {% if item.image and item.image != "" %}
      <img src="/images/{{ item.image }}" alt="" class="lab-news-card__image">
    {% endif %}
    <div class="lab-news-card__body">
      <p class="lab-meta">{{ item.date }}</p>
      <p class="lab-news-card__text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</p>
      {% if item.link and item.link != "" %}
        <a href="{{ item.link }}" target="_blank" rel="noopener noreferrer" class="lab-more">{{ item.link_text | default: "Read more" }} &rarr;</a>
      {% endif %}
    </div>
  </article>
{% endfor %}
</div>
{% endcomment %}

<h2 class="lab-section-title">Blog</h2>

<div class="lab-post-grid">
{% for post in site.data.blog offset: 1 %}
  {% assign external = post.url | slice: 0, 4 %}
  <article class="lab-post-card">
    <a href="{{ post.url }}" class="lab-post-card__image-link"{% if external == "http" %} target="_blank" rel="noopener noreferrer"{% endif %}>
      <img src="/images/{{ post.image }}" alt="{{ post.alt }}" class="lab-post-card__image">
    </a>
    <h3 class="lab-post-card__title">
      <a href="{{ post.url }}"{% if external == "http" %} target="_blank" rel="noopener noreferrer"{% endif %}>{{ post.title }}</a>
    </h3>
    <p class="lab-meta">{{ post.authors }} &middot; {{ post.date }}</p>
    <p class="lab-summary lab-summary--clamp">{{ post.summary }}</p>
  </article>
{% endfor %}
</div>

<style>
  .lab-featured,
  .lab-news-grid,
  .lab-post-grid,
  .lab-section-title {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  .lab-section-title {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .lab-kicker {
    margin: 0 0 0.3rem 0;
    font-size: 0.75em;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #3b5998;
  }

  .lab-meta {
    margin: 0 0 0.5rem 0;
    font-size: 0.8em;
    color: #666;
  }

  .lab-summary {
    margin: 0;
    font-size: 0.9em;
    line-height: 1.55;
    color: #222;
  }

  .lab-summary--clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .lab-more {
    font-size: 0.85em;
    font-weight: bold;
    color: #3b5998;
    text-decoration: none;
  }

  .lab-more:hover {
    text-decoration: underline;
  }

  /* Featured story */
  .lab-featured__image-link {
    display: block;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: #f6f8fa;
  }

  .lab-featured__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .lab-featured__image-link:hover .lab-featured__image {
    transform: scale(1.02);
  }

  .lab-featured__body {
    padding-top: 1rem;
  }

  .lab-featured__title {
    margin: 0 0 0.4rem 0;
    font-size: 1.6em;
    line-height: 1.25;
  }

  .lab-featured__title a,
  .lab-post-card__title a {
    color: #222;
    text-decoration: none;
  }

  .lab-featured__title a:hover,
  .lab-post-card__title a:hover {
    text-decoration: underline;
  }

  /* Lab news */
  .lab-news-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    align-items: start;
  }

  .lab-news-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    overflow: hidden;
  }

  .lab-news-card__image {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
  }

  .lab-news-card--text {
    border-top: 4px solid #3b5998;
    background: #f7f9fc;
  }

  .lab-news-card--text .lab-news-card__text {
    font-size: 0.95em;
  }

  .lab-news-card__body {
    padding: 0.8rem 0.9rem 1rem;
  }

  .lab-news-card__text {
    margin: 0 0 0.5rem 0;
    font-size: 0.85em;
    line-height: 1.5;
  }

  /* Blog grid */
  .lab-post-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 1.5rem;
  }

  .lab-post-card__image-link {
    display: block;
    aspect-ratio: 16 / 10;
    background: #f6f8fa;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }

  .lab-post-card__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .lab-post-card__title {
    margin: 0 0 0.3rem 0;
    font-size: 1.05em;
    line-height: 1.35;
  }

  @media (max-width: 900px) {
    .lab-news-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .lab-news-grid,
    .lab-post-grid {
      grid-template-columns: 1fr;
    }

    .lab-featured__title {
      font-size: 1.3em;
    }
  }
</style>
