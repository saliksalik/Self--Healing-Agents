const { createBdd, test } = require('playwright-bdd');
const { NavReviewsMenuPage } = require('../pages/36-nav-reviews-menu.page');

const { Given, When, Then } = createBdd(test);

Given('I am on the dashboard before using reviews menu', async ({ page }) => {
  const pageObject = new NavReviewsMenuPage(page);
  await pageObject.openDashboard();
});

When('I click the Reviews sidebar link', async ({ page }) => {
  const pageObject = new NavReviewsMenuPage(page);
  await pageObject.clickReviewsMenu();
});

Then('the reviews module opens from the sidebar', async ({ page }) => {
  const pageObject = new NavReviewsMenuPage(page);
  await pageObject.assertReviewsRoute();
});
