# Random Mode: Generating Test Opportunity Data

{% hint style="info" %}
This page is only for those who are using [Random Mode](../key-decisions.md#greater-than-random-mode) to test their booking systems. If instead using [Controlled Mode](../key-decisions.md#greater-than-controlled-mode), you don't need to worry about manually generating data, as Test Suite will automatically do this by calling your booking system's [Create Opportunity Endpoint](implementing-the-test-interface/create-opportunity-endpoint.md).
{% endhint %}

In [Random Mode](../key-decisions.md#greater-than-random-mode), Test Suite requires test opportunity data to already exist, which it will use to run tests.

Running Test Suite will cause test opportunities to be booked, and therefore to eventually not be available to subsequent Test Suite runs. And so, this test opportunity data will, at least sometimes, need to be re-generated between Test Suite runs.

You may already have some process for generating random test opportunity data in your booking system (for example, copying data from a live environment snapshot, with personally identifiable information removed) and this may suffice for simple cases.\
However, the recommended approach is to create a script that populates your dataset with the exact required test opportunity data based on your [implemented features](../key-decisions.md#which-features). This ensures that you never waste debugging time on test runs that fail due to insufficient data. And it means that your testing solution will be sufficiently stable to run automatically in CI.

## Test Data Generator

Use [Test Data Generator](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests/test-data-generator) to find out exactly how much test opportunity data needs to be in your booking system in order to run a given set of tests. The README in that project details how you can use this script to generate a `test-opportunity-data.json` file.

You can then create a custom script to populate your dataset using, as input, the `test-opportunity-data.json` file.

### Example

This example should give you an idea as to how to write a custom script to populate your dataset. In this example, one of the `.itemListElement` items in your `test-opportunity-data.json` file looks like this:

```json
{
  "@type": "ListItem",
  "item": {
    "@type": "Slot",
    "facilityUse": {
      "@type": "IndividualFacilityUse",
      "provider": {
        "@type": "Organization",
        "@id": "https://id.booking-system.example.com/organizer/3"
      }
    },
    "test:testOpportunityCriteria": "https://openactive.io/test-interface#TestOpportunityBookable",
    "test:testOpenBookingFlow": "https://openactive.io/test-interface#OpenBookingSimpleFlow",
  },
  "test:numberOfInstancesInDistribution": 32
}
```

When your script comes to process this item, it should consider the following:

* **What type of opportunity to generate**: for this item, [Slot](../../data-model/types/slot.md)s that belong to [IndividualFacilityUse](../../data-model/types/individualfacilityuse.md)s should be generated (note that the IndividualFacilityUses — and the [FacilityUse](../../data-model/types/facilityuse.md)s that they belong to — can either be generated new or can already exist if they satisfy the other constraints).
* **Seller**: Which [seller](https://openactive.io/open-booking-api/EditorsDraft/#dfn-seller) should the generated opportunities be created within. This will either be specified in `.item.facilityUse.provider` (for a Slot) or `.item.superEvent.organizer` (for a [ScheduledSession](../../data-model/types/scheduledsession.md)). For this item, the Slots (and their parent IndividualFacilityUses and FacilityUses) should be created within the Seller with ID `https://id.booking-system.example.com/organizer/3`.
  * Test Data Generator will only use [Sellers that you have already described in your Test Suite configuration](configuring-test-suite.md#step-7-configure-sellers-and-booking-authentication).
* **Booking Flow**: Which [booking flow](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3/#booking-flows) the generated opportunities should support. Find this in `item['test:testOpenBookingFlow']`. For this item, the value is `https://openactive.io/test-interface#OpenBookingSimpleFlow`, which means that the generated opportunities need to support the [Simple Booking Flow](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3/#simple-booking-flow).
* **Opportunity Criteria**: The criteria constrains the properties of the generated opportunities. Find this in `item['test:testOpportunityCriteria']`. For this item, the value is `https://openactive.io/test-interface#TestOpportunityBookable`, whose description can be found in the Test Interface docs [here](https://openactive.io/test-interface/#TestOpportunityBookable).
* **How many to generate**: Find this in `.['test:numberOfInstancesInDistribution']`. For this item, the value is 32, so the script should generate (at least) 32 opportunities that fit these constraints.

{% hint style="info" %}
It is strongly recommended to incorporate an element of diversity into your test opportunity data, to provide a greater testing surface area. For example, this could be done by using random data for some of your fields and randomly deciding whether to include certain fields e.g. image if images are optional in your dataset.
{% endhint %}
