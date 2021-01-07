# Activity list references

## Using the OpenActive Activity List

In order to allow your data to be easily searchable across a wide range of applications, it must contain references to the [OpenActive Activity List](https://www.openactive.io/activity-list/).

The OpenActive Activity List is a standardised hierarchical list of physical activity types. It includes over 600 entries, each of which have a unique identifier in the form of a URL.

A [JSON-LD definition](https://openactive.io/activity-list/activity-list.jsonld) of the OpenActive Activity List is available for live integration into applications, together with a [JavaScript library](https://www.npmjs.com/package/@openactive/skos) for navigating the list.

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

See [here](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split_example_1.json&version=2.x) for a full feed example that references the OpenActive Activity List using the snippet above.

{% hint style="warning" %}
Please note that although the newer **`@id`** and **`@type`** are used here and throughout the rest of the OpenActive documentation and tooling, the OpenActive Activity List JSON-LD definition itself still uses **`id`** and **`type`** for backwards compatibility.
{% endhint %}

### Multiple OpenActive Activity List references

A booking system may choose to allow an opportunity to include multiple references to the OpenActive Activity List. If such a feature is implemented, a limit on the total number of references permitted per opportunity is recommended to discourage "tag spamming" \(for example, a maximum of 3\).

An example of multiple references to the OpenActive Activity List is shown below:

```javascript
"activity": [
  {
    "@type": "Concept",
    "@id": "https://openactive.io/activity-list#eaa5a9bc-c23d-4643-80d9-8691646545be",
    "prefLabel": "Pool",
    "inScheme": "https://openactive.io/activity-list"
  },
  {
    "@type": "Concept",
    "@id": "https://openactive.io/activity-list#ee7fa47c-617b-44ac-88fa-ef7b7ae03516",
    "prefLabel": "Snooker",
    "inScheme": "https://openactive.io/activity-list"
  }
]
```

### Integration with an existing "activity types" controlled list

If your booking system already has "activity types" available from a controlled list, these existing activity types should be mapped to the OpenActive Activity List.

This is usually achieved by adding additional fields "OpenActive @id" and "OpenActive prefLabel" to your existing activity types table, and providing a [dropdown](activity-list-references.md#rendering-the-openactive-activity-list-with-skos-js) in your activity type editor.

### Loading the OpenActive Activity List within your application

This [OpenActive Activity List JSON-LD definition](https://openactive.io/activity-list/activity-list.jsonld) **SHOULD** be retrieved at least nightly using an HTTP GET and cached within an application. This ensures that the most up-to-date version is displayed to the user, while also protecting against network failure when accessing the underlying resource.

To access the JSON-LD definition the application **MUST** GET the URL `"https://openactive.io/activity-list/activity-list.jsonld"` which does not require a specific `Accept` header, and is cached via CDN.

Note: there is no `www` in the URL.

{% hint style="info" %}
The JSON-LD definition is also available via a GET of the URL `"https://openactive.io/activity-list"` using an `Accept` header of `application/ld+json`, to conform with JSON-LD expectations, however this shorter URL **MUST NOT** be used in production.
{% endhint %}

### Storing references to the OpenActive Activity List

Within your application, it is advisable to store the full `@id` of an OpenActive Activity List `Concept` against each opportunity in your database, as the `prefLabel` and other properties are likely to change over time.

Your application may also store the `prefLabel` alongside the `@id` at the point of the associating an OpenActive Activity List `Concept` with an opportunity, to remove the need to reference the activity list while outputting open data. It is the responsibility of the data user to use the latest `prefLabel` when rendering the open data it receives.

### Hardcoding OpenActive Activity List references

If your booking system is restricted to a small number of different activities \(e.g. [Run Together](https://data.runtogether.co.uk/) is restricted to just "Running"\), it is usually better to hardcode the activity list references into your booking system.

To find the **`@id`** simply [find the relevant activity in the OpenActive Activity List](https://activity-list.openactive.io/en/basic_find.html), then scroll down to the bottom the page to view a full example JSON-LD snippet for that specific activity, such as the screenshot below. This can be included in your open data feed.

![Screenshot of full example JSON-LD snippet from OpenActive Activity List website](../.gitbook/assets/screenshot-2020-04-25-at-17.19.22%20%281%29.png)

## Rendering the OpenActive Activity List with SKOS.js

We recommend using [SKOS.js](https://www.npmjs.com/package/@openactive/skos) to implement any activity list client-side rendering, to allow your users to select an activity from a hierarchical representation of the OpenActive Activity List to associate with an opportunity.

Maintaining the hierarchy and providing a typeahead search is important as with over 600 activities, and with many activities being more general terms, using an ordinary dropdown box becomes unwieldy for the user.

### Rendering a hierarchy from the JSON-LD definition of the OpenActive Activity List

Although the use of [SKOS.js](https://www.npmjs.com/package/@openactive/skos) is recommended when reading the JSON-LD definition of the OpenActive Activity List in JavaScript, for other languages the JSON-LD may also be parsed directly. 

The [JSON-LD definition](https://openactive.io/activity-list/activity-list.jsonld) of the OpenActive Activity List includes the following key properties:

| Property | Description | Include in open data feed |
| :--- | :--- | :--- |
| `id` | The unique ID of the Concept, which should be stored and used when referencing the Concept. | Yes |
| `prefLabel` | The primary display label for the Concept, in the English language. | Yes |
| `altLabel` | The alternative display labels of the Concept, in the English language. When displaying the Concept to the user it is recommended that the array of `altLabel` be appended to the `prefLabel`, using the separator `" / "`. This logic does not apply to the `prefLabel` included in the open data feed. | No |
| `topConceptOf` | Indicates that the Concept is at the top level of the hierarchy, when the value of this property is equal to `"https://openactive.io/activity-list"`. | No |
| `broader` | An array of parent Concept IDs. Note this is a [polyhierarchical](https://en.wiktionary.org/wiki/polyhierarchy) list, and the same Concept may exist under multiple parents. | No |
| `narrower` | An array of child Concept IDs. | No |

To render a hierarchy:

1. Filter the data to return only Concepts with `topConceptOf` set to `"https://openactive.io/activity-list"`, to produce an initial list of top-level Concepts.
2. Recursively, for each Concept, lookup the `narrower` \(child\) Concept IDs.

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

For general contribution simply link to "[`https://openactive.io/activity-list/`](https://openactive.io/activity-list/)". This will take the user to a page where they can make suggestions about the activity list.

Example: [Can't find an activity? Contribute to the list](https://openactive.io/activity-list/)

#### Contribute to a specific activity

The link to contribute to a specific activity is simply the URL of the **`@id`**. This will take the user to a page specific to the activity where they can make suggestions about the activity, including updating the definition of an activity.

Example: [Contribute](https://openactive.io/activity-list#72d19892-5f55-4e9c-87b0-a5433baa49c8)

### Gladstone: Contribution links example

An example of "Contribute" links within the Gladstone leisure management system is shown below.

![Screenshot of the &quot;Contribute&quot; links within the Gladstone system](../.gitbook/assets/screenshot-2020-04-25-at-13.59.09%20%281%29.png)

