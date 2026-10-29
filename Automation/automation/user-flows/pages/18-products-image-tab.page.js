const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ProductsImageTabPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ProductsImageTabPage');
  }

  async openFirstPosterEdit() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/products/1');
    await this.page.getByRole('tab').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openImageTab() {
    await this.page.getByRole('tab', { name: /image/i }).click();
  }
  async assertImageFields() {
    await expect(this.page.locator('input[name="image"]')).toBeVisible();
  }
}

module.exports = { ProductsImageTabPage };
