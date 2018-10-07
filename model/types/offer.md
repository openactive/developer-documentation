---
description: This page describes the Offer type.
---

# Offer

This type is derived from [https://schema.org/Offer](https://schema.org/Offer).

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
        Must always be present and set to <code>Offer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>price</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Float"><code>Float</code></a>
      </td>
      <td style="text-align:left">
        The offer price of the activity.</br></br>This price should be specified without currency symbols and as a floating point number with two decimal places.</br></br>The currency of the price should be expressed in the priceCurrency field.</br></br><b>Example</b></br></br><code>33</code>
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
        A unique url based identifier for the record</br></br><b>Example</b></br></br><code>https://example.com/offer/1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30</br></br><b>Example</b></br></br><code>{<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;QuantitativeValue&quot;,<br/>&nbsp;&nbsp;&quot;minValue&quot;:&nbsp;15,<br/>&nbsp;&nbsp;&quot;maxValue&quot;:&nbsp;60<br/>}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A human readable name for the offer.</br></br><b>Example</b></br></br><code>Speedball winger position</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>priceCurrency</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The currency (in 3-letter ISO 4217 format) of the price.</br></br>If an Offer has a zero price, then this property is not required. Otherwise the currency must be specified.</br></br><b>Example</b></br></br><code>GBP</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        URL describing the offer</br></br><b>Example</b></br></br><code>http://www.rphs.org.uk/</code>
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
      <td style="text-align:left"><b>advanceBooking</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        Indicates whether to accept this offer, a participant must book in advance, whether they must pay on attending, or have option to do either.</br></br><b>Example</b></br></br><code>https://openactive.io/Required</code>
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
      <td style="text-align:left"><b>prepayment</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        Indicates whether to accept this offer, a participant must pay in advance, pay when attending, or have the option to do either.</br></br><b>Example</b></br></br><code>https://openactive.io/Required</code>
      </td>
    </tr>
  </tbody>
</table>


