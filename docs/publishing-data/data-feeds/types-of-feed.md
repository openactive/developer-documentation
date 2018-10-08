# Types of feed

## Time-based Events: Sessions and Courses

These always have at least `activity`, `location` and `startDate` specified: so a Yoga class in Downtown Leisure Centre at 7pm on a Tuesday. This class may be part of a 10-week course.

These are feeds which, at the top level, can contain a mixture of [`SessionSeries`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#regular-sessions-sessionseries-and-scheduledsession-), [`EventSeries`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#grouping-together-events-eventseries-), [`HeadlineEvent`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#headline-events-headlineevent-) , [`CourseInstance`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#courses-courseinstance-), [`ext:VirtualEvent`](https://github.com/openactive/modelling-opportunity-data/issues/71) \([UC](https://github.com/openactive/modelling-opportunity-data/issues/71)\) or [`BroadcastEvent`](https://schema.org/BroadcastEvent) \([UC](https://github.com/openactive/modelling-opportunity-data/issues/71)\).

Such types of event can be combined into a single feed or presented as separate feeds \(e.g. a feed for classes and a feed for courses\).

An example feed of Events can be found [here](http://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Fevent_example_1.json&version=2.0).

## Slot-based Events: FacilityUses

These always have at least `activity` and`location` specified, where the activity can be booked in slots: so a Tennis at Downtown Leisure Centre with slots available hourly from 8am until 8pm.

Two different levels of granularity are available: A `FacilityUse` represents "Badminton at Downtown Leisure Centre", where as `IndividualFacilityUse` is "Court 2 in Sports Hall 3 for Badminton at Towntown Leisure Centre".

For facilities a publisher must implement the following four independent feeds:

* `http://www.example.org/feeds/facility-uses`
* `http://www.example.org/feeds/facility-uses/events`
* `http://www.example.org/feeds/individual-facility-uses`
* `http://www.example.org/feeds/individual-facility-uses/events`

See [this GitHub issue](https://github.com/openactive/activation/issues/160) for more detail on this. Facilities is under development during the month of August 2018, so feedback especially welcome.

