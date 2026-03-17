// path: src/pages/Community.ts
import type { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for Community page navigation from the home page.
 */
export class Community extends BasePage {
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
   * Returns the Community navigation link.
   */
  public apiLink() {
    return this.getByRole('link', { name: /community/i });
  }

  /**
   * Navigates to the Community page from home.
   */
  public async goToApi(): Promise<void> {
    await this.apiLink().click();
  }
}
