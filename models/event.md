---
description: 'This model is derived from http://schema.org/Event.'
---

# Event

## **Fields**

### **Required fields**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:center">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:center">
        <p><a href="../using-data/getting-started.md"><code>Concept</code></a>
          <br
          />- or -
          <br />Array of <a href="../publishing-data/data-feeds/"><code>Concept</code></a>
        </p>
        <p>- or -
          <br /><code>Text</code>
          <br />- or -
          <br />Array of <a href="../using-data/getting-started.md"><code>Text</code></a>
        </p>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          an event.</p>
        <p></p>
        <p><b>Example</b>
        </p>
        <p><code>{<br />  &quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;, <br />  &quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,<br />  &quot;prefLabel&quot;: &quot;Speedball&quot;,<br />  &quot;type&quot;: &quot;Concept&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:center"><b></b><a href="../publishing-data/properties/amenities.md">url</a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record
          <br />
        </p>
        <p><b>Example</b>
        </p>
        <p><code>&quot;https://example.com/events/1234&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b>
      </td>
      <td style="text-align:center"><code></code><a href="../publishing-data/data-feeds/"><code>Place</code></a>
        <br
        />- or -
        <br /><a href="../publishing-data/properties/amenities.md"><code>PostalAddress</code></a>
        <br
        />- or -
        <br /><a href="../publishing-data/properties/amenities.md"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the event will take place. Or, in the case of events
          that may span multiple locations, the initial meeting or starting point.</p>
        <p></p>
        <p>It is recommended that locations should be specified as a <a href="https://developer.openactive.io/models/place">Place</a> complete
          with a fully described geographic location and/or address.</p>
        <p></p>
        <p>If only an address is available then this should be described as a <a href="https://developer.openactive.io/models/postaladdress">PostalAddress</a>.</p>
        <p></p>
        <p>Applications may use <a href="http://schema.org/Text">schema:Text</a> to
          provide a more general description of a location ("In Victoria Park, near
          the lake"), but this is not recommended: consuming applications will be
          unable to help users discover opportunities based on their location.</p>
        <p></p>
        <p><b>Example</b>
        </p>
        <p><code>{<br />  &quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;, <br />  &quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,<br />  &quot;prefLabel&quot;: &quot;Speedball&quot;,<br />  &quot;type&quot;: &quot;Concept&quot;<br />}</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

