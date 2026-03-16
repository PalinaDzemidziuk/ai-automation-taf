// path: tests/e2e/docs.spec.ts
import { test } from '../../src/fixtures/baseTest';

test.describe('Docs suite', () => {
  test.beforeEach(async ({ docsPage }) => {
    await docsPage.open();
  });

  test('verifies the chosen section is opened', async ({ docsPage }) => {
    await docsPage.openSection('Getting Started');
    await docsPage.toggleSection('Installation', 'open');
    await docsPage.expectSubsectionOpened('Installation');
  });
});
