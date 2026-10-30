const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ProductsListPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ProductsListPage');
  }

  async openProducts() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/products');
    await this.page.getByText(/filter by category/i).waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertProductsToolbar() {
    await expect(this.page.getByText(/create/i).first()).toBeVisible();
    await expect(this.page.getByText(/categories|stock|sales|best sellers/i).first()).toBeVisible();
  }
}

module.exports = { ProductsListPage };
