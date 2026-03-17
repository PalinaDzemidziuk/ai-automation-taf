import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for SauceDemo checkout step one page.
 */
export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Returns checkout page title.
   */
  public tital(): Locator {
    return this.getByTestId('title');
  }

  /**
   * Returns the button that continues to the payment overview step.
   */
  public continueToPaymentButton(): Locator {
    return this.getByRole('button', { name: /continue/i });
  }
}
