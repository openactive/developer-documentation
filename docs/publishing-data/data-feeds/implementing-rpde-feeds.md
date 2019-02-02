# Implementing RPDE

Always use a JSON library to generate the output, and never construct the JSON manually.

Language-specific examples of library implementations that also support the removal of nulls, empty strings and empty arrays - as the specification stipulates - are included here.

## C\# and .NET Framework

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

Define the RPDE response structure as nested arrays, and recursively unset empty properties before using  [json\_encode](http://php.net/manual/en/function.json-encode.php) to generate the response.

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



