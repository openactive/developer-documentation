---
description: A guide for setting up the OpenActive Test Suite for the Open Booking API.
---

# Testing booking

## Overview

The [OpenActive Test Suite](https://github.com/openactive/openactive-test-suite/) consists of two projects:

* \*\*\*\*[**openactive-broker-microservice**](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-broker-microservice) - harvests feeds and provides an interface to extract specific items from the feeds.
* \*\*\*\*[**openactive-integration-tests**](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests) - a suite of Jest integration tests that exercise an Open Booking API implementation.

## Step 1: Install the test suite

Clone the test suite repository locally, and install its dependencies.

[Node.js](https://nodejs.org/en/download/) version 12 or above is required.

```bash
git clone git@github.com:openactive/openactive-test-suite.git
cd openactive-test-suite
npm install
```

You can check that the test suite works in your local environment by running it against the hosted [OpenActive Reference Implementation](https://github.com/openactive/OpenActive.Server.NET/), simply by using the default configuration:

```bash
npm start
```

## Step 2: Configure features

The list of Open Booking API features supported by the test suite can be found in the [Test Suite Feature Coverage](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) page.

For each optional feature, assess whether or not your implementation will include this.

Configure the test suite accordingly, as detailed in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#implementedfeatures), for example:

{% code title="./packages/openactive-integration-tests/config/default.json \(extract\)" %}
```javascript
 "implementedFeatures": {
    "opportunity-feed": true,
    "dataset-site": true,
    "availability-check": true,
    ...
  }
```
{% endcode %}

{% hint style="warning" %}
Note that not all Open Booking API features are currently supported by the test suite. For a list of supported features, please see the [Test Suite Feature Coverage](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) page.
{% endhint %}

## Step 3: Configure Opportunity Types

Set up the Opportunity Types that your booking system will support, as detailed in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#bookableopportunitytypesinscope). The test suite will only attempt to book opportunity types that are configured here, for example:

{% code title="./packages/openactive-integration-tests/config/default.json \(extract\)" %}
```javascript
  "bookableOpportunityTypesInScope": {
    "ScheduledSession": true,
    "FacilityUseSlot": false,
    "IndividualFacilityUseSlot": false,
    "CourseInstance": false,
    "CourseInstanceSubEvent": false,
    "HeadlineEvent": false,
    "HeadlineEventSubEvent": false,
    "Event": false,
    "OnDemandEvent": false
  },
```
{% endcode %}

## Step 4: Choose Controlled vs Random testing mode

Choose which testing strategy to use. You can always start with one and switch to the other later.

### Random mode

{% code title="./packages/openactive-integration-tests/config/default.json \(extract\)" %}
```javascript
  "useRandomOpportunities": true
```
{% endcode %}

Selects random opportunities from the feeds that match the [prerequisite criteria for each test](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md), to book opportunities that already exist in the booking system

If using random mode, you must ensure that enough opportunities exist that cover the required criteria for all features that you are implementing. See [the features list](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) for a summary of how many opportunities are required for each criteria to test a specific feature. Please note that opportunities are not reused between tests within the same run of the test suite.

It is often straightforward to use Random mode for the more general features such as those in the `core` category. More specific features, that have more selective criteria for their opportunities, generally benefit from using Controlled mode.

### Controlled mode

{% code title="./packages/openactive-integration-tests/config/default.json \(extract\)" %}
```javascript
  "useRandomOpportunities": false
```
{% endcode %}

Automatically creates new opportunities in the booking system before each test run.

In order to enable controlled testing, you must implement the [OpenActive Test Interface](https://openactive.io/test-interface) within your booking system. This interface allows the test suite to create opportunities that conform to specific criteria.

Your implementation of the OpenActive Test Interface itself can be tested using the [test-interface](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/test-interface/README.md) feature.

The `testDatasetIdentifier` setting is used in all calls in the test interface. It allows any test data that was created with this identifier to be cleared before a new test run begins.

## Step 5: Configure Sellers and Booking Authentication

The test suite will making all bookings under a specific `primary` Seller provided in the configuration, using the authentication request headers provided for that Seller.

If your booking system only supports a single seller, only the “`primary`” seller is required. If your booking system supports multiple sellers, the “`secondary`” seller must also be set to support the “[multiple-sellers](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/multiple-sellers/README.md)” tests. 

See the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#sellers) for more information.

{% code title="./packages/openactive-integration-tests/config/default.json \(extract\)" %}
```javascript
  "sellers": {
    "primary": {
      "@type": "Organization",
      "@id": "https://bookingsystemreferenceimplementation.azurewebsites.net/api/identifiers/sellers/0",
      "requestHeaders": {
        "X-OpenActive-Test-Client-Id": "test",
        "X-OpenActive-Test-Seller-Id": "https://bookingsystemreferenceimplementation.azurewebsites.net/api/identifiers/sellers/0"
      }
    },
    "secondary": {
      "@type": "Person",
      "@id": "https://bookingsystemreferenceimplementation.azurewebsites.net/api/identifiers/sellers/1"
    }
  }
```
{% endcode %}

## Step 6: Configure Orders Feed Authentication

Configure the broker microservice with the authentication headers required for the Orders Feed.

Note such authentication [must not be specific to any particular seller](https://openactive.io/open-booking-api/EditorsDraft/#authentication).

{% code title="./packages/openactive-broker-microservice/config/default.json \(extract\)" %}
```javascript
  "ordersFeedRequestHeaders": {
    "X-OpenActive-Test-Client-Id": "test"
  }
```
{% endcode %}

## Step 7: Configure Dataset Site

The `datasetSiteUrl` must be set to the local dataset site URL of your booking system. If you have not yet implemented a dataset site, details for creating it can be found [here](../publishing-data/dataset-sites.md).

In addition to the standard dataset site, the JSON-LD of the page must include the `accessService` property, as specified in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-broker-microservice#datasetsiteurl). Note that the `endpointURL` within the `accessService` is most important, and must refer to your local Open Booking API [Base URI](https://openactive.io/open-booking-api/EditorsDraft/#dfn-base-uri).

{% code title="./packages/openactive-broker-microservice/config/default.json \(extract\)" %}
```javascript
  "datasetSiteUrl": "https://bookingsystemreferenceimplementation.azurewebsites.net/openactive",
```
{% endcode %}

## Step 8: Run the test suite

### Option 1: Single console window

With your booking system running, execute the following command in the root`openactive-test-suite` directory:

```bash
npm start
```

This will automatically start the microservice, run the integration tests, then kill the microservice. The output from the microservice and integration tests will be combined in the console.

Individual features or tests can be run in isolation using the following commands, for example:

```bash
npm start -- --runInBand test/features/core/test-interface/
```

```bash
npm start -- --runInBand test/features/core/test-interface/implemented/create-opportunity-test.js
```

### Option 2: Two separate console windows

#### Start the Microservice

With your booking system running, execute the following command in the `openactive-broker-microservice` directory:

```bash
npm start
```

This will start to harvest the feeds from your running application.

#### Run the Integration Tests

With both your booking system and `openactive-broker-microservice` running, execute the following command in the `openactive-integration-tests` directory, to execute all configured tests:

```bash
npm start
```

This will execute tests against your booking system, using the `openactive-broker-microservice` as an intermediary.

Individual features or tests can be run in isolation using the following commands, for example:

```bash
npm start -- --runInBand test/features/core/test-interface/
```

```bash
npm start -- --runInBand test/features/core/test-interface/implemented/create-opportunity-test.js 
```

## Reading the test results and debugging

The `openactive-integration-tests` writes log files into the `./output/` directory for each test in Markdown format, so you can see the endpoints that have been called, with both the requests sent and responses received.

To understand the requests and responses, please see the [explanation](https://www.openactive.io/open-booking-api/EditorsDraft/#high-level-api-flow) in the Open Booking API specification, along with the more detailed [sequence diagram](https://www.openactive.io/open-booking-api/EditorsDraft/#step-by-step-process-description) and example [requests and responses](https://www.openactive.io/open-booking-api/EditorsDraft/#paths-and-verbs).

If you don't have an IDE that supports Markdown natively, use a [Google Chrome extension](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#reading-test-results) to read the output Markdown files, as described [here](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#reading-test-results).

A reference version of passing test results is also available for comparison, complete with full model requests and responses for each test:

* [Output in 'Random' mode, when `"useRandomOpportunities": true`](https://openactive.io/openactive-test-suite/random/summary)
* [Output in 'Controlled' mode, when `"useRandomOpportunities": false`](https://openactive.io/openactive-test-suite/controlled/summary)

## Continuous Integration

For continuous integration environments run `npm start` in the root`openactive-test-suite` directory. This will automatically start the microservice, run the integration tests, then kill the microservice.

This always overrides the configuration option `"waitForHarvestCompletion": true` , to ensure the harvester is up-to-date with the feeds before the tests begin.

A [sample CI script](https://github.com/openactive/openactive-test-suite/blob/master/simple-ci.sh) is available, and more details can be found [here](https://github.com/openactive/openactive-test-suite#continuous-integration).

You can [see CI in action](https://github.com/openactive/openactive-test-suite/actions?query=workflow%3A%22Reference+Implementation%22) within the test suite itself, which [runs CI](https://github.com/openactive/openactive-test-suite/blob/master/.github/workflows/reference-implementation.yml) against the reference implementation.

