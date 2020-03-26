# Virtual Events

Virtual Events, to be presented in user interfaces as "Livestream" or "Live" events, are opportunities that are accessible remotely in real-time.

The **`eventAttendanceMode`** property is used to indicate that an opportunity is available to attend online. It can be applied to the existing [opportunity types](../data-model/data-model-overview.md) for `SessionSeries`, `HeadlineEvent`, `Event`, `CourseInstance` as part of **existing RPDE feeds for those types**.

{% hint style="warning" %}
Online classes and events are part of an [ongoing discussion](https://github.com/openactive/modelling-opportunity-data/issues/71) that has been accelerated in response to the COVID-19 pandemic, and any properties suggested in the associated proposals are subject to change after the pandemic has ended. We welcome your contribution to the [discussion and various proposals](https://github.com/openactive/modelling-opportunity-data/labels/virtual%20events) with any thoughts and feedback from your implementation.
{% endhint %}

## Properties

{% hint style="info" %}
This guidance is still being augmented with details. Please see the "**Updated Proposal**" within each of the referenced GitHub issues below for specific guidance on each property, which will be transferred here very soon. Comments welcome on these issues if anything is unclear. For feedback on the guidance below itself, please comment on [this GitHub issue](https://github.com/openactive/modelling-opportunity-data/issues/231).
{% endhint %}

### SessionSeries, HeadlineEvent, CourseInstance and Event

The following properties should be **REQUIRED** \(inheriting from existing Modelling Opportunity Data specification\):

* `name`
* `activity`
* `organizer` \(including a recommended `sameAs` property for social media handles\)
* `eventAttendanceMode` \([\#225](https://github.com/openactive/modelling-opportunity-data/issues/225)\)
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
* `beta:isInteractivityPreferred` \([\#230](https://github.com/openactive/modelling-opportunity-data/issues/230)\)
* `beta:participantSuppliedEquipment` \([\#229](https://github.com/openactive/modelling-opportunity-data/issues/229)\)
* `beta:affiliatedLocation` \([\#227](https://github.com/openactive/modelling-opportunity-data/issues/227)\)

### ScheduledSession and Event

The following properties should be REQUIRED \(inheriting from existing Modelling Opportunity Data specification\):

* `startDate`

The following properties should be RECOMMENDED:

* `endDate`
* `beta:virtualLocation` \([\#224](https://github.com/openactive/modelling-opportunity-data/issues/224)\) \(including a `url` to the live class itself, e.g. a Facebook Live or Zoom URL, and`beta:maximumVirtualAttendeeCapacity` \([\#226](https://github.com/openactive/modelling-opportunity-data/issues/226)\)\)

**Example**

{% hint style="info" %}
The examples below only include new properties specific to virtual events, please see above for all properties that should be included. This will be improved soon.
{% endhint %}

Note full guidance will include the above fields, and individual ScheduledSessions.

```javascript
{
  "type": "SessionSeries",
  ...
  "beta:affiliatedLocation": {
    "type": "Place",
    "name": "Middlesbrough Sports Village",
    "address": {
      "type": "PostalAddress",
      "streetAddress": "Alan Peacock Way",
      "addressLocality": "Village East",
      "addressRegion": "Middlesbrough",
      "postalCode": "TS4 3AE",
      "addressCountry": "GB"
    },
    "geo": {
      "type": "GeoCoordinates",
      "latitude": 54.543964,
      "longitude": -1.20978500000001
    }
  },
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "beta:isInteractivityPreferred": true,
  "beta:participantSuppliedEquipment": "https://openactive.io/Required"
}
```

```javascript
{
  "type": "ScheduledSession",
  ...
  "beta:virtualLocation": {
    "type": "VirtualLocation",
    "name": "Zoom Video Chat",
    "url": "https://zoom.us/j/1234567890/signup",
    "description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start",
    "beta:maximumVirtualAttendeeCapacity": 20
  }
}
```



