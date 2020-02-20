# Types of RDPE feed

## Time-based Events: **Regular Classes and Sessions**

These always have at least `activity`, `location` and `startDate` specified: so a Yoga class in Downtown Leisure Centre at 7pm on a Tuesday. See [here](../../data-model/data-model-overview.md#classes-and-sessions) for further clarification of the types available. 

The OpenActive Modelling Specification 2.0 represents regular events using a hierarchy of types: [`EventSeries`](https://www.openactive.io/modelling-opportunity-data/#grouping-together-events-eventseries-), [`SessionSeries`](https://www.openactive.io/modelling-opportunity-data/#regular-sessions-sessionseries-and-scheduledsession-), and [`ScheduledSession`](https://www.openactive.io/modelling-opportunity-data/#regular-sessions-sessionseries-and-scheduledsession-).  These are described by example in the diagram below:

![](https://docs.google.com/drawings/u/0/d/s78NrrrLPOgQHs-TaXftQdg/image?w=602&h=268&rev=325&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Property inheritance**

The `ScheduledSession` will inherit the properties of the `SessionSeries`, and the `SessionSeries` will inherit the properties of the `EventSeries`.

This means that if an `EventSeries` is not supplied, its details must be included on the `SessionSeries`.

![](https://docs.google.com/drawings/u/0/d/sC3OM5Gc26L84_nUVy7uWhA/image?w=602&h=181&rev=2&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Property inheritance overrides**

The OpenActive Modelling Specification 2.0 represents regular events using a hierarchy of types: `EventSeries`, `SessionSeries`, and `ScheduledSession`. These are described by example in the diagram below:

![](https://docs.google.com/drawings/u/0/d/sNuN0HrwIIJduzHZ-_PIMCw/image?w=602&h=268&rev=24&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Permissible configurations**

A `SessionSeries` must always be supplied, including details that would otherwise be present in an `EventSeries` if no `EventSeries` is supplied.

In order for data to be [**bookable**](https://www.openactive.io/open-booking-api/EditorsDraft/#dfn-bookability) a `ScheduledSession` must be supplied, either embedded, within a separate feed, or generated through a `Schedule`.

For large providers with many events that are described identically but occur in the same location or in different locations, an `EventSeries` should be used to group these together. This avoids seemingly duplicate search results from a single provider. 

![](https://docs.google.com/drawings/u/0/d/sruVQes8cWV4JuLh6rHxt-A/image?w=602&h=321&rev=144&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Exposing the model in feeds**

For systems targeting small providers, the `ScheduledSession` may be embedded in the `SessionSeries` or visa versa.

For systems targeting large providers or small providers with high volumes of sessions, the `ScheduledSession` is highly recommended to be provided in a separate feed to the `SessionSeries`. This will reduce data transfer volumes significantly.

The `EventSeries` is unlikely to change frequently enough compared with the `SessionSeries` to warrant its own feed, and so can usually be embedded in the `SessionSeries`.

For [**bookable**](https://www.openactive.io/open-booking-api/EditorsDraft/#dfn-bookability) data, the possible feed combinations are described in the diagram below:

![](https://docs.google.com/drawings/u/0/d/sVvrks8vK_gfSRejrIIIMGw/image?w=636&h=206&rev=363&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

Bookable data feed examples:

* Small provider: [SessionSeries with ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries_example_1.json&version=2.0)
* Small provider \(inverted\): [ScheduledSession with SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession_example_1.json&version=2.0)
* Small provider \(high volume\):  [SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split_example_1.json&version=2.0) and [ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split_example_1.json&version=2.0)
* Large provider: [SessionSeries with EventSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-eventseries-split_example_1.json&version=2.0), and [ScheduledSession](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fscheduledsession-split_example_1.json&version=2.0)

Listings data feed examples:

* Small provider: [SessionSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-split_example_1.json&version=2.0)
* Large provider: [SessionSeries with EventSeries](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fsessionseries-eventseries-split_example_1.json&version=2.0)

## Time-based Events: Ad-hoc Events

The OpenActive model allows for ad-hoc events to be described using the pattern below. Ad-hoc events must only be used to describe truly ad-hoc events, and not to describe regular events such as those described in the previous section. See [here](../../data-model/data-model-overview.md#events) for further clarification of the types available. 

### **Summary of ad-hoc event types**

The OpenActive Modelling Specification 2.0 represents ad-hoc events using a hierarchy of types: `EventSeries` and `Event`. These are described by example in the diagram below:

![](https://docs.google.com/drawings/u/0/d/soe-8CJhGcRo3o-w3Njk_4g/image?w=602&h=168&rev=64&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Property inheritance**

The Event will inherit the properties of the `EventSeries`.

This means that if an `EventSeries` is not supplied, its details must be included on the `Event`.

![](https://docs.google.com/drawings/u/0/d/sQajrOUrhJ4eXWsfayekEtA/image?w=602&h=94&rev=14&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Permissible configurations**

An Event must always be supplied, including details that would otherwise be present in an `EventSeries` if no `EventSeries` is supplied.

For large providers with many events that are described identically but occur in the same location or in different locations, an `EventSeries` should be used to group these together. This avoids seemingly duplicate search results from a single provider.

![](https://docs.google.com/drawings/u/0/d/skh7gEfjLUh9HTcLbH2RItw/image?w=259&h=205&rev=14&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

### **Exposing the model in feeds**

Systems must include `Event`s in stand-alone feeds separate from `ScheduledSessions` and  `SessionSeries`.

The `EventSeries` is unlikely to change frequently enough compared with the `Event` to warrant its own feed, and so can usually be embedded in the `Event`.

For [**bookable**](https://www.openactive.io/open-booking-api/EditorsDraft/#dfn-bookability) data, example feed combinations are described in the diagram below:

![](https://docs.google.com/drawings/u/0/d/sjJOI7mL_qflDQspoKgNUmw/image?w=636&h=440&rev=174&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

## Slot-based Events: FacilityUses

These always have at least `activity` and`location` specified, where the activity can be booked in slots: so a Tennis at Downtown Leisure Centre with slots available hourly from 8am until 8pm.

Two different levels of granularity are available: A `FacilityUse` represents "Badminton at Downtown Leisure Centre", where as `IndividualFacilityUse` is "Court 2 in Sports Hall 3 for Badminton at Towntown Leisure Centre".

For facilities a publisher must implement the following two independent feeds:

* `http://www.example.org/feeds/facility-uses` 
  * [FacilityUse example](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Ffacilityuse_example_1.json&version=2.x)
* `http://www.example.org/feeds/facility-use-slots`
  * [Slot example](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fslot_example_1.json&version=2.x)

Additionally, to publish specific court availability they must also implement the following two feeds:

* `http://www.example.org/feeds/individual-facility-uses`
* `http://www.example.org/feeds/individual-facility-use-slots`

## Other types of Time-based Events: Headline Events and Courses

A feed of  [`HeadlineEvent`](https://www.openactive.io/modelling-opportunity-data/#headline-events-headlineevent-) can be used to represent whole day or multi-day events, such as mass participation events, family fun days, etc. See [here](../../data-model/data-model-overview.md#headline-events) for further clarification, and [here](http://data.britishtriathlon.org/) for an example.

A feed of [`CourseInstance`](https://www.openactive.io/modelling-opportunity-data/#courses-courseinstance-) can be used to represent a fixed-length course. See [here](../../data-model/data-model-overview.md#courses) for further clarification, and [here](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fcourseinstance_event_example_1.json&version=2.x) for an example.

## **Schema.org type inheritance**

The model itself \(the properties within the types\) follows a _different inheritance structure_ to the property inheritance structure described above.

`EventSeries`, `SessionSeries`, `ScheduledSession`, `HeadlineEvent`, `CourseInstance`, and `Slot` all **sub-class** `Event`.

This can be useful for modelling the entities within certain frameworks**.**

![](https://docs.google.com/drawings/u/0/d/sHnIqB65tCLtqxkTO0dBaVA/image?w=602&h=272&rev=181&ac=1&parent=1C_eO6JC8tt7-K-XiilHzPKXKenjjHiiOS7nCW07tlLk)

