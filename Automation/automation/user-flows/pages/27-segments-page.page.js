const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class SegmentsPageLoadsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'SegmentsPageLoadsPage');
  }

  async openSegments() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/segments');
    await this.page.waitForTimeout(1500);
  }
  async assertSegmentsListed() {
    await expect(this.page.getByText(/compulsive|collector|regular|returns|reviewer/i).first()).toBeVisible();
  }
}

module.exports = { SegmentsPageLoadsPage };
