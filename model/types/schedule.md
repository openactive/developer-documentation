---
description: This page describes the Schedule type.
---

# Schedule

This type is derived from [https://pending.schema.org/Schedule](https://pending.schema.org/Schedule).

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
      <td style="text-align:left"><b>endTime</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        The end time of the event.</br></br><b>Example</b></br></br><code>12:00:00</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>repeatFrequency</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        Defines the frequency at which Events will occur according to a Schedule. The intervals between events should be defined as a Duration of time.</br></br><b>Example</b></br></br><code>P1D</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>scheduledEventType</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The type of event this schedule related to</br></br><b>Example</b></br></br><code>Event</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startTime</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        The start time of the event.</br></br><b>Example</b></br></br><code>12:00:00</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The type of object, in this case Schedule</br></br><b>Example</b></br></br><code>Schedule</code>
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
      <td style="text-align:left"><b>byDay</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/DayOfWeek"><code>DayOfWeek</code></a>
      </td>
      <td style="text-align:left">
        Defines the day of the week upon which the Event takes place.</br></br>When using string values, this MUST conform to iCal BYDAY rule.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;&quot;https://schema.org/Monday&quot;<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>byMonth</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;2<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>byMonthDay</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;28<br/>]</code>
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
      <td style="text-align:left"><b>duration</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        The duration of the event given in [ISO8601] format.</br></br><b>Example</b></br></br><code>PT1H</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        The end date of the schedule.</br></br><b>Example</b></br></br><code>2018-01-27</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>idTemplate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/urlTemplate"><code>urlTemplate</code></a>
      </td>
      <td style="text-align:left">
        An RFC6570 compliant URI template that can be used to generate a unique identifier (@id) for every event described by the schedule (see below for more information). This property is required if the data provider is supporting third-party booking via the Open Booking API.</br></br><b>Example</b></br></br><code>https://example.com/event{/id}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        The start date of the event.</br></br><b>Example</b></br></br><code>2018-01-27</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>urlTemplate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/urlTemplate"><code>urlTemplate</code></a>
      </td>
      <td style="text-align:left">
        An RFC6570 compliant URI template that can be used to generate a unique URL (schema:url) for every event described by the schedule (see below for more information). This property is required if the data provider wants to provide participants with a unique URL to book to attend an event.</br></br><b>Example</b></br></br><code>https://example.com/event{/id}</code>
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
      <td style="text-align:left"><b>byDay</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/DayOfWeek"><code>DayOfWeek</code></a>
      </td>
      <td style="text-align:left">
        Defines the day of the week upon which the Event takes place.</br></br>When using string values, this MUST conform to iCal BYDAY rule.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;&quot;https://schema.org/Monday&quot;<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>byMonth</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        Defines the months of the year on which the Event takes place. Specified as an integer between 1 and 12, with 1 representing January.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;2<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>byMonthDay</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        Defines the days of the month on which the Event takes place. Specified as an integer between 1 and 31</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;28<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>exceptDate</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        TODO</br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>repeatCount</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        Defines the number of times a recurring Event will take place.</br></br><b>Example</b></br></br><code>3</code>
      </td>
    </tr>
  </tbody>
</table>


