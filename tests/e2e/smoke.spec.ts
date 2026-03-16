// path: tests/e2e/smoke.spec.ts
import { expect, test } from '../../src/fixtures/baseTest';

test.describe('Smoke suite', () => {
  test('opens docs page from home', async ({ homePage }) => {
    await homePage.open();
    await homePage.expectVisible(homePage.docsLink());
    await homePage.goToDocs();

    await expect(homePage.getByRole('heading', { name: /installation/i })).toBeVisible();
  });
});
