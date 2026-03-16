// path: src/pages/PlaywrightHomePage.ts
import type { Page } from '@playwright/test';
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
   * Returns the top navigation link for Docs.
   */
  public docsLink() {
    return this.getByRole('link', { name: /docs/i });
  }

  /**
   * Navigates to the docs page from the home page.
   */
  public async goToDocs(): Promise<void> {
    await this.docsLink().click();
  }
}
