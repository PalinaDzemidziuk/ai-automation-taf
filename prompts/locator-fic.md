You are a Senior QA Automation Engineer.

Project & framework:
- Stack: TypeScript + Playwright
- File to fix:
// path: src/pages/CheckoutFlowLoginPage.ts
  public password(): Locator {
    return this.getByTestId('#password');
  }

Problem:
Locator is outdated. The element now has data-test="{{newTestId}}".
Our convention is to use stable selectors in Page Objects.

Task:
- Replace locator with data-test equivalent.
- Follow project conventions (Page Object style, stable selectors, DRY).
- Keep class & method signatures unchanged.
- Output corrected code only.
