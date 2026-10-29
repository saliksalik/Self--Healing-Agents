const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class NavPostersMenuPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'NavPostersMenuPage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickPostersMenu() {
    await this.openMenu('#/products');
  }
  async assertProductsRoute() {
    await expect(this.page).toHaveURL(/#\/products/);
    await expect(this.page.getByText(/sort by reference/i)).toBeVisible();
  }
}

module.exports = { NavPostersMenuPage };
