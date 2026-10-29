const { createBdd, test } = require('playwright-bdd');
const { createLogger } = require('../utils/logger');
const { env } = require('../config/env');
const { ASSERT_TIMEOUT_MS } = require('../config/timeouts');

const { Before, After, BeforeAll, AfterAll } = createBdd(test);
const log = createLogger('Hooks');

BeforeAll(async () => {
  log.info(`Starting Posters Galore BDD run against "${env.baseUrl}".`);
  log.info(`Assertion / action wait timeout: ${ASSERT_TIMEOUT_MS / 1000}s`);
});

Before(async ({ page, $testInfo }) => {
  page.setDefaultTimeout(ASSERT_TIMEOUT_MS);
  page.setDefaultNavigationTimeout(ASSERT_TIMEOUT_MS);
  log.step(`▶ Scenario start: "${$testInfo.title}"`);
});

After(async ({ page, $testInfo }) => {
  const failed = $testInfo.status !== $testInfo.expectedStatus;
  if (failed && page && !page.isClosed()) {
    try {
      const screenshot = await page.screenshot({ fullPage: true });
      await $testInfo.attach('failure-screenshot', {
        body: screenshot,
        contentType: 'image/png',
      });
    } catch (err) {
      log.warn(`Could not capture failure screenshot: ${err.message}`);
    }
  }
  log.step(
    `■ Scenario end: "${$testInfo.title}" -> ${(
      $testInfo.status || 'unknown'
    ).toUpperCase()} (${$testInfo.duration}ms)`
  );
});

AfterAll(async () => {
  log.info('Test run finished.');
});
