# Activity list references

## Using the OpenActive Activity List

In order to allow your data to be easily searchable across a wide range of applications, it must contain references to the [OpenActive Activity List](https://www.openactive.io/activity-list/).

A [JSON-LD definition](https://openactive.io/activity-list/activity-list.jsonld) of the OpenActive Activity List is available for live integration into applications.

Each opportunity within a booking or listing system must have an associated activity from the OpenActive Activity List. This is often achieved by providing a [dropdown list](activity-list-references.md#rendering-the-openactive-activity-list-with-skos-js) for the activity provider to select from when they are creating or updating an opportunity in the booking system.

### Including OpenActive Activity List references in your open data feed

In the relevant [open data feed](data-feeds/types-of-feed.md), the `@id` and `prefLabel` of at least one activity from the OpenActive Activity List must be included with each opportunity, along with an `inScheme` of `"https://openactive.io/activity-list"`, as shown below:

```javascript
"activity": [
  {
    "@type": "Concept",
    "@id": "https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
    "prefLabel": "Bodypump™",
    "inScheme": "https://openactive.io/activity-list"
  }
]
```

{% hint style="warning" %}
Please note that although the newer **`@id`** and **`@type`** are used here and throughout the rest of the OpenActive documentation and tooling, the OpenActive Activity List JSON-LD definition itself still uses **`id`** and **`type`** for backwards compatibility.
{% endhint %}

### Integration with existing "activity types"

If your booking system already has "activity types" available from a controlled list, these existing activity types should be mapped to the OpenActive Activity List.

This is usually achieved by adding additional fields "OpenActive @id" and "OpenActive prefLabel" to your existing activity types table, and providing a [dropdown](activity-list-references.md#rendering-the-openactive-activity-list-with-skos-js) in your activity type editor.

### Loading the OpenActive Activity List within your application

This [OpenActive Activity List JSON-LD definition](https://openactive.io/activity-list/activity-list.jsonld) **SHOULD** be retrieved frequently \(recommended nightly\) using an HTTP GET and cached within an application. This ensures that the most up-to-date version is displayed to the user, while also protecting against network failure when accessing the underlying resource.

To access the JSON-LD definition the application **MUST** GET the URL `"https://openactive.io/activity-list/activity-list.jsonld"` which does not require a specific `Accept` header, and is cached via CDN.

Note: there is no `www` in the URLs.

{% hint style="info" %}
The JSON-LD definition is also available via a GET of the URL `"https://openactive.io/activity-list"` using an `Accept` header of `application/ld+json`, to conform with JSON-LD expectations, however this shorter URL **MUST NOT** be used in production.
{% endhint %}

### Storing references to the OpenActive Activity List

Within your application, it is advisable to store the full `@id` of an OpenActive Activity List `Concept` against each opportunity in your database, as the `prefLabel` and other properties are likely to change over time.

Your application may also store the `prefLabel` alongside the `@id` at the point of the associating an OpenActive Activity List `Concept` with an opportunity, to remove the need to reference the activity list while outputting open data. It is the responsibility of the data user to use the latest `prefLabel` when rendering the open data it receives.

## Rendering the OpenActive Activity List with SKOS.js

We recommend using [SKOS.js](https://www.npmjs.com/package/@openactive/skos) to implement any activity list client-side rendering, to allow your users to select an activity from a hierarchical representation of the OpenActive Activity List to associate with an opportunity.

### Activity List dropdown implementation example

Below is a copy-and-pastable example of a searchable hierarchical dropdown that can be used within your booking system to allow the user to select an activity from the OpenActive Activity List.

On load you may specify the **`@id`** to set the dropdown to an existing value.

On selection the dropdown provides both **`@id`** and **`prefLabel`**, which can then be stored in your database and later used within your open data feed\(s\).

The dropdown also provides an activity **`definition`** that may be displayed to the user for disambiguation.

See the "**Result**" tab below for a live demo.

{% embed url="https://jsfiddle.net/nickevansuk/246d5s79/" caption="" %}

### Our Parks: Activity List dropdown video demo

An example of the above code in the Our Parks booking system is shown in the video below.

Note "**OpenActive id**" and "**OpenActive prefLabel**" fields are displayed in the video for debugging purposes, but would ordinarily be hidden from the user.

{% embed url="https://youtu.be/5C1A-xZtqqo" caption="" %}

## Contribution links

It is recommended that you provide links to contribute to the OpenActive Activity List, which encourage activity providers to participate in its maintenance and curation.

Two different types of links are available:

#### Contribute to the list

For general contribution simply link to "[`https://www.openactive.io/activity-list/`](https://www.openactive.io/activity-list/)". This will take the user to a page where they can make suggestions about the activity list.

Example: [Can't find an activity? Contribute to the list](https://www.openactive.io/activity-list/)

#### Contribute to a specific activity

The link to contribute to a specific activity is simply the URL of the **`@id`**. This will take the user to a page specific to the activity where they can make suggestions about the activity, including updating the definition of an activity.

Example: [Contribute](https://openactive.io/activity-list#72d19892-5f55-4e9c-87b0-a5433baa49c8)

### Gladstone: Contribution links example

An example of "Contribute" links within the Gladstone leisure management system is shown below.

![An example of the &quot;Contribute&quot; links within the Gladstone system](../.gitbook/assets/screenshot-2020-04-25-at-13.59.09.png)

