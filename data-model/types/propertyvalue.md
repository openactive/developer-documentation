---
description: This page describes the PropertyValue type.
---

# PropertyValue

This type is derived from [https://schema.org/PropertyValue](https://schema.org/PropertyValue), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>PropertyValue</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="name"></a><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The name of this PropertyValue</br></br><b>Example</b></br></br><code>Vendor ID</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="value"></a><b>value</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        TODO</br></br><b>Example</b></br></br><code>SB1234</code>
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
      <td style="text-align:left"><a name="propertyID"></a><b>propertyID</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a><br/> - or - <br/><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A commonly used identifier for the characteristic represented by the property</br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
  </tbody>
</table>


