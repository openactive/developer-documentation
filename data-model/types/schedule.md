---
description: This page describes the Schedule type.
---

# Schedule

This type is derived from [https://pending.schema.org/Schedule](https://pending.schema.org/Schedule), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Fields**

### **Required fields**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="type"></a><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>Schedule</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="endTime"></a><b>endTime</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The end time of the event.</p><p></p><p><b>Example</b></p><p><code>12:00:00</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="repeatFrequency"></a><b>repeatFrequency</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the frequency at which Events will occur according to a Schedule. The intervals between events should be defined as a Duration of time.</p><p></p><p><b>Example</b></p><p><code>P1D</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="scheduledEventType"></a><b>scheduledEventType</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The type of event this schedule related to</p><p></p><p><b>Example</b></p><p><code>Event</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="startTime"></a><b>startTime</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The start time of the event.</p><p></p><p><b>Example</b></p><p><code>12:00:00</code></p>
      </td>
    </tr>
  </tbody>
</table>


### ** Required options **

While these properties are marked as optional, a data publisher must provide either a schema:byDay, schema:byMonth or byMonthDay for a schedule.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="byDay"></a><b>byDay</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/DayOfWeek"><code>DayOfWeek</code></a><br/> - or - <br/>Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the day of the week upon which the Event takes place.</p><p>When using string values, this MUST conform to iCal BYDAY rule.</p><p></p><p><b>Example</b></p><p><code>[<br/>&nbsp;&nbsp;&quot;https://schema.org/Monday&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="byMonth"></a><b>byMonth</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.</p><p></p><p><b>Example</b></p><p><code>[<br/>&nbsp;&nbsp;2<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="byMonthDay"></a><b>byMonthDay</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31</p><p></p><p><b>Example</b></p><p><code>[<br/>&nbsp;&nbsp;28<br/>]</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended fields**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="duration"></a><b>duration</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the event given in [ISO8601] format.</p><p></p><p><b>Example</b></p><p><code>PT1H</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="endDate"></a><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date of the schedule.</p><p></p><p><b>Example</b></p><p><code>2018-01-27</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="idTemplate"></a><b>idTemplate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/urlTemplate"><code>urlTemplate</code></a>
      </td>
      <td style="text-align:left">
        <p>An RFC6570 compliant URI template that can be used to generate a unique identifier (@id) for every event described by the schedule (see below for more information). This property is required if the data provider is supporting third-party booking via the Open Booking API.</p><p></p><p><b>Example</b></p><p><code>https://example.com/event{/id}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="startDate"></a><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date of the event.</p><p></p><p><b>Example</b></p><p><code>2018-01-27</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="urlTemplate"></a><b>urlTemplate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/urlTemplate"><code>urlTemplate</code></a>
      </td>
      <td style="text-align:left">
        <p>An RFC6570 compliant URI template that can be used to generate a unique URL (schema:url) for every event described by the schedule (see below for more information). This property is required if the data provider wants to provide participants with a unique URL to book to attend an event.</p><p></p><p><b>Example</b></p><p><code>https://example.com/event{/id}</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Optional fields**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="byDay"></a><b>byDay</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/DayOfWeek"><code>DayOfWeek</code></a><br/> - or - <br/>Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the day of the week upon which the Event takes place.</p><p>When using string values, this MUST conform to iCal BYDAY rule.</p><p></p><p><b>Example</b></p><p><code>[<br/>&nbsp;&nbsp;&quot;https://schema.org/Monday&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="byMonth"></a><b>byMonth</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.</p><p></p><p><b>Example</b></p><p><code>[<br/>&nbsp;&nbsp;2<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="byMonthDay"></a><b>byMonthDay</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31</p><p></p><p><b>Example</b></p><p><code>[<br/>&nbsp;&nbsp;28<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="exceptDate"></a><b>exceptDate</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Date"><code>Date</code></a><br/> - or - <br/>Array of <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p><p></p><p><b>Example</b></p><p><code>TODO</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="repeatCount"></a><b>repeatCount</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the number of times a recurring Event will take place.</p><p></p><p><b>Example</b></p><p><code>3</code></p>
      </td>
    </tr>
  </tbody>
</table>


