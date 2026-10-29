const { createBdd, test } = require('playwright-bdd');
const { AuthLoginPageLoadsPage } = require('../pages/01-auth-login-page-loads.page');

const { Given, When, Then } = createBdd(test);

Given('I open the Posters Galore login screen for page load check', async ({ page }) => {
  const pageObject = new AuthLoginPageLoadsPage(page);
  await pageObject.openLoginScreen();
});

Then('the login username password and sign in controls are visible', async ({ page }) => {
  const pageObject = new AuthLoginPageLoadsPage(page);
  await pageObject.assertLoginFieldsVisible();
});
