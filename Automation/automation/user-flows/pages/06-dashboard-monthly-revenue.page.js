const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class DashboardMonthlyRevenuePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'DashboardMonthlyRevenuePage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertMonthlyRevenue() {
    await expect(this.page.getByText('Monthly Revenue')).toBeVisible();
  }
}

module.exports = { DashboardMonthlyRevenuePage };
