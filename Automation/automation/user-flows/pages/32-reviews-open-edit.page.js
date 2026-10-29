const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ReviewsOpenEditPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ReviewsOpenEditPage');
  }

  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstReview() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForTimeout(1500);
  }
  async assertReviewEditor() {
    await expect(this.page.getByText(/comment|status|rating|product|customer/i).first()).toBeVisible();
  }
}

module.exports = { ReviewsOpenEditPage };
