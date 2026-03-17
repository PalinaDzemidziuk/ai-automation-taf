/**
 * Centralized base URLs used by end-to-end tests.
 */
export const BASE_URLS = {
  // Playwright documentation site used as default `baseURL` in Playwright config.
  // Used in specs: tests/e2e/smoke.spec.ts, tests/e2e/navigation.spec.ts, tests/e2e/docs.spec.ts.
  playwright: 'https://playwright.dev',

  // Practice Test Automation site used by authentication flow page object.
  // Used in specs: tests/e2e/auth.spec.ts.
  practiceTestAutomation: 'https://practicetestautomation.com',

  // SauceDemo site used by checkout login page object.
  // Used in specs: tests/e2e/checkout.spec.ts.
  sauceDemo: 'https://www.saucedemo.com',

  // Practice Automated Testing shopping page used by filter scenarios.
  // Used in specs: tests/e2e/filtering.spec.ts.
  practiceAutomatedTestingShopping: 'https://practiceautomatedtesting.com/shopping',
} as const;
