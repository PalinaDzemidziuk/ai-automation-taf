// path: tests/e2e/navigation.spec.ts
import { expect, test } from '../../src/fixtures/baseTest';
import { Api } from '../../src/pages/Api';
import { Community } from '../../src/pages/Community';

test.describe('Navigation suite', () => {
	test.beforeEach(async ({ homePage }) => {
		await homePage.open();
	});

	test('opens api page from home', async ({ page }) => {
		const apiPage = new Api(page);
		await apiPage.expectVisible(apiPage.apiLink());
		await apiPage.goToApi();

		await expect(apiPage.getByRole('heading', { name: /api/i })).toBeVisible();
	});

	test('opens community page from home', async ({ page }) => {
		const communityPage = new Community(page);
		await communityPage.expectVisible(communityPage.apiLink());
		await communityPage.goToApi();

		await expect(page).toHaveURL(/community/i);
	});
});
