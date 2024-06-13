# Test Interface Actions

The [Test Interface Actions endpoint](https://openactive.io/test-interface/#actions-endpoint) is called by [Test Suite](../) to simulate different actions in your booking system e.g. "Seller-requested cancellation".

Your booking system only need to implement those actions which relate to [features](../../key-decisions.md#which-features) that it implements.

Descriptions for each action can be found in the [Test Interface doc](https://openactive.io/test-interface/#AccessChannelUpdateSimulateAction).

## Which Actions to implement?

Use [Test Data Generator](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests/test-data-generator) to find out which Test Interface actions your booking system needs to implement. Follow these steps:

1. In your Test Suite instance, [which you configured in the previous step](../configuring-test-suite.md), run:

```sh
# Use your config/dev.json config file
export NODE_ENV=dev
# Run Test Data Generator
npm run test-data-generator
```

2. The logs from this script will point to two files that it generated, called:
   * `opportunity-test-data.json`
   * `test-interface-actions.json`
3. The `test-interface-actions.json` file will contain a list of Test Interface actions that you need to implement for the features that your booking system supports. To see an example of what this looks like, see the [Test Data Generator README](https://github.com/openactive/openactive-test-suite/tree/master/packages/openactive-integration-tests/test-data-generator).

## Test Interface Action Implementation Guidelines

### 1. Switch Statement

Use something like a `switch` statement for your actions endpoint.\
\
For example, if your booking system only needs to support the `test:SellerRequestedCancellationSimulateAction` and `test:CustomerNoticeSimulateAction` actions, your route would look like (using Node.js with Express as an example):

```javascript
app.post('/test-interface/actions', (req, res) => {
  const actionType = req.body['@type'];
  switch (actionType) {
    case 'test:SellerRequestedCancellationSimulateAction':
      simulateSellerRequestedCancellation(req, res);
      break;
    case 'test:CustomerNoticeSimulateAction':
      simulateCustomerNotice(req, res);
      break;
    default:
      res.sendStatus(404);
      break;
    }
});
```

### 2. Test Interface Actions must use same code pathways as real-life counterparts

As an example, when implementing the `test:SellerRequestedCancellationSimulateAction` Test Interface action, the test logic should use, as much as possible, the same code pathways as are called when an administrator cancels an activity in the real system. The goal is to replicate real-world processes accurately, rather than simply employing quick fixes to meet Test Suite expectations.

Here is a very simplified example of the correct way to do this (using Node.js with Express):

```javascript
app.get('/internal-admin-api/dashboard', (req, res) => {
  res.send(`<form action="cancel-order" method="POST">
    <label for="orderId">Cancel Order with ID:</label>
    <input type="text" id="orderId" name="orderId" required />
    <input type="submit" value="Cancel" />
  </form>`);
});

app.post('/internal-admin-api/cancel-order', async (req, res) => {
  await cancelOrderAndUpdateOrdersFeeds(req.body.orderId);
  res.send('Successfully cancelled!');
});

app.post('/test-interface/actions', (req, res) => {
  const actionType = req.body['@type'];
  switch (actionType) {
    case 'test:SellerRequestedCancellationSimulateAction':
      await cancelOrderAndUpdateOrdersFeeds(req.body.object['@id']);
      res.sendStatus(204);
      break;
    // ... other actions
  }

async function cancelOrderAndUpdateOrdersFeeds(orderId) {
  // ...
}
```

This approach is key to ensuring that Test Suite accurately verifies all of the booking system's behaviours that will occur in real-life operation.

