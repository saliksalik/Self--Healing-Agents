const { createBdd, test } = require('playwright-bdd');
const { CategoriesOpenEditPage } = require('../pages/22-categories-open-edit.page');

const { Given, When, Then } = createBdd(test);

Given('I open categories to edit a record', async ({ page }) => {
  const pageObject = new CategoriesOpenEditPage(page);
  await pageObject.openCategories();
});

When('I open the first category row', async ({ page }) => {
  const pageObject = new CategoriesOpenEditPage(page);
  await pageObject.openFirstCategory();
});

Then('the category edit form with name field is displayed', async ({ page }) => {
  const pageObject = new CategoriesOpenEditPage(page);
  await pageObject.assertCategoryEdit();
});
