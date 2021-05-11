# Testing RPDE feeds

## OpenActive Validator

The interactive online [OpenActive Validator](https://validator.openactive.io) provides two key features:

* [RPDE validation](https://validator.openactive.io/rpde): attempt to consume an RPDE feed and check for common errors
* [JSON-LD validation](https://validator.openactive.io/): check a single feed page or request/response for validity 

## OpenActive Test Suite

The downloadable [OpenActive Test Suite](https://github.com/openactive/openactive-test-suite/) includes an option for comprehensively validating OpenActive open data feeds. It runs the [OpenActive Validator](https://validator.openactive.io/) for every item in the feed, and also performs basic RPDE validation.

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
* If `afterTimestamp` is used, and "modified" is an integer, `afterTimestamp` must also be an integer.
* If afterChangeNumber is used it must be an integer and "modified" must be an integer.
* Does the `afterTimestamp` or `afterChangeNumber` of the next url always increase with each new page - if not the query has likely been badly implemented. Most feeds should use integer for this, so you can check they increase numerically afterTimestamp \(for integer "modified"\) or lexicographically \(for string "modified"\).
* There should be "`deleted`" items in the feed. If these are missing, it is likely the feed has not been implemented correctly.
* The `next` URL should be an absolute not relative URL.
* Are all responses returned with header `Content-Type: application/json`
* Check for duplicate IDs: items should not appear more than once in the feed if the source data is unchanging.
* Pages should contain at least 500 items \(this is a warning rather than an error\).
* Are the next URL parameters urlencoded?

### Last Page checks

* Is the `next` URL present on the last page? The `next` URL on the last page should match the URL of the current page.
* Check that the items array of the last page is empty

To quickly access the last page:

* **afterTimestamp**: If "modified" is an integer, put a high integer in for afterTimestamp to return the last page. \(N.B. the spec currently allows for strings to be used for "modified", but a future spec will likely [make integers a must here](https://github.com/openactive/realtime-paged-data-exchange/issues/89)\).
* **afterChangeNumber**: Put a high integer in for afterChangeNumber to return last page

### Data quality checks

* Does the feed include all historical data from the beginning of time and not just data in the future or from today's date?
* Does the endpoint without any parameters return the first page \(from the beginning of time\)?
* Does each page contain a "license" key?

