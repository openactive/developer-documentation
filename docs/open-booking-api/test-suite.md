---
description: A guide for setting up the OpenActive Test Suite for the Open Booking API.
---

# Testing booking

## Overview

The [OpenActive Test Suite](https://github.com/openactive/openactive-test-suite/) consists of two key components:

* \*\*\*\*[**openactive-broker-microservice**](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-broker-microservice) - harvests feeds and provides an interface to extract specific items from the feeds.
* \*\*\*\*[**openactive-integration-tests**](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests) - a suite of Jest integration tests that exercise an Open Booking API implementation.

## Step 1: Install the test suite

Clone the test suite repository locally, and install its dependencies.

[Node.js](https://nodejs.org/en/download/) version 14 or above is required.

```bash
git clone git@github.com:openactive/openactive-test-suite.git
cd openactive-test-suite
npm install
```

You can check that the test suite works in your local environment by running it against the hosted [OpenActive Reference Implementation](https://reference-implementation.openactive.io/), simply by using the default configuration:

```bash
npm start -- core
```

Note that the above command only runs the "core" tests within the test suite, which should take around 60 seconds to complete.

{% hint style="info" %}
The hosted [OpenActive Reference Implementation](https://reference-implementation.openactive.io/) is running on a basic developer tier Azure instance with a burst quota, so if the application shuts down, simply wait 5 minutes and try again.

The quota is sufficient for the most common use cases: running a small subset of tests or individual tests against the reference implementation.

This quota is insufficient for running all tests in the test suite at once. If you are interested in viewing the results of all tests passing against the reference implementation, the results are published for both [random](https://openactive.io/openactive-test-suite/example-output/random/summary) and [controlled](https://openactive.io/openactive-test-suite/example-output/controlled/summary) mode.
{% endhint %}

## Step 2: Create a local configuration file

Copy the file `./config/default.json` to `./config/dev.json` and configure it to point to the local development environment of your own booking system using the steps on the rest of this page.

Set the environment variable `NODE_ENV` to `dev` to instruct the test suite to use `dev.json` file to override each of the values in `default.json`:

{% tabs %}
{% tab title="Bash" %}
```bash
export NODE_ENV=dev
npm start -- core
```
{% endtab %}

{% tab title="Windows Command Line" %}
```
set NODE_ENV=dev
npm start -- core
```
{% endtab %}
{% endtabs %}

Adding other `./config/{NODE_ENV}.json` files allows you to override the default configuration. For more information see this [documentation](https://github.com/lorenwest/node-config/wiki/Environment-Variables#node_env).

## Step 3: Configure features

The list of Open Booking API features supported by the test suite can be found in the [Test Suite Feature Coverage](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) page.

For each optional feature, assess whether or not your implementation will include this.

Configure the test suite accordingly, as detailed in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#implementedfeatures), for example:

{% code title="./config/dev.json \(extract\)" %}
```javascript
"integrationTests": {  
  ...
  "implementedFeatures": {
    "opportunity-feed": true,
    "dataset-site": true,
    "availability-check": true,
    ...
  }
  ...
}
```
{% endcode %}

{% hint style="warning" %}
Note that not all Open Booking API features are currently supported by the test suite. For a list of supported features, please see the [Test Suite Feature Coverage](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) page.
{% endhint %}

## Step 4: Configure Opportunity Types

Set up the Opportunity Types that your booking system will support, as detailed in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#bookableopportunitytypesinscope). The test suite will only attempt to book opportunity types that are configured here, for example:

{% code title="./config/dev.json \(extract\)" %}
```javascript
"integrationTests": {  
  ...
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
  ...
}
```
{% endcode %}

## Step 5: Choose Controlled vs Random testing mode

Choose which testing strategy to use. You can always start with one and switch to the other later.

{% hint style="warning" %}
When using OpenActive Test Suite during development, it is far more efficient to run test suite with a small number of items in your opportunity feeds and using "[controlled mode](test-suite.md#controlled-mode)". Although implementing the [OpenActive Test Interface](https://openactive.io/test-interface) to support controlled mode might seem like extra work, it will result in a much more efficient development, testing and debugging cycle, that will allow your implementation of the Open Booking API to be built much more quickly overall.
{% endhint %}

### Random mode

{% code title="./config/dev.json \(extract\)" %}
```javascript
"integrationTests": {  
  ...
  "useRandomOpportunities": true
  ...
}
```
{% endcode %}

Selects random opportunities from the feeds that match the [prerequisite criteria for each test](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md), to book opportunities that already exist in the booking system

If using random mode, you must ensure that enough opportunities exist that cover the required criteria for all features that you are implementing. See [the features list](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) for a summary of how many opportunities are required for each criteria to test a specific feature. Please note that opportunities are not reused between tests within the same run of the test suite.

As you implement the Open Booking API features, more test data will need to be added, and the OpenActive Test Suite will need to download all of this data each time it is started, before it is able to run tests. For this reason, controlled mode offers a much more efficient developer experience: it auto-populates test data, and only creates the test data that is required for a particular test run when it is needed.

### Controlled mode

{% code title="./config/dev.json \(extract\)" %}
```javascript
"integrationTests": {  
  ...
  "useRandomOpportunities": false
  ...
}
```
{% endcode %}

Automatically creates new opportunities in the booking system before each test run.

In order to enable controlled testing, you must implement the [OpenActive Test Interface](https://openactive.io/test-interface) within your booking system. This interface allows the test suite to create opportunities that conform to specific criteria.

Your implementation of the OpenActive Test Interface itself can be tested using the [test-interface](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/test-interface/README.md) feature.

The `testDatasetIdentifier` setting is used in all calls in the test interface. It allows any test data that was created with this identifier to be cleared before a new test run begins.

## Step 6: Configure Sellers and Booking Authentication

The test suite will making all bookings under a specific `primary` Seller provided in the configuration, using the authentication request headers provided for that Seller.

If your booking system only supports a single seller, only the “`primary`” seller is required. If your booking system supports multiple sellers, the “`secondary`” seller must also be set to support the “[multiple-sellers](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/multiple-sellers/README.md)” tests. 

See the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#sellers) for more information.

{% code title="./config/dev.json \(extract\)" %}
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

## Step 7: Configure Orders Feed Authentication

Configure the broker microservice with the authentication headers required for the Orders Feed.

Note such authentication [must not be specific to any particular seller](https://openactive.io/open-booking-api/EditorsDraft/#authentication).

{% code title="./config/dev.json \(extract\)" %}
```javascript
"broker": {
  ...
  "bookingPartners": {
    "primary": {
      "authentication": {
        "initialAccessToken": null,
        "ordersFeedRequestHeaders": {
          "X-OpenActive-Test-Client-Id": "test"
        }
      }
    }
  }
  ...
}
```
{% endcode %}

## Step 8: Configure Dataset Site

The `datasetSiteUrl` must be set to the local dataset site URL of your booking system. If you have not yet implemented a dataset site, details for creating it can be found [here](../publishing-data/dataset-sites.md).

In addition to the standard dataset site, the JSON-LD of the page must include the `accessService` property, as specified in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-broker-microservice#datasetsiteurl). Note that the `endpointURL` within the `accessService` is most important, and must refer to your local Open Booking API [Base URI](https://openactive.io/open-booking-api/EditorsDraft/#dfn-base-uri).

{% code title="./config/dev.json \(extract\)" %}
```javascript
"broker": {
  ...
  "datasetSiteUrl": "https://reference-implementation.openactive.io/openactive"
  ...
}
```
{% endcode %}

## Step 9: Run the test suite

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

