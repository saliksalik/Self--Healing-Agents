const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class OrdersDeliveredTabPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'OrdersDeliveredTabPage');
  }

  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
  }
  async selectDeliveredTab() {
    await this.page.getByRole('tab', { name: /delivered/i }).click();
  }
  async assertDeliveredSelected() {
    const tab = this.page.getByRole('tab', { name: /delivered/i });
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  }
}

module.exports = { OrdersDeliveredTabPage };
