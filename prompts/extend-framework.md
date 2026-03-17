You are a Senior QA Automation Engineer.

Task:
Extend the existing DocsPage class (import from src/pages/DocsPage.ts).
Do not create a new DocsPage file.  
Add a new method:
- contentModuleLink() → returns locator for the "HTML Test Reports" link (li [href="#html-test-reports"]).
- contentModuleTitle() → returns locator for the "HTML Test Reports" title ([id="html-test-reports"]).


Update tests/e2e/docs.spec.ts to:
1) Open docs page
2) Find HTML Test Reports module
3) Click "HTML Test Reports" link
5) Verify correct module is visible

Rules:
- Import DocsPage, do not recreate it.
- Use the same Page Object pattern already applied in the project.
- Ensure selectors use getByRole/getByLabel/getByTestId only.
- Follow project conventions: locators inside page classes, no raw selectors in tests.
- Output with file headers.

<li><a href="#html-test-reports" class="table-of-contents__link toc-highlight table-of-contents__link--active">HTML Test Reports</a></li>

<h2 class="anchor anchorWithStickyNavbar_LWe7" id="html-test-reports">HTML Test Reports<a href="#html-test-reports" class="hash-link" aria-label="Direct link to HTML Test Reports" title="Direct link to HTML Test Reports">​</a></h2>