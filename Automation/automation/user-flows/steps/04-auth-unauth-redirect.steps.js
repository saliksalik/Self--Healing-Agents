const { createBdd, test } = require('playwright-bdd');
const { AuthUnauthRedirectPage } = require('../pages/04-auth-unauth-redirect.page');

const { Given, When, Then } = createBdd(test);

When('I open the orders route without an authenticated session', async ({ page }) => {
  const pageObject = new AuthUnauthRedirectPage(page);
  await pageObject.visitOrdersWhileLoggedOut();
});

Then('Posters Galore forces the login page for protected orders', async ({ page }) => {
  const pageObject = new AuthUnauthRedirectPage(page);
  await pageObject.assertLoginShown();
});
