const { createBdd, test } = require('playwright-bdd');
const { DashboardNewOrdersPage } = require('../pages/07-dashboard-new-orders.page');

const { Given, When, Then } = createBdd(test);

Given('I open the dashboard to inspect new orders', async ({ page }) => {
  const pageObject = new DashboardNewOrdersPage(page);
  await pageObject.openDashboard();
});

Then('the New Orders card is visible on the dashboard', async ({ page }) => {
  const pageObject = new DashboardNewOrdersPage(page);
  await pageObject.assertNewOrders();
});
