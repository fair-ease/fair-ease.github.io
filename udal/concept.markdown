---
layout: page
title: "UDAL: Concept"
---

The goal of the Uniform Data Access Layer is to:

- distinguish between the retrieval of data and its processing
- make data access compatible between providers
- allow re-use of software packages

There is no single UDAL implementation, only a specification they must follow.
This allows for different people to create implementations for the data they
provide or for the data they need to access if no one else provided a package
already. Moreover, queries are not part of the specification, and implementors
are free to choose the queries and optional parameters they wish to support.

![UDAL overview](/images/udal.svg){:
    style="display:block; margin-left:auto; margin-right:auto"
}

The specification for UDAL implementations describes how the code for an
implementation should be. In Python, this is done using [abstract base
classes](https://docs.python.org/3/library/abc.html) and it is available at
[https://github.com/fair-ease/py-udal-interface](https://github.com/fair-ease/py-udal-interface)
.

UDAL implementations can include support for multiple queries and distinct data
sources. A **connection string** provided by the user will set which data
sources and queries are available. Access to the data and behaviour of the
implementation are defined by **configuration** items provided by the user.

![UDAL implementation and usage example](/images/udal-implementation.svg){:
    style="display:block; margin-left:auto; margin-right:auto"
}

Named queries are specified using RDF and an initial set of queries is available
at [https://github.com/fair-ease/dataset-demand-register](https://github.com/fair-ease/dataset-demand-register)
.
