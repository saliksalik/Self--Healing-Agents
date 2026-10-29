const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class DashboardWelcomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'DashboardWelcomePage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertWelcome() {
    await expect(this.page.getByText('Welcome to the react-admin e-commerce demo')).toBeVisible();
  }
}

module.exports = { DashboardWelcomePage };
