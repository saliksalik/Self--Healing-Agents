const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class DashboardNewOrdersPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'DashboardNewOrdersPage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertNewOrders() {
    await expect(this.page.getByText('New Orders')).toBeVisible();
  }
}

module.exports = { DashboardNewOrdersPage };
