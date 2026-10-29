/**
 * Generates 36 BDD triplets: 1 feature + 1 page + 1 step + 1 scenario each.
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const featuresDir = path.join(root, 'automation/user-flows/features');
const pagesDir = path.join(root, 'automation/user-flows/pages');
const stepsDir = path.join(root, 'automation/user-flows/steps');

for (const dir of [featuresDir, pagesDir, stepsDir]) {
  fs.mkdirSync(dir, { recursive: true });
}

/** @type {Array<{id:string, feature:string, scenario:string, pageClass:string, pageBody:string, steps:string}>} */
const suite = [];

function add(def) {
  suite.push(def);
}

// ---------- AUTH ----------
add({
  id: '01-auth-login-page-loads',
  feature: 'Auth - Login Page Loads',
  scenario: 'Login page shows username and password fields',
  pageClass: 'AuthLoginPageLoadsPage',
  pageBody: `
  async openLoginScreen() {
    await this.gotoHash('/#/login');
    await this.waitForLoginForm();
  }
  async assertLoginFieldsVisible() {
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
    await expect(this.page.locator('input[name="password"]')).toBeVisible();
    await expect(this.page.getByRole('button', { name: /sign in/i })).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the Posters Galore login screen for page load check', 'openLoginScreen'],
    ['Then', 'the login username password and sign in controls are visible', 'assertLoginFieldsVisible'],
  ],
});

add({
  id: '02-auth-valid-login',
  feature: 'Auth - Valid Login',
  scenario: 'User signs in with demo credentials and reaches dashboard',
  pageClass: 'AuthValidLoginPage',
  pageBody: `
  async signInWithDemo() {
    await this.loginAsDemo();
  }
  async assertDashboardWelcome() {
    await expect(this.page.getByText('Welcome to the react-admin e-commerce demo')).toBeVisible();
  }`,
  steps: [
    ['When', 'I sign in to Posters Galore using demo credentials', 'signInWithDemo'],
    ['Then', 'the Posters Galore dashboard welcome message is displayed', 'assertDashboardWelcome'],
  ],
});

add({
  id: '03-auth-logout',
  feature: 'Auth - Logout',
  scenario: 'Logged in user can sign out back to login',
  pageClass: 'AuthLogoutPage',
  pageBody: `
  async prepareLoggedInSession() {
    await this.loginAsDemo();
  }
  async openUserMenuAndLogout() {
    await this.page.getByRole('button', { name: 'Profile' }).click();
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    await this.waitForLoginForm();
  }
  async assertBackOnLogin() {
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
    await expect(this.page).toHaveURL(/#\\/login/);
  }`,
  steps: [
    ['Given', 'I am signed into Posters Galore before logout', 'prepareLoggedInSession'],
    ['When', 'I open the user menu and choose logout', 'openUserMenuAndLogout'],
    ['Then', 'I am returned to the Posters Galore login page', 'assertBackOnLogin'],
  ],
});

add({
  id: '04-auth-unauth-redirect',
  feature: 'Auth - Unauthenticated Redirect',
  scenario: 'Visiting orders while logged out redirects to login',
  pageClass: 'AuthUnauthRedirectPage',
  pageBody: `
  async visitOrdersWhileLoggedOut() {
    await this.gotoHash('/#/login');
    await this.waitForLoginForm();
    await this.page.evaluate(() => localStorage.clear());
    await this.gotoHash('/#/orders');
    await this.waitForLoginForm();
  }
  async assertLoginShown() {
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
    await expect(this.page).toHaveURL(/#\\/login/);
  }`,
  steps: [
    ['When', 'I open the orders route without an authenticated session', 'visitOrdersWhileLoggedOut'],
    ['Then', 'Posters Galore forces the login page for protected orders', 'assertLoginShown'],
  ],
});

// ---------- DASHBOARD ----------
add({
  id: '05-dashboard-welcome',
  feature: 'Dashboard - Welcome',
  scenario: 'Dashboard shows welcome panel after login',
  pageClass: 'DashboardWelcomePage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertWelcome() {
    await expect(this.page.getByText('Welcome to the react-admin e-commerce demo')).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the Posters Galore dashboard for welcome check', 'openDashboard'],
    ['Then', 'the dashboard welcome panel is visible', 'assertWelcome'],
  ],
});

add({
  id: '06-dashboard-monthly-revenue',
  feature: 'Dashboard - Monthly Revenue',
  scenario: 'Dashboard shows Monthly Revenue card',
  pageClass: 'DashboardMonthlyRevenuePage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertMonthlyRevenue() {
    await expect(this.page.getByText('Monthly Revenue')).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the dashboard to inspect monthly revenue', 'openDashboard'],
    ['Then', 'the Monthly Revenue card is visible on the dashboard', 'assertMonthlyRevenue'],
  ],
});

add({
  id: '07-dashboard-new-orders',
  feature: 'Dashboard - New Orders',
  scenario: 'Dashboard shows New Orders card',
  pageClass: 'DashboardNewOrdersPage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertNewOrders() {
    await expect(this.page.getByText('New Orders')).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the dashboard to inspect new orders', 'openDashboard'],
    ['Then', 'the New Orders card is visible on the dashboard', 'assertNewOrders'],
  ],
});

add({
  id: '08-dashboard-pending-reviews',
  feature: 'Dashboard - Pending Reviews',
  scenario: 'Dashboard shows Pending Reviews section',
  pageClass: 'DashboardPendingReviewsPage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async assertPendingReviews() {
    await expect(this.page.getByText('Pending Reviews')).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the dashboard to inspect pending reviews', 'openDashboard'],
    ['Then', 'the Pending Reviews section is visible on the dashboard', 'assertPendingReviews'],
  ],
});

// ---------- ORDERS ----------
add({
  id: '09-orders-ordered-tab',
  feature: 'Orders - Ordered Tab',
  scenario: 'Orders page opens on Ordered tab',
  pageClass: 'OrdersOrderedTabPage',
  pageBody: `
  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
    await this.page.getByRole('tab', { name: /ordered/i }).waitFor({ state: 'visible' });
  }
  async assertOrderedTabSelected() {
    const tab = this.page.getByRole('tab', { name: /ordered/i });
    await expect(tab).toBeVisible();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  }`,
  steps: [
    ['Given', 'I open the orders module for the ordered tab check', 'openOrders'],
    ['Then', 'the Ordered status tab is selected on orders', 'assertOrderedTabSelected'],
  ],
});

add({
  id: '10-orders-delivered-tab',
  feature: 'Orders - Delivered Tab',
  scenario: 'User can switch to Delivered orders tab',
  pageClass: 'OrdersDeliveredTabPage',
  pageBody: `
  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
  }
  async selectDeliveredTab() {
    await this.page.getByRole('tab', { name: /delivered/i }).click();
  }
  async assertDeliveredSelected() {
    const tab = this.page.getByRole('tab', { name: /delivered/i });
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  }`,
  steps: [
    ['Given', 'I open orders before switching to delivered', 'openOrders'],
    ['When', 'I select the Delivered orders tab', 'selectDeliveredTab'],
    ['Then', 'the Delivered orders tab is selected', 'assertDeliveredSelected'],
  ],
});

add({
  id: '11-orders-cancelled-tab',
  feature: 'Orders - Cancelled Tab',
  scenario: 'User can switch to Cancelled orders tab',
  pageClass: 'OrdersCancelledTabPage',
  pageBody: `
  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
  }
  async selectCancelledTab() {
    await this.page.getByRole('tab', { name: /cancelled/i }).click();
  }
  async assertCancelledSelected() {
    const tab = this.page.getByRole('tab', { name: /cancelled/i });
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  }`,
  steps: [
    ['Given', 'I open orders before switching to cancelled', 'openOrders'],
    ['When', 'I select the Cancelled orders tab', 'selectCancelledTab'],
    ['Then', 'the Cancelled orders tab is selected', 'assertCancelledSelected'],
  ],
});

add({
  id: '12-orders-table-rows',
  feature: 'Orders - Table Rows',
  scenario: 'Orders table lists order rows',
  pageClass: 'OrdersTableRowsPage',
  pageBody: `
  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertRowsPresent() {
    const count = await this.page.locator('table tbody tr').count();
    expect(count).toBeGreaterThan(0);
  }`,
  steps: [
    ['Given', 'I open orders to verify the datagrid rows', 'openOrders'],
    ['Then', 'at least one order row is listed in the orders table', 'assertRowsPresent'],
  ],
});

add({
  id: '13-orders-open-edit',
  feature: 'Orders - Open Edit',
  scenario: 'Clicking an order opens the edit view',
  pageClass: 'OrdersOpenEditPage',
  pageBody: `
  async openOrders() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/orders');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstOrder() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForURL(/#\\/orders\\/\\d+/);
  }
  async assertOrderEdit() {
    await expect(this.page).toHaveURL(/#\\/orders\\/\\d+/);
    await expect(this.page.getByText(/reference|customer|basket|total/i).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the orders list to edit an order', 'openOrders'],
    ['When', 'I click the first order row in the grid', 'openFirstOrder'],
    ['Then', 'the order edit screen is displayed', 'assertOrderEdit'],
  ],
});

// ---------- INVOICES ----------
add({
  id: '14-invoices-list',
  feature: 'Invoices - List',
  scenario: 'Invoices list page loads with table',
  pageClass: 'InvoicesListPage',
  pageBody: `
  async openInvoices() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/invoices');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertInvoiceRows() {
    expect(await this.page.locator('table tbody tr').count()).toBeGreaterThan(0);
  }`,
  steps: [
    ['Given', 'I open the invoices module list', 'openInvoices'],
    ['Then', 'invoice rows are visible in the invoices table', 'assertInvoiceRows'],
  ],
});

add({
  id: '15-invoices-open-show',
  feature: 'Invoices - Open Show',
  scenario: 'Opening an invoice shows invoice details',
  pageClass: 'InvoicesOpenShowPage',
  pageBody: `
  async openInvoices() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/invoices');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstInvoice() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForTimeout(1500);
  }
  async assertInvoiceDetails() {
    await expect(this.page.getByText(/invoice|date|customer|total/i).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open invoices to view a record', 'openInvoices'],
    ['When', 'I open the first invoice from the list', 'openFirstInvoice'],
    ['Then', 'invoice detail content is displayed', 'assertInvoiceDetails'],
  ],
});

// ---------- PRODUCTS / POSTERS ----------
add({
  id: '16-products-list',
  feature: 'Products - List',
  scenario: 'Posters catalog list loads',
  pageClass: 'ProductsListPage',
  pageBody: `
  async openProducts() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/products');
    await this.page.getByText(/sort by reference/i).waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertProductsToolbar() {
    await expect(this.page.getByText(/create/i).first()).toBeVisible();
    await expect(this.page.getByText(/categories|stock|sales|best sellers/i).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the posters catalog list', 'openProducts'],
    ['Then', 'the posters create action and catalog filters are visible', 'assertProductsToolbar'],
  ],
});

add({
  id: '17-products-open-edit',
  feature: 'Products - Open Edit',
  scenario: 'Opening a poster opens the edit form',
  pageClass: 'ProductsOpenEditPage',
  pageBody: `
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
    await expect(this.page).toHaveURL(/#\\/products\\/\\d+/);
    await expect(this.page.getByRole('tab').first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open posters before editing a product', 'openProducts'],
    ['When', 'I open the first poster from the catalog', 'openFirstPoster'],
    ['Then', 'the poster edit form with tabs is displayed', 'assertEditOpened'],
  ],
});

add({
  id: '18-products-image-tab',
  feature: 'Products - Image Tab',
  scenario: 'Poster edit Image tab is available',
  pageClass: 'ProductsImageTabPage',
  pageBody: `
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
  }`,
  steps: [
    ['Given', 'I open a poster edit form for the image tab', 'openFirstPosterEdit'],
    ['When', 'I select the Image tab on the poster form', 'openImageTab'],
    ['Then', 'the poster image field is visible', 'assertImageFields'],
  ],
});

add({
  id: '19-products-details-tab',
  feature: 'Products - Details Tab',
  scenario: 'Poster edit Details tab is available',
  pageClass: 'ProductsDetailsTabPage',
  pageBody: `
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
  }`,
  steps: [
    ['Given', 'I open a poster edit form for the details tab', 'openFirstPosterEdit'],
    ['When', 'I select the Details tab on the poster form', 'openDetailsTab'],
    ['Then', 'poster detail fields are visible', 'assertDetailsFields'],
  ],
});

add({
  id: '20-products-description-tab',
  feature: 'Products - Description Tab',
  scenario: 'Poster edit Description tab is available',
  pageClass: 'ProductsDescriptionTabPage',
  pageBody: `
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
  }`,
  steps: [
    ['Given', 'I open a poster edit form for the description tab', 'openFirstPosterEdit'],
    ['When', 'I select the Description tab on the poster form', 'openDescriptionTab'],
    ['Then', 'the poster description editor is visible', 'assertDescriptionEditor'],
  ],
});

// ---------- CATEGORIES ----------
add({
  id: '21-categories-list',
  feature: 'Categories - List',
  scenario: 'Categories list page loads',
  pageClass: 'CategoriesListPage',
  pageBody: `
  async openCategories() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/categories');
    await this.page.getByRole('heading', { name: 'Animals' }).waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertCategoriesVisible() {
    await expect(this.page.getByRole('heading', { name: 'Animals' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Edit' }).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the categories module list', 'openCategories'],
    ['Then', 'category records are visible in the list', 'assertCategoriesVisible'],
  ],
});

add({
  id: '22-categories-open-edit',
  feature: 'Categories - Open Edit',
  scenario: 'Opening a category shows the edit form',
  pageClass: 'CategoriesOpenEditPage',
  pageBody: `
  async openCategories() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/categories');
    await this.page.getByRole('link', { name: 'Edit' }).first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstCategory() {
    await this.page.getByRole('link', { name: 'Edit' }).first().click();
    await this.page.waitForURL(/#\\/categories\\/\\d+/);
  }
  async assertCategoryEdit() {
    await expect(this.page).toHaveURL(/#\\/categories\\/\\d+/);
    await expect(this.page.locator('input[name="name"]')).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open categories to edit a record', 'openCategories'],
    ['When', 'I open the first category row', 'openFirstCategory'],
    ['Then', 'the category edit form with name field is displayed', 'assertCategoryEdit'],
  ],
});

// ---------- CUSTOMERS ----------
add({
  id: '23-customers-list',
  feature: 'Customers - List',
  scenario: 'Customers list page loads with rows',
  pageClass: 'CustomersListPage',
  pageBody: `
  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertCustomerRows() {
    expect(await this.page.locator('table tbody tr').count()).toBeGreaterThan(0);
  }`,
  steps: [
    ['Given', 'I open the customers module list', 'openCustomers'],
    ['Then', 'customer rows are visible in the customers table', 'assertCustomerRows'],
  ],
});

add({
  id: '24-customers-create-form',
  feature: 'Customers - Create Form',
  scenario: 'Create customer form opens from the list',
  pageClass: 'CustomersCreateFormPage',
  pageBody: `
  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.getByRole('link', { name: /create/i }).or(this.page.getByRole('button', { name: /create/i })).first().waitFor({ state: 'visible' });
  }
  async openCreateForm() {
    await this.page.getByRole('link', { name: /create/i }).or(this.page.getByRole('button', { name: /create/i })).first().click();
    await this.page.waitForURL(/#\\/customers\\/create/);
  }
  async assertCreateFields() {
    await expect(this.page.locator('input[name="first_name"], input[name="last_name"]').first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open customers before creating a record', 'openCustomers'],
    ['When', 'I open the create customer form', 'openCreateForm'],
    ['Then', 'customer create fields are displayed', 'assertCreateFields'],
  ],
});

add({
  id: '25-customers-open-edit',
  feature: 'Customers - Open Edit',
  scenario: 'Opening a customer shows the edit form',
  pageClass: 'CustomersOpenEditPage',
  pageBody: `
  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstCustomer() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForURL(/#\\/customers\\/\\d+/);
  }
  async assertCustomerEdit() {
    await expect(this.page).toHaveURL(/#\\/customers\\/\\d+/);
    await expect(this.page.locator('input[name="first_name"], input[name="email"]').first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open customers to edit a record', 'openCustomers'],
    ['When', 'I open the first customer row', 'openFirstCustomer'],
    ['Then', 'the customer edit form is displayed', 'assertCustomerEdit'],
  ],
});

add({
  id: '26-customers-segments-aside',
  feature: 'Customers - Segments Aside',
  scenario: 'Customers page shows segment filters aside',
  pageClass: 'CustomersSegmentsAsidePage',
  pageBody: `
  async openCustomers() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/customers');
    await this.page.waitForTimeout(2000);
  }
  async assertSegmentsAside() {
    await expect(this.page.getByText(/segments|regular|collector|ordered once|compulsive/i).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open customers to inspect the segments aside', 'openCustomers'],
    ['Then', 'customer segment filters are visible beside the list', 'assertSegmentsAside'],
  ],
});

// ---------- SEGMENTS ----------
add({
  id: '27-segments-page',
  feature: 'Segments - Page',
  scenario: 'Segments page loads with segment names',
  pageClass: 'SegmentsPageLoadsPage',
  pageBody: `
  async openSegments() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/segments');
    await this.page.waitForTimeout(1500);
  }
  async assertSegmentsListed() {
    await expect(this.page.getByText(/compulsive|collector|regular|returns|reviewer/i).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open the segments module page', 'openSegments'],
    ['Then', 'known customer segments are listed', 'assertSegmentsListed'],
  ],
});

add({
  id: '28-segments-link-customers',
  feature: 'Segments - Link Customers',
  scenario: 'Segment page links through to filtered customers',
  pageClass: 'SegmentsLinkCustomersPage',
  pageBody: `
  async openSegments() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/segments');
    await this.page.waitForTimeout(1500);
  }
  async clickSegmentCustomersLink() {
    const link = this.page.locator('a[href*="#/customers"]').first();
    await link.click();
    await this.page.waitForURL(/#\\/customers/);
  }
  async assertOnCustomers() {
    await expect(this.page).toHaveURL(/#\\/customers/);
  }`,
  steps: [
    ['Given', 'I open segments before following a customer link', 'openSegments'],
    ['When', 'I follow a segment link to customers', 'clickSegmentCustomersLink'],
    ['Then', 'I land on the customers module from segments', 'assertOnCustomers'],
  ],
});

// ---------- REVIEWS ----------
add({
  id: '29-reviews-list',
  feature: 'Reviews - List',
  scenario: 'Reviews list page loads with rows',
  pageClass: 'ReviewsListPage',
  pageBody: `
  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertReviewRows() {
    expect(await this.page.locator('table tbody tr').count()).toBeGreaterThan(0);
  }`,
  steps: [
    ['Given', 'I open the reviews module list', 'openReviews'],
    ['Then', 'review rows are visible in the reviews table', 'assertReviewRows'],
  ],
});

add({
  id: '30-reviews-accept-button',
  feature: 'Reviews - Accept Button',
  scenario: 'Accept action is available on reviews',
  pageClass: 'ReviewsAcceptButtonPage',
  pageBody: `
  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.getByRole('button', { name: /^Accept$/i }).first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertAcceptVisible() {
    await expect(this.page.getByRole('button', { name: /^Accept$/i }).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open reviews to inspect the accept action', 'openReviews'],
    ['Then', 'an Accept button is visible on the reviews page', 'assertAcceptVisible'],
  ],
});

add({
  id: '31-reviews-reject-button',
  feature: 'Reviews - Reject Button',
  scenario: 'Reject action is available on reviews',
  pageClass: 'ReviewsRejectButtonPage',
  pageBody: `
  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.getByRole('button', { name: /^Reject$/i }).first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async assertRejectVisible() {
    await expect(this.page.getByRole('button', { name: /^Reject$/i }).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open reviews to inspect the reject action', 'openReviews'],
    ['Then', 'a Reject button is visible on the reviews page', 'assertRejectVisible'],
  ],
});

add({
  id: '32-reviews-open-edit',
  feature: 'Reviews - Open Edit',
  scenario: 'Opening a review shows the edit drawer or form',
  pageClass: 'ReviewsOpenEditPage',
  pageBody: `
  async openReviews() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/reviews');
    await this.page.locator('table tbody tr').first().waitFor({ state: 'visible', timeout: 180000 });
  }
  async openFirstReview() {
    await this.page.locator('table tbody tr').first().click();
    await this.page.waitForTimeout(1500);
  }
  async assertReviewEditor() {
    await expect(this.page.getByText(/comment|status|rating|product|customer/i).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I open reviews to edit a record', 'openReviews'],
    ['When', 'I open the first review row', 'openFirstReview'],
    ['Then', 'the review editor content is displayed', 'assertReviewEditor'],
  ],
});

// ---------- NAVIGATION ----------
add({
  id: '33-nav-orders-menu',
  feature: 'Navigation - Orders Menu',
  scenario: 'Sidebar Orders link opens orders module',
  pageClass: 'NavOrdersMenuPage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickOrdersMenu() {
    await this.openMenu('#/orders');
  }
  async assertOrdersRoute() {
    await expect(this.page).toHaveURL(/#\\/orders/);
    await expect(this.page.getByRole('tab', { name: /ordered/i })).toBeVisible();
  }`,
  steps: [
    ['Given', 'I am on the dashboard before using orders menu', 'openDashboard'],
    ['When', 'I click the Orders sidebar link', 'clickOrdersMenu'],
    ['Then', 'the orders module opens from the sidebar', 'assertOrdersRoute'],
  ],
});

add({
  id: '34-nav-posters-menu',
  feature: 'Navigation - Posters Menu',
  scenario: 'Sidebar Posters link opens catalog',
  pageClass: 'NavPostersMenuPage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickPostersMenu() {
    await this.openMenu('#/products');
  }
  async assertProductsRoute() {
    await expect(this.page).toHaveURL(/#\\/products/);
    await expect(this.page.getByText(/sort by reference/i)).toBeVisible();
  }`,
  steps: [
    ['Given', 'I am on the dashboard before using posters menu', 'openDashboard'],
    ['When', 'I click the Posters sidebar link', 'clickPostersMenu'],
    ['Then', 'the posters catalog opens from the sidebar', 'assertProductsRoute'],
  ],
});

add({
  id: '35-nav-customers-menu',
  feature: 'Navigation - Customers Menu',
  scenario: 'Sidebar Customers link opens customers module',
  pageClass: 'NavCustomersMenuPage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickCustomersMenu() {
    await this.openMenu('#/customers');
  }
  async assertCustomersRoute() {
    await expect(this.page).toHaveURL(/#\\/customers/);
  }`,
  steps: [
    ['Given', 'I am on the dashboard before using customers menu', 'openDashboard'],
    ['When', 'I click the Customers sidebar link', 'clickCustomersMenu'],
    ['Then', 'the customers module opens from the sidebar', 'assertCustomersRoute'],
  ],
});

add({
  id: '36-nav-reviews-menu',
  feature: 'Navigation - Reviews Menu',
  scenario: 'Sidebar Reviews link opens reviews module',
  pageClass: 'NavReviewsMenuPage',
  pageBody: `
  async openDashboard() {
    await this.ensureLoggedIn();
    await this.gotoHash('/#/');
  }
  async clickReviewsMenu() {
    await this.openMenu('#/reviews');
  }
  async assertReviewsRoute() {
    await expect(this.page).toHaveURL(/#\\/reviews/);
    await expect(this.page.getByRole('button', { name: /^Accept$/i }).first()).toBeVisible();
  }`,
  steps: [
    ['Given', 'I am on the dashboard before using reviews menu', 'openDashboard'],
    ['When', 'I click the Reviews sidebar link', 'clickReviewsMenu'],
    ['Then', 'the reviews module opens from the sidebar', 'assertReviewsRoute'],
  ],
});

function writeFeature(item) {
  const lines = item.steps
    .map(([kw, text]) => `    ${kw} ${text}`)
    .join('\n');
  const content = `Feature: ${item.feature}
  As a Posters Galore admin user
  I want to verify ${item.feature.toLowerCase()}
  So that the module behaves correctly for automation

  @posters-galore @${item.id}
  Scenario: ${item.scenario}
${lines}
`;
  fs.writeFileSync(path.join(featuresDir, `${item.id}.feature`), content);
}

function writePage(item) {
  const content = `const { expect } = require('@playwright/test');
const { BasePage } = require('../core/BasePage');

class ${item.pageClass} extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, '${item.pageClass}');
  }
${item.pageBody}
}

module.exports = { ${item.pageClass} };
`;
  fs.writeFileSync(path.join(pagesDir, `${item.id}.page.js`), content);
}

function writeSteps(item) {
  const imports = `const { createBdd, test } = require('playwright-bdd');
const { ${item.pageClass} } = require('../pages/${item.id}.page');

const { Given, When, Then } = createBdd(test);
`;
  const bodies = item.steps
    .map(([kw, text, method]) => {
      return `${kw}('${text.replace(/'/g, "\\'")}', async ({ page }) => {
  const pageObject = new ${item.pageClass}(page);
  await pageObject.${method}();
});`;
    })
    .join('\n\n');
  fs.writeFileSync(path.join(stepsDir, `${item.id}.steps.js`), `${imports}\n${bodies}\n`);
}

for (const item of suite) {
  writeFeature(item);
  writePage(item);
  writeSteps(item);
}

console.log(`Generated ${suite.length} feature/page/step triplets (1-1-1).`);
