---
description: >-
  Key questions to decide upon and keep in mind when implementing booking and
  when testing booking
---

# Key Decisions

Your decisions on these questions do not have to be set in stone throughout the whole development process, but try to come back to this document if making a change.

Having a clear decision on each of these questions should make it easier to estimate your implementation and pre-empt any expected work.

The questions:

## Seller Tenancy?

Is your booking data split into multiple [Sellers](https://openactive.io/open-booking-api/EditorsDraft/#dfn-seller) or just one?

### -> Single Seller System

A Leisure Centre may be an example of a Single Seller System if all activities are managed by the same organisation – the Leisure Centre.

### -> Multiple Seller System

A platform that different self-employed yoga instructors use to manage their activities may be an example of a Multiple Seller System, where each Yoga instructor is an individual Seller.

## Authentication Model?

What authentication model do your [Booking Partners](https://openactive.io/open-booking-api/EditorsDraft/#dfn-booking-partner) (such as [Test Suite](test-suite/)) use to access your implementation?

### -> [OIDC Booking Partner Authentication for Multiple Seller Systems](https://openactive.io/open-booking-api/EditorsDraft/#openid-connect-booking-partner-authentication-for-multiple-seller-systems)

Use OpenID Connect for authentication. This is geared towards [#multiple-seller-system](key-decisions.md#multiple-seller-system "mention")s where individual Sellers need to securely manage access to their data by individual Booking Partners. Therefore, with this option of Authentication Model, Seller A could give access to Booking Partner X but not Booking Partner Y.

### -> Dynamic Client Registration

Builds on top of option [#oidc-booking-partner-authentication-for-multiple-seller-systems](key-decisions.md#oidc-booking-partner-authentication-for-multiple-seller-systems "mention") by adding [OpenID Connect Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1\_0.html), which enables Booking Partners to register themselves with your implementation.

### -> Other

Any other authentication strategies can be used to manage access. These may be appropriate for [#single-seller-system](key-decisions.md#single-seller-system "mention")s or [#multiple-seller-system](key-decisions.md#multiple-seller-system "mention")s with simple access requirements.

In order to test your implementation, you need to use authentication strategies which are supported by Test Suite. Either use one of the strategies already supported by Test Suite or we would very much welcome your contribution to Test Suite to add support. Authentication Strategies currently supported by Test Suite can be found in [**Booking Partner Authentication Strategy**](https://github.com/openactive/openactive-test-suite/blob/master/README.md#booking-partner-authentication-strategy) (in Test Suite's documentation).

## Controlled Mode or Random Mode?

When [test-suite](test-suite/ "mention"), will you run these tests in Controlled mode or Random mode?

The recommended choice is to use **Controlled mode** as it is leads to a more sustainable development cycle and saves time in the long run.

{% hint style="warning" %}
When using OpenActive Test Suite during development, it is far more efficient to run test suite with a small number of items in your opportunity feeds and using "[controlled mode](test-suite/#controlled-mode)". Although implementing the [OpenActive Test Interface](https://openactive.io/test-interface) to support controlled mode might seem like extra work, it will result in a much more efficient development, testing and debugging cycle, that will allow your implementation of the Open Booking API to be built much more quickly overall.
{% endhint %}

### -> Controlled mode

In controlled mode, Test Suite automatically creates new opportunities in the booking system before each test run.

{% hint style="info" %}
**Requirement**

Implement the [Datasets Endpoints](https://openactive.io/test-interface/#datasets-endpoints) (from [OpenActive Test Interface](https://openactive.io/test-interface)) within your booking system. This interface allows the test suite to create opportunities that conform to specific criteria.

More info on this in [**Implementing the Test Interface**](test-suite/implementing-the-test-interface/#controlled-mode).
{% endhint %}

The `testDatasetIdentifier` setting is used in all calls in the test interface. It allows any test data that was created with this identifier to be cleared before a new test run begins.

### -> Random mode

In random mode, Test Suite selects random opportunities from the feeds that match the [prerequisite criteria for each test](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md), to book opportunities that already exist in the booking system.

{% hint style="info" %}
**Requirement**

Have some way of ensuring that enough opportunities exist that cover the required criteria for all features that you are implementing. See [the features list](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) for a summary of how many opportunities are required for each criteria to test a specific feature. Please note that opportunities are not reused between tests within the same run of the test suite.
{% endhint %}

As you implement the Open Booking API features, more test data will need to be added, and the OpenActive Test Suite will need to download all of this data each time it is started, before it is able to run tests. For this reason, controlled mode offers a much more efficient developer experience: it auto-populates test data, and only creates the test data that is required for a particular test run when it is needed.

Using random mode, it is also harder to set up an automatic CI process in which Test Suite is run against your booking system after any changes. This automatic CI process is highly recommended as it verifies that your changed booking system still works and can generate new [conformance certificates](https://github.com/openactive/openactive-test-suite#certification). It's harder to set up in random mode as it would require that your CI environment is replenished with enough opportunity data before each test run.

## Which Features?

Which features will your Booking System implement. A Booking System does not need to implement the entirety of the [Open Booking API specification](https://openactive.io/open-booking-api/EditorsDraft/) – they usually implement a subset. All of the possible functionality is split out into distinct "features" which are categorised and documented in [Open Booking API Test Suite Feature Coverage](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) (in Test Suite's documentation).

Decide on a set of these features to implement.

* All features marked "Required" must be implemented.
* For [#multiple-seller-system](key-decisions.md#multiple-seller-system "mention")s, the [`mutiple-sellers`](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/multiple-sellers/README.md) feature is required.
* If implementing the [#oidc-booking-partner-authentication-for-multiple-seller-systems](key-decisions.md#oidc-booking-partner-authentication-for-multiple-seller-systems "mention")  Authentication Model, the [`booking-partner-authentication`](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/authentication/booking-partner-authentication/README.md) feature is required.
* If implementing the [#dynamic-client-registration](key-decisions.md#dynamic-client-registration "mention") Authentication Model, the [`booking-partner-authentication`](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/authentication/booking-partner-authentication/README.md) and [`dynamic-client-registration`](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/authentication/dynamic-client-registration/README.md) features are required.
* If running Test Suite in [#controlled-mode](key-decisions.md#controlled-mode "mention"), the [`test-interface`](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/test-interface/README.md) feature is required.
* For all other features, look at the documentation for each feature to decide whether it is required for your implementation.
