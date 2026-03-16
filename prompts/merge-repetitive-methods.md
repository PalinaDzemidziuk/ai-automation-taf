You are a Senior QA Automation Engineer.

Goal:
Simplify redundant methods in src/pages/DocsPage.ts by merging similar actions into one parameterized function.

Context:
- Stack: TypeScript + Playwright
- Pattern: Page Object Model
- Methods to refactor:
  openSubsection()
  closeSubsection()

Task:
1. Replace all similar methods with a single generic method:
   toggleSection(section:string, option: string)
2. Update all internal calls to use the new parameterized method.
3. Update test files that reference the old methods.
4. Keep logic, selectors, and test results unchanged.
5. Output modified files only with headers in the format:
// path: <relative_path>