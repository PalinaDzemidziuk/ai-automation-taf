You are a Senior QA Automation Engineer.

Project context:
- Stack: TypeScript + Playwright
- Patterns: Page Object Model, Component Object Model
- Golden files:
  - src/pages/PlaywrightHomePage.ts (shows method naming, selectors, JSDoc format)
  - tests/e2e/smoke.spec.ts (shows test organization and imports)

Task:
Generate a new module "Docs" that follows the same conventions.

Requirements:
1. Create src/pages/DocsPage.ts with methods:
   - openSection(section: string)
   - closeSubsection(module: string)
   - openSubsection(module: string)
2. Create tests/e2e/docs.spec.ts with:
   - beforeEach: navigate to the Docs Page
   - test: verify the chosen section is opened
3. Ensure selectors use getByRole/getByLabel/getByTestId only.
4. Follow structure, comments, and import style from the golden files.
5. Output final code blocks only, with file headers (// path: ...).
6. Avoid placeholder data; use reusable test fixtures if possible.

Optional context:
<outerHTML>
    <ul class="theme-doc-sidebar-menu menu__list">
        <li class="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item">
            <div class="menu__list-item-collapsible">
            <a
                href="#"
                class="menu__link menu__link--sublist menu__link--sublist-caret"
                role="button"
                aria-expanded="true"
            >
                Getting Started
            </a>
            </div>
        <ul
        class="menu__list"
        style="display: block; overflow: visible; height: auto; will-change: height; transition: height 285ms ease-in-out;"
        >
        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a class="menu__link" tabindex="0" href="/docs/intro">
            Installation
            </a>
        </li>
        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a class="menu__link" tabindex="0" href="/docs/writing-tests">
            Writing tests
            </a>
        </li>
        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
            <a class="menu__link" tabindex="0" href="/docs/codegen-intro">
            Generating tests
            </a>
        </li>
        </ul>
    </ul>
</outerHTML>

