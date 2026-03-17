import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for SauceDemo product details page.
 */
export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Returns the product title.
   */
  public title(): Locator {
    return this.getByTestId('inventory-item-name');
  }

  /**
   * Returns the product price.
   */
  public price(): Locator {
    return this.getByTestId('inventory-item-price');
  }

  /**
   * Adds the product to the cart from details view.
   */
  public async addToCart(): Promise<void> {
    await this.getByRole('button', { name: /add to cart/i }).click();
  }
}
