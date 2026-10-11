# Project Rules & Lead Architect Guidelines

When working in this project, the AI assistant must adhere to the following strict architectural rules:

### 1. Code Formatting & Linting
- Always format all code with **Prettier**.
- Adhere strictly to the ESLint configuration (`.eslintrc.cjs`) with zero warnings and zero errors.
- Run `npm run check-all` before completing tasks to guarantee formatting, type safety, and linting compliance.

### 2. Strict TypeScript & Type Safety
- All components, helper functions, hooks, and data models must have explicit, strict TypeScript types.
- **Strictly forbidden**: `any` or loose, implicit types.
- Create shared interfaces and models in dedicated type files or alongside data definitions.
- `tsc --noEmit` must always pass with zero errors.

### 3. DRY & Centralized Utilities (`src/utils/`)
- **Zero tolerance for duplicate logic**: Repeating helper functions or writing identical logic with different names is **strictly disallowed**.
- All shared helper functions (formatters, parsers, validators, math/string helpers, data transformers) **must** reside in a centralized `src/utils/` folder so any component can import and share them.
- If a helper or computation is needed in more than one place, extract it immediately into `src/utils/`.

### 4. No Hardcoded Strings & Magic Numbers
- Extract all user-facing strings, URLs, routes, storage keys, and API endpoints into dedicated constants (e.g., `src/constants/`).
- Avoid magic numbers (timeouts, animation durations, debounce delays); define named constants.

### 5. Hook Dependencies & State Management
- **Exhaustive Dependencies**: Every hook (`useEffect`, `useCallback`, `useMemo`) must include all referenced variables in its dependency array.
- Avoid unnecessary object/array literals or inline function definitions inside dependency arrays that trigger infinite re-renders.
- Keep state minimal; derive values during render or with `useMemo` rather than synchronizing redundant state via `useEffect`.

### 6. Declarations & Imports
- No duplicate variable, type, or function declarations.
- No dead code, unused imports, or duplicate dependencies.

### 7. Modern Standards & Zero Deprecated APIs
- Flag and avoid deprecated/legacy React, React Native, or third-party functions, components, or libraries. Always recommend and implement modern, industry-standard alternatives with clear architectural rationale.

### 8. Custom Slash Commands
- Strictly follow the workflows defined in `.ai/skills/` for `/pr-review` and `/pr-review-validator`.
