import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for SauceDemo inventory page.
 */
export class ShopHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Returns the product link for a chosen inventory item.
   */
  public productLink(productName: string): Locator {
    return this.getByTestId('inventory-item-name').filter({ hasText: productName });
  }

  /**
   * Returns the shopping cart link in the page header.
   */
  public cartLink(): Locator {
    return this.getByTestId('shopping-cart-link');
  }
}
