---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can find my articles on <u><a href="[{{author.googlescholar}}](https://scholar.google.com/citations?user=MWlEp18AAAAJ&hl=en&authuser=2)" target="_blank">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
