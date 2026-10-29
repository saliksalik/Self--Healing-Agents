const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class AuthLoginPageLoadsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'AuthLoginPageLoadsPage');
  }

  async openLoginScreen() {
    await this.gotoHash('/#/login');
    await this.waitForLoginForm();
  }
  async assertLoginFieldsVisible() {
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
    await expect(this.page.locator('input[name="password"]')).toBeVisible();
    await expect(this.page.getByRole('button', { name: /sign in/i })).toBeVisible();
  }
}

module.exports = { AuthLoginPageLoadsPage };
