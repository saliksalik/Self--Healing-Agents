const { createBdd, test } = require('playwright-bdd');
const { CustomersCreateFormPage } = require('../pages/24-customers-create-form.page');

const { Given, When, Then } = createBdd(test);

Given('I open customers before creating a record', async ({ page }) => {
  const pageObject = new CustomersCreateFormPage(page);
  await pageObject.openCustomers();
});

When('I open the create customer form', async ({ page }) => {
  const pageObject = new CustomersCreateFormPage(page);
  await pageObject.openCreateForm();
});

Then('customer create fields are displayed', async ({ page }) => {
  const pageObject = new CustomersCreateFormPage(page);
  await pageObject.assertCreateFields();
});
