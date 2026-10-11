# `/pr-review` Command (Lead Architect Edition)

When the user triggers `/pr-review <PR_NUMBER_OR_URL>`, the AI assistant must execute an uncompromising, **Lead Architect-level PR review with ZERO TOLERANCE for bad practices, technical debt, or outdated patterns**.

---

## 🎯 Review Mandate & Standards

Review the pull request with the authority, rigor, and depth of a **Principal / Lead Architect**. Do not overlook minor flaws or sugarcoat technical debt. Flag any code pattern that violates modern enterprise-grade standards.

### 🛡️ Strict Inspection Checklist

1. **Deprecated & Outdated APIs / Packages (Active Modernization Audit)**:
   - **Flag any deprecated or outdated functions, hooks, components, or libraries** (e.g., deprecated React methods, legacy lifecycle patterns, outdated bundle imports, deprecated third-party packages).
   - **Action Required**: Clearly explain *why* the API/library is deprecated, the security/performance risks of continuing to use it, and provide the exact modern, industry-standard alternative with code examples.

2. **Strict TypeScript Typing (Zero Tolerance for `any`)**:
   - Absolutely **no `any`** or implicit `any`.
   - Every prop, state variable, hook, function parameter, return type, and async response must have explicit, strict typing.
   - Forbid arbitrary type casting (`as unknown as ...` or `as any`); use type guards, discriminated unions, or generics.

3. **No Hardcoded Strings & Magic Numbers**:
   - Zero hardcoded strings: URLs, UI labels, regex patterns, route names, storage keys, and config values must reside in designated constants (`src/constants/`).
   - Zero magic numbers: Timeouts, debounce intervals, animation durations, and dimensions must be named constants.

4. **DRY & Centralized Utilities (`src/utils/`)**:
   - **Zero tolerance for duplicate logic**: Writing identical or overlapping algorithms/helper functions under different names is **strictly forbidden**.
   - All helper functions (formatters, parsers, validators, data mappers, mathematical helpers) **must** reside in a centralized `src/utils/` directory so all components can share them.
   - If a helper or logic is repeated or implemented inline inside a component, immediately flag it to be extracted to `src/utils/`.

5. **Hooks & State Management Hygiene**:
   - **Exhaustive Dependencies**: Strict audit of `useEffect`, `useCallback`, and `useMemo` dependency arrays. Zero missing dependencies and no stale closures.
   - Forbid inline object/array/function creations inside dependency arrays that trigger infinite render loops.
   - No redundant or synchronized state: Derive values during render or with `useMemo`.

6. **Declarations & Clean Code**:
   - No duplicate variable, function, interface, or import declarations.
   - Zero dead code, unused imports, or leftover debugging logs (`console.log`).

7. **Tooling & Formatting Compliance**:
   - Code must cleanly satisfy TypeScript compiler (`tsc --noEmit`), ESLint, and Prettier with zero errors and zero warnings.

---

## Workflow Steps

### 1. Fetch PR Data & Diff
```bash
gh pr view <PR> --json number,title,body,baseRefName,headRefName,author
gh pr diff <PR>
```

### 2. Comprehensive Architectural Audit
Analyze every modified file line-by-line against all 7 mandatory checklist items above.

### 3. Categorize Severity
- 🔴 **Critical**: Runtime crashes, security vulnerabilities, memory leaks, broken builds, infinite render loops, deprecated packages with known CVEs.
- 🟠 **High**: Deprecated/legacy APIs used, duplicate logic across files, hardcoded configuration, missing hook dependencies, unhandled async errors, untyped/`any` code contracts.
- 🟡 **Medium**: Hardcoded strings that belong in constants, helper functions that should be in `src/utils/`, sub-optimal re-renders.
- 🟢 **Low**: Minor naming inconsistencies, micro-optimizations, documentation and comment clarity.

### 4. Generate Tabular Review Report

```markdown
## 🛡️ Lead Architect PR Review

### 📊 Review Summary Metrics
| Severity | Count |
|:---|:---:|
| 🔴 Critical | X |
| 🟠 High | Y |
| 🟡 Medium | Z |
| 🟢 Low | W |
| **Total Issues** | **N** |

---

### 🔍 Architectural Findings & Deprecations

#### 1. [Violation Category: e.g. Deprecated API / Duplicate Logic / Strict Typing] [Issue Title]
- **Severity**: 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low
- **Location**: `src/path/to/file.tsx:L12-L28`
- **Architectural Violation**: 
  <Detailed technical explanation: why this violates current industry standards, deprecation reason, or scalability risk>
- **Modern Alternative & Potential Fix**:
  ```tsx
  // Production-ready, strictly typed modern replacement code
  ```

---

### 🏛️ Lead Architect Compliance Checklist
- [ ] Latest Market Standards & Zero Deprecated APIs
- [ ] Strict TypeScript typing (zero `any`)
- [ ] No hardcoded strings / magic numbers
- [ ] DRY enforced (shared logic centralized in `src/utils/`)
- [ ] Exhaustive & stable hook dependencies
- [ ] Zero duplicate or missing declarations
- [ ] ESLint, Prettier & TypeScript cleanly pass

### 🏁 Verdict
- **🔴 CHANGES REQUESTED** (if any Critical, High, or architectural violations exist)
- **🟢 APPROVED** (only if 0 Critical, 0 High, and all architectural checks pass)
```

### 5. Post Directly to GitHub PR
Save the review to a temporary file and post:
```bash
gh pr comment <PR> -F <PATH_TO_REVIEW_FILE>
```
