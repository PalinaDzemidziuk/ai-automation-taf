// path: src/pages/PlaywrightHomePage.ts
import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for the Playwright home page.
 */
export class PlaywrightHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the home page.
   */
  public async open(): Promise<void> {
    await this.navigate('/');
  }

  /**
   * Returns a top navigation link by name.
   */
  public topNavigationLink(name: string | RegExp): Locator {
    return this.getByRole('link', { name });
  }

  /**
   * Opens a top navigation page by link name.
   */
  public async openTopNavigationPage(name: string | RegExp): Promise<void> {
    const link = this.topNavigationLink(name);
    await this.expectVisible(link);
    await link.click();
  }
}
