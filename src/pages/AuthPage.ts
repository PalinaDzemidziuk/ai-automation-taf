// path: src/pages/AuthPage.ts
import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for the login/authentication page.
 */
export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the login page.
   */
  public async open(): Promise<void> {
    await this.navigate('https://practicetestautomation.com/practice-test-login/');
  }

  /**
   * Returns the username input locator.
   */
  public username(): Locator {
    return this.getByLabel('Username');
  }

  /**
   * Returns the password input locator.
   */
  public password(): Locator {
    return this.getByLabel('Password');
  }

  /**
   * Returns the submit button locator.
   */
  public submit(): Locator {
    return this.getByRole('button', { name: /submit/i });
  }

  /**
   * Returns the error message locator.
   */
  public errorMessage(): Locator {
    return this.page.locator('#error');
  }

  /**
   * Fills credentials and submits the login form.
   */
  public async login(user: string, pass: string): Promise<void> {
    await this.username().fill(user);
    await this.password().fill(pass);
    await this.submit().click();
  }
}
