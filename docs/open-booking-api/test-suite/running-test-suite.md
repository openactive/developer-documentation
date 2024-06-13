---
description: How to run your now configured Test Suite to check your booking system.
---

# Running Test Suite

### Option 1: Single console window

With your booking system running, execute the following command in the root`openactive-test-suite` directory:

```bash
npm start
```

This will automatically start the microservice, run the integration tests, then kill the microservice. The output from the microservice and integration tests will be combined in the console.

This mode also offers the ability to rerun the tests interactively, for specific flows, which can be useful for debugging. When running in this mode, press "esc" at any time to cancel the currently running test and return to the interactive prompt.

Individual features or tests can be run in isolation using the following commands, for example:

```bash
npm start -- --runInBand test/features/core/test-interface/
```

```bash
npm start -- test/features/core/test-interface/implemented/create-opportunity-test.js
```

The following shorthand may also be used, as these strings are unique within the path:

```bash
npm start test-interface
```

```bash
npm start create-opportunity-test
```

{% hint style="info" %}
`--runInBand` limits the test suite to running all tests in series. This ensures that each test is executed one at a time, which slows down the test suite, and can be helpful when debugging issues relating to faulty transactions.
{% endhint %}

### Option 2: Two separate console windows

#### Start the Microservice

With your booking system running, execute the following command:

```bash
npm run start-broker
```

This will start to harvest the feeds from your running application.

#### Run the Integration Tests

With both your booking system and `openactive-broker-microservice` running, execute the following command, to execute all configured tests:

```bash
npm run start-tests
```

This will execute tests against your booking system, using the `openactive-broker-microservice` as an intermediary.

Individual features or tests can be run in isolation using the following commands, for example:

```bash
npm run start-tests -- --runInBand test/features/core/test-interface/
```

```bash
npm run start-tests -- --runInBand test/features/core/test-interface/implemented/create-opportunity-test.js 
```

## Reading the test results and debugging

The `openactive-integration-tests` writes log files into the `./output/` directory for each test in Markdown format, so you can see the endpoints that have been called, with both the requests sent and responses received.

To understand the requests and responses, please see the [explanation](https://www.openactive.io/open-booking-api/EditorsDraft/#high-level-api-flow) in the Open Booking API specification, along with the more detailed [sequence diagram](https://www.openactive.io/open-booking-api/EditorsDraft/#step-by-step-process-description) and example [requests and responses](https://www.openactive.io/open-booking-api/EditorsDraft/#paths-and-verbs).

If you don't have an IDE that supports Markdown natively, use a Google Chrome extension to read the output Markdown files, as described [here](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#reading-test-results).

A reference version of passing test results is also available for comparison, complete with full model requests and responses for each test:

* [Output in 'Random' mode, when `"useRandomOpportunities": true`](https://openactive.io/openactive-test-suite/random/summary)
* [Output in 'Controlled' mode, when `"useRandomOpportunities": false`](https://openactive.io/openactive-test-suite/controlled/summary)

## Continuous Integration

For continuous integration environments, `"ci": true` must be included in the supplied config JSON to ensure correct console logging output. Then simply run `npm start` in the root`openactive-test-suite` directory. This will automatically start the microservice, run the integration tests, then kill the microservice.

This always overrides the configuration option `"waitForHarvestCompletion": true` , to ensure the harvester is up-to-date with the feeds before the tests begin.

A [sample CI script](https://github.com/openactive/openactive-test-suite/blob/master/simple-ci.sh) is available, and more details can be found [here](https://github.com/openactive/openactive-test-suite#continuous-integration).

You can see CI in action within the test suite itself, which [runs CI](https://github.com/openactive/OpenActive.Server.NET/blob/8f9e5a8e7714f97a98ca650dda198ac183ca02ab/.github/workflows/openactive-test-suite.yml#L58-L80) against the reference implementation.

The conformance certificate generated from test suite running in CI should be deployed to the relevant location (e.g. [via GitHub CI](https://github.com/openactive/OpenActive.Server.NET/blob/b66ba4172f4d839866729808ada30d8b9bafce54/.github/workflows/openactive-test-suite.yml#L105-L112)) and referenced from the production Dataset Site. See [here](../../publishing-data/dataset-sites.md#test-suite-certificate) for more information.
