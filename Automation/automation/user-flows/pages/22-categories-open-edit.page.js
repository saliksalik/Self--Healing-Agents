const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class CategoriesOpenEditPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'CategoriesOpenEditPage');
  }

  async openCategories() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/categories');
    await this.page.getByRole('link', { name: 'Edit' }).first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstCategory() {
    await this.page.getByRole('link', { name: 'Edit' }).first().click();
    await this.page.waitForURL(/#\/categories\/\d+/);
  }
  async assertCategoryEdit() {
    await expect(this.page).toHaveURL(/#\/categories\/\d+/);
    await expect(this.page.locator('input[name="name"]')).toBeVisible();
  }
}

module.exports = { CategoriesOpenEditPage };
