import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for SauceDemo login page used in checkout flow.
 */
export class CheckoutFlowLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens SauceDemo login page.
   */
  public async open(): Promise<void> {
    await this.navigate('https://www.saucedemo.com/');
  }

  /**
   * Returns the username input.
   */
  public username(): Locator {
    return this.getByTestId('username');
  }

  /**
   * Returns the password input.
   */
  public password(): Locator {
    return this.getByTestId('password');
  }

  /**
   * Returns the login/submit button.
   */
  public submit(): Locator {
    return this.getByRole('button', { name: /login/i });
  }

  /**
   * Performs a successful login action.
   */
  public async login(username: string, password: string): Promise<void> {
    await this.username().fill(username);
    await this.password().fill(password);
    await this.submit().click();
  }
}
