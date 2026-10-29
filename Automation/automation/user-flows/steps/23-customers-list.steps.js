const { createBdd, test } = require('playwright-bdd');
const { CustomersListPage } = require('../pages/23-customers-list.page');

const { Given, When, Then } = createBdd(test);

Given('I open the customers module list', async ({ page }) => {
  const pageObject = new CustomersListPage(page);
  await pageObject.openCustomers();
});

Then('customer rows are visible in the customers table', async ({ page }) => {
  const pageObject = new CustomersListPage(page);
  await pageObject.assertCustomerRows();
});
