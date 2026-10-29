const { createBdd, test } = require('playwright-bdd');
const { ProductsDescriptionTabPage } = require('../pages/20-products-description-tab.page');

const { Given, When, Then } = createBdd(test);

Given('I open a poster edit form for the description tab', async ({ page }) => {
  const pageObject = new ProductsDescriptionTabPage(page);
  await pageObject.openFirstPosterEdit();
});

When('I select the Description tab on the poster form', async ({ page }) => {
  const pageObject = new ProductsDescriptionTabPage(page);
  await pageObject.openDescriptionTab();
});

Then('the poster description editor is visible', async ({ page }) => {
  const pageObject = new ProductsDescriptionTabPage(page);
  await pageObject.assertDescriptionEditor();
});
