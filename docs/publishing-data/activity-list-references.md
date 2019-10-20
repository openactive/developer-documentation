# Activity list references

## Using the OpenActive Activity List

In order to allow your data to be easily searchable across a wide range of applications, it must contain references to the [OpenActive Activity List](https://www.openactive.io/activity-list/), taking the `id` and `prefLabel` from the list and using an `inScheme` of `"https://openactive.io/activity-list"`, as shown below:

```javascript
"activity": [
  {
    "type": "Concept",
    "id": "https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
    "prefLabel": "Bodypump™",
    "inScheme": "https://openactive.io/activity-list"
  }
]
```

A [JSON-LD definition](https://www.openactive.io/accessibility-support/accessibility-support.jsonld) of the OpenActive Activity List controlled vocabulary is available for live integration into applications.

This controlled vocabulary **SHOULD** be retrieved live within an application using an HTTP GET, to ensure that the most up-to-date version is displayed to the user. The application **SHOULD** GET the URL `"https://openactive.io/activity-list"` using an `Accept` header of `application/ld+json`, but **MAY** also GET the URL `"https://openactive.io/activity-list/activity-list.jsonld"` which does not require a specific `Accept` header, useful for client-side rendering \(note there is no `www` in the URL\).

## Storing references to the OpenActive Activity List

Within your application, it is advisable to store the full `id` of the OpenActive Activity List `Concept` against each opportunity in your database, as the `prefLabel` and other properties are likely to change over time.

Your application may also store the `prefLabel` alongside the `id` at the point of the associating an activity list `Concept` with an opportunity, to remove the need to reference the activity list while outputting open data. It is the responsibility of the data user to use the latest `prefLabel` when rendering the open data it receives.

## Rendering the OpenActive Activity List with SKOS.js

We recommend using [SKOS.js](https://www.npmjs.com/package/@openactive/skos) to implement any activity list client-side rendering, to allow your users to select an activity from the hierarchical activity list to associate with an Event.

### Activity List Dropdown Example

{% embed url="https://jsfiddle.net/nickevansuk/246d5s79/" %}



