// path: tests/e2e/docs.spec.ts
import { expect, test } from '../../src/fixtures/baseTest';

test.describe('Docs suite', () => {
  test.beforeEach(async ({ docsPage }) => {
    await docsPage.open();
  });

  test('verifies the chosen section is opened', async ({ docsPage }) => {
    await docsPage.openSection('Getting Started');
    await docsPage.toggleSection('Installation', 'open');
    await docsPage.expectSubsectionOpened('Installation');
  });

  test('navigates to HTML Test Reports module', async ({ docsPage }) => {
    await docsPage.expectVisible(docsPage.contentModuleLink());
    await docsPage.contentModuleLink().click();

    await expect(docsPage.contentModuleTitle()).toBeVisible();
  });
});
