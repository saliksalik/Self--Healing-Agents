const { expect } = require('@playwright/test');
const { createLogger } = require('../utils/logger');
const { env } = require('../config/env');
const { routes } = require('../config/routes');
const { ASSERT_TIMEOUT_MS } = require('../config/timeouts');

class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page, name = 'Page') {
    this.page = page;
    this.name = name;
    this.log = createLogger(this.name);
    this.baseUrl = env.baseUrl;
    this.assertTimeout = ASSERT_TIMEOUT_MS;
  }

  async gotoHash(hashPath) {
    const path = hashPath.startsWith('/#')
      ? hashPath
      : `/#/${hashPath.replace(/^#?\/?/, '')}`;
    this.log.step(`Navigate to ${path}`);
    await this.page.goto(`${this.baseUrl}${path}`, {
      waitUntil: 'domcontentloaded',
      timeout: this.assertTimeout,
    });
  }

  async waitVisible(locator, timeout = this.assertTimeout) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async expectVisible(locator, timeout = this.assertTimeout) {
    await expect(locator).toBeVisible({ timeout });
  }

  async waitForLoginForm() {
    await this.waitVisible(this.page.locator('input[name="username"]'));
  }

  async loginAsDemo() {
    this.log.step(`Login as ${env.username}`);
    await this.gotoHash(routes.login);
    await this.waitForLoginForm();
    await this.page.locator('input[name="username"]').fill(env.username);
    await this.page.locator('input[name="password"]').fill(env.password);
    await this.page.getByRole('button', { name: /sign in/i }).click();
    await this.waitVisible(
      this.page.getByText('Welcome to the react-admin e-commerce demo')
    );
  }

  async ensureLoggedIn() {
    await this.gotoHash(routes.dashboard);
    const welcome = this.page.getByText(
      'Welcome to the react-admin e-commerce demo'
    );
    const username = this.page.locator('input[name="username"]');
    await Promise.race([
      welcome.waitFor({ state: 'visible', timeout: this.assertTimeout }).catch(() => {}),
      username.waitFor({ state: 'visible', timeout: this.assertTimeout }).catch(() => {}),
    ]);
    if (await welcome.isVisible().catch(() => false)) {
      return;
    }
    await this.loginAsDemo();
  }

  menuLink(hash) {
    return this.page.locator(`a[href="${hash}"]`).first();
  }

  async openMenu(hash) {
    this.log.step(`Open menu ${hash}`);
    const link = this.menuLink(hash);
    await this.waitVisible(link);
    await link.click();
  }

  async expectTextVisible(text, timeout = this.assertTimeout) {
    await expect(this.page.getByText(text, { exact: false }).first()).toBeVisible({
      timeout,
    });
  }
}

module.exports = { BasePage };
