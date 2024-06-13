# Large Integers in JavaScript

As mentioned in [**Storing RPDE `modified` with less than 64-bit integers**](./#storing-rpde-modified-with-less-than-64-bit-integers), the [RPDE](https://openactive.io/realtime-paged-data-exchange/) `modified` field can be expected to have values too large to be able to be precisely represented by JavaScript's [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Number) type.

In some cases, this may be no issue. If your RPDE feed harvesting implementation does not do anything with the `modified` field, then that's fine. However, if your implementation involves asynchronous and concurrent processing in such a way that individual RPDE items can be stored not strictly in the order that they appeared in the feed, you will need to use `modified` comparisons in order to determine which RPDE item is the most up to date.

If doing this, the recommended approach is to:

### Recommended Approach

* Parse the `modified` from the RPDE page using a **custom JSON parser**, that can handle large integers — we recommend [lossless-json](https://github.com/josdejong/lossless-json).
* **Keep it as a string** in memory.
  * **NOTE**: The recommended approach is to keep it in memory as a string and NOT a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/BigInt). This is because most of the JavaScript ecosystem cannot handle BigInts. In a sufficiently complicated app, where you have HTTP requests, database integration, logging, file system read/writes, etc, each one of these integration points will break as soon as it encounters a BigInt. Experience shows that this can be much harder to maintain and so we instead recommend storing this data as strings and temporarily using BigInts for numeric comparison only.
* If comparing the `modified` of two different RPDE items, **use JavaScript's** [**BigInt**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/BigInt) **type for the numeric comparison** e.g. `BigInt(aModified) >= BigInt(bModified)`.
* When storing to a database, **store with the database's 64-bit numeric type** (`bigint` in PostgreSQL).

### Example Code

Here's some example code demonstrating fetching an RPDE page with [axios](https://github.com/axios/axios):

<pre class="language-javascript"><code class="lang-javascript"><strong>const res = await axios('https://example.com/rpde/scheduled-sessions', {
</strong><strong>  // Ensure that fidelity is not lost in the JSON parsing process.
</strong>  transformResponse: (res) => jsonParseConvertingTooLargeInt(res),
});
// Store `modified`s as strings
const rpdeItemsWithStringModifieds = res.data.items.map((item) => ({
  ...item,
  modified: String(item.modified),
});
for (const rpdeItem of rpdeItemsWithStringModifieds) {
  const existingItem = rpdeItemCache[rpdeItem.id];
  // Temporarily use the BigInt type for numeric comparison
  if (existingItem &#x26;&#x26; BigInt(rpdeItem.modified) &#x3C; BigInt(existingItem.modified)) {
    continue;
  }
  rpdeItemCache[rpdeItem.id] = rpdeItem;
}
 
// --- A DIFFERENT MODULE - JSON PARSING UTILS ---
const { parse, isInteger } = require('lossless-json');

/**
 * @param {string} s
 */
function jsonParseConvertingTooLargeIntsToBigInts(s) {
  return parse(s, null, convertNumberToBigIntIfTooLargeInt);
}

/**
 * This is called for ALL numeric fields in the response — not just `.modified`.
 * So, we only use custom de-serialization if the value is out of normal integer
 * bounds.
 * There is a possibility that fields other than `.modified` will be caught by
 * this function as there are other integer fields in Opportunity data. This is
 * we transform, just for the de-serialization process, these values to BigInt
 * rather than string, which will make it easier to deal with cases in which
 * another numeric field (e.g. remainingUses) is surprisingly a very large
 * integer.
 *
 * @param {string} value
 * @returns {number | bigint}
 */
function convertNumberToBigIntIfTooLargeInt(value) {
  if (isInteger(value)) {
    const asInt = parseInt(value, 10);
    /* Note we consider equality to either of the bounds to be "too large" just
    to be extra cautious against the effects of precision loss */
    if (asInt >= Number.MAX_SAFE_INTEGER || asInt &#x3C;= Number.MIN_SAFE_INTEGER) {
      return BigInt(value);
    }
    return asInt;
  }
  return parseFloat(value);
}
</code></pre>

Things to note about the above example:

* It uses [lossless-json](https://github.com/josdejong/lossless-json), which has been proven to work for this issue (problems with `JSON.parse`'s `reviver` and with the [json-bigint](https://github.com/sidorares/json-bigint) library are discussed within [this GitHub issue](https://github.com/openactive/data-model-validator/issues/439)).
* It uses both strings and BigInts at various points to handle the data. Each of these is explained in comments, but broadly it uses the rules defined in the [recommended approach](large-integers-in-javascript.md#recommended-approach).

