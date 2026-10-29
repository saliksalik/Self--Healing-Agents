const { createBdd, test } = require('playwright-bdd');
const { ProductsOpenEditPage } = require('../pages/17-products-open-edit.page');

const { Given, When, Then } = createBdd(test);

Given('I open posters before editing a product', async ({ page }) => {
  const pageObject = new ProductsOpenEditPage(page);
  await pageObject.openProducts();
});

When('I open the first poster from the catalog', async ({ page }) => {
  const pageObject = new ProductsOpenEditPage(page);
  await pageObject.openFirstPoster();
});

Then('the poster edit form with tabs is displayed', async ({ page }) => {
  const pageObject = new ProductsOpenEditPage(page);
  await pageObject.assertEditOpened();
});
