---
description: This page describes the Slot type.
---

# Slot

## **Fields**

### **Required fields**

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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;Slot&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>duration</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the slot given in [ISO8601] format.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;duration&quot;: &quot;PT1H&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>facilityUse</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>URI to the FacilityUse that has this offer</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;facilityUse&quot;: &quot;https://example.com/facility-use/1&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of schema:Offer that include the price of booking.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;offers&quot;: {<br />  &quot;type&quot;: &quot;Offer&quot;,<br />  &quot;identifier&quot;: &quot;OX-AD&quot;,<br />  &quot;name&quot;: &quot;Adult&quot;,<br />  &quot;price&quot;: 7.5,<br />  &quot;priceCurrency&quot;: &quot;GBP&quot;,<br />  &quot;url&quot;: &quot;https://profile.everyoneactive.com/booking?Site=0140&amp;Activities=1402CBP20150217&amp;Culture=en-GB&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>remainingUses</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The remaining available courts or pitches at this time. Must be 0 or 1
          for an IndividualFacilityUse.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;remainingUses&quot;: 5</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the slot. Can be specified as a schema:Date
          or schema:DateTime</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;startDate&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>###  **Required options** 

While these properties are marked as optional/recommended in the Modelling Specification, one of these must be provided when surfacing a slot through an RPDE feed to ensure that the slots can be processed correctly by data consumers.

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
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/slot/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br />Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;identifier&quot;: &quot;SB1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Recommended fields**

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
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/slot/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumUses</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The maximum available courts or pitches at this time. Must be 0 or 1 for
          an IndividualFacilityUse.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;maximumUses&quot;: 16</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional fields**

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
      <td style="text-align:left"><b>endDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date and time of the slot. Can be specified as a schema:Date or
          schema:DateTime</p>
        <p>It is recommended that publishers provide either an schema:endDate or
          a schema:duration for an slot.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;endDate&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br />Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;identifier&quot;: &quot;SB1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

