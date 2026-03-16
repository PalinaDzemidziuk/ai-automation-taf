// path: src/pages/DocsPage.ts
import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for the Playwright Docs page.
 */
export class DocsPage extends BasePage {
  private readonly firstSubsectionBySection: Record<string, string> = {
    'getting started': 'Installation',
  };

  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the docs landing section.
   */
  public async open(): Promise<void> {
    await this.navigate('/docs/intro');
  }

  /**
   * Opens a top-level docs section from the sidebar.
   */
  public async openSection(section: string): Promise<void> {
    const sectionToggle = this.getByRole('button', { name: section });
    const isExpanded = await sectionToggle.getAttribute('aria-expanded');

    if (isExpanded === 'true') {
      await this.openFirstSubsection(section);
      return;
    }

    if (isExpanded !== 'true') {
      await sectionToggle.click();
    }
  }

  /**
   * Opens the first subsection for the provided section.
   */
  public async openFirstSubsection(section: string): Promise<void> {
    const sectionKey = section.trim().toLowerCase();
    const firstSubsection = this.firstSubsectionBySection[sectionKey];

    if (!firstSubsection) {
      throw new Error(`No first subsection mapping found for section: ${section}`);
    }

    await this.openSubsection(firstSubsection);
  }

  /**
   * Closes an expanded docs subsection group.
   */
  public async closeSubsection(module: string): Promise<void> {
    const subsectionToggle = this.getByRole('button', { name: module });
    const isExpanded = await subsectionToggle.getAttribute('aria-expanded');

    if (isExpanded === 'true') {
      await subsectionToggle.click();
    }
  }

  /**
   * Opens a subsection page from the sidebar.
   */
  public async openSubsection(module: string): Promise<void> {
    await this.getByRole('link', { name: module }).click();
  }

  /**
   * Returns a heading locator for a docs subsection.
   */
  public subsectionHeading(module: string): Locator {
    return this.getByRole('heading', { name: new RegExp(module, 'i') });
  }

  /**
   * Asserts that the subsection page is opened.
   */
  public async expectSubsectionOpened(module: string): Promise<void> {
    await expect(this.subsectionHeading(module)).toBeVisible();
  }
}
