# Types of RDPE feed

## Time-based Events: **Regular Classes and Sessions**

These always have at least `activity`, `location` and `startDate` specified: so a Yoga class in Downtown Leisure Centre, at 7pm, on a Tuesday. See [here](../../data-model/data-model-overview.md#classes-and-sessions) for further clarification of the types available.&#x20;

The OpenActive Modelling Specification 2.0 represents regular events using a hierarchy of types: [`EventSeries`](https://www.openactive.io/modelling-opportunity-data/#grouping-together-events-eventseries-), [`SessionSeries`](https://www.openactive.io/modelling-opportunity-data/#regular-sessions-sessionseries-and-scheduledsession-), and [`ScheduledSession`](https://www.openactive.io/modelling-opportunity-data/#regular-sessions-sessionseries-and-scheduledsession-), linked via the `superEvent` and `subEvent` properties. These are described by example in the diagram below:

![](https://docs.google.com/drawings/u/0/d/s78NrrrLPOgQHs-TaXftQdg/image?w=602\&h=268\&rev=325\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Property inheritance**

The `ScheduledSession` will inherit the properties of the `SessionSeries`, and the `SessionSeries` will inherit the properties of the `EventSeries`.

This means that if an `EventSeries` is not supplied, its details must be included on the `SessionSeries`.

![](https://docs.google.com/drawings/u/0/d/sC3OM5Gc26L84\_nUVy7uWhA/image?w=602\&h=181\&rev=2\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Property inheritance overrides**

The OpenActive Modelling Specification 2.0 represents regular events using a hierarchy of types: `EventSeries`, `SessionSeries`, and `ScheduledSession`. These are described by example in the diagram below:

![](https://docs.google.com/drawings/u/0/d/sNuN0HrwIIJduzHZ-\_PIMCw/image?w=602\&h=268\&rev=24\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Permissible configurations**

A `SessionSeries` must always be supplied, including details that would otherwise be present in an `EventSeries` if no `EventSeries` is supplied.

In order for data to be [**bookable**](https://www.openactive.io/open-booking-api/EditorsDraft/#dfn-bookability) a `ScheduledSession` must be supplied, either embedded, within a separate feed, or generated through a `Schedule`.

For large providers with many events that are described identically but occur in the same location or in different locations, an `EventSeries` should be used to group these together. This avoids seemingly duplicate search results from a single provider.&#x20;

![](https://docs.google.com/drawings/u/0/d/sruVQes8cWV4JuLh6rHxt-A/image?w=602\&h=321\&rev=144\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Exposing the model in feeds**

For systems targeting small providers, the `ScheduledSession` may be embedded in the `SessionSeries` or visa versa.

For systems targeting large providers or small providers with high volumes of sessions, the `ScheduledSession` is highly recommended to be provided in a separate feed to the `SessionSeries`. This will reduce data transfer volumes significantly.

The `EventSeries` is unlikely to change frequently enough compared with the `SessionSeries` to warrant its own feed, and so can usually be embedded in the `SessionSeries`.

For [**bookable**](https://www.openactive.io/open-booking-api/EditorsDraft/#dfn-bookability) data, the possible feed combinations are described in the diagram below:

![](https://docs.google.com/drawings/u/0/d/sVvrks8vK\_gfSRejrIIIMGw/image?w=636\&h=206\&rev=363\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

{% hint style="warning" %}
Please note that the first two "combined feed" options given above are no longer recommended for new OpenActive implementations. These options increase complexity for data users, and create unnecessary additional load on all systems.
{% endhint %}

Bookable data feed examples:

* Small provider: [SessionSeries with ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries\_example\_1.json\&version=2.0)
* Small provider (inverted): [ScheduledSession with SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession\_example\_1.json\&version=2.0)
* Small provider (high volume):
  * [SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split\_example\_1.json\&version=2.0) and [ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split\_example\_1.json\&version=2.0) (physical)
  * [SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split-virtual\_example\_1.json\&version=2.x) and [ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split-virtual\_example\_1.json\&version=2.x) (virtual)
* Large provider: [SessionSeries with EventSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-eventseries-split\_example\_1.json\&version=2.0), and [ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split\_example\_1.json\&version=2.0)

Listings data feed examples:

* Small provider: [SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split\_example\_1.json\&version=2.0)
* Large provider: [SessionSeries with EventSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-eventseries-split\_example\_1.json\&version=2.0)

### Use of `@id` and `superEvent` for split feeds

When referencing data across feeds (such as between [SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split\_example\_1.json\&version=2.0) and [ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split\_example\_1.json\&version=2.0)), the value of the **`@id`** must be used.

An **`@id`** is a globally unique identifier which must be in URL format for the purposes of namespacing. The **`@id`** does not need to resolve to a functional endpoint, but must use a domain name controlled by the organization or system publishing the data. See [here](../../data-model/context-and-json-ld.md#contexts-properties-and-types) for more information.

So for a minimal implementation simply invent a URL pattern that includes your domain for use as your **`@id`**, such as:

> "`https://id.ourparks.org.uk/api/session-series/1234`"

For example within a `SessionSeries` feed, the `SessionSeries` **`@id`** is defined for each data item:

```javascript
"data": {
  "@context": "https://openactive.io/",
  "@type": "SessionSeries",
  "@id": "https://id.ourparks.org.uk/api/session-series/1234",
  ...
}
```

And within a corresponding `ScheduledSession` feed, that `SessionSeries` **`@id`** is referenced by the `superEvent` property:

```javascript
"data": {
  "@context": "https://openactive.io/",
  "@type": "ScheduledSession",
  "@id": "https://id.ourparks.org.uk/api/session-series/1234#/subEvent/C5EE1E55-2DE6-44F7-A865-42F268A82C63",
  "superEvent": "https://id.ourparks.org.uk/api/session-series/1234",
  ...
}
```

## Time-based Events: Ad-hoc Events

The OpenActive model allows for ad-hoc events to be described using the pattern below. Ad-hoc events must only be used to describe truly ad-hoc events, and not to describe regular events such as those described in the previous section. See [here](../../data-model/data-model-overview.md#events) for further clarification of the types available.&#x20;

### **Summary of ad-hoc event types**

The OpenActive Modelling Specification 2.0 represents ad-hoc events using a hierarchy of types: `EventSeries` and `Event`, linked via the `superEvent` and `subEvent` properties. These are described by example in the diagram below:

![](https://docs.google.com/drawings/u/0/d/soe-8CJhGcRo3o-w3Njk\_4g/image?w=602\&h=168\&rev=64\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Property inheritance**

The Event will inherit the properties of the `EventSeries`.

This means that if an `EventSeries` is not supplied, its details must be included on the `Event`.

![](https://docs.google.com/drawings/u/0/d/sQajrOUrhJ4eXWsfayekEtA/image?w=602\&h=94\&rev=14\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Permissible configurations**

An Event must always be supplied, including details that would otherwise be present in an `EventSeries` if no `EventSeries` is supplied.

For large providers with many events that are described identically but occur in the same location or in different locations, an `EventSeries` should be used to group these together. This avoids seemingly duplicate search results from a single provider.

![](https://docs.google.com/drawings/u/0/d/skh7gEfjLUh9HTcLbH2RItw/image?w=259\&h=205\&rev=14\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Exposing the model in feeds**

Systems must include `Event`s in stand-alone feeds separate from `ScheduledSessions` and  `SessionSeries`.

The `EventSeries` is unlikely to change frequently enough compared with the `Event` to warrant its own feed, and so can usually be embedded in the `Event`.

For [**bookable**](https://www.openactive.io/open-booking-api/EditorsDraft/#dfn-bookability) data, example feed combinations are described in the diagram below:

![](https://docs.google.com/drawings/u/0/d/sjJOI7mL\_qflDQspoKgNUmw/image?w=636\&h=440\&rev=174\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

Bookable data feed examples:

* Events only: [Event](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fevent\_example\_1.json\&version=2.x)

## Slot-based Events: FacilityUses

These always have at least `activity` and`location` specified, where the activity can be booked in slots: so a Tennis at Downtown Leisure Centre with slots available hourly from 8am until 8pm.

Two different levels of granularity are available: A `FacilityUse` represents "Badminton at Downtown Leisure Centre", where as `IndividualFacilityUse` is "Court 2 in Sports Hall 3 for Badminton at Towntown Leisure Centre".

The OpenActive Modelling Specification 2.0 represents slot-based events using a hierarchy of types: `FacilityUse`/`IndividualFacilityUse` and `Slot`, linked via the `facilityUse` and `event` properties.

For facilities a publisher must implement the following two independent feeds:

* `http://www.example.org/feeds/facility-uses`&#x20;
  * [FacilityUse example](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Ffacilityuse\_example\_1.json\&version=2.x) (including `IndividualFacilityUse`)
* `http://www.example.org/feeds/individual-facility-use-slots`
  * [Slot example](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fslot\_example\_1.json\&version=2.x)

Note that the above examples publish `Slot` availability at the `IndividualFacilityUse` level, which is now recommended for all new feeds.

### Use of `@id` and `facilityUse` for split feeds

When referencing data across feeds (such as between [FacilityUse](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Ffacilityuse\_example\_1.json\&version=2.x) and [Slot](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fslot\_example\_1.json\&version=2.x)), the value of the **`@id`** must be used.

An **`@id`** is a globally unique identifier which must be in URL format for the purposes of namespacing. The **`@id`** does not need to resolve to a functional endpoint, but must use a domain name controlled by the organization or system publishing the data. See [here](../../data-model/context-and-json-ld.md#contexts-properties-and-types) for more information.

So for a minimal implementation simply invent a URL pattern that includes your domain for use as your **`@id`**, such as:

> "`https://id.bookingsystem.com/api/facility-uses/1402CBP20150217/individual-facility-uses/1`"

For example within a `FacilityUse` feed, the `FacilityUse` **`@id`** is defined for each data item, and `IndividualFacilityUse` **`@id`**  values are defined within these:

```javascript
"data": {
  "@context": "https://openactive.io/",
  "@type": "FacilityUse",
  "@id": "https://id.bookingsystem.com/api/facility-uses/1402CBP20150217",
  "individualFacilityUse": [
    {
      "@type": "IndividualFacilityUse",
      "@id": "https://id.bookingsystem.com/api/facility-uses/1402CBP20150217/individual-facility-uses/1",
      "name": "Main Tennis Court 1"
    }
  ],
  ...
}
```

And within a corresponding `Slot` feed, that `IndividualFacilityUse` **`@id`** is referenced by the `facilityUse` property:

```javascript
"data": {
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "https://id.bookingsystem.com/api/facility-uses/1402CBP20150217/individual-facility-uses/1#/event/2018-03-01T10:00:00Z",
  "facilityUse": "https://id.bookingsystem.com/api/facility-uses/1402CBP20150217/individual-facility-uses/1",
  ...
}
```

## Other types of Time-based Events: Headline Events and Courses

A feed of  [`HeadlineEvent`](https://www.openactive.io/modelling-opportunity-data/#headline-events-headlineevent-) can be used to represent whole day or multi-day events, such as mass participation events, family fun days, etc.

* The OpenActive Modelling Specification 2.0 represents these events using a hierarchy of types: `HeadlineEvent` (for the overall event) and `Event` (for small events within the overall event) linked via the `superEvent` and `subEvent` properties.
* See [here](../../data-model/data-model-overview.md#headline-events) for further clarification, and [here](http://data.britishtriathlon.org/) for an example.

A feed of [`CourseInstance`](https://www.openactive.io/modelling-opportunity-data/#courses-courseinstance-) can be used to represent a fixed-length course.

* The OpenActive Modelling Specification 2.0 represents these events using a hierarchy of types: `CourseInstance` (for the whole course) and `Event` (for the individual occurrences) linked via the `superEvent` and `subEvent` properties.
* See [here](../../data-model/data-model-overview.md#courses) for further clarification, and [here](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fcourseinstance\_event\_example\_1.json\&version=2.x) for an example.

## **Event relationship overview**

The following diagram illustrates the relationships between the event types available within the OpenActive Modelling Specification 2.0:

![](../../.gitbook/assets/untitled-document-2.png)

Note the use of aliases (e.g. "IndividualFacilityUseSlot") which are useful when referring to a specific type that is being used in a particular context.

The relationship between all types is represented via the `superEvent` and `subEvent` properties, with the exception of:

* `FacilityUse`/`IndividualFacilityUse` and `Slot`, which are linked via the `facilityUse` and `event` properties&#x20;
* `FacilityUse` and `IndividualFacilityUse`, which are linked via the `aggregateFacilityUse` and `individualFacilityUse` properties.

## **Schema.org type inheritance overview**

The model itself (the properties within the types) follows a _different inheritance structure_ to the property inheritance structure described above.

`EventSeries`, `SessionSeries`, `ScheduledSession`, `HeadlineEvent`, `CourseInstance`, and `Slot` all **sub-class** `Event`.

This can be useful for modelling the entities within certain frameworks**.**

![](https://docs.google.com/drawings/u/0/d/sHnIqB65tCLtqxkTO0dBaVA/image?w=602\&h=272\&rev=181\&ac=1\&parent=1C\_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)
