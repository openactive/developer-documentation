---
description: This page describes the VirtualLocation type.
---

# VirtualLocation

This type is derived from [https://pending.schema.org/VirtualLocation](https://pending.schema.org/VirtualLocation), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property  | Expected Type                      | Description                                                     |
| --------- | ---------------------------------- | --------------------------------------------------------------- |
| **@type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"@type": "VirtualLocation"` |

### **Required options**

A data publisher must provide either a `name`, `description` or `url` for the `VirtualLocation`.

| Property        | Expected Type                      | Description                                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**        |  [`Text`](https://schema.org/Text) | <p>The name of the service that is providing remote access to the Opportunity.</p><p><br><strong>Example</strong></p><p><code>"name": "Zoom"</code></p>                                                                                                                                                                                |
| **description** |  [`Text`](https://schema.org/Text) | <p>A plain text description of the live stream, including any instructions to join. This description must not include HTML or other markup.</p><p><br><strong>Example</strong></p><p><code>"description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start."</code></p> |
| **url**         |  [`URL`](https://schema.org/URL)   | <p>The URL that enables remote access to the Opportunity, which should include encoded access credentials where possible.</p><p><br><strong>Example</strong></p><p><code>"url": "https://zoom.us/room/3fbCs0GVjgQ"</code></p>                                                                                                          |

### **Optional properties**

| Property        | Expected Type                      | Description                                                                                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accessCode**  |  [`Text`](https://schema.org/Text) | <p>The password or pin required to access the <code>VirtualLocation</code> from any device, without requiring the URL, e.g. the meeting password.</p><p><br><strong>Example</strong></p><p><code>"accessCode": "211277"</code></p>                                                                                                     |
| **accessId**    |  [`Text`](https://schema.org/Text) | <p>The identifier required to access the <code>VirtualLocation</code> from any device, without requiring the URL, e.g. the meeting ID.</p><p><br><strong>Example</strong></p><p><code>"accessId": "123456789"</code></p>                                                                                                               |
| **description** |  [`Text`](https://schema.org/Text) | <p>A plain text description of the live stream, including any instructions to join. This description must not include HTML or other markup.</p><p><br><strong>Example</strong></p><p><code>"description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start."</code></p> |
| **name**        |  [`Text`](https://schema.org/Text) | <p>The name of the service that is providing remote access to the Opportunity.</p><p><br><strong>Example</strong></p><p><code>"name": "Zoom"</code></p>                                                                                                                                                                                |
| **url**         |  [`URL`](https://schema.org/URL)   | <p>The URL that enables remote access to the Opportunity, which should include encoded access credentials where possible.</p><p><br><strong>Example</strong></p><p><code>"url": "https://zoom.us/room/3fbCs0GVjgQ"</code></p>                                                                                                          |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
