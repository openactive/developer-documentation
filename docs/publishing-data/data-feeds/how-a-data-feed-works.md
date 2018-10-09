# How an RPDE data feed works

## RPDE feeds explained

The following video is a beta explainer animation for Realtime Paged Data Exchange \(RPDE\) feeds. If you find this short video useful, please drop any feedback to hello@openactive.io, and we will extend it into a full explanation.

For a full explanation of how to create an RPDE feed, please see the [specification](https://www.openactive.io/realtime-paged-data-exchange/#paging).

{% embed url="https://youtu.be/yHZS24xzY-8" %}

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

