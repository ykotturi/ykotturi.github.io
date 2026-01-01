---
layout: single
title: "Software"
permalink: /software/
author_profile: true
---

<div class="software-container">
  <div class="software-card">
    <div class="software-header">
      <h2 class="software-title">Tokenwise Tracker</h2>
      <span class="software-badge">npm package</span>
    </div>
    <p class="software-description">
      Tokenwise Tracker is an npm package that provides effortless OpenAI cost monitoring for developers. It helps track and manage API usage costs when working with OpenAI's services, making it easier to monitor spending and optimize usage.
    </p>
    <div class="software-links">
      <a href="https://www.npmjs.com/package/tokenwise-tracker" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fab fa-npm"></i> View on npm
      </a>
      <a href="https://medium.com/@chhayaketul13/tokenwise-tracker-effortless-openai-cost-monitoring-for-developers-98f333a9161d" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fab fa-medium"></i> Read blog post
      </a>
    </div>
  </div>

  <div class="software-card">
    <div class="software-header">
      <h2 class="software-title">BizChat</h2>
      <span class="software-badge">web app</span>
    </div>
    <p class="software-description">
      BizChat is an LLM-powered web application that helps small business owners across digital skill levels draft business plans. BizChat scaffolds AI-powered business planning by enabling entrepreneurs to generate business plans from their website or chats, iterate via click-to-apply changes or a rich-text editor, and get feedback from experts. 
    </p>
    <div class="software-links">
      <a href="https://bizchat-io.vercel.app/" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fas fa-globe"></i> Visit website
      </a>
      <a href="https://github.com/ykotturi/bizchat/" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fab fa-github"></i> View on GitHub (coming soon)
      </a>
      <a href="https://ykotturi.github.io/files/CHI_WORK_Demo_2025_Camera_Ready.pdf" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fas fa-file-pdf"></i> Read paper
      </a>
    </div>
  </div>

  <div class="software-card">
    <div class="software-header">
      <h2 class="software-title">Peerdea</h2>
      <span class="software-badge">mobile app</span>
    </div>
    <p class="software-description">
      Peerdea is a trusted environment for entrepreneurs to reflect and receive peer feedback. It facilitates feedback exchange, goal setting, and accountability among trusted entrepreneurs, providing social support for business and professional development. The system includes features for sharing design concepts, giving structured feedback using "Yes" and "Yes and..." responses, and building peer support networks.
    </p>
    <div class="software-links">
      <a href="https://peerdea.app/" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fas fa-globe"></i> Visit website
      </a>
      <a href="https://github.com/ykotturi/peerdea" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fab fa-github"></i> View on GitHub
      </a>
      <a href="https://dl.acm.org/doi/pdf/10.1145/3637384" target="_blank" rel="noopener noreferrer" class="software-link">
        <i class="fas fa-file-pdf"></i> Read paper
      </a>
    </div>
  </div>
</div>

<style>
  .software-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    margin: 30px 0;
  }

  .software-card {
    background: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .software-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .software-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .software-title {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 600;
    color: #24292e;
  }

  .software-badge {
    background-color: #0366d6;
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .software-description {
    color: #586069;
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 0.95rem;
  }

  .software-author {
    color: #6a737d;
    font-size: 0.9rem;
    margin-bottom: 20px;
    font-style: italic;
  }

  .software-author a {
    color: #0366d6;
    text-decoration: none;
    font-weight: 500;
  }

  .software-author a:hover {
    text-decoration: underline;
  }

  .software-links {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e4e8;
  }

  .software-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: #f6f8fa;
    color: #0366d6;
    text-decoration: none;
    border-radius: 6px;
    border: 1px solid #d1d5da;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .software-link:hover {
    background-color: #0366d6;
    color: white;
    border-color: #0366d6;
    text-decoration: none;
  }

  .software-link i {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .software-container {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .software-card {
      padding: 20px;
    }

    .software-title {
      font-size: 1.5rem;
    }

    .software-links {
      flex-direction: column;
    }

    .software-link {
      width: 100%;
      justify-content: center;
    }
  }
</style>


