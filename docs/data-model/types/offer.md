---
description: This page describes the Offer type.
---

# Offer

This type is derived from [https://schema.org/Offer](https://schema.org/Offer), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>@type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"@type": "Offer"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"@id": "https://example.com/offer/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>acceptedPaymentMethod</b></td>
      <td style="text-align:left">
        Array of <a href="http://purl.org/goodrelations/v1#PaymentMethod"><code>PaymentMethod</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the offline payment methods accepted by this provider.</p><p></br><b>Example</b></p><p><code>"acceptedPaymentMethod": [<br/>&nbsp;&nbsp;&quot;http://purl.org/goodrelations/v1#Cash&quot;,<br/>&nbsp;&nbsp;&quot;http://purl.org/goodrelations/v1#PaymentMethodCreditCard&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>advanceBooking</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether to accept this offer, a participant must book in advance, whether they must pay on attending, or have option to do either. Values must be one of  <a href="https://openactive.io/Required">https://openactive.io/Required</a>,  <a href="https://openactive.io/Optional">https://openactive.io/Optional</a> or  <a href="https://openactive.io/Unavailable">https://openactive.io/Unavailable</a>.</p><p></br><b>Example</b></p><p><code>"advanceBooking": "https://openactive.io/Required"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p><strong>DEPRECATED</strong>: Use <code>ageRestriction</code> instead of <code>ageRange</code> within the <code>Offer</code> for cases where the <code>Offer</code> is age restricted.</p><p>Indicates that an Offer is only applicable to a specific age range.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRestriction</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an Offer can only be purchased by participants within a specific age range. Specified as a QuantitativeValue with minValue and maxValue properties. This must be displayed prominently to the user when selecting an <code>Offer</code> or before booking.</p><p></br><b>Example</b></p><p><code>"ageRestriction": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;QuantitativeValue&quot;,<br/>&nbsp;&nbsp;&quot;minValue&quot;:&nbsp;15,<br/>&nbsp;&nbsp;&quot;maxValue&quot;:&nbsp;60<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>allowCustomerCancellationFullRefund</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Whether the opportunity can be cancelled with a full refund at any time before the <code>startDate</code>, or before the <code>latestCancellationBeforeStartDate</code> if provided.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>availableChannel</b></td>
      <td style="text-align:left">
        Array of <a href="https://openactive.io/AvailableChannelType"><code>AvailableChannelType</code></a>
      </td>
      <td style="text-align:left">
        <p>The channels through which a booking can be made.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the Offer, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "Concession requirements are available at https://www.fusion-lifestyle.com/. Proof of entitlement to concession membership must be provided when you visit the centre."</code></p>
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
      <td style="text-align:left"><b>latestCancellationBeforeStartDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration before the startDate during which this Offer may not be cancelled, given in ISO 8601 format.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the Offer suitable for communication to participants.</p><p></br><b>Example</b></p><p><code>"name": "Speedball winger position"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>openBookingFlowRequirement</b></td>
      <td style="text-align:left">
        Array of <a href="https://openactive.io/OpenBookingFlowRequirement"><code>OpenBookingFlowRequirement</code></a>
      </td>
      <td style="text-align:left">
        <p>Can include  <a href="https://openactive.io/OpenBookingIntakeForm">https://openactive.io/OpenBookingIntakeForm</a>,  <a href="https://openactive.io/OpenBookingAttendeeDetails">https://openactive.io/OpenBookingAttendeeDetails</a>,  <a href="https://openactive.io/OpenBookingApproval">https://openactive.io/OpenBookingApproval</a>,  <a href="https://openactive.io/OpenBookingNegotiation">https://openactive.io/OpenBookingNegotiation</a>,  <a href="https://openactive.io/OpenBookingMessageExchange">https://openactive.io/OpenBookingMessageExchange</a></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prepayment</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether to accept this offer, a participant must pay in advance, pay when attending, or have the option to do either. Values must be one of  <a href="https://openactive.io/Required">https://openactive.io/Required</a>,  <a href="https://openactive.io/Optional">https://openactive.io/Optional</a> or  <a href="https://openactive.io/Unavailable">https://openactive.io/Unavailable</a>.</p><p></br><b>Example</b></p><p><code>"prepayment": "https://openactive.io/Required"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>price</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Number"><code>Number</code></a>
      </td>
      <td style="text-align:left">
        <p>The offer price of the activity.</p><p>This price should be specified without currency symbols and as a floating point number with two decimal places.</p><p>The currency of the price should be expressed in the priceCurrency field.</p><p>Includes or excludes tax depending on the taxMode of the seller.</p><p></br><b>Example</b></p><p><code>"price": "33"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>priceCurrency</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The currency of the price. Specified as a 3-letter ISO 4217 value. If an Offer has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.</p><p></br><b>Example</b></p><p><code>"priceCurrency": "GBP"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>URL describing the offer</p><p></br><b>Example</b></p><p><code>"url": "http://www.rphs.org.uk/"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>validFromBeforeStartDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration before the startDate for which this Offer is valid, given in ISO 8601 format. This is a relatively-defined equivalent of schema:validFrom, to allow for Offer inheritance.</p>
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
      <td style="text-align:left"><b>beta:partySize</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/QuantitativeValue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/250">Proposal #250</a></p><p>Number of people the reservation should accommodate.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
