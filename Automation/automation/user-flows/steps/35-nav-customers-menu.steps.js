const { createBdd, test } = require('playwright-bdd');
const { NavCustomersMenuPage } = require('../pages/35-nav-customers-menu.page');

const { Given, When, Then } = createBdd(test);

Given('I am on the dashboard before using customers menu', async ({ page }) => {
  const pageObject = new NavCustomersMenuPage(page);
  await pageObject.openDashboard();
});

When('I click the Customers sidebar link', async ({ page }) => {
  const pageObject = new NavCustomersMenuPage(page);
  await pageObject.clickCustomersMenu();
});

Then('the customers module opens from the sidebar', async ({ page }) => {
  const pageObject = new NavCustomersMenuPage(page);
  await pageObject.assertCustomersRoute();
});
