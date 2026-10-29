const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ProductsOpenEditPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ProductsOpenEditPage');
  }

  async openProducts() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/products');
    await this.page.getByText(/sort by reference/i).waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstPoster() {
    await this.gotoHash('/#/products/1');
    await this.page.getByRole('tab').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertEditOpened() {
    await expect(this.page).toHaveURL(/#\/products\/\d+/);
    await expect(this.page.getByRole('tab').first()).toBeVisible();
  }
}

module.exports = { ProductsOpenEditPage };
