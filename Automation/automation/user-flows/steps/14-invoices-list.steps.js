const { createBdd, test } = require('playwright-bdd');
const { InvoicesListPage } = require('../pages/14-invoices-list.page');

const { Given, When, Then } = createBdd(test);

Given('I open the invoices module list', async ({ page }) => {
  const pageObject = new InvoicesListPage(page);
  await pageObject.openInvoices();
});

Then('invoice rows are visible in the invoices table', async ({ page }) => {
  const pageObject = new InvoicesListPage(page);
  await pageObject.assertInvoiceRows();
});
