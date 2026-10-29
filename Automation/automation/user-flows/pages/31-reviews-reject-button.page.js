const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ReviewsRejectButtonPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ReviewsRejectButtonPage');
  }

  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.getByRole('button', { name: /^Reject$/i }).first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertRejectVisible() {
    await expect(this.page.getByRole('button', { name: /^Reject$/i }).first()).toBeVisible();
  }
}

module.exports = { ReviewsRejectButtonPage };
