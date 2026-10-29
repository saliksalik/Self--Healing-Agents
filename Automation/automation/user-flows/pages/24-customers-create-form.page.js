const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class CustomersCreateFormPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'CustomersCreateFormPage');
  }

  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.getByRole('link', { name: /create/i }).or(this.page.getByRole('button', { name: /create/i })).first().waitFor({ state: 'visible' });
  }
  async openCreateForm() {
    await this.page.getByRole('link', { name: /create/i }).or(this.page.getByRole('button', { name: /create/i })).first().click();
    await this.page.waitForURL(/#\/customers\/create/);
  }
  async assertCreateFields() {
    await expect(this.page.locator('input[name="first_name"], input[name="last_name"]').first()).toBeVisible();
  }
}

module.exports = { CustomersCreateFormPage };
