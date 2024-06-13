# Testing booking

Testing your booking system is essential and leads to two important outcomes:

1. It checks that your system meets OpenActive standards, works smoothly, and avoids common issues.
2. It gives you a certificate showing you meet these standards, which will encourage others to integrate with your system, leading to more bookings.

## Prerequisites for testing

In order to run tests, you must first have implemented:

* Booking ([implementing-booking.md](../implementing-booking.md "mention")).
* Some or all of the [OpenActive Test Interface](https://openactive.io/test-interface/).
  * The [Datasets Endpoints](https://openactive.io/test-interface/#datasets-endpoints) are needed if using [#controlled-mode](../key-decisions.md#controlled-mode "mention").
  * The [Actions Endpoint](https://openactive.io/test-interface/#actions-endpoint) are needed if any of the actions are required to test features that you have implemented.

## Test Suite Overview

The [OpenActive Test Suite](https://github.com/openactive/openactive-test-suite/) consists of two key components:

* [**openactive-broker-microservice**](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-broker-microservice) - harvests feeds and provides an interface to extract specific items from the feeds.
* [**openactive-integration-tests**](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests) - a suite of Jest integration tests that exercise an Open Booking API implementation.

## What to do

Work through each of the steps in this guide, by following the "Next" button below.
