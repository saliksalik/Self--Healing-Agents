const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class AuthLogoutPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'AuthLogoutPage');
  }

  async prepareLoggedInSession() {
    await this.loginAsDemo();
  }
  async openUserMenuAndLogout() {
    await this.page.getByRole('button', { name: 'Profile' }).click();
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    await this.waitForLoginForm();
  }
  async assertBackOnLogin() {
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
    await expect(this.page).toHaveURL(/#\/login/);
  }
}

module.exports = { AuthLogoutPage };
