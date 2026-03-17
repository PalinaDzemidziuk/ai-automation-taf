// path: src/pages/HomePage.ts
import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for the post-login home page.
 */
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Returns the login success message heading.
   */
  public loginSuccessMessage(): Locator {
    return this.getByRole('heading', { name: /logged in successfully/i });
  }
}
