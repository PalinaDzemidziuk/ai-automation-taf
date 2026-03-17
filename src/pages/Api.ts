// path: src/pages/Api.ts
import type { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for API navigation from the home page.
 */
export class Api extends BasePage {
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
   * Returns the API navigation link.
   */
  public apiLink() {
    return this.getByRole('link', { name: /^api$/i });
  }

  /**
   * Navigates to the API page from home.
   */
  public async goToApi(): Promise<void> {
    await this.apiLink().click();
  }
}
