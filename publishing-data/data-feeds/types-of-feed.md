---
description: >-
  There are two main types of feeds currently in common use: events and
  facilities.
---

# Types of feed

## Time-based Events: Sessions and Courses

These always have at least `activity`, `location` and `startDate` specified: so a Yoga class in Downtown Leisure Centre at 7pm on a Tuesday. This class may be part of a 10-week course.

These are feeds which, at the top level, can contain a mixture of [`Event`](https://developer.openactive.io/models/event) , [`CourseInstance`](https://schema.org/CourseInstance), [`ext:VirtualEvent`](https://github.com/openactive/modelling-opportunity-data/issues/71) \([UC](https://github.com/openactive/modelling-opportunity-data/issues/71)\) or [`BroadcastEvent`](https://schema.org/BroadcastEvent) \([UC](https://github.com/openactive/modelling-opportunity-data/issues/71)\).

Such types of event can be combined into a single feed or presented as separate feeds \(e.g. a feed for classes and a feed for courses\). 

An example feed of Events is below:

```text
{ 
   "next": "http://www.example.com/api/rpde/sessions?afterTimestamp=1453931925&afterId=%7Bd97f73fb-4718-48ee-a6a9-9c7d717ebd85%7D",
   "items": [
       {
           "state": "updated",
           "kind": "session",
           "id": "{c15814e5-8931-470c-8a16-ef45afedaece}",
           "modified": 1453931101,
           "data": {
               "@context": "https://www.openactive.io/ns/oa.jsonld",
               "type": "Event",
               "identifier": "session-01jz93i3k1p3",
               "superEvent": {
                   "identifier": "eventType-ak6zw8ntsiqq"
               },
               "startDate": "2016-05-09T18:15:00Z",
               "endDate": "2016-05-09T19:15:00Z",
               "remainingAttendeeCapacity": 3,
               "url": "https://bookingsystem.com/hulahoop/e/ev-ssyp-20160509191500?r=oa",
               "attendanceCount": 29,
               "location": {
                   "type": "Place",
                   "identifier": "location-jbnentuhxsnp",
                   "url": "https://leisurecentre.org.uk/leisure-centre/camden/kentish-town-sports-centre",
                   "name": "Kentish Town Sports Centre",
                   "address": {
                       "type": "PostalAddress",
                       "addressLocality": "Camden",
                       "addressRegion": "London West",
                       "postalCode": "NW5 3DU",
                       "streetAddress": "Kentish Town Sports Centre"
                   }
               }
           }
       },
       {
           "state": "deleted",
           "kind": "session",
           "id": "{d97f73fb-4718-48ee-a6a9-9c7d717ebd85}",
           "modified": 1453931925
       }
   ],
   "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

## Slot-based Events: FacilityUses

These always have at least `activity` and`location` specified, where the activity can be booked in slots: so a Tennis at Downtown Leisure Centre with slots available hourly from 8am until 8pm. 

Two different levels of granularity are available: A `FacilityUse` represents "Badminton at Downtown Leisure Centre", where as `IndividualFacilityUse` is "Court 2 in Sports Hall 3 for Badminton at Towntown Leisure Centre".

For facilities a publisher must implement the following four independent feeds:

* `http://www.example.org/feeds/facility-uses`
* `http://www.example.org/feeds/facility-uses/events`
* `http://www.example.org/feeds/individual-facility-uses`
* `http://www.example.org/feeds/individual-facility-uses/events`

See [this GitHub issue](https://github.com/openactive/activation/issues/160) for more detail on this. Facilities is under development during the month of August 2018, so feedback especially welcome.

