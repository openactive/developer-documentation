---
description: This page describes the Person type.
---

# Person

This type is derived from [https://schema.org/Person](https://schema.org/Person).

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
        <code>Person</code>
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
        A unique url based identifier for the record</br></br><b>Example</b></br></br><code>https://example.com/person/1234</code>
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
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The description of the Person</br></br><b>Example</b></br></br><code>The leader of the coaching team</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A local non-URI identifier for the resource</br></br><b>Example</b></br></br><code>SB1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        A logo for the person.</br></br><b>Example</b></br></br><code>{<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A full name for the person.</br></br>This person must give direct permission for their personal information to be shared as part of the Open Data.</br></br><b>Example</b></br></br><code>Daley Thompson</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sameAs</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        Lists the URL(s) of the official social media profile pages associated with the person.</br></br><b>Example</b></br></br><code>https://example.org/example-org</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>telephone</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The telephone number of the person</br></br><b>Example</b></br></br><code>01234 567890</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A URL where more information about the person may be found</br></br><b>Example</b></br></br><code>http://www.example.com/</code>
      </td>
    </tr>
  </tbody>
</table>


