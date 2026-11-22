const defaults = { timeout: 5000, retries: 3, verbose: false };

function load(overrides = {}) {
  return { ...defaults, ...overrides };
}

module.exports = { defaults, load };
