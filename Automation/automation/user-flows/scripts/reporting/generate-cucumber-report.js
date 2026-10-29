const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');
const { env } = require('../../config/env');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const jsonFile = path.join(REPO_ROOT, 'reports', 'cucumber', 'cucumber-report.json');
const output = path.join(REPO_ROOT, 'reports', 'cucumber', 'index.html');
const reportTitle = `${env.appName} BDD Automation Report`;

if (!fs.existsSync(jsonFile)) {
  console.error(
    `[report] Cucumber JSON not found at "${jsonFile}". Run npm test first.`
  );
  process.exit(1);
}

fs.mkdirSync(path.dirname(output), { recursive: true });

reporter.generate({
  theme: 'bootstrap',
  jsonFile,
  output,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  name: reportTitle,
  brandTitle: reportTitle,
  metadata: {
    'Base URL': env.baseUrl,
    Platform: process.platform,
    'Node Version': process.version,
    'Executed At': new Date().toISOString(),
  },
});

console.log(`[report] Cucumber HTML report generated at ${output}`);
