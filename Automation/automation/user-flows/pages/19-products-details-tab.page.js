const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ProductsDetailsTabPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ProductsDetailsTabPage');
  }

  async openFirstPosterEdit() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/products/1');
    await this.page.getByRole('tab').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openDetailsTab() {
    await this.page.getByRole('tab', { name: /details/i }).click();
  }
  async assertDetailsFields() {
    await expect(this.page.locator('input[name="price"], input[name="reference"], input[name="width"]').first()).toBeVisible();
  }
}

module.exports = { ProductsDetailsTabPage };
