const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class AuthUnauthRedirectPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'AuthUnauthRedirectPage');
  }

  async visitOrdersWhileLoggedOut() {
    await this.gotoHash('/#/login');
    await this.waitForLoginForm();
    await this.page.evaluate(() => localStorage.clear());
    await this.gotoHash('/#/orders');
    await this.waitForLoginForm();
  }
  async assertLoginShown() {
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
    await expect(this.page).toHaveURL(/#\/login/);
  }
}

module.exports = { AuthUnauthRedirectPage };
