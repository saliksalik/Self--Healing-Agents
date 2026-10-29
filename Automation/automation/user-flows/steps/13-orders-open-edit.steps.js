const { createBdd, test } = require('playwright-bdd');
const { OrdersOpenEditPage } = require('../pages/13-orders-open-edit.page');

const { Given, When, Then } = createBdd(test);

Given('I open the orders list to edit an order', async ({ page }) => {
  const pageObject = new OrdersOpenEditPage(page);
  await pageObject.openOrders();
});

When('I click the first order row in the grid', async ({ page }) => {
  const pageObject = new OrdersOpenEditPage(page);
  await pageObject.openFirstOrder();
});

Then('the order edit screen is displayed', async ({ page }) => {
  const pageObject = new OrdersOpenEditPage(page);
  await pageObject.assertOrderEdit();
});
