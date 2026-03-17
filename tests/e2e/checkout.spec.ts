import { expect, test } from '../../src/fixtures/baseTest';
import { Header } from '../../src/components/Header';
import { checkoutFlowData, sauceDemoUser } from '../../src/fixtures/testData';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutFlowLoginPage } from '../../src/pages/CheckoutFlowLoginPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { ProductPage } from '../../src/pages/ProductPage';
import { ShopHomePage } from '../../src/pages/ShopHomePage';

/**
 * Performs a user login for SauceDemo checkout scenarios.
 */
async function loginToShop(loginPage: CheckoutFlowLoginPage): Promise<void> {
  await loginPage.username().fill(sauceDemoUser.username);
  await loginPage.password().fill(sauceDemoUser.password);
  await loginPage.submit().click();
}

test.describe('Checkout flow', () => {
  test('should allow user to add a product and open checkout step one', async ({ page }) => {
    const loginPage = new CheckoutFlowLoginPage(page);
    const shopHomePage = new ShopHomePage(page);
    const productPage = new ProductPage(page);
    const header = new Header(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Initialization: open shop page
    await loginPage.open();

    // User actions: fill credentials, submit
    await loginToShop(loginPage);

    // User actions: go to product page by clicking on product link
    await shopHomePage.productLink(checkoutFlowData.productName).click();

    // User actions: add product to cart
    await expect(productPage.title()).toHaveText(checkoutFlowData.productName);
    await expect(productPage.price()).toBeVisible();
    await productPage.addToCart();

    // Verification: cart badge increments
    await expect(header.cartBadge()).toHaveText('1');

    // User actions: proceed to cart
    await shopHomePage.cartLink().click();

    // Verification: cart title is displayed
    await expect(cartPage.title()).toHaveText(checkoutFlowData.cartTitle);
    await expect(cartPage.items()).toHaveCount(1);

    // User actions: proceed to checkout
    await cartPage.proceedToCheckout();

    // Verification: checkout title is displayed
    await expect(checkoutPage.tital()).toHaveText(checkoutFlowData.checkoutTitle);
    await expect(checkoutPage.continueToPaymentButton()).toBeVisible();
  });
});
