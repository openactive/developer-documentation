# Implementing the Test Interface

Some subset of the [Test Interface](https://openactive.io/test-interface/) needs to be implemented in order to finally [test your booking system](../running-test-suite.md).

Which parts ot the Test Interface need to be implemented depends on [your choice of Controlled mode or Random mode](../../key-decisions.md#controlled-mode-or-random-mode).

### Controlled Mode

{% hint style="info" %}
In order to use Controlled mode, more of the Test Interface needs to be implemented. But the trade off is that testing is much easier and more reliable. **This is the recommended choice**.
{% endhint %}

When using Controlled mode, the following parts of Test Interface need to be implemented in your booking system:

* **Datasets Endpoints** ([spec](https://openactive.io/test-interface/#datasets-endpoints) — see for more details):
  * These endpoints are called by [Test Suite](../) to create test opportunity data in your booking system, and – later – to clean up that test opportunity data.
  * See the
* **Actions Endpoints** ([spec](https://openactive.io/test-interface/#actions-endpoint)):
  * This endpoint is called by [Test Suite](../) to simulate different kinds of booking actions, like an update to a booking's access pass.
  * See the [**Actions** page for details on what to implement](test-interface-actions.md).

### Random Mode

{% hint style="info" %}
In order to use Random mode, less of the Test Interface needs to be implemented. But the trade off is that it is more difficult to do reliable and consistent testing. Therefore, **the recommended choice is to use** [**Controlled mode**](./#controlled-mode).
{% endhint %}

When using Random mode, the following parts of Test Interface need to be implemented in your booking system:

* **Actions Endpoints** ([spec](https://openactive.io/test-interface/#actions-endpoint)):
  * This endpoint is called by [Test Suite](../) to simulate different kinds of booking actions, like an update to a booking's access pass.
  * See the [**Actions** page for details on what to implement](test-interface-actions.md).
