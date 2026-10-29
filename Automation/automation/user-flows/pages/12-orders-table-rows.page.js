const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class OrdersTableRowsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'OrdersTableRowsPage');
  }

  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertRowsPresent() {
    const count = await this.page.locator('table tbody tr').count();
    expect(count).toBeGreaterThan(0);
  }
}

module.exports = { OrdersTableRowsPage };
