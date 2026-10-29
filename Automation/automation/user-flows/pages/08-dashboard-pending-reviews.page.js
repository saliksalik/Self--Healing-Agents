const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class DashboardPendingReviewsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'DashboardPendingReviewsPage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertPendingReviews() {
    await expect(this.page.getByText('Pending Reviews')).toBeVisible();
  }
}

module.exports = { DashboardPendingReviewsPage };
