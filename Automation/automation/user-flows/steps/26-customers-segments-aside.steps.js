const { createBdd, test } = require('playwright-bdd');
const { CustomersSegmentsAsidePage } = require('../pages/26-customers-segments-aside.page');

const { Given, When, Then } = createBdd(test);

Given('I open customers to inspect the segments aside', async ({ page }) => {
  const pageObject = new CustomersSegmentsAsidePage(page);
  await pageObject.openCustomers();
});

Then('customer segment filters are visible beside the list', async ({ page }) => {
  const pageObject = new CustomersSegmentsAsidePage(page);
  await pageObject.assertSegmentsAside();
});
