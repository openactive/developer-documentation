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
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>Slot</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>duration</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the slot given in [ISO8601] format.</p><br/></br></br><b>Example</b></br></br><code>PT1H</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>facilityUse</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>URI to the FacilityUse that has this offer</p><br/></br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>remainingUses</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p><br/></br></br><b>Example</b></br></br><code>5</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the slot. Can be specified as a schema:Date or schema:DateTime</p><br/></br></br><b>Example</b></br></br><code>2018-01-27T12:00:00Z</code>
      </td>
    </tr>
  </tbody>
</table>


### ** Required options **

While these properties are marked as optional/recommended in the Modelling Specification, one of these must be provided when surfacing a slot through an RPDE feed to ensure that the slots can be processed correctly by data consumers.

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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><br/></br></br><b>Example</b></br></br><code>https://example.com/slot/1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/>Array of <a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p><br/></br></br><b>Example</b></br></br><code>SB1234</code>
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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><br/></br></br><b>Example</b></br></br><code>https://example.com/slot/1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumUses</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p><br/></br></br><b>Example</b></br></br><code>16</code>
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
      <td style="text-align:left"><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date and time of the slot. Can be specified as a schema:Date or schema:DateTime</p><br/></br></br><p>It is recommended that publishers provide either an schema:endDate or a schema:duration for an slot.</p><br/></br></br><b>Example</b></br></br><code>2018-01-27T12:00:00Z</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/>Array of <a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p><br/></br></br><b>Example</b></br></br><code>SB1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p><br/></br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
  </tbody>
</table>


