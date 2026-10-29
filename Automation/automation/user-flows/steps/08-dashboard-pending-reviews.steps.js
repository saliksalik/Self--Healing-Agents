const { createBdd, test } = require('playwright-bdd');
const { DashboardPendingReviewsPage } = require('../pages/08-dashboard-pending-reviews.page');

const { Given, When, Then } = createBdd(test);

Given('I open the dashboard to inspect pending reviews', async ({ page }) => {
  const pageObject = new DashboardPendingReviewsPage(page);
  await pageObject.openDashboard();
});

Then('the Pending Reviews section is visible on the dashboard', async ({ page }) => {
  const pageObject = new DashboardPendingReviewsPage(page);
  await pageObject.assertPendingReviews();
});
