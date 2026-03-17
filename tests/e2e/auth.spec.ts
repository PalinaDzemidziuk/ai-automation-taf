import { test } from '../../src/fixtures/baseTest';
import { validUser, invalidUser } from '../../src/fixtures/testData';

test.describe('Login Page', () => {
  test.beforeEach(async ({ authPage }) => {
    await authPage.open();
  });

  test('should login with valid credentials', async ({ authPage, postLoginHomePage }) => {
    await authPage.login(validUser.username, validUser.password);
    await postLoginHomePage.expectVisible(postLoginHomePage.loginSuccessMessage());
  });

  test('should show error with invalid credentials', async ({ authPage }) => {
    await authPage.login(invalidUser.username, invalidUser.password);
    await authPage.expectVisible(authPage.errorMessage());
  });
});
