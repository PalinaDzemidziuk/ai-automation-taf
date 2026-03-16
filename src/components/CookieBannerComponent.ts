// path: src/components/CookieBannerComponent.ts
import type { Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

/**
 * Encapsulates interactions with the cookie consent banner.
 */
export class CookieBannerComponent extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Accepts all cookies from the banner.
   */
  public async acceptAll(): Promise<void> {
    await this.getByRole('button', { name: /accept/i }).click();
  }
}
