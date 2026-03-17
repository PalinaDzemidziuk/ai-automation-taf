import { expect, test } from '../../src/fixtures/baseTest';
import { filteringData } from '../../src/fixtures/testData';
import { FilterShopHomePage } from '../../src/pages/FilterShopHomePage';

test.describe('Product filtering', () => {
  test('should show only products priced at or below $40 after applying max-price filter', async ({ page }) => {
    const filterShopHomePage = new FilterShopHomePage(page);

    // Initialization: open filtering shop page
    await filterShopHomePage.open();

    // User actions: apply filter "Price = or < $40"
    await filterShopHomePage.applyMaxPrice(filteringData.maxPrice);

    // Verification: each result price = or < 40
    const itemsCount = await filterShopHomePage.items().count();
    for (let index = 0; index < itemsCount; index += 1) {
      await expect(filterShopHomePage.titleOf(index)).toBeVisible();
      const priceText = await filterShopHomePage.priceOf(index).innerText();
      const price = FilterShopHomePage.parsePrice(priceText);
      expect(price).toBeLessThanOrEqual(filteringData.maxPrice);
    }

    // Verification: there are 4 products
    await expect(filterShopHomePage.items()).toHaveCount(filteringData.expectedProductsCount);
  });
});
