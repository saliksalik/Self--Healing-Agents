const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class CategoriesListPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'CategoriesListPage');
  }

  async openCategories() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/categories');
    await this.page.getByRole('heading', { name: 'Animals' }).waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertCategoriesVisible() {
    await expect(this.page.getByRole('heading', { name: 'Animals' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Edit' }).first()).toBeVisible();
  }
}

module.exports = { CategoriesListPage };
