---
description: >-
  This page describes the types of data that have so far been identified as
  in-scope for OpenActive
---

# Types of data

#### Classes and Session Series \([`SessionSeries`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#regular-sessions-sessionseries-and-scheduledsession-)\)

This is an event \(usually 1 or 2 hours in duration\), that happens with some regularity. It is expected that if a user attends one of these events, that they would find another event in the series happening soon afterwards. They are not just attending a one-off event, as there is an implication of also being part of a community of regular attendees. Note that although the events might be frequent, they do not necessarily conform to a rigid Schedule \(though many do\). For example click the "Rides" tab in this group [https://www.letsride.co.uk/groups/central-london-outdoor-group](https://www.letsride.co.uk/groups/central-london-outdoor-group) there is no regularity here.

The key thing that distinguishes a Session Series is that it's a thematic event series \(e.g. topical meetup or class\), or a series of regular events that share a location, attendee group and/or organisers, at a frequency that a participant can expect to build a real exercise habit \(at least monthly, as a guide\).

Typical opportunities in this category are provided by clubs, community providers, which might take place in a park, club or within leisure centres. It also includes a local walking club that might meet on a Saturday morning once a month.

#### Ad-hoc Facility Bookings \([`FacilityUse`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#describing-facility-use-code-oa-facilityuse-code-code-oa-individualfacilityuse-code-)and [`IndividualFacilityUse`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#describing-facility-use-code-oa-facilityuse-code-code-oa-individualfacilityuse-code-)\)

These are activities which are bookable based on slots of availability for a particular activity \(e.g. Badminton\) at a facility within a venue \(e.g. a sports hall\). These include squash courts, a running track, community facilities such as youth centres, school halls, or church halls. If you book "Badminton in School Hall" you can expect the appropriate equipment to be available to allow you to carry out this activity \(e.g. a badminton net\). In this example the Facility is "School Hall", and the Use is "Badminton". 

#### Events \(`Event`\)

These events are one-off occurrences, e.g. a fun run organised by a local group may run as a standalone event on a particular date or an organisation that runs many individual events e.g. Human Race, Race for Life, International Women's Day.

#### Headline Events \([`HeadlineEvent`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#headline-events-headlineevent-)\)

These are large scale events such as London Marathon or a Triathlon "Hebridean Cycle Challenge", which are typically all day with specific start times for sub-events happening within them.

For example, the "Big South East Aquathlon" contains "Big South East Aquathlon Long Course", "Big South East Aquathlon Sprint", and "Dartford Bridge Aquathlon". All these events happen together, or at offset times during the day. The same is true of any marathon or half-marathon, which might include different races such as the "Elite Wheelchair Marathon".

Headline Events also include festivals, such as the [Lambeth Country Show](http://lambethcountryshow.co.uk/), which may include a range of different short activities within its programme \(such sessions of "try wheelchair basketball"\).

#### Courses \([`CourseInstance`](https://www.openactive.io/modelling-opportunity-data/EditorsDraft/#courses-courseinstance-)\)

Courses generally involve an upfront commitment to a number of sessions, with a consistent attendee group and/or organisers for the duration of the course.

These are activities which tend to have a start and end date, likely to coincide with a holiday period or are activities based on improving a skill e.g. Soccer Schools, holiday camps, learn to swim.

#### Online Classes and Events \([discussion ongoing](https://github.com/openactive/modelling-opportunity-data/issues/71)\)

These are activities are accessed online by users live from source through a digital product e.g. fitness classes, workouts, sessions which are streamed or provided via an online product, such as FitSwarm, Flex, Les Mills On Demand, and Racefully. They include scheduled online events, on-demand content, and sessions which can be participated in virtually using an app or run-tracker \(e.g. live virtual 5k\).

Note that use cases for this data have are not yet fully defined, please join the discussion [here](https://github.com/openactive/modelling-opportunity-data/issues/71) if you have any ideas to contribute.

#### Leagues and Ringers \([discussion ongoing](https://github.com/openactive/modelling-opportunity-data/issues/144)\)

Leagues could be informal, social, turn up and play or structured opportunities that have a set frequency and play in some sort of competition format e.g. [Go Mammoth](https://gomammoth.co.uk/), [Simple Netball](https://www.simplenetball.co.uk/).

Ringer opportunities are spaces available in teams already scheduled to play due to drop-outs, which give participants a chance to try out the league mid-season. 

Note that use cases for this data have are not yet fully defined, please join the discussion [here](https://github.com/openactive/modelling-opportunity-data/issues/144) if you have any ideas to contribute.

#### Routes \([discussion ongoing](https://github.com/openactive/modelling-opportunity-data/issues/108)\)

For self-directed activities like walking, running and cycling, where there is a detailed pre-defined route available for the activity.

Note that use cases for this data have are not yet fully defined, please join the discussion [here](https://github.com/openactive/modelling-opportunity-data/issues/108) if you have any ideas to contribute.

#### Personal Trainers \(discussion not yet started\)

For activity instructors who are available to travel to different locations.

