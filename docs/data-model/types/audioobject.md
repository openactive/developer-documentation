---
description: This page describes the AudioObject type.
---

# AudioObject

This type is derived from [https://schema.org/AudioObject](https://schema.org/AudioObject), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

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
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;AudioObject&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URL for the audio.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;https://soundcloud.com/stayin/getfit&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional properties**

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
      <td style="text-align:left"><b>contentUrl</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Actual bytes of the media object, for example the image file or video
          file.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;contentUrl&quot;: &quot;https://example.com/media/stayin/getfit&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>embedUrl</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL pointing to a player for a specific video. In general, this is the
          information in the src element of an embed tag and should not be the same
          as the content of the loc tag.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;embedUrl&quot;: &quot;https://example.com/media/stayin/getfit&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>height</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The height of the media in pixels.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;height&quot;: 300</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">The URL for a thumbnail image for the audio.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>width</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The width of the media in pixels.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;width&quot;: 400</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

