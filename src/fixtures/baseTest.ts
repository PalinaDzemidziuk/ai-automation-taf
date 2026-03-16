// path: src/fixtures/baseTest.ts
import { test as base, type Page } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { logger } from '../utils/logger';

/**
 * Shared test fixtures and hooks for all e2e specs.
 */
class BaseTest {
  /**
   * Executes setup steps before each test.
   */
  public static async setup(page: Page): Promise<void> {
    logger.info('Base setup start');
    await page.setViewportSize({ width: 1440, height: 900 });
  }

  /**
   * Executes teardown steps after each test.
   */
  public static async teardown(): Promise<void> {
    logger.info('Base teardown complete');
  }
}

type AppFixtures = {
  homePage: PlaywrightHomePage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await BaseTest.setup(page);
    await use(new PlaywrightHomePage(page));
    await BaseTest.teardown();
  },
});

export { expect } from '@playwright/test';
