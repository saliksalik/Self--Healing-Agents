const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class CustomersListPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'CustomersListPage');
  }

  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertCustomerRows() {
    expect(await this.page.locator('table tbody tr').count()).toBeGreaterThan(0);
  }
}

module.exports = { CustomersListPage };
