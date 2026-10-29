const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class NavOrdersMenuPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'NavOrdersMenuPage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickOrdersMenu() {
    await this.openMenu('#/orders');
  }
  async assertOrdersRoute() {
    await expect(this.page).toHaveURL(/#\/orders/);
    await expect(this.page.getByRole('tab', { name: /ordered/i })).toBeVisible();
  }
}

module.exports = { NavOrdersMenuPage };
