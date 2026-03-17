You are a Senior QA Automation Engineer.

Project & framework:
- Stack: TypeScript + Playwright
- File to fix:
// path: src/utils/dateFormatter.{{ext}}
  if (!match) {
    throw new Error(`Invalid date format "${ddMm}". Expected "DD.MM".`);
  }

Problem:
Function throws on null/undefined input. Must return empty string in that case.

Fix:
- Add null/undefined guard.
- Keep other behavior unchanged.
- Keep function signature consistent with project.
- Output corrected code only.