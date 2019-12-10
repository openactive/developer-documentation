# Implementing RPDE

Always use a JSON library to generate the output, and never construct the JSON manually.

Language-specific examples of library implementations that also support the removal of nulls, empty strings and empty arrays - as the specification stipulates - are included here.

## Transactions: Preventing delayed item interleaving

When concurrent transactions are used to write to tables that power RPDE feeds, the timestamp and change number update must be done outside of the transaction.

### Example of race condition

Delayed item interleaving is a race condition that occurs when two concurrent transactions containing "timestamps" or "change numbers" are committed out of order. For example using the [Modified Timestamp and ID](https://www.w3.org/2017/08/realtime-paged-data-exchange/#modified-timestamp-and-id) ordering strategy:

* **Transaction 1**: Starts at 10:00:01 and updates RPDE item timestamps
* **Transaction 2**: Starts at 10:00:02 and updates RPDE item timestamps
* **Transaction 2**: Commits
* Data consumer reads the feed at 10:00:03, and gets the latest items up to 10:00:02
* **Transaction 1**: Commits
* Items from **Transaction 1** appear in the feed with timestamp 10:00:01, but the data consumer has already moved past them

The same issue can be demonstrated with the [Incrementing Unique Change Number](https://www.w3.org/2017/08/realtime-paged-data-exchange/#incrementing-unique-change-number) ordering strategy:

* **Transaction 1**: Creates change number 001 and updates RPDE item timestamp
* **Transaction 2**: Creates change number 002 and updates RPDE item timestamp
* **Transaction 2**: Commits
* Data consumer reads the feed up to 002
* **Transaction 1**: Commits
* Item from **Transaction 1** appears in the feed with change number 001, but the data consumer has already moved past it

### Preventing the race condition

In order to prevent this race condition, simply separate the more intensive work of the transaction from the atomic timestamp and change number update:

1. Commit the transaction
2. Update the timestamp or change number after the transaction has been committed as an atomic operation, outside of a transaction, using `GETDATE()` or similar

Updating items in the feed without updating their timestamp/change number immediately does not have any negative effects, as data consumers who are reading the feed will read the updated item earlier than they would otherwise instead of an older version, then read it again after the timestamp/change number is updated as they would normally.

## C\# and .NET Framework

### OpenActive.NET

We highly recommend using the [OpenActive.NET](https://www.nuget.org/packages/OpenActive.NET/) library for .NET implementations. It includes strongly typed classes for the [OpenActive data model](https://www.openactive.io/modelling-opportunity-data/) including [beta properties](https://www.openactive.io/ns-beta/), and fully compliant serialisation methods too.

### Manual Implementation

Use [JSON.NET / Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) with a `ContractResolver` to remove empty strings, and `NullValueHandling` to remove nulls. Empty list values must be removed by setting them to null in the generating code, aided by the extension `ToListOrNullIfEmpty` which is useful at the end of LINQ expressions.

```csharp
public class RPDERestUtils
{
    public static HttpResponseMessage CreateJSONResponse(RpdePage page, HttpRequestMessage req)
    {
        var e = JsonConvert.SerializeObject(page,
            Newtonsoft.Json.Formatting.None,
            new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore,
                ContractResolver = NoEmptyStringsContractResolver.Instance
            });

        var resp = req.CreateResponse(HttpStatusCode.OK);
        resp.Headers.CacheControl = new CacheControlHeaderValue()
        {
            Public = true,
            // Recommended cache settings from:
            // https://developer.openactive.io/publishing-data/data-feeds/scaling-feeds
            MaxAge = page?.items?.Count > 0 ? TimeSpan.FromHours(1) : TimeSpan.FromSeconds(8)
        };
        resp.Content = new StringContent(e, Encoding.UTF8, "application/json");
        return resp;
    }

    public class NoEmptyStringsContractResolver : DefaultContractResolver
    {
        public static readonly NoEmptyStringsContractResolver Instance = new NoEmptyStringsContractResolver();

        protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)
        {
            JsonProperty property = base.CreateProperty(member, memberSerialization);

            if (property.PropertyType == typeof(string))
            {
                // Do not include empty strings in JSON output (as per OpenActive Modelling Specification)
                property.ShouldSerialize = instance =>
                {
                    return !string.IsNullOrWhiteSpace(instance.GetType().GetRuntimeProperty(member.Name).GetValue(instance, null) as string);
                };
            }

            return property;
        }
    }

    public static List<TSource> ToListOrNullIfEmpty<TSource>(this IEnumerable<TSource> source)
    {
        if (source != null && source.Count() > 0)
            return source.ToList();
        else
            return null;
    }
}
```

## PHP

The specification requires that no null or empty strings are present in the OpenActive feed. To achieve this, define the RPDE response structure as nested arrays, and recursively unset empty properties before using [json\_encode](http://php.net/manual/en/function.json-encode.php) to generate the response.

Run the example below [here](https://www.tehplayground.com/bQZT9xjRC3ToXbPc) to see the result.

```php
<?php

$testResponseStructure = array(
    "@context"=>"https://openactive.io/",
    "id"=>"https://example.com/api/sessions/1402CBP20150217",
    "identifier"=>"1402CBP20150217",
    "type"=>"SessionSeries",
    "organizer"=>array(
        "type"=>"Organization",
        "name"=>"Everyone Active",
        "url"=>null,
        "logo"=>array(
            "type"=>"ImageObject",
            "url"=>"",
        ),
        "email"=>null,
        "telephone"=> "01455 890508",
        "sameAs"=>array(
            null,
            ""
        ),
    ),
);

print json_encode_without_null_or_empty($testResponseStructure);

function json_encode_without_null_or_empty($nestedarr) {
    array_unset_recursive($nestedarr);
    return json_encode($nestedarr);
}

function array_unset_recursive(&$array) {
    foreach ($array as $key => &$value) {
        // First clean the array, in case it ends up empty
        if (is_array($value)) {
            array_unset_recursive($value, $remove);
            // Remove arrays containing only a "type" property
            if (count($value) == 1 && array_key_exists("type",$value))
                $value = null;
        }

        // Remove null values, empty strings, and empty lists
        if ($value !== false && ($value === null || $value === "" || empty($value))) 
            unset($array[$key]);
    }
}
```

