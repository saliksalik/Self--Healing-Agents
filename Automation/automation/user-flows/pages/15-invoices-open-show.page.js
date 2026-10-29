const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class InvoicesOpenShowPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'InvoicesOpenShowPage');
  }

  async openInvoices() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/invoices');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstInvoice() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForTimeout(1500);
  }
  async assertInvoiceDetails() {
    await expect(this.page.getByText(/invoice|date|customer|total/i).first()).toBeVisible();
  }
}

module.exports = { InvoicesOpenShowPage };
