---
description: A summary of the mechanics of an RPDE data feed
---

# How a feed works

## RPDE feeds explained

The following video is a beta explainer animation for Realtime Paged Data Exchange \(RPDE\) feeds. If you find this short video useful, please drop any feedback to hello@openactive.io, and we will extend it into a full explanation.

For a full explanation of how to create an RPDE feed, please see the [specification](https://www.openactive.io/realtime-paged-data-exchange/#paging).

{% embed data="{\"url\":\"https://youtu.be/6EjitAdoNzg\",\"type\":\"video\",\"title\":\"OpenActive RPDE Implementation Explainer \(Beta\)\",\"description\":\"A video to demonstrate what an RPDE explainer could look like\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/6EjitAdoNzg/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/6EjitAdoNzg?rel=0&showinfo=0\",\"html\":\"<div style=\\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\\"><iframe src=\\\"https://www.youtube.com/embed/6EjitAdoNzg?rel=0&amp;showinfo=0\\\" style=\\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\\" allowfullscreen scrolling=\\\"no\\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

## Must Read: Principles of Feeds

### Items must never disappear

It's important to ensure that items don't disappear from the feed without first passing through the `deleted` state, as if this happens they will live on forever in the downstream apps and services, which will have cached the previously published version indefinitely.

See the [deleted items](https://www.openactive.io/realtime-paged-data-exchange/#deleted-items) section of the specification for more information.

### The query must be followed exactly

Misreading the query in the specification is the single most common cause of incorrect implementation. Please read it carefully and ensure that brackets and comparators are used correctly. `>` not `>=` for example.

Please ensure that you have implemented [this query](https://www.openactive.io/realtime-paged-data-exchange/#sql-query-example-for-timestamp-id) correctly:

```sql
--include WHERE clause only if @afterTimestamp and @afterId provided
   WHERE (modified = @afterTimestamp
            AND id > @afterId)
      OR (modified > @afterTimestamp)
ORDER BY modified,
         id
```

