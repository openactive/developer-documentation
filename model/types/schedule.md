---
description: This page describes the Schedule type.
---

# Schedule

This type is derived from [https://pending.schema.org/Schedule](https://pending.schema.org/Schedule).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **endTime** |  [`Time`](https://schema.org/Time) |  The end time of the event.  **Example**  `12:00:00` |
| **repeatFrequency** |  [`Duration`](https://schema.org/Duration) |  Defines the frequency at which Events will occur according to a Schedule. The intervals between events should be defined as a Duration of time.  **Example**  `P1D` |
| **scheduledEventType** |  [`Text`](https://schema.org/Text) |  The type of event this schedule related to  **Example**  `Event` |
| **startTime** |  [`Time`](https://schema.org/Time) |  The start time of the event.  **Example**  `12:00:00` |
| **type** |  [`Text`](https://schema.org/Text) |  The type of object, in this case Schedule  **Example**  `Schedule` |

###  **Required options** 

While these properties are marked as optional, a data publisher must provide either a schema:byDay, schema:byMonth or byMonthDay for a schedule.

| Property | Type | Description |
| :--- | :--- | :--- |
| **byDay** |  Array of [`DayOfWeek`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/DayOfWeek) |  Defines the day of the week upon which the Event takes place.  When using string values, this MUST conform to iCal BYDAY rule.  **Example**  `[   "https://schema.org/Monday" ]` |
| **byMonth** |  Array of [`Integer`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/Integer) |  Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.  **Example**  `[   2 ]` |
| **byMonthDay** |  Array of [`Integer`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/Integer) |  Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31  **Example**  `[   28 ]` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **duration** |  [`Duration`](https://schema.org/Duration) |  The duration of the event given in \[ISO8601\] format.  **Example**  `PT1H` |
| **endDate** |  [`Date`](https://schema.org/Date) |  The end date of the schedule.  **Example**  `2018-01-27` |
| **idTemplate** |  [`urlTemplate`](https://schema.org/urlTemplate) |  An RFC6570 compliant URI template that can be used to generate a unique identifier \(@id\) for every event described by the schedule \(see below for more information\). This property is required if the data provider is supporting third-party booking via the Open Booking API.  **Example**  `https://example.com/event{/id}` |
| **startDate** |  [`Date`](https://schema.org/Date) |  The start date of the event.  **Example**  `2018-01-27` |
| **urlTemplate** |  [`urlTemplate`](https://schema.org/urlTemplate) |  An RFC6570 compliant URI template that can be used to generate a unique URL \(schema:url\) for every event described by the schedule \(see below for more information\). This property is required if the data provider wants to provide participants with a unique URL to book to attend an event.  **Example**  `https://example.com/event{/id}` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **byDay** |  Array of [`DayOfWeek`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/DayOfWeek) |  Defines the day of the week upon which the Event takes place.  When using string values, this MUST conform to iCal BYDAY rule.  **Example**  `[   "https://schema.org/Monday" ]` |
| **byMonth** |  Array of [`Integer`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/Integer) |  Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.  **Example**  `[   2 ]` |
| **byMonthDay** |  Array of [`Integer`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/Integer) |  Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31  **Example**  `[   28 ]` |
| **exceptDate** |  Array of [`Date`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/Date) |  TODO  **Example**  `TODO` |
| **repeatCount** |  [`Integer`](https://schema.org/Integer) |  Defines the number of times a recurring Event will take place.  **Example**  `3` |

