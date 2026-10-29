const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

function required(name) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable "${name}".`);
  }
  return value.trim();
}

function optional(name, fallback = '') {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : fallback;
}

const env = {
  baseUrl: required('BASE_URL').replace(/\/$/, ''),
  // Avoid USERNAME — Windows injects the OS account name into that variable.
  username: optional('TEST_USERNAME', 'demo'),
  password: optional('TEST_PASSWORD', 'demo'),
  appName: optional('APP_DISPLAY_NAME', 'Posters Galore'),
};

module.exports = { env, required, optional };
