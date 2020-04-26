---
description: This page describes the PartialSchedule type.
---

# PartialSchedule

This type is derived from [https://pending.schema.org/Schedule](https://pending.schema.org/Schedule), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property | Expected Type | Description |
| :--- | :--- | :--- |
| **@type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"@type": "PartialSchedule"` |

### **Recommended properties**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>endTime</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The end time of the event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;endTime&quot;: &quot;12:00:00&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>repeatFrequency</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the frequency at which Events will occur according to a Schedule.
          The intervals between events should be defined as a Duration of time.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;repeatFrequency&quot;: &quot;P1D&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startTime</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The start time of the event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;startTime&quot;: &quot;12:00:00&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional properties**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>byDay</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/DayOfWeek"><code>DayOfWeek</code></a>
        <br
        />- or -
        <br />Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the day of the week upon which the Event takes place.</p>
        <p>When using string values, this MUST conform to iCal BYDAY rule.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;byDay&quot;: [<br />  &quot;https://schema.org/Monday&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>byMonth</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the months of the year on which the Event takes place. Specified
          as an integer between 1 and 12, with 1 representing January.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;byMonth&quot;: [<br />  2<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>byMonthDay</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the days of the month on which the Event takes place. Specified
          as an integer between 1 and 31</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;byMonthDay&quot;: [<br />  28<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>duration</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the event given in [ISO8601] format.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;duration&quot;: &quot;PT1H&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date of the schedule.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;endDate&quot;: &quot;2018-01-27&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>exceptDate</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Date"><code>Date</code></a>
        <br />- or -
        <br />Array of <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>Exception dates where the schedule should not generate an event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;exceptDate&quot;: [<br />  &quot;2016-04-13T17:10:00Z&quot;,<br />  &quot;2016-09-14T17:10:00Z&quot;,<br />  &quot;2016-12-14T18:10:00Z&quot;,<br />  &quot;2016-12-21T18:10:00Z&quot;,<br />  &quot;2016-12-28T18:10:00Z&quot;,<br />  &quot;2017-01-04T18:10:00Z&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>idTemplate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>An RFC6570 compliant URI template that can be used to generate a unique
          identifier (@id) for every event described by the schedule (see below for
          more information). This property is required if the data provider is supporting
          third-party booking via the Open Booking API.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;idTemplate&quot;: &quot;https://example.com/event{/id}&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>repeatCount</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the number of times a recurring Event will take place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;repeatCount&quot;: 3</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>scheduleTimezone</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the timezone for which the time(s) indicated in the Schedule
          are given. The value provided should be among those listed in the IANA
          Time Zone Database.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;scheduleTimezone&quot;: &quot;Europe/London&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>scheduledEventType</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The type of event this schedule related to.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;scheduledEventType&quot;: &quot;Event&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date of the event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;startDate&quot;: &quot;2018-01-27&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>urlTemplate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>An RFC6570 compliant URI template that can be used to generate a unique
          URL (schema:url) for every event described by the schedule (see below for
          more information). This property is required if the data provider wants
          to provide participants with a unique URL to book to attend an event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;urlTemplate&quot;: &quot;https://example.com/event{/id}&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Beta Extension properties**

These properties are defined in the [OpenActive Beta Extension](https://openactive.io/ns-beta). The OpenActive Beta Extension is defined as a convenience to help document properties that are in active testing and review by the community. Publishers should not assume that properties in the beta namespace will either be added to the core specification or be included in the namespace over the long term.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>beta:timeZone</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/197">Proposal #197</a>
        </p>
        <p>[DEPRECATED: This beta property is now deprecated, please use <code>schema:scheduleTimezone</code> instead.]
          The time zone used to generate occurrences, same as iCal TZID. E.g. &apos;Europe/London&apos;.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:timeZone</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/197">Proposal #197</a>
        </p>
        <p>[DEPRECATED: This beta property is now deprecated, please use <code>schema:scheduleTimezone</code> instead.]
          The time zone used to generate occurrences, same as iCal TZID. E.g. &apos;Europe/London&apos;.</p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

