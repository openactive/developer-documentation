# Attribution

To comply with the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license that used by OpenActive data publishers, data users must attribute OpenActive data wherever it is used.&#x20;

## Getting attribution data from Dataset Sites

The JSON-LD within each OpenActive Dataset Site (see [here](https://openactive.io/data-catalogs/) for how to access these), will include at least the following properties:

<pre class="language-json"><code class="lang-json">{
  "@context": [
    "https://schema.org/",
    "https://openactive.io/"
  ],
  "@type": "Dataset",
  "@id": "https://data.everyoneactive.com/OpenActive/",
<strong>  "name": "Everyone Active Sessions and Facilities",
</strong>  "publisher": {
    "@type": "Organization",
    "name": "Everyone Active",
    "legalName": "Sports and Leisure Management LTD",
    ...
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  ...
}
</code></pre>

## Displaying attribution to end users

To comply with the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license, any frontend that displays OpenActive data must include the relevant open data attribution alongside it.

The attribution should be included somewhere on the page where the data appears (i.e. the session or facility page).

The following HTML is recommended for attribution on any opportunity page, based on the data in the `Dataset` retrieved above:

<pre class="language-html"><code class="lang-html"><strong>Source: &#x3C;a href="{{Dataset.url}}" property="odrs:attributionURL">
</strong>    &#x3C;span property="odrs:attributionText">{{Dataset.publisher.name}}&#x3C;/span>
&#x3C;/a>
</code></pre>

For example, for data from Everyone Active, the attribution should be hyperlinked as follows somewhere on a page displaying that data, as stipulated at the bottom of its Dataset Site at [https://data.everyoneactive.com/OpenActive/](https://data.everyoneactive.com/OpenActive/):

> Source: [Everyone Active](https://data.everyoneactive.com/OpenActive/)

## Full Example for Fusion Lifestyle

The following JSON-LD should be retrieved from the Dataset Site of Fusion Lifestyle:

```json
{
  "@type": "Dataset",
  "url": "https://opendata.fusion-lifestyle.com/OpenActive/",
  "publisher": {
    "@type": "Organization",
    "name": "Fusion Lifestyle",
    ...
  },
  ...
}
```

And rendered into the following HTML for display to the user:

```html
Source: <a href="https://opendata.fusion-lifestyle.com/OpenActive/" property="odrs:attributionURL">
    <span property="odrs:attributionText">Fusion Lifestyle</span>
</a>
```

Which is displayed as follows:

> Source: [Fusion Lifestyle](https://opendata.fusion-lifestyle.com/OpenActive/)
