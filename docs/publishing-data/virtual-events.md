# Virtual Events

Virtual Events, to be presented in user interfaces as "Livestream" or "Live" events, are opportunities that are accessible remotely in real-time.

The **`eventAttendanceMode`** property is used to indicate that an opportunity is available to attend online. It can be applied to the existing [opportunity types](../data-model/data-model-overview.md) for `SessionSeries`, `HeadlineEvent`, `Event`, `CourseInstance` as part of **existing RPDE feeds for those types**.

{% hint style="warning" %}
Online classes and events are part of an [ongoing discussion](https://github.com/openactive/modelling-opportunity-data/issues/71) that has been accelerated in response to the COVID-19 pandemic, and any properties suggested in the associated proposals are subject to change after the pandemic has ended. We welcome your contribution to the [discussion and various proposals](https://github.com/openactive/modelling-opportunity-data/labels/virtual%20events) with any thoughts and feedback from your implementation.
{% endhint %}

## Implementation guidance

## Properties

{% hint style="info" %}
This guidance is still being augmented with details. Please see the "**Updated Proposal**" within each of the referenced GitHub issues below for specific guidance on each property, which will be transferred here very soon. Comments welcome on these issues if anything is unclear. For feedback on the guidance below itself, please comment on [this GitHub issue](https://github.com/openactive/modelling-opportunity-data/issues/231).
{% endhint %}

In order to upgrade your booking or listing system to support virtual events, consider implementing the following properties. The [OpenActive libraries](data-feeds/implementing-rpde-feeds.md#net-php-and-ruby-libraries), [types reference documentation](../data-model/types/#event-types-also-used-for-virtual-events), and [validator](http://validator.openactive.io/) have been updated to support these properties.

Note that in order to make use of "beta" properties, `"@context"` must include the beta namespace, as follows:

```javascript
"@context": [
  "https://openactive.io/",
  "https://openactive.io/ns-beta"
],
```

{% hint style="info" %}
Please see the "**Updated Proposal**" within each of the referenced GitHub issues in the headings below for further specific guidance on each property. Please comment on these GitHub issue if you require any specific clarifications.
{% endhint %}

### `eventAttendanceMode` \([\#225](https://github.com/openactive/modelling-opportunity-data/issues/225)\)

#### **Definition**

Whether an event occurs online, offline, or a mix of both.

The following properties should be **REQUIRED** \(inheriting from existing Modelling Opportunity Data specification\):

#### **Why implement this property?**

This property is the **required** for a minimal implementation of virtual events.

* `name`
* `activity`
* `organizer` \(including a recommended `sameAs` property for social media handles\)
* `eventAttendanceMode` \([\#225](https://github.com/openactive/modelling-opportunity-data/issues/225)\)
* `offers` \(including a recommended `url` that links straight to the purchase page\)
* `url` \(to a page describing the session\)

The following properties should be **RECOMMENDED**:

#### **Values**

`eventAttendanceMode` must have one of the following values:

* `https://schema.org/MixedEventAttendanceMode`
* `https://schema.org/OfflineEventAttendanceMode`
* `https://schema.org/OnlineEventAttendanceMode`

If `eventAttendanceMode` not provided it is must be assumed to be `https://schema.org/OfflineEventAttendanceMode` for backwards compatibility.

If `eventAttendanceMode` is set to `https://schema.org/OnlineEventAttendanceMode`, `location` **MUST NOT** be provided for backwards compatibility, in order to ensure that existing data users do not misrepresent virtual classes as physical ones.

#### Example

```javascript
{
  "@type": "SessionSeries",
  ...
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"
  ...
}
```

### `beta:affiliatedLocation` \([\#227](https://github.com/openactive/modelling-opportunity-data/issues/227)\)

#### **Definition**

The original location of the event before it was moved online.

#### **Why implement this property?**

This property allows data users to display only virtual events that would usually be run from a local location, for those wishing to promote "local faces in local places" as part of the COVID-19 efforts to provide familiarity to those under lockdown.

#### **Values**

The property is identical to the existing `location` property, requiring a `Place` with either an `address` or a `geo`.

#### Example

```javascript
{
 "@type": "SessionSeries",
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
  ...
}
```

### `beta:isInteractivityPreferred` \([\#230](https://github.com/openactive/modelling-opportunity-data/issues/230)\)

**Definition**

A property that indicates whether the virtual event is interactive \(e.g. Zoom with participant microphones and cameras on\), or is just a one-way broadcast \(e.g. Facebook Live, Instagram Live, Zoom with participant microphones and cameras off\).

#### **Why implement this property?**

This property allows applications to present a filter for "interactive classes", for those users who prefer instructors who engage with their audience. This is a key differentiator for smaller classes that will likely benefit most from being published as open data, as activity providers who use Instagram or Facebook Live already have a large audience.

#### **Values**

`beta:isInteractivityPreferred` is a boolean, and so may have the values of `true`, `false` or be left unspecified. If unspecified, it is assumed that the value is unknown.

The existing `attendeeInstruction` and `description` properties may be used for activity providers to provide further clarification about interactivity preferences.

Additionally, this may optionally be combined with the boolean `beta:isVirtuallyCoached` \([\#71](https://github.com/openactive/modelling-opportunity-data/issues/71)\) for the cases where the virtual class instruction is pre-recorded - e.g. for the common use case where Zoom is used for a group of participants to share in a pre-recorded class. If `beta:isVirtuallyCoached` is unspecified, it is assumed to be `false`.

#### **Example**

```javascript
{
 "@type": "SessionSeries",
 ...
 "beta:isInteractivityPreferred": true,
 "description": "We get together with others in the village weekly to follow a Yoga video together on Zoom.",
 "attendeeInstruction": "We encourage you to switch your camera on to feel part of the community.",
 "beta:isVirtuallyCoached": true
 ...
}
```

### `beta:participantSuppliedEquipment` \([\#229](https://github.com/openactive/modelling-opportunity-data/issues/229)\)

**Definition**

A property that indicates whether the participant must or may supply equipment for use in the Event.

#### **Why implement this property?**

This property allows applications to present a filter for "no equipment required", for those users who do not have equipment at home. This helps first-time virtual participants find classes they can easily attend.

This is a key differentiator for smaller classes that will likely benefit most from being published as open data, as activity providers who use Instagram or Facebook Live already have a large audience.

#### **Values**

`beta:participantSuppliedEquipment` must have one of the following values:

* `https://openactive.io/Required` - Equipment is required
* `https://openactive.io/Optional` - Equipment is optional, and the participant can improvise
* `https://openactive.io/Unavailable` - No equipment required

The existing `attendeeInstruction` and `description` properties may be used for activity providers to provide further clarification about equipment requirements.

#### **Example**

```javascript
{
 "@type": "SessionSeries",
 ...
 "beta:participantSuppliedEquipment": true,
 "description": "This class is better with steps at home, but you can improvise if you don't have any.",
 "attendeeInstruction": "If you don't have a step at home, find two reasonably thick books.",
 ...
}
```

### `maximumVirtualAttendeeCapacity` \([\#226](https://github.com/openactive/modelling-opportunity-data/issues/226)\)

### `beta:virtualLocation` \([\#224](https://github.com/openactive/modelling-opportunity-data/issues/224)\)

### `level` \([\#82](https://github.com/openactive/modelling-opportunity-data/issues/82)\)

## Conformance criteria

### SessionSeries, HeadlineEvent, CourseInstance and Event

The following properties **MUST NOT** be included when `eventAttendanceMode` is set to `https://schema.org/OnlineEventAttendanceMode`:

* `location` \([\#227](https://github.com/openactive/modelling-opportunity-data/issues/227)\)

The following properties are **RECOMMENDED**:

* `description`
* `image`
* `level` \([\#82](https://github.com/openactive/modelling-opportunity-data/issues/82)\) - using the string "`Beginner`" for beginner friendly classes
* `ageRange`
* `genderRestriction`
* `beta:isFirstSessionAccessibleForFree` \([\#232](https://github.com/openactive/modelling-opportunity-data/issues/232)\)
* `beta:isInteractivityPreferred` \([\#230](https://github.com/openactive/modelling-opportunity-data/issues/230)\)
* `beta:participantSuppliedEquipment` \([\#229](https://github.com/openactive/modelling-opportunity-data/issues/229)\)
* `beta:affiliatedLocation` \([\#227](https://github.com/openactive/modelling-opportunity-data/issues/227)\)
* `maximumVirtualAttendeeCapacity` \([\#226](https://github.com/openactive/modelling-opportunity-data/issues/226)\)

### ScheduledSession and Event

The following properties are **REQUIRED** \(inheriting from existing [Modelling Opportunity Data specification](https://www.openactive.io/modelling-opportunity-data/)\):

* `startDate`

The following properties are **RECOMMENDED**:

* `duration`
* `endDate`
* `beta:virtualLocation` \([\#224](https://github.com/openactive/modelling-opportunity-data/issues/224)\) \(including a `url` to the live class itself, e.g. a Facebook Live or Zoom URL\)

## **Examples**

### **Complete examples**

The validator includes complete examples for:

* [Virtual SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split-virtual_example_1.json&version=2.x)
* [Virtual ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split-virtual_example_1.json&version=2.x)

### Illustrative examples

The examples below only include new properties specific to virtual events, for those already familiar with the OpenActive specifications. Please see above for all properties that should be included.

```javascript
{
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/ns-beta"
  ],
  "type": "SessionSeries",
  ...
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
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
  "beta:isInteractivityPreferred": true,
  "beta:participantSuppliedEquipment": "https://openactive.io/Required"
}
```

```javascript
{
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/ns-beta"
  ],
  "type": "ScheduledSession",
  ...
  "maximumVirtualAttendeeCapacity": 20,
  "beta:virtualLocation": {
    "type": "VirtualLocation",
    "name": "Zoom Video Chat",
    "url": "https://zoom.us/j/1234567890/signup",
    "description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start"
  }
}
```

