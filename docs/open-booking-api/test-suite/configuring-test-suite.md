# Configuring Test Suite

## Step 1: Install the test suite

Clone the test suite repository locally, and install its dependencies.

[Node.js](https://nodejs.org/en/download/) version **14** or above is required ([which version am I using?](https://support.invisionapp.com/hc/en-us/articles/360033641372-How-do-I-check-my-version-of-Node-js-)).

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

Adding other `./config/{NODE_ENV}.json` files allows you to override the default configuration. For more information see this [documentation](https://github.com/lorenwest/node-config/wiki/Environment-Variables#node\_env).

## Step 3: Configure flows

The Open Booking API includes two flows:

* [Simple Booking Flow](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3/#simple-booking-flow)
* [Booking Flow with Approval](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3/#booking-flow-with-approval)

Assess whether or not your implementation will include either or both of these flows, and configure the test suite accordingly, as detailed in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#bookingflowsinscope), for example:

{% code title="./config/dev.json (extract)" %}
```javascript
"integrationTests": {  
  ...
  "bookingFlowsInScope": {
    "OpenBookingSimpleFlow": true,
    "OpenBookingApprovalFlow": true
  },
  ...
}
```
{% endcode %}

## Step 4: Configure features

Before you start your implementation, it is good to configure your config file to match your aspirations. You can then use different test suite commands to run only a subset of the tests during development, and then run `npm start` to run all tests.

Ensure that your configuration of `implementedFeatures` matches the list of features that you have decided upon in [#which-features](../key-decisions.md#which-features "mention"). This configuration property is documented in the  [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#implementedfeatures).

The list of Open Booking API features supported by the test suite can be found in the [Test Suite Feature Coverage](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/README.md) page.

{% code title="./config/dev.json (extract)" %}
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

## Step 5: Configure Opportunity Types

Set up the Opportunity Types that your booking system will support, as detailed in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#bookableopportunitytypesinscope). The test suite will only attempt to book opportunity types that are configured here, for example:

{% code title="./config/dev.json (extract)" %}
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

## Step 6: Configure Controlled vs Random testing mode

Configure Test Suite to use the testing mode that you have chosen from [#controlled-mode-or-random-mode](../key-decisions.md#controlled-mode-or-random-mode "mention"). You can always start with one and switch to the other later.

### Random mode

{% code title="./config/dev.json (extract)" %}
```javascript
"integrationTests": {  
  ...
  "useRandomOpportunities": true
  ...
}
```
{% endcode %}

For more details, see [#random-mode](../key-decisions.md#random-mode "mention") (Key Decisions).

### Controlled mode

{% code title="./config/dev.json (extract)" %}
```javascript
"integrationTests": {  
  ...
  "useRandomOpportunities": false
  ...
}
```
{% endcode %}

For more details, see [#controlled-mode](../key-decisions.md#controlled-mode "mention") (Key Decisions).

## Step 7: Configure Sellers and Booking Authentication

The test suite will making all bookings under a specific `primary` Seller provided in the configuration, using the authentication request headers provided for that Seller.

If your booking system only supports a single seller, only the “`primary`” seller is required. If your booking system supports multiple sellers, the “`secondary`” seller must also be set to support the “[multiple-sellers](https://github.com/openactive/openactive-test-suite/blob/master/packages/openactive-integration-tests/test/features/core/multiple-sellers/README.md)” tests.&#x20;

Your configuration should match your decision in [#authentication-model](../key-decisions.md#authentication-model "mention") (Key Decisions).

See the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests#sellers) for more information.

{% code title="./config/dev.json (extract)" %}
```javascript
"sellers": {
  "primary": {
    "@type": "Organization",
    "@id": "https://localhost:5001/api/identifiers/sellers/1",
    "authentication": {
      "loginCredentials": null,
      "requestHeaders": {
        "X-OpenActive-Test-Client-Id": "test",
        "X-OpenActive-Test-Seller-Id": "https://localhost:5001/api/identifiers/sellers/1"
      }
    }
  },
  "secondary": {
    "@type": "Organization",
    "@id": "https://localhost:5001/api/identifiers/sellers/2",
    "authentication": {
      "loginCredentials": null,
      "requestHeaders": {
        "X-OpenActive-Test-Client-Id": "test",
        "X-OpenActive-Test-Seller-Id": "https://localhost:5001/api/identifiers/sellers/2"
      }
    }
  }
}
```
{% endcode %}

## Step 8: Configure Orders Feed Authentication

Configure the broker microservice with the authentication headers required for the Orders Feed.

Your configuration should match your decision in [#authentication-model](../key-decisions.md#authentication-model "mention") (Key Decisions).

Note such authentication [must not be specific to any particular seller](https://openactive.io/open-booking-api/EditorsDraft/#authentication).

{% code title="./config/dev.json (extract)" %}
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
    },
    "secondary": null
  }
  ...
}
```
{% endcode %}

## Step 9: Configure Dataset Site

The `datasetSiteUrl` must be set to the local dataset site URL of your booking system. If you have not yet implemented a dataset site, details for creating it can be found [here](../../publishing-data/dataset-sites.md).

In addition to the standard dataset site, the JSON-LD of the page must include the `accessService` property, as specified in the [reference documentation](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-broker-microservice#datasetsiteurl). Note that the `endpointURL` within the `accessService` is most important, and must refer to your local Open Booking API [Base URI](https://openactive.io/open-booking-api/EditorsDraft/#dfn-base-uri).

{% code title="./config/dev.json (extract)" %}
```javascript
"broker": {
  ...
  "datasetSiteUrl": "https://reference-implementation.openactive.io/openactive"
  ...
}
```
{% endcode %}
