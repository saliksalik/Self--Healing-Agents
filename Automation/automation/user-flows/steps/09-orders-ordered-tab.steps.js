const { createBdd, test } = require('playwright-bdd');
const { OrdersOrderedTabPage } = require('../pages/09-orders-ordered-tab.page');

const { Given, When, Then } = createBdd(test);

Given('I open the orders module for the ordered tab check', async ({ page }) => {
  const pageObject = new OrdersOrderedTabPage(page);
  await pageObject.openOrders();
});

Then('the Ordered status tab is selected on orders', async ({ page }) => {
  const pageObject = new OrdersOrderedTabPage(page);
  await pageObject.assertOrderedTabSelected();
});
