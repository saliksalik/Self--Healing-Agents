const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class OrdersOrderedTabPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'OrdersOrderedTabPage');
  }

  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
    await this.page.getByRole('tab', { name: /processed/i }).waitFor({ state: 'visible' });
  }
  async assertOrderedTabSelected() {
    const tab = this.page.getByRole('tab', { name: /processed/i });
    await expect(tab).toBeVisible();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  }
}

module.exports = { OrdersOrderedTabPage };
