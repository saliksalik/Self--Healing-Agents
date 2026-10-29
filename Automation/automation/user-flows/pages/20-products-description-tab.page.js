const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ProductsDescriptionTabPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, 'ProductsDescriptionTabPage');
  }

  async openFirstPosterEdit() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/products/1');
    await this.page.getByRole('tab').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openDescriptionTab() {
    await this.page.getByRole('tab', { name: /description/i }).click();
  }
  async assertDescriptionEditor() {
    await expect(this.page.locator('.tiptap, [contenteditable="true"], textarea[name="description"]').first()).toBeVisible();
  }
}

module.exports = { ProductsDescriptionTabPage };
