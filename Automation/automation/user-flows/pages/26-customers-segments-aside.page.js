const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class CustomersSegmentsAsidePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'CustomersSegmentsAsidePage');
  }

  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.waitForTimeout(2000);
  }
  async assertSegmentsAside() {
    await expect(this.page.getByText(/segments|regular|collector|ordered once|compulsive/i).first()).toBeVisible();
  }
}

module.exports = { CustomersSegmentsAsidePage };
