---
description: This page describes the WebAPI type.
---

# WebAPI

## **EARLY RELEASE NOTICE**

This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

This type is derived from [https://pending.schema.org/WebAPI](https://pending.schema.org/WebAPI), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property            | Expected Type                            | Description                                                                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @type               | [`Text`](https://schema.org/Text)        | Must always be present and set to `"@type": "WebAPI"`                                                                                                                                                                                                                                        |
| conformsTo          | Array of [`URL`](https://schema.org/URL) | <p>Indicates the version and profiles of OpenActive Open Booking Specification with which this WebAPI conforms, by specifying these as URLs.</p><p><br>Example</p><p><code>"conformsTo": [</code><br>  <code>"https://openactive.io/open-booking-api/1.0/#core"</code><br><code>]</code></p> |
| endpointDescription | [`URL`](https://schema.org/URL)          | <p>The Open API document associated with this version of the Open Booking API</p><p><br>Example</p><p><code>"endpointDescription": "https://openactive.io/open-booking-api/1.0/swagger.json"</code></p>                                                                                      |
| endpointUrl         | [`URL`](https://schema.org/URL)          | <p>The Base URI of this implementation of the Open Booking API</p><p><br>Example</p><p><code>"endpointUrl": "https://example.bookingsystem.com/api/openbooking"</code></p>                                                                                                                   |
| landingPage         | [`URL`](https://schema.org/URL)          | <p>The URL of a web page that the Broker may use to obtain access to the API, e.g. via a web form.</p><p><br>Example</p><p><code>"landingPage": "https://exampleforms.com/get-me-an-api-access-key"</code></p>                                                                               |
| name                | [`Text`](https://schema.org/Text)        | <p>The name of the WebAPI</p><p><br>Example</p><p><code>"name": "Acme Leisure Sessions and Facilities"</code></p>                                                                                                                                                                            |

### **Recommended properties**

| Property       | Expected Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| documentation  | [`URL`](https://schema.org/URL) | <p>A link to documentation related to how to use the Open Booking API, or a link to the OpenActive developer documentation using <code>https://permalink.openactive.io/dataset-site/open-booking-api-documentation</code> if no system-specific documentation is available.</p><p><br>Example</p><p><code>"documentation": "https://permalink.openactive.io/dataset-site/open-booking-api-documentation"</code></p> |
| termsOfService | [`URL`](https://schema.org/URL) | <p>A link to terms of service related to the use of this API.</p><p><br>Example</p><p><code>"termsOfService": "https://example.bookingsystem.com/terms"</code></p>                                                                                                                                                                                                                                                  |

### **Optional properties**

| Property                | Expected Type                     | Description                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authenticationAuthority | [`URL`](https://schema.org/URL)   | <p>The location of the OpenID Provider that must be used to access the API.</p><p><br>Example</p><p><code>"authenticationAuthority": "https://auth.bookingsystem.com"</code></p>                                                                                                                                                            |
| description             | [`Text`](https://schema.org/Text) | <p>A plain text description of the Dataset, which must not include HTML or other markup.</p><p><br>Example</p><p><code>"description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0."</code></p> |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
