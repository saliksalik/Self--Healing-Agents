const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class NavReviewsMenuPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'NavReviewsMenuPage');
  }

  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickReviewsMenu() {
    await this.openMenu('#/reviews');
  }
  async assertReviewsRoute() {
    await expect(this.page).toHaveURL(/#\/reviews/);
    await expect(this.page.getByRole('button', { name: /^Accept$/i }).first()).toBeVisible();
  }
}

module.exports = { NavReviewsMenuPage };
