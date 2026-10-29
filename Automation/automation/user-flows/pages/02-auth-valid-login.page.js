const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class AuthValidLoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'AuthValidLoginPage');
  }

  async signInWithDemo() {
    await this.loginAsDemo();
  }
  async assertDashboardWelcome() {
    await expect(this.page.getByText('Welcome to the react-admin e-commerce demo')).toBeVisible();
  }
}

module.exports = { AuthValidLoginPage };
