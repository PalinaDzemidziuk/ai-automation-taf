import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for SauceDemo cart page.
 */
export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Returns all cart item elements.
   */
  public items(): Locator {
    return this.getByTestId('inventory-item');
  }

  /**
   * Proceeds to checkout information step.
   */
  public async proceedToCheckout(): Promise<void> {
    await this.getByRole('button', { name: /checkout/i }).click();
  }

  /**
   * Returns the cart page title.
   */
  public title(): Locator {
    return this.getByTestId('title');
  }
}
