const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ReviewsAcceptButtonPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ReviewsAcceptButtonPage');
  }

  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.getByRole('button', { name: /^Accept$/i }).first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertAcceptVisible() {
    await expect(this.page.getByRole('button', { name: /^Accept$/i }).first()).toBeVisible();
  }
}

module.exports = { ReviewsAcceptButtonPage };
