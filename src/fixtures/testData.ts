// path: src/fixtures/testData.ts

/** Valid credentials for the practice test login page. */
export const validUser = {
  username: 'student',
  password: 'Password123',
} as const;

/** Invalid credentials for negative login tests. */
export const invalidUser = {
  username: 'incorrectUser',
  password: 'incorrectPassword',
} as const;

/** Valid SauceDemo user for checkout flow scenarios. */
export const sauceDemoUser = {
  username: 'standard_user',
  password: 'secret_sauce',
} as const;

/** Product and expected labels used in checkout flow tests. */
export const checkoutFlowData = {
  productName: 'Sauce Labs Bolt T-Shirt',
  cartTitle: 'Your Cart',
  checkoutTitle: 'Checkout: Your Information',
} as const;

/** Product filtering data for shopping page scenarios. */
export const filteringData = {
  maxPrice: 40,
  expectedProductsCount: 4,
} as const;
