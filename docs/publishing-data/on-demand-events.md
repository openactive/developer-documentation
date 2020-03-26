# On-Demand Events

On-Demand Events are recordings of events that do not occur at a specific time, and are available to watch at any time - similar to content on Netflix or iPlayer.

These might be pre-recorded fitness classes, workouts, sessions which are provided via an online product, such as Les Mills On Demand and Racefully. They include on-demand video content and sessions which can be participated in virtually using an app or run-tracker \(e.g. live virtual 5k\).

The **`OnDemandEvent`** type is used to represent such events, and they must be published using a **separate RPDE feed**.

{% hint style="warning" %}
Online classes and events are part of an [ongoing discussion](https://github.com/openactive/modelling-opportunity-data/issues/71) that has been accelerated in response to the COVID-19 pandemic, and any properties suggested in the associated proposals are subject to change after the pandemic has ended. We welcome your contribution to the [discussion and various proposals](https://github.com/openactive/modelling-opportunity-data/labels/virtual%20events) with any thoughts and feedback from your implementation.
{% endhint %}

## Properties

{% hint style="info" %}
This guidance is still being augmented with details. Please see the "**Updated Proposal**" within each of the referenced GitHub issues below for specific guidance on each property, which will be transferred here very soon. Comments welcome on these issues if anything is unclear. For feedback on the guidance below itself, please comment on [this GitHub issue](https://github.com/openactive/modelling-opportunity-data/issues/231).
{% endhint %}

The following properties should be **REQUIRED**:

* `name`
* `activity`
* `organizer` \(including a recommended `sameAs` property for social media handles\)
* `offers` \(including a recommended `url` that links straight to the purchase page\)
* `url` \(to a page describing the session\)

The following properties should be **RECOMMENDED**:

* `duration`
* `description`
* `image`
* `level` \([\#82](https://github.com/openactive/modelling-opportunity-data/issues/82)\) - using the string "`Beginner`" for beginner friendly classes
* `ageRange`
* `genderRestriction`
* `beta:isFirstSessionAccessibleForFree` \([\#232](https://github.com/openactive/modelling-opportunity-data/issues/232)\)
* `beta:participantSuppliedEquipment` \([\#229](https://github.com/openactive/modelling-opportunity-data/issues/229)\)
* `workFeatured`

**Example**

{% hint style="info" %}
The example below only include**s** new properties specific to virtual events, please see above for all properties that should be included. This will be improved soon.
{% endhint %}

```javascript
{
  "type": "OnDemandEvent",
  ...

  "workFeatured": {
    "type": "VideoObject",
    "url": "https://www.youtube.com/watch?v=3fbCs0GVjgQ"
  },
  "beta:participantSuppliedEquipment": "https://openactive.io/Required"
}
```

