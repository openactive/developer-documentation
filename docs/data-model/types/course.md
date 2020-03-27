---
description: This page describes the Course type.
---

# Course

This type is derived from [https://schema.org/Course](https://schema.org/Course), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Optional properties**
    
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
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"type": "Course"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during a Course.</p><p></br><b>Example</b></p><p><code>"activity": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://openactive.io/activity-list#fbdc35a8-3dd0-40ee-a7ca-6ff40b3e5f90&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Netball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://openactive.io/activity-list&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization who have created the Course. An author might be an schema:Organization or a schema:Person.</p><p></br><b>Example</b></p><p><code>"author": {<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The description of the Course</p><p></br><b>Example</b></p><p><code>"description": "Netball Youth Camps give junior netballers the chance to get together with their friends and take to the court in the holidays!

The camp is a non-residential holiday camp providing ‘Nothing but Netball’; not only will there be top quality coaching and fun netball activities but there is even an opportunity to meet and be inspired by an elite player.

If you are a junior netball lover (or the parent of one!) these are an unmissable holiday activity."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/>Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p><p></br><b>Example</b></p><p><code>"identifier": "BR1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>A logo for the Course.</p><p></br><b>Example</b></p><p><code>"logo": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the Course</p><p></br><b>Example</b></p><p><code>"name": "Netball Youth Camp"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A definitive canonical URL for the Course.</p><p></br><b>Example</b></p><p><code>"url": "http://www.speedball-world.com/beginners-course"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Beta Extension properties**
    
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
      <td style="text-align:left"><b>beta:logo</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/ImageObject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/164">Proposal #164</a></p><p>An associated logo for a course.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:video</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/VideoObject"><code>VideoObject</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/88">Proposal #88</a></p><p>An related video object.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
