---
description: A summary of the mechanics of an RPDE data feed
---

# How a feed works

## Explaining an RPDE feed

Include animation explaining RPDE

## Must Read: Principles of Feeds

### Items must never disappear

It's important to ensure that items don't disappear from the feed without first passing through the deleted state, as if this happens they will live on forever in the downstream apps and services, which will have cached the previously published version indefinitely.

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

