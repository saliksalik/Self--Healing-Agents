const { createBdd, test } = require('playwright-bdd');
const { NavPostersMenuPage } = require('../pages/34-nav-posters-menu.page');

const { Given, When, Then } = createBdd(test);

Given('I am on the dashboard before using posters menu', async ({ page }) => {
  const pageObject = new NavPostersMenuPage(page);
  await pageObject.openDashboard();
});

When('I click the Posters sidebar link', async ({ page }) => {
  const pageObject = new NavPostersMenuPage(page);
  await pageObject.clickPostersMenu();
});

Then('the posters catalog opens from the sidebar', async ({ page }) => {
  const pageObject = new NavPostersMenuPage(page);
  await pageObject.assertProductsRoute();
});
