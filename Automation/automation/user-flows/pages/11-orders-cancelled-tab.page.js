const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class OrdersCancelledTabPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'OrdersCancelledTabPage');
  }

  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
  }
  async selectCancelledTab() {
    await this.page.getByRole('tab', { name: /cancelled/i }).click();
  }
  async assertCancelledSelected() {
    const tab = this.page.getByRole('tab', { name: /cancelled/i });
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  }
}

module.exports = { OrdersCancelledTabPage };
