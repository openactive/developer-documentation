# Data Feeds

## Overview

OpenActive is an initiative that promotes the use of open data to help people become more active. It aims to make opportunities to be active as discoverable as possible, similar to how one might find a hotel room or flight online.

OpenActive is primarily concerned with feeds of "opportunity data" – that is, information about when, where and what activities are taking place. To take advantage of the OpenActive ecosystem of data users, data must be published via such open data feeds.

These feeds must be published using the [OpenActive Real-time Paged Data Exchange (RPDE) specification](https://openactive.io/realtime-paged-data-exchange/), which provides a mechanism to allow systems to synchronise database state in near-realtime.

## Listing-only vs Bookable Opportunity Data

OpenActive supports two levels of user interaction with this data, and a data publisher must choose which level they wish to implement:

1. **Listing-only Opportunity Data**:
   * Data that includes near-real-time up-to-date details about a physical activity opportunity that can be discovered by potential participants. Listing data typically includes information like the type of activity, time, location, price, provider and availability.
   * The main goal of this data is to allow potential participants to find opportunities that match their interests and availability, and are actually happening.
   * However, the listing data itself doesn't enable users to reserve or book a place in the activity directly. It's more of an informative listing that helps people discover available opportunities.
   * **Implementation requirements:** opportunity data RPDE feeds that include deep-link URLs to the opportunity within the listing or booking system.
2. **Bookable Opportunity Data**:
   * This refers to data and functionality that allows potential participants to not only discover an activity but also to reserve or book a place directly through a platform or application.
   * It enables integration with booking systems to allow real-time availability checking and booking.
   * Offering bookable data can lead to an increase in participation since it makes the process more streamlined for users — they can find and book an activity all in one place.
   * **Implementation requirements:** opportunity data RPDE feeds and the Open Booking API.

In summary, while "listing-only" data offers up-to-date information about physical activity opportunities, "bookable" data takes it a step further by allowing direct reservations or bookings. The implementation of both provides a seamless experience from discovery to participation.

## Primary sources

Opportunity data must always be published from **primary sources** (e.g. the booking system that an organiser uses to manage their own activities) rather than **secondary sources** (e.g. a third-party survey of organisers or web form which captures the sessions they are currently running)

Publishing data from primary sources rather than secondary sources is essential for several reasons:

1. **Accuracy**: Primary sources provide data directly from the organiser or provider of opportunity, which means it's more likely to be accurate and up-to-date. Secondary sources such as surveys and forms are usually not thoroughly reviewed by providers. Much less care and attention is taken when filling in these forms than on the activity provider's own website and booking system.
2. **Timeliness**: Activities, classes, and schedules often change. Primary sources like booking systems are updated in real-time, so the information is always current. Relying on secondary sources would mean periodic data collection, which can become quickly outdated.
3. **Scalability**: As the number of activity providers grows, it becomes increasingly expensive for secondary sources to maintain a large set of data. Primary sources do not require any such central maintenance overhead.
4. **Data richness**: Primary sources can often provide a richer dataset, including details about availability, pricing, venue facilities, instructor qualifications, and more. This can offer a more complete picture for end-users, helping them make informed decisions.
5. **Reduced burden**: For activity providers, integrating their primary booking or management systems once with OpenActive can reduce the burden of repeatedly reporting data or filling out surveys. It's a "set it and forget it" approach, which is more efficient in the long run.
6. **Trustworthiness**: Data users and consumers will trust data more when they know it's coming directly from the source and is current. This trustworthiness is likely to increase the adoption of applications and platforms that use OpenActive data, and increase consumer confidence of data from our sector.

In conclusion, while secondary sources can be useful for certain insights or research purposes, for an initiative like OpenActive, which aims to provide real-time, accurate, and comprehensive data about physical activity opportunities, relying on primary sources is much more effective and efficient.







{% content-ref url="how-a-data-feed-works.md" %}
[how-a-data-feed-works.md](how-a-data-feed-works.md)
{% endcontent-ref %}
