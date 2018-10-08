---
description: This page describes the IndividualFacilityUse type.
---

# IndividualFacilityUse

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
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;IndividualFacilityUse&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          a facility use.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;activity&quot;: [<br />  {<br />    &quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;,<br />    &quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,<br />    &quot;prefLabel&quot;: &quot;Speedball&quot;,<br />    &quot;type&quot;: &quot;Concept&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b>
      </td>
      <td style="text-align:left"> <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the facility use will take place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;location&quot;: {<br />  &quot;address&quot;: {<br />    &quot;addressLocality&quot;: &quot;New Malden&quot;,<br />    &quot;addressRegion&quot;: &quot;London&quot;,<br />    &quot;postalCode&quot;: &quot;NW5 3DU&quot;,<br />    &quot;streetAddress&quot;: &quot;Raynes Park High School, 46A West Barnes Lane&quot;,<br />    &quot;type&quot;: &quot;PostalAddress&quot;<br />  },<br />  &quot;description&quot;: &quot;Raynes Park High School in London&quot;,<br />  &quot;geo&quot;: {<br />    &quot;latitude&quot;: 51.4034423828125,<br />    &quot;longitude&quot;: -0.2369088977575302,<br />    &quot;type&quot;: &quot;GeoCoordinates&quot;<br />  },<br />  &quot;id&quot;: &quot;https://example.com/locations/1234ABCD&quot;,<br />  &quot;identifier&quot;: &quot;1234ABCD&quot;,<br />  &quot;name&quot;: &quot;Raynes Park High School&quot;,<br />  &quot;telephone&quot;: &quot;01253 473934&quot;,<br />  &quot;type&quot;: &quot;Place&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the facility use</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Speedball&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>provider</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">The organisation responsible for providing the facility</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the facility
          use.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;https://example.com/facility-use/1234&quot;</code>
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
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/individfacilityUse/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>aggregateFacilityUse</b>
      </td>
      <td style="text-align:left"> <a href="https://docs.openactive.io/data-model/types/facilityuse"><code>FacilityUse</code></a>
      </td>
      <td style="text-align:left">Inverse of the oa:individualFacilityUse property. Related an oa:IndividualFacilityUse
        (e.g. an opportunity to play tennis on a specific court) to a oa:FacilityUse
        (e.g. an opportunity to play tennis at a specific location).</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the facility use</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;An fast paced game that incorporates netball, handball and football.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>event</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/slot"><code>Slot</code></a>
      </td>
      <td style="text-align:left">TODO</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hoursAvailable</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">The times the facility use is available</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the facility use, e.g. a photo taken at
          a previous event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;image&quot;: [<br />  {<br />    &quot;thumbnail&quot;: &quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br />    &quot;type&quot;: &quot;ImageObject&quot;,<br />    &quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;<br />  }<br />]</code>
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
      <td style="text-align:left"><b>accessibilityInformation</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provide additional, specific documentation for participants about how
          disabilities are, or can be supported at the facility.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;accessibilityInformation&quot;: &quot;TODO&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibilitySupport</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br />Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Used to specify the types of disabilities or impairments that are supported
          at a facility.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;accessibilitySupport&quot;: &quot;TODO&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for users of a facility. E.g.
          more information on how to find it, what to bring, etc.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;attendeeInstructions&quot;: &quot;TODO&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
        <br
        />- or -
        <br />Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe a facility.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;category&quot;: [<br />  {<br />    &quot;id&quot;: &quot;https://example.com/reference/categories#Top%20Club%20Level&quot;,<br />    &quot;inScheme&quot;: &quot;https://example.com/reference/categories&quot;,<br />    &quot;prefLabel&quot;: &quot;Top Club Level&quot;,<br />    &quot;type&quot;: &quot;Concept&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br />Array of <a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
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
    <tr>
      <td style="text-align:left"><b>offers</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">TODO</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>potentialAction</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/action"><code>Action</code></a>
      </td>
      <td style="text-align:left">
        <p>The possible actions that a user may make. e.g. Book.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;potentialAction&quot;: [<br />  {<br />    &quot;name&quot;: &quot;Book&quot;,<br />    &quot;target&quot;: {<br />      &quot;encodingType&quot;: &quot;application/vnd.openactive.v1.0+json&quot;,<br />      &quot;httpMethod&quot;: &quot;POST&quot;,<br />      &quot;type&quot;: &quot;EntryPoint&quot;,<br />      &quot;url&quot;: &quot;https://example.com/orders&quot;<br />    },<br />    &quot;type&quot;: &quot;Action&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>