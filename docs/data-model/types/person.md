---
description: This page describes the Person type.
---

# Person

This type is derived from [https://schema.org/Person](https://schema.org/Person), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**
    
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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/person/12345"</code></p>
      </td>
    </tr>
  </tbody>
</table>


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
        Must always be present and set to <code>"type": "Person"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>address</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a>
      </td>
      <td style="text-align:left">
        <p>Address of the Seller, used on tax receipts.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The description of the Person</p><p></br><b>Example</b></p><p><code>"description": "The leader of the coaching team"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>email</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The e-mail address of the person.</p><p>This person must have given permission for their personal information to be shared as part of the open data.</p><p></br><b>Example</b></p><p><code>"email": "jane.smith@example.com"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>familyName</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A last name for the person.</p><p>This person must have given permission for their personal information to be shared as part of the open data.</p><p></br><b>Example</b></p><p><code>"familyName": "Thompson"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>gender</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/GenderType"><code>GenderType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the gender of the person.</p><p></br><b>Example</b></p><p><code>"gender": "https://schema.org/Female"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>givenName</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A first name for the person.</p><p>This person must have given permission for their personal information to be shared as part of the open data.</p><p></br><b>Example</b></p><p><code>"givenName": "Daley"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/>Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p><p></br><b>Example</b></p><p><code>"identifier": "SB1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>jobTitle</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The job title of a person</p><p>This person must have given permission for their personal information to be shared as part of the open data.</p><p></br><b>Example</b></p><p><code>"jobTitle": "Team Captain"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>legalName</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The official name of the organization, e.g. the registered company name.</p><p></br><b>Example</b></p><p><code>"legalName": "Central Speedball Ltd"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>A logo for the person.</p><p></br><b>Example</b></p><p><code>"logo": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A full name for the person.</p><p>This person must have given permission for their personal information to be shared as part of the open data.</p><p></br><b>Example</b></p><p><code>"name": "Daley Thompson"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sameAs</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Lists the URL(s) of the official social media profile pages associated with the person.</p><p></br><b>Example</b></p><p><code>"sameAs": "https://example.org/example-org"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>taxMode</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/TaxMode"><code>TaxMode</code></a>
      </td>
      <td style="text-align:left">
        <p>Either  <a href="https://openactive.io/TaxNet">https://openactive.io/TaxNet</a> or  <a href="https://openactive.io/TaxGross">https://openactive.io/TaxGross</a></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>telephone</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The telephone number of the person</p><p>This person must have given permission for their personal information to be shared as part of the open data.</p><p></br><b>Example</b></p><p><code>"telephone": "01234 567890"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>termsOfService</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/terms"><code>Terms</code></a>
      </td>
      <td style="text-align:left">
        <p>The terms of service of the Seller.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL where more information about the person may be found</p><p></br><b>Example</b></p><p><code>"url": "http://www.example.com/"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>vatID</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The Value-added Tax ID of the of the Seller.</p>
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
      <td style="text-align:left"><b>beta:formattedDescription</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/2">Proposal #2</a></p><p>Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
