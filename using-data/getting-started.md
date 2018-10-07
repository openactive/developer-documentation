# Getting Started

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


| activity | [`Concept`]() OR [Array of `ConceptORText`](), OR [Array of `Text`]() | Specifies the physical activity or activities that will take place during an event.,### Example,``` {,"id": "https://example.com/reference/activities#Speedball",,"inScheme": "https://example.com/reference/activities",,"prefLabel": "Speedball",,"type": "Concept" } ``` |
|----------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| activity | [`Concept`]() OR [Array of `ConceptORText`](), OR [Array of `Text`]() | Specifies the physical activity or activities that will take place during an event.,### Example,`{`<br />`"id": "https://example.com/reference/activities#Speedball",`<br />`"inScheme": "https://example.com/reference/activities",`<br />`"prefLabel": "Speedball",`<br />`"type": "Concept" } ` |
