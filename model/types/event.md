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
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:left">
        <p><a href="../../using-data/getting-started.md"><code>Concept</code></a>
          <br
          />- or -
          <br />Array of <a href="../../publishing-data/data-feeds/"><code>Concept</code></a>
        </p>
        <p>- or -
          <br /><code>Text</code>
          <br />- or -
          <br />Array of <a href="../../using-data/getting-started.md"><code>Text</code></a>
        </p>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          an event.</p>
        <p><b>Example</b>
        </p>
        <p><code>{<br /> &quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;,<br /> &quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,<br /> &quot;prefLabel&quot;: &quot;Speedball&quot;,<br /> &quot;type&quot;: &quot;Concept&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"><a href="../../publishing-data/properties/amenities.md">url</a>
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
      <td style="text-align:left"><a href="../../publishing-data/data-feeds/"><code>Place</code></a>
        <br
        />- or -
        <br /><a href="../../publishing-data/properties/amenities.md"><code>PostalAddress</code></a>
        <br
        />- or -
        <br /><a href="../../publishing-data/properties/amenities.md"><code>Text</code></a>
      </td>
      <td style="text-align:left">The location at which the event will take place. Or, in the case of events
        that may span multiple locations, the initial meeting or starting point.
        <br
        />
        <br />It is recommended that locations should be specified as a <a href="https://developer.openactive.io/models/place">Place</a> complete
        with a fully described geographic location and/or address.
        <br />
        <br />If only an address is available then this should be described as a <a href="https://developer.openactive.io/models/postaladdress">PostalAddress</a>.
        <br
        />
        <br />Applications may use <a href="http://schema.org/Text">schema:Text</a> to
        provide a more general description of a location ("In Victoria Park, near
        to the lake"), but this is not recommended: consuming applications will
        be unable to help users discover opportunities based on their location.
        <br
        />
        <br /><b>Example</b>
        <br />
        <br /><code>{<br />  &quot;address&quot;: {<br />    &quot;addressLocality&quot;: &quot;New Malden&quot;,<br />    &quot;addressRegion&quot;: &quot;London&quot;,<br />    &quot;postalCode&quot;: &quot;NW5 3DU&quot;,<br />    &quot;streetAddress&quot;: &quot;46A West Barnes Lane&quot;,<br />    &quot;type&quot;: &quot;PostalAddress&quot;<br />  },<br />  &quot;description&quot;: &quot;Raynes Park High School in London&quot;,<br />  &quot;geo&quot;: {<br />    &quot;latitude&quot;: 51.4034423828125,<br />    &quot;longitude&quot;: -0.2369088977575302,<br />    &quot;type&quot;: &quot;GeoCoordinates&quot;<br />  },<br />  &quot;id&quot;: &quot;https://example.com/locations/1234ABCD&quot;,<br />  &quot;identifier&quot;: &quot;1234ABCD&quot;,<br />  &quot;name&quot;: &quot;Raynes Park High School&quot;,<br />  &quot;telephone&quot;: &quot;01253 473934&quot;,<br />  &quot;type&quot;: &quot;Place&quot;<br />}</code>
      </td>
    </tr>
  </tbody>
</table>