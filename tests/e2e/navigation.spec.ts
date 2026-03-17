// path: tests/e2e/navigation.spec.ts
import { expect, test } from '../../src/fixtures/baseTest';

test.describe('Navigation suite', () => {
	test.beforeEach(async ({ homePage }) => {
		await homePage.open();
	});

	test('opens api page from home', async ({ homePage }) => {
		await homePage.openTopNavigationPage(/^api$/i);

		await expect(homePage.getByRole('heading', { name: /api/i })).toBeVisible();
	});

	test('opens community page from home', async ({ homePage, page }) => {
		await homePage.openTopNavigationPage(/community/i);

		await expect(page).toHaveURL(/community/i);
	});
});
