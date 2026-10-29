const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ReviewsListPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ReviewsListPage');
  }

  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertReviewRows() {
    expect(await this.page.locator('table tbody tr').count()).toBeGreaterThan(0);
  }
}

module.exports = { ReviewsListPage };
