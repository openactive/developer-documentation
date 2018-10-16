---
description: This page describes the Offer type.
---

# Offer

This type is derived from [https://schema.org/Offer](https://schema.org/Offer), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"type": "Offer"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>price</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Float"><code>Float</code></a>
      </td>
      <td style="text-align:left">
        <p>The offer price of the activity.</p><p>This price should be specified without currency symbols and as a floating point number with two decimal places.</p><p>The currency of the price should be expressed in the priceCurrency field.</p><p></br><b>Example</b></p><p><code>"price": 33</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended fields**
    
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
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/offer/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30</p><p></br><b>Example</b></p><p><code>"ageRange": {<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;QuantitativeValue&quot;,<br/>&nbsp;&nbsp;&quot;minValue&quot;:&nbsp;15,<br/>&nbsp;&nbsp;&quot;maxValue&quot;:&nbsp;60<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human readable name for the offer.</p><p></br><b>Example</b></p><p><code>"name": "Speedball winger position"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>priceCurrency</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The currency (in 3-letter ISO 4217 format) of the price.</p><p>If an Offer has a zero price, then this property is not required. Otherwise the currency must be specified.</p><p></br><b>Example</b></p><p><code>"priceCurrency": "GBP"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>URL describing the offer</p><p></br><b>Example</b></p><p><code>"url": "http://www.rphs.org.uk/"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Optional fields**
    
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
      <td style="text-align:left"><b>advanceBooking</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether to accept this offer, a participant must book in advance, whether they must pay on attending, or have option to do either.</p><p></br><b>Example</b></p><p><code>"advanceBooking": "https://openactive.io/Required"</code></p>
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
      <td style="text-align:left"><b>prepayment</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether to accept this offer, a participant must pay in advance, pay when attending, or have the option to do either.</p><p></br><b>Example</b></p><p><code>"prepayment": "https://openactive.io/Required"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
