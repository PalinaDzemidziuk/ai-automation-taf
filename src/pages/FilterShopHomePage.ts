import { expect, type Locator, type Page } from '@playwright/test';
import { BASE_URLS } from '../base-urls';
import { BasePage } from './BasePage';

/**
 * Page object for the Practice Automated Testing shopping page.
 */
export class FilterShopHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the shopping page where filters can be applied.
   */
  public async open(): Promise<void> {
    await this.navigate(BASE_URLS.practiceAutomatedTestingShopping);
  }

  /**
   * Returns the maximum price range slider.
   */
  public priceUp(): Locator {
    return this.getByTestId('max-price-slider');
  }

  /**
   * Returns all visible product cards.
   */
  public items(): Locator {
    return this.page.locator('div.p-4').filter({ has: this.getByRole('button', { name: /add to cart/i }) });
  }

  /**
   * Returns all visible product price labels.
   */
  public productPrice(): Locator {
    return this.items().locator('span').filter({ hasText: /^\$\d+\.\d{2}$/ });
  }

  /**
   * Returns product title locator by index.
   */
  public titleOf(index: number): Locator {
    return this.items().nth(index).getByRole('heading', { level: 3 });
  }

  /**
   * Returns product price locator by index.
   */
  public priceOf(index: number): Locator {
    return this.items().nth(index).locator('span').filter({ hasText: /^\$\d+\.\d{2}$/ }).first();
  }

  /**
   * Applies a max price filter by moving the upper range slider.
   */
  public async applyMaxPrice(maxPrice: number): Promise<void> {
    const slider = this.priceUp();
    await expect(slider).toBeVisible();

    await slider.focus();
    await slider.evaluate((element, value) => {
      const input = element as HTMLInputElement;
      input.value = String(value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, maxPrice);
  }

  /**
   * Parses a currency text (for example "$24.99") to a number.
   */
  public static parsePrice(text: string): number {
    const normalized = text.replace(/[^\d.]/g, '');
    return Number.parseFloat(normalized);
  }
}
