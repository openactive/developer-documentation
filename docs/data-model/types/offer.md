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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;Offer&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>price</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Float"><code>Float</code></a>
      </td>
      <td style="text-align:left">
        <p>The offer price of the activity.</p>
        <p>This price should be specified without currency symbols and as a floating
          point number with two decimal places.</p>
        <p>The currency of the price should be expressed in the priceCurrency field.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;price&quot;: 33</code>
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
        <p><code>&quot;id&quot;: &quot;https://example.com/offer/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b>
      </td>
      <td style="text-align:left"> <a href="https://docs.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is suitable for a specific age range. If only
          a single age is specified then this is assumed to be a minimum age. Age
          ranges can be specified as follows: 18-30</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;ageRange&quot;: {<br />  &quot;type&quot;: &quot;QuantitativeValue&quot;,<br />  &quot;minValue&quot;: 15,<br />  &quot;maxValue&quot;: 60<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human readable name for the offer.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Speedball winger position&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>priceCurrency</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The currency (in 3-letter ISO 4217 format) of the price.</p>
        <p>If an Offer has a zero price, then this property is not required. Otherwise
          the currency must be specified.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;priceCurrency&quot;: &quot;GBP&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>URL describing the offer</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;http://www.rphs.org.uk/&quot;</code>
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
      <td style="text-align:left"><b>advanceBooking</b>
      </td>
      <td style="text-align:left"> <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether to accept this offer, a participant must book in advance,
          whether they must pay on attending, or have option to do either.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;advanceBooking&quot;: &quot;https://openactive.io/Required&quot;</code>
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
      <td style="text-align:left"><b>prepayment</b>
      </td>
      <td style="text-align:left"> <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether to accept this offer, a participant must pay in advance,
          pay when attending, or have the option to do either.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;prepayment&quot;: &quot;https://openactive.io/Required&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>