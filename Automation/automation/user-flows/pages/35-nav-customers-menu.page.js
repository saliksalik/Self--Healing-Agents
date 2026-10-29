const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class NavCustomersMenuPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'NavCustomersMenuPage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickCustomersMenu() {
    await this.openMenu('#/customers');
  }
  async assertCustomersRoute() {
    await expect(this.page).toHaveURL(/#\/customers/);
  }
}

module.exports = { NavCustomersMenuPage };
