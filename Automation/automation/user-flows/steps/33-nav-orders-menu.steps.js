const { createBdd, test } = require('playwright-bdd');
const { NavOrdersMenuPage } = require('../pages/33-nav-orders-menu.page');

const { Given, When, Then } = createBdd(test);

Given('I am on the dashboard before using orders menu', async ({ page }) => {
  const pageObject = new NavOrdersMenuPage(page);
  await pageObject.openDashboard();
});

When('I click the Orders sidebar link', async ({ page }) => {
  const pageObject = new NavOrdersMenuPage(page);
  await pageObject.clickOrdersMenu();
});

Then('the orders module opens from the sidebar', async ({ page }) => {
  const pageObject = new NavOrdersMenuPage(page);
  await pageObject.assertOrdersRoute();
});
