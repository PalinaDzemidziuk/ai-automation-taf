import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

/**
 * Header component used across SauceDemo app pages.
 */
export class Header extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Returns cart badge with current cart item count.
   */
  public cartBadge(): Locator {
    return this.getByTestId('shopping-cart-badge');
  }
}
