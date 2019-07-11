---
description: The code behind the OpenActive's Activity List Controlled Vocabulary.
---

# Activity List

Repos tagged with the `activity-list` topic are used to power OpenActive's [Activity List](https://www.openactive.io/activity-list/), our [Controlled Vocabulary](https://en.wikipedia.org/wiki/Controlled_vocabulary) used to assign unique identifiers to sport activities.

* [**activity-list**](https://github.com/openactive/activity-list)**:** This repo contains the code used to parse the activity list and present it via a web front-end
* \*\*\*\*[**activity-list-json-xml**](https://github.com/openactive/activity-list-xml-json)**:** A small repo; takes XML-encoded activity input and converts it into a JSON-LD representation.
* [**concept-scheme-restriction generator**](https://github.com/openactive/concept-scheme-restriction-generator): Outputs complete Concept Scheme files from ConceptSchemeRestrictions. In other words, given a parent Concept Scheme and a list of attributes to exclude from it, generates a Concept Scheme consisting of only those attributes which remain.

The Activity List Controlled Vocabulary is expressed in [SKOS](https://en.wikipedia.org/wiki/Simple_Knowledge_Organization_System). Developers working on the Activity List may thus also wish to investigate [OpenActive's `skos` repos](skos.md).





