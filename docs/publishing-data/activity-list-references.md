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

This controlled vocabulary **SHOULD** be retrieved frequently using an HTTP GET and cached within an application, to ensure that the most up-to-date version is displayed to the user, while also protecting against network failure when accessing the underlying resource. To access this controlled vocabulary the application **MUST** GET the URL `"https://openactive.io/activity-list/activity-list.jsonld"` \(note there is no `www` in the URL\) which does not require a specific `Accept` header, and is cached via CDN. The controlled vocabulary is also available via a GET of the URL `"https://openactive.io/activity-list"` using an `Accept` header of `application/ld+json`, for completeness, however this shorter URL **MUST NOT** be used in production.

## Storing references to the OpenActive Activity List

Within your application, it is advisable to store the full `id` of an OpenActive Activity List `Concept` against each opportunity in your database, as the `prefLabel` and other properties are likely to change over time.

Your application may also store the `prefLabel` alongside the `id` at the point of the associating an OpenActive Activity List `Concept` with an opportunity, to remove the need to reference the activity list while outputting open data. It is the responsibility of the data user to use the latest `prefLabel` when rendering the open data it receives.

## Rendering the OpenActive Activity List with SKOS.js

We recommend using [SKOS.js](https://www.npmjs.com/package/@openactive/skos) to implement any activity list client-side rendering, to allow your users to select an activity from the hierarchical activity list to associate with an Event.

### Activity List Dropdown Example

Below is a copy-and-pastable example of a searchable hierarchical dropdown that can be used within the booking system to allow the user to select an activity from the activity list.

See the "**Result**" tab below for a live demo.

{% embed url="https://jsfiddle.net/nickevansuk/246d5s79/" caption="" %}

### Activity List Dropdown Video Demo

An example of the code above live in the Our Parks booking system is shown in the video below \(note "**OpenActive id**" and "**OpenActive prefLabel**" fields are displayed in the video for debugging purposes, but would ordinarily be hidden from the user\).

{% embed url="https://youtu.be/5C1A-xZtqqo" %}



