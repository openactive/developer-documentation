---
description: This page describes the OfferOverride type.
---

# OfferOverride

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
        Must always be present and set to <code>"@type": "OfferOverride"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record.</p><p><code>@id</code> properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p><p>The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).</p><p></br><b>Example</b></p><p><code>"@id": "https://api.example.com/session-series/12345#/offers/2"</code></p>
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
      <td style="text-align:left"><b>price</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Number"><code>Number</code></a>
      </td>
      <td style="text-align:left">
        <p>The offer price of the activity.</p><p>This price should be specified without currency symbols and as a floating point number with two decimal places.</p><p>The currency of the price should be expressed in the priceCurrency field.</p><p>Includes or excludes tax depending on the taxMode of the seller.</p><p></br><b>Example</b></p><p><code>"price": 33</code></p>
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
