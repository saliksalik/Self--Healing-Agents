const { createBdd, test } = require('playwright-bdd');
const { CategoriesListPage } = require('../pages/21-categories-list.page');

const { Given, When, Then } = createBdd(test);

Given('I open the categories module list', async ({ page }) => {
  const pageObject = new CategoriesListPage(page);
  await pageObject.openCategories();
});

Then('category records are visible in the list', async ({ page }) => {
  const pageObject = new CategoriesListPage(page);
  await pageObject.assertCategoriesVisible();
});
