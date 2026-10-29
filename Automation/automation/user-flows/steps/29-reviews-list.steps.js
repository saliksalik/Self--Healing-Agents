const { createBdd, test } = require('playwright-bdd');
const { ReviewsListPage } = require('../pages/29-reviews-list.page');

const { Given, When, Then } = createBdd(test);

Given('I open the reviews module list', async ({ page }) => {
  const pageObject = new ReviewsListPage(page);
  await pageObject.openReviews();
});

Then('review rows are visible in the reviews table', async ({ page }) => {
  const pageObject = new ReviewsListPage(page);
  await pageObject.assertReviewRows();
});
