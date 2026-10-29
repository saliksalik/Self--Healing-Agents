const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class CustomersOpenEditPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'CustomersOpenEditPage');
  }

  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstCustomer() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForURL(/#\/customers\/\d+/);
  }
  async assertCustomerEdit() {
    await expect(this.page).toHaveURL(/#\/customers\/\d+/);
    await expect(this.page.locator('input[name="first_name"], input[name="email"]').first()).toBeVisible();
  }
}

module.exports = { CustomersOpenEditPage };
