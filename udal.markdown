---
layout: page
nav_title: UDAL
title: Uniform Data Access Layer (UDAL)
---

The Uniform Data Access Layer (UDAL) concept brings a modular and re-usable
approach to choosing and using data in data processing workflows.

Researchers and scientists can fetch data using query names, with well-defined
result structures, through available UDAL implementations.



{% capture example_md %}{% include_relative udal/_example.markdown %}{% endcapture %}
{% capture example %}{{ example_md | markdownify }}{% endcapture %}
{% include example.html id="udal_example" title="Example query" content=example %}


Current work on UDAL focuses on machine-usable descriptions of queries using
[RDF](https://www.w3.org/RDF/) and on implementations using the the
[Python](https://www.python.org/) programming language.

Discover more:

- [Concept]({% link udal/concept.markdown %})
- [How to Use]({% link udal/how-to-use.markdown %})
- [How to Implement]({% link udal/how-to-implement.markdown %})
