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

    await this.toggleSection(firstSubsection, 'open');
  }

  /**
   * Opens or closes a docs section or subsection.
   */
  public async toggleSection(section: string, option: string): Promise<void> {
    const normalizedOption = option.trim().toLowerCase();

    if (normalizedOption === 'open') {
      const subsectionLink = this.getByRole('link', { name: section });
      if (await subsectionLink.count()) {
        await subsectionLink.click();
        return;
      }

      const sectionToggle = this.getByRole('button', { name: section });
      const isExpanded = await sectionToggle.getAttribute('aria-expanded');

      if (isExpanded !== 'true') {
        await sectionToggle.click();
      }

      return;
    }

    if (normalizedOption === 'close') {
      const sectionToggle = this.getByRole('button', { name: section });
      const isExpanded = await sectionToggle.getAttribute('aria-expanded');

      if (isExpanded === 'true') {
        await sectionToggle.click();
      }

      return;
    }

    throw new Error(`Unsupported toggle option: ${option}`);
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
