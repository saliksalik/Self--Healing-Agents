const { createBdd, test } = require('playwright-bdd');
const { ProductsListPage } = require('../pages/16-products-list.page');

const { Given, When, Then } = createBdd(test);

Given('I open the posters catalog list', async ({ page }) => {
  const pageObject = new ProductsListPage(page);
  await pageObject.openProducts();
});

Then('the posters create action and catalog filters are visible', async ({ page }) => {
  const pageObject = new ProductsListPage(page);
  await pageObject.assertProductsToolbar();
});
