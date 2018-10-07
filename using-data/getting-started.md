# Getting Started

## 

## Getting Super Powers!

Becoming a super hero is a fairly straight forward process:

```text
$ give me super-powers
```

{% hint style="info" %}
Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

```text
// Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```

```javascript
{
  "@context": "https://www.openactive.io/ns/oa.jsonld",
  "type": "Event",
  "name": "Tai chi Class",
  "url": "http://www.example.org/events/1",
  "startDate": "2017-03-22T20:00:00",
  "activity": "Tai Chi",
  "location": {
    "type": "Place",
    "name": "ExampleCo Gym",
    "address": {
      "type": "PostalAddress",
      "streetAddress": "1 High Street",
      "addressLocality": "Bristol",
      "postalCode": "BS1 4SD"
    }
  }
}
```

{% embed data="{\"url\":\"https://gist.githubusercontent.com/nickevansuk/b0de80f9627780c687d2a36c35d9fd43/raw/1f45983699a36a08615fb7f36d8b7389078aee82/example.json\",\"type\":\"rich\",\"title\":\"Test gist\",\"description\":\"Test gist · GitHub\",\"icon\":{\"type\":\"icon\",\"url\":\"https://gist.github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars2.githubusercontent.com/u/2616208?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1},\"embed\":{\"type\":\"reader\",\"html\":\"<script type=\\\"text/javascript\\\" src=\\\"https://validator-embed-mvp.herokuapp.com/?url=https://gist.githubusercontent.com/nickevansuk/b0de80f9627780c687d2a36c35d9fd43/raw/1f45983699a36a08615fb7f36d8b7389078aee82/example.json\\\"></script>\",\"aspectRatio\":0}}" %}

{% embed data="{\"url\":\"https://gist.githubusercontent.com/nickevansuk/b0de80f9627780c687d2a36c35d9fd43/raw/7c221cf334d586f6ad750e71e43557998528c66f/example.json\",\"type\":\"rich\",\"title\":\"Test gist\",\"description\":\"Test gist · GitHub\",\"icon\":{\"type\":\"icon\",\"url\":\"https://gist.github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars2.githubusercontent.com/u/2616208?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1},\"embed\":{\"type\":\"reader\",\"html\":\"<script type=\\\"text/javascript\\\" src=\\\"https://validator-embed-mvp.herokuapp.com/?url=https://gist.githubusercontent.com/nickevansuk/b0de80f9627780c687d2a36c35d9fd43/raw/7c221cf334d586f6ad750e71e43557998528c66f/example.json\\\"></script>\",\"aspectRatio\":0}}" %}

{% embed data="{\"url\":\"https://gist.github.com/nickevansuk/b0de80f9627780c687d2a36c35d9fd43\",\"type\":\"rich\",\"title\":\"Test gist\",\"description\":\"Test gist · GitHub\",\"icon\":{\"type\":\"icon\",\"url\":\"https://gist.github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars2.githubusercontent.com/u/2616208?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1},\"embed\":{\"type\":\"reader\",\"html\":\"<script type=\\\"text/javascript\\\" src=\\\"https://gist.github.com/b0de80f9627780c687d2a36c35d9fd43.js\\\"></script>\",\"aspectRatio\":0}}" %}

[https://raw.githubusercontent.com/openactive/developer-microsite/master/app/examples/event\_example\_1.json](https://raw.githubusercontent.com/openactive/developer-microsite/master/app/examples/event_example_1.json)

<table>
  <thead>
    <tr>
      <th style="text-align:left">activity</th>
      <th style="text-align:center"><a href="getting-started.md"><code>xt</code></a><code>Type</code>
      </th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">activity</td>
      <td style="text-align:center"><a href="getting-started.md"><code>Concept</code></a>
        <br />OR
        <br />Array of <a href="getting-started.md"><code>ConceptORText</code></a>
        <br
        />OR
        <br />Array of <a href="getting-started.md"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          an event.
          <br />
          <br /><b>Example</b>
          <br />
        </p>
        <p><code>{</code>
          <br /> <code>&quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;,</code>
          <br
          /> <code>&quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,</code>
          <br
          /> <code>&quot;prefLabel&quot;: &quot;Speedball&quot;,</code>
          <br /> <code>&quot;type&quot;: &quot;Concept&quot;</code>
          <br /><code>}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">activity</td>
      <td style="text-align:center">
        <p><a href="getting-started.md"><code>Concept</code></a>
          <br />- or -
          <br />Array of <a href="../publishing-data/data-feeds/"><code>Concept</code></a>
        </p>
        <p>- or -
          <br /><code>Text</code>
          <br />- or -
          <br />Array of <a href="getting-started.md"><code>Text</code></a>
        </p>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          an event.</p>
        <p></p>
        <p><b>Example</b>
        </p>
        <p><code>{<br />  &quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;, <br />  &quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,<br />  &quot;prefLabel&quot;: &quot;Speedball&quot;,<br />  &quot;type&quot;: &quot;Concept&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:center"></td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>## **Fields**

### **Required fields**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:center">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:center">
        <p><a href="getting-started.md"><code>Concept</code></a>
          <br />- or -
          <br />Array of <a href="../publishing-data/data-feeds/"><code>Concept</code></a>
        </p>
        <p>- or -
          <br /><code>Text</code>
          <br />- or -
          <br />Array of <a href="getting-started.md"><code>Text</code></a>
        </p>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          an event.</p>
        <p></p>
        <p><b>Example</b>
        </p>
        <p><code>{<br />  &quot;id&quot;: &quot;https://example.com/reference/activities#Speedball&quot;, <br />  &quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;,<br />  &quot;prefLabel&quot;: &quot;Speedball&quot;,<br />  &quot;type&quot;: &quot;Concept&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:center"><b></b><a href="../publishing-data/structuring-data/amenities.md">url</a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record
          <br />
        </p>
        <p><b>Example</b>
        </p>
        <p><code>&quot;https://example.com/events/1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

