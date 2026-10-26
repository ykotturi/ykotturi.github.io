---
layout: archive
title: "Zines"
permalink: /zines/
author_profile: true
---

<div class="zine-container">
  <p class="zine-gallery-intro">Click a cover to explore each zine.</p>
  
  <div class="zine-gallery">
    <a class="zine-card" href="/zines/ai-policy/">
      <div class="zine-card-cover">
        <img src="/images/zine-ai-policy-thumb.jpg" alt="Cover of the Student-Driven AI Policy Recommendations zine">
      </div>
      <div class="zine-card-body">
        <h3>Student-Driven AI Policy Recommendations</h3>
        <p>UMBC HCC 629 &middot; Spring 2025</p>
      </div>
    </a>
  </div>
  
  <div class="zine-info">
    <h3>What is a zine?</h3>
    <p>A zine (short for "fanzine") is a self-published, small-circulation publication that often features creative, personal, or alternative content. Zines have a rich history in DIY culture, activism, and community organizing, serving as accessible platforms for sharing ideas, art, and perspectives outside mainstream media channels.</p>
  </div>
</div>

<style>
  .zine-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .zine-gallery-intro {
    color: #333;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 25px;
  }
  
  .zine-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
  }
  
  .zine-card {
    display: block;
    color: inherit;
    text-decoration: none;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f8f9fa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .zine-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  .zine-card-cover {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background-color: #000;
  }
  
  .zine-card-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .zine-card-body {
    padding: 15px;
  }
  
  .zine-card-body h3 {
    color: #24292e;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0 0 6px 0;
  }
  
  .zine-card-body p {
    color: #666;
    font-size: 0.85rem;
    margin: 0;
  }
  
  .zine-info {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #e1e4e8;
  }
  
  .zine-info h3 {
    color: #24292e;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .zine-info p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
  }
</style>
