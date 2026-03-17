// path: src/components/BaseComponent.ts
import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Base abstraction for reusable UI components.
 */
export class BaseComponent {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Returns a role-based locator.
   */
  public getByRole(role: Parameters<Page['getByRole']>[0], options?: Parameters<Page['getByRole']>[1]): Locator {
    return this.page.getByRole(role, options);
  }

  /**
   * Returns a label-based locator.
   */
  public getByLabel(text: string | RegExp): Locator {
    return this.page.getByLabel(text);
  }

  /**
   * Returns a test-id based locator.
   */
  public getByTestId(testId: string): Locator {
    return this.page.locator(`[data-testid="${testId}"], [data-test="${testId}"]`);
  }

  /**
   * Asserts that an element is visible.
   */
  public async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }
}
