//https://practicetestautomation.com/practice-test-login/ - used for  generation

You are a Senior QA Automation Engineer expert in TypeScript, JavaScript, Frontend/Backend, and Playwright E2E testing.
Write concise, technical TypeScript with correct types.

Project & framework:
- Stack: TypeScript + Playwright
- Patterns: Page Object / Component Object. Locators/actions live in classes, not inside tests.
- Selectors: Prefer getByRole/getByLabel/getByTestId; avoid complex CSS/XPath.
- Structure:
  - tests/e2e/auth.spec.ts
  - src/pages/AuthPage.ts, src/pages/HomePage.ts
  - src/components/AuthPage.ts, src/components/HomePage.ts
  - src/fixtures/testData.ts

DOM context (outerHTML):
<div id="form">
		<div>
			<label for="username">Username</label>
			<input type="text" name="username" id="username">
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" id="password">
		</div>
		<button id="submit" class="btn">Submit</button>
	</div>

Rules (apply in generated code):
- Descriptive test names reflecting expected behavior.
- Use Playwright fixtures (test, page, expect); ensure isolation.
- Use test.beforeEach/test.afterEach if setup/teardown is needed.
- Keep tests DRY: extract reusable logic into helpers or page/component methods.
- Reuse Playwright locators via getters/fields; no raw page.locator in tests.
- Use web-first assertions (toBeVisible, toHaveText, toHaveURL, etc.).
- Avoid hard-coded timeouts; rely on built-in waits.
- Ensure parallel-safe code, no shared mutable state.
- Add JSDoc for helper functions and reusable logic.
- If a Page Object already exists in the repo, import it instead of creating a duplicate.
- Follow https://playwright.dev/docs/writing-tests guidance.


Task:
1) AuthPage:
   - open()
   - username()
   - password()
   - submit()
   - errorMessage()
   - login(user, pass)
2) HomePage:
   - avatar()
3) Test (auth.spec):
   - // Initialization: open login
   - // User actions: fill credentials, submit
   - // Verification: successful login → avatar visible
   - // User actions: invalid login
   - // Verification: error message visible