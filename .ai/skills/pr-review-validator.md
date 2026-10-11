# `/pr-review-validator` Command (Lead Architect Edition)

When the user triggers `/pr-review-validator <PR_NUMBER_OR_URL>`, the AI assistant must execute an uncompromising, **Lead Architect-level validation audit with ZERO TOLERANCE for regressions, unresolved issues, or legacy/deprecated code**.

---

## 🎯 Validation Mandate & Standards

The validator serves as the strict gatekeeper before any code is approved for merging. It enforces that:
1. **Every single issue, bug, and architectural recommendation** raised in the prior review has been resolved cleanly and permanently.
2. **Fixes did not introduce new technical debt or regressions**, including:
   - Introducing deprecated functions, legacy APIs, or outdated packages.
   - Introducing `any` or loose types.
   - Introducing hardcoded strings or magic numbers.
   - Duplicating helper logic instead of centralizing it in `src/utils/`.
   - Introducing missing hook dependencies or re-render traps.
   - Introducing ESLint or Prettier warnings.
3. Every non-fixed item must be **formally justified**:
   - **⏸️ Deferred**: Must have a valid architectural reason and target follow-up PR/ticket.
   - **⚪ Not Required**: Must have a clear, documented rationale explaining why the recommendation was unnecessary or intentionally skipped.

---

## Workflow Steps

### 1. Fetch Latest Changes & Discussion History
```bash
# Fetch PR discussion and review history
gh pr view <PR> --comments
# or
gh pr view <PR> --json comments,reviews,title,body,baseRefName,headRefName

# Fetch the latest diff
gh pr diff <PR>
```

If operating inside the cloned repo on the PR branch:
```bash
# Run local project verification scripts (e.g., check-all, lint, type-check, test, build)
npm run check-all || (npm run lint && npm run type-check)
npm run build
```

### 2. Item-by-Item Review Audit
Extract all issues, suggestions, and deprecations raised in previous `/pr-review` comments. Audit the current code diff and classify each item into:
- **✅ Fixed**: Fully and cleanly resolved according to modern architectural standards.
- **⏳ Pending**: Unresolved, partially resolved, or solved using an anti-pattern.
- **⚪ Not Required**: Confirmed unnecessary with a sound architectural rationale.
- **⏸️ Deferred**: Formally postponed to a future PR with documented justification.

### 3. Strict Regression & Modern Standards Audit
Scrutinize every line changed during the fixes to ensure:
- **Zero Deprecations**: No deprecated or legacy React/React Native functions, hooks, or libraries were introduced.
- **Strict Typing**: Zero `any`, complete interface coverage.
- **Zero Hardcoded Strings**: All config, routes, URLs, and labels reside in constants.
- **Centralized Utils**: Any new helper functions reside in `src/utils/` without duplication.
- **Hook Safety**: Dependency arrays are exhaustive and stable.
- **Clean Tooling**: `npm run check-all` and `npm run build` pass with zero errors and zero warnings.

### 4. Determine Overall Status
- **🟢 READY TO MERGE**:
  - **`Pending = 0`** (every raised item is Fixed, Deferred with valid reason, or Not Required with valid reason).
  - **Zero new bugs, regressions, or deprecated APIs** introduced.
  - Automated type checks, lint checks, and builds pass cleanly.
- **🔴 NEEDS ATTENTION**:
  - One or more items are still **Pending (`Pending > 0`)**, OR
  - Any new bug, deprecated API, loose type, duplicate logic, hardcoded string, or linting issue was introduced.
  - **Must provide actionable, lead-architect grade code snippets for every pending or newly introduced issue.**

### 5. Generate Tabular Architectural Report

```markdown
## 🛡️ Lead Architect PR Validation Report

### Overall Status: [🟢 READY TO MERGE / 🔴 NEEDS ATTENTION]

---

### 📊 Validation Summary Metrics
| Status | Count |
|:---|:---:|
| ✅ Fixed | X |
| ⏳ Pending | Y |
| ⚪ Not Required | Z |
| ⏸️ Deferred | W |
| **Total Items** | **N** |

---

### 🔍 Itemized Audit Breakdown

| # | Item / Feedback | Status | Architectural Verification & Evidence |
|---|-----------------|:------:|----------------------------------------|
| 1 | [Issue 1 Title] | ✅ Fixed | Properly extracted to `src/utils/...` and strictly typed in commit `xyz` |
| 2 | [Issue 2 Title] | ⚪ Not Required | Confirmed deliberate design: [technical rationale] |
| 3 | [Issue 3 Title] | ⏸️ Deferred | Tracked for PR #2: [rationale] |
| 4 | [Issue 4 Title] | ⏳ Pending | Still contains hardcoded strings / missing hook dependencies |

---

### 🚨 Regression & Modern Standards Audit
- *(Zero regressions or deprecated APIs detected. TypeScript, ESLint, and Prettier cleanly pass with zero errors.)*
  **OR**
- ⚠️ **[Violation Type]**: <Description of newly introduced issue, file location, modern alternative, and impact>

---

### 🛠️ Actionable Fixes for Pending / New Issues (if Status is NEEDS ATTENTION)
```tsx
// Provide ready-to-paste production code to resolve the pending items
```

---

### 🏁 Final Architecture Sign-off
- [✅ All architectural criteria satisfied. Approved and ready to merge! / 🛑 Merge blocked until pending items above are resolved.]
```

### 6. Post Directly to GitHub PR
Save the report to a temporary markdown file and post it to the PR:
```bash
gh pr comment <PR> -F <PATH_TO_REPORT_FILE>
```
