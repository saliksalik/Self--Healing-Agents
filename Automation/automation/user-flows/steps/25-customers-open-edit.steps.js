const { createBdd, test } = require('playwright-bdd');
const { CustomersOpenEditPage } = require('../pages/25-customers-open-edit.page');

const { Given, When, Then } = createBdd(test);

Given('I open customers to edit a record', async ({ page }) => {
  const pageObject = new CustomersOpenEditPage(page);
  await pageObject.openCustomers();
});

When('I open the first customer row', async ({ page }) => {
  const pageObject = new CustomersOpenEditPage(page);
  await pageObject.openFirstCustomer();
});

Then('the customer edit form is displayed', async ({ page }) => {
  const pageObject = new CustomersOpenEditPage(page);
  await pageObject.assertCustomerEdit();
});
