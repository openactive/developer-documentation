---
description: This page describes the Terms type.
---

# Terms

## **Properties**

### **Optional properties**

| Property                | Expected Type                             | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @type                   | [`Text`](https://schema.org/Text)         | Must always be present and set to `"@type": "Terms"`                                                                                                                                                                                                                                                                                                                                                      |
| dateModified            | [`DateTime`](https://schema.org/DateTime) | <p>The date and time at which the webpage containing the contents of the terms, located at the <code>url</code>, was last updated.</p><p><br>Example</p><p><code>"dateModified": "2018-01-27T12:00:00Z"</code></p>                                                                                                                                                                                        |
| name                    | [`Text`](https://schema.org/Text)         | The name of the terms. The name must distinguish this from other terms fields provided, e.g. 'Terms and Conditions' or 'Privacy Policy'.                                                                                                                                                                                                                                                                  |
| requiresExplicitConsent | [`Boolean`](https://schema.org/Boolean)   | <pre><code>  &#x3C;/td>
&#x3C;/tr>
&#x3C;tr>
  &#x3C;td style="text-align:left">&#x3C;b>url&#x3C;/b>&#x3C;/td>
  &#x3C;td style="text-align:left">
    &#x3C;a href="https://schema.org/URL">&#x3C;code>URL&#x3C;/code>&#x3C;/a>
  &#x3C;/td>
  &#x3C;td style="text-align:left">
    &#x3C;p>The URL of the webpage containing the contents of the terms.&#x3C;/p>
  &#x3C;/td>
&#x3C;/tr>
</code></pre> |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
