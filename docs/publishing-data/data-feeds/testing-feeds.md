# Testing RPDE feeds

{% hint style="warning" %}
Please note that all feeds must pass the **OpenActive Test Suite** in order to be usable by the largest number of data users. As described below, the interactive OpenActive Validator only validates the first 10 items / first 20 pages of a feed, whereas the OpenActive Test Suite runs the same checks over all items, in all pages, of all feeds.
{% endhint %}

## OpenActive Validator

The interactive online [OpenActive Validator](https://validator.openactive.io) allows the user to perform two types of validation:

* [RPDE validation](https://validator.openactive.io/rpde): attempt to consume **only the** **first 20 RPDE pages** of an RPDE feed and check for common errors with the RPDE implementation
* [JSON-LD validation](https://validator.openactive.io/): depending on the data supplied, check either (i) an individual item, (ii) **only the first 10 JSON-LD items** in a single feed page, or (iii) an Open Booking API request/response for validity

The OpenActive Validator is useful during development to get instant feedback on the basic data structure and feed implementation, however it is not designed to comprehensively validate a complete implementation.

## OpenActive Test Suite

The downloadable [OpenActive Test Suite](https://github.com/openactive/openactive-test-suite/) includes an option for comprehensively validating OpenActive open data feeds. Behind the scenes it runs the same checks as the [OpenActive Validator](https://validator.openactive.io/) for **every RPDE page** in the feed, and for **every JSON-LD item** in the feed.

The OpenActive Test Suite produces a results page that allows the user to explore specific errors with individual data items, by loading those items into the interactive OpenActive Validator.

### Step 1: Install the test suite

Clone the test suite repository locally, and install its dependencies.

[Node.js](https://nodejs.org/en/download/) version 14 or above is required.

```bash
git clone git@github.com:openactive/openactive-test-suite.git
cd openactive-test-suite
npm install
```

### Step 2: Run validation

Validation mode does not require any specific configuration, simply run the following command with the URL of the dataset site to be tested:

```bash
npm run validate-feeds "http://reference-implementation.openactive.io/OpenActive"
```

## Manual Testing Checklist

Things to check to ensure the feed is implemented correctly.

### Most common implementation error

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

### Feed integrity checks

* Does the `next` url work as expected and return a valid page - it should never result in a 500 error.
* "`modified`" must always be an integer, `afterTimestamp` / `afterChangeNumber` must also be an integer.
* Does the `afterTimestamp` or `afterChangeNumber` of the next url always increase with each new page - if not the query has likely been badly implemented.
* There should be "`deleted`" items in the feed. If these are missing, it is likely the feed has not been implemented correctly.
* The `next` URL should be an absolute not relative URL.
* Are all responses returned with header `Content-Type: application/json`
* Check for duplicate IDs: items should not appear more than once in the feed if the source data is unchanging.
* Pages should contain at least 500 items (this is a warning rather than an error).
* Are the next URL parameters urlencoded?

### Last Page checks

* Is the `next` URL present on the last page? The `next` URL on the last page should match the URL of the current page.
* Check that the items array of the last page is empty

To quickly access the last page:

* **afterTimestamp**: If "modified" is an integer, put a high integer in for afterTimestamp to return the last page. (N.B. the spec currently allows for strings to be used for "modified", but a future spec will likely [make integers a must here](https://github.com/openactive/realtime-paged-data-exchange/issues/89)).
* **afterChangeNumber**: Put a high integer in for afterChangeNumber to return last page

### Data quality checks

* Does the feed include all historical data from the beginning of time and not just data in the future or from today's date?
* Does the endpoint without any parameters return the first page (from the beginning of time)?
* Does each page contain a "license" key?
