const { createBdd, test } = require('playwright-bdd');
const { ProductsDetailsTabPage } = require('../pages/19-products-details-tab.page');

const { Given, When, Then } = createBdd(test);

Given('I open a poster edit form for the details tab', async ({ page }) => {
  const pageObject = new ProductsDetailsTabPage(page);
  await pageObject.openFirstPosterEdit();
});

When('I select the Details tab on the poster form', async ({ page }) => {
  const pageObject = new ProductsDetailsTabPage(page);
  await pageObject.openDetailsTab();
});

Then('poster detail fields are visible', async ({ page }) => {
  const pageObject = new ProductsDetailsTabPage(page);
  await pageObject.assertDetailsFields();
});
