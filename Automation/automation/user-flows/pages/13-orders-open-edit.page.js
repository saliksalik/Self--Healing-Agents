const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class OrdersOpenEditPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'OrdersOpenEditPage');
  }

  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstOrder() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForURL(/#\/orders\/\d+/);
  }
  async assertOrderEdit() {
    await expect(this.page).toHaveURL(/#\/orders\/\d+/);
    await expect(this.page.getByText(/reference|customer|basket|total/i).first()).toBeVisible();
  }
}

module.exports = { OrdersOpenEditPage };
