---
layout: single
title: "Students"
permalink: /students/
author_profile: true
---

<div class="student-container">
  <div class="student-item">
    <a href="https://www.linkedin.com/in/kaoru-seki415/" target="_blank">
      <img src="images/kaoru-seki.jpg" alt="Kaoru Seki" class="student-photo">
      <h3 class="student-name">Kaoru Seki</h3>
    </a>
    <p class="student-degree">MS Student, Human-Centered Computing</p>
  </div>
</div>

<style>
  .student-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
  }

  .student-item {
    width: 200px;
    text-align: center;
  }

  .student-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .student-name {
    margin: 0;
    color: #333;
    text-decoration: none;
  }

  .student-degree {
    margin: 5px 0 0;
    font-style: italic;
    color: #666;
  }
</style>
