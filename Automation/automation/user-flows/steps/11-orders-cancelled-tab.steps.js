const { createBdd, test } = require('playwright-bdd');
const { OrdersCancelledTabPage } = require('../pages/11-orders-cancelled-tab.page');

const { Given, When, Then } = createBdd(test);

Given('I open orders before switching to cancelled', async ({ page }) => {
  const pageObject = new OrdersCancelledTabPage(page);
  await pageObject.openOrders();
});

When('I select the Cancelled orders tab', async ({ page }) => {
  const pageObject = new OrdersCancelledTabPage(page);
  await pageObject.selectCancelledTab();
});

Then('the Cancelled orders tab is selected', async ({ page }) => {
  const pageObject = new OrdersCancelledTabPage(page);
  await pageObject.assertCancelledSelected();
});
