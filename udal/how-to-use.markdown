---
layout: page
title: "UDAL: How to Use"
---

{% capture udal_example_md %}{% include_relative udal/_udal_example.markdown %}{% endcapture %}
{% capture udal_example %}{{ udal_example_md | markdownify }}{% endcapture %}
{% include example.html id="udal_example" title="Example query" content=udal_example %}
{% capture mgo_example_md %}{% include_relative udal/_mgo_example.markdown %}{% endcapture %}
{% capture mgo_example %}{{ mgo_example_md | markdownify }}{% endcapture %}
{% include example.html id="mgo_example" title="Example query - MGO Observatory" content=mgo_example %}

- Find a UDAL implementation (e.g.,
  [https://github.com/fair-ease/py-udal-fe-impl](https://github.com/fair-ease/py-udal-fe-impl))
  
  ```python
  from fairease.udal.udal import UDAL
  ```
- Create a UDAL object
  
  ```python
  wikidata = UDAL('https://www.wikidata.org/')
  ```
- Execute a query
  
  ```python
  query_name = 'urn:fairease.eu:udal:example:weekdays'
  query_params = { 'lang': 'en' }
  result = wikidata.execute(query_name, query_params)
  ```
- Get the data
  
  ```python
  data = result.data()
  ```
  
  which should contain something like
  
  | number | name      | lang  |
  |--------|-----------|-------|
  | 1      | Monday    | en    |
  | 2      | Tuesday   | en    |
  | 3      | Wednesday | en    |
  | 4      | Thursday  | en    |
  | 5      | Friday    | en    |
  | 6      | Saturday  | en    |
  | 7      | Sunday    | en    |
