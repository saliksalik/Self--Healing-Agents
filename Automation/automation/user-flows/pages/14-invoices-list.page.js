const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class InvoicesListPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'InvoicesListPage');
  }

  async openInvoices() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/invoices');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertInvoiceRows() {
    expect(await this.page.locator('table tbody tr').count()).toBeGreaterThan(0);
  }
}

module.exports = { InvoicesListPage };
