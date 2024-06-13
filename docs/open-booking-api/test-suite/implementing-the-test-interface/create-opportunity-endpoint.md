# Create Opportunity Endpoint

The Create Opportunity endpoint (**`POST /test-interface/datasets/:testDatasetIdentifier/opportunities`**) is part of the Test Interface (see the full detail in its [specification](https://openactive.io/test-interface/#post-test-interfacedatasetstestdatasetidentifieropportunities)). It is called by [Test Suite](https://developer.openactive.io/open-booking-api/test-suite) to create test [opportunities](https://openactive.io/test-interface/#post-test-interfacedatasetstestdatasetidentifieropportunities) in your booking system.

This doc contains some guidance for how and what to implement for this endpoint.

The payload for this endpoint includes a field, `test:testOpportunityCriteria`, which defines what type of Opportunity should be created. For example, if this is set to `https://openactive.io/test-interface#TestOpportunityBookableFree`, then the created opportunity must be both [bookable](https://openactive.io/open-booking-api/EditorsDraft/#definition-of-a-bookable-opportunity-and-offer-pair) and cost no money to book.

The full list of Opportunity Criteria, and what is expected for each, can be found in the [**Enumeration Values** table in the Test Interface doc](https://openactive.io/test-interface/#enumeration-values) — it's every row with **Type** = `test:TestOpportunityCriteriaEnumeration`.

Your booking system only needs to implement, for this endpoint, those criteria which relate to [features](https://developer.openactive.io/open-booking-api/key-decisions#which-features) that it implements. For example, if your booking system doesn't support free bookings, it does not need to support any of the free opportunity criteria.

## Which Criteria to implement?

Use [Test Data Generator](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests/test-data-generator) to find out which criteria your booking system needs to implement. Follow these steps:

1. In your Test Suite instance, [which you configured in the previous step](https://developer.openactive.io/open-booking-api/test-suite/configuring-test-suite), run:

```sh
# Use your config/dev.json config file
export NODE_ENV=dev
# Run Test Data Generator
npm run test-data-generator
```

2. The logs from this script will point to two files that it generated, called:
   * `opportunity-test-data.json`
   * `test-interface-actions.json`
3. The `opportunity-test-data.json` file will contain a list of Opportunity Criteria that you need to implement for the features that your booking system supports. To see an example of what this looks like, see the [Test Data Generator README](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests/test-data-generator).

## Create Opportunity Endpoint Implementation Guidelines

### 1. Switch Statement

Use something like a `switch` statement for this endpoint.

For example, if your booking system only needs to support the `https://openactive.io/test-interface#TestOpportunityBookable` and `https://openactive.io/test-interface#TestOpportunityBookableCancellable` criteria — and only supports [ScheduledSessions and IndividualFacilityUseSlots](https://developer.openactive.io/open-booking-api/test-suite/configuring-test-suite#step-5-configure-opportunity-types), your route would look like (using Node.js with Express as an example):

```javascript
app.post('/test-interface/datasets/:testDatasetIdentifier/opportunities', (req, res) => {
  const opportunityType = req.body['@type'];
  const criteria = req.body['test:testOpportunityCriteria'];
  switch (opportunityType) {
    case 'ScheduledSession':
      switch (criteria) {
        case 'https://openactive.io/test-interface#TestOpportunityBookable':
          createTestOpportunityBookableScheduledSession(req, res);
          break;
        case 'https://openactive.io/test-interface#TestOpportunityBookableCancellable':
          createTestOpportunityBookableCancellableScheduledSession(req, res);
          break;
        default:
          res.sendStatus(404);
          break;
      }
      break;
    case 'Slot': {
      const facilityUseType = req.body.facilityUse['@type'];
      switch (facilityUseType) {
        case 'IndividualFacilityUse':
          switch (criteria) {
            case 'https://openactive.io/test-interface#TestOpportunityBookable':
              createTestOpportunityBookableIfuSlot(req, res);
              break;
            case 'https://openactive.io/test-interface#TestOpportunityBookableCancellable':
              createTestOpportunityBookableCancellableIfuSlot(req, res);
              break;
            default:
              res.sendStatus(404);
              break;
          }
          break;
        default:
          res.sendStatus(404);
          break;
      }
    }
    default:
      res.sendStatus(404);
      break;
  }
});
```

There is an example of this in the code base for [**BookingSystem.AspNetCore**](https://github.com/openactive/OpenActive.Server.NET/tree/master/Examples/BookingSystem.AspNetCore), which is an example implementation of a booking system in .NET. That example is [here](https://github.com/openactive/OpenActive.Server.NET/blob/master/Examples/BookingSystem.AspNetCore/Stores/SessionStore.cs#L47).
