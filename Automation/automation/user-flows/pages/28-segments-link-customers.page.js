const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class SegmentsLinkCustomersPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'SegmentsLinkCustomersPage');
  }

  async openSegments() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/segments');
    await this.page.waitForTimeout(1500);
  }
  async clickSegmentCustomersLink() {
    const link = this.page.locator('a[href*="#/customers"]').first();
    await link.click();
    await this.page.waitForURL(/#\/customers/);
  }
  async assertOnCustomers() {
    await expect(this.page).toHaveURL(/#\/customers/);
  }
}

module.exports = { SegmentsLinkCustomersPage };
