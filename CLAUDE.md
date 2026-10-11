# Agent Instructions & Commands

All architectural standards and custom slash commands are centrally maintained in the `.ai/skills/` directory:

## Available Commands

- `/pr-review <PR_URL_OR_NUMBER>`: Executes the Lead Architect PR Review workflow defined in `.ai/skills/pr-review.md`.
- `/pr-review-validator <PR_URL_OR_NUMBER>`: Executes the Lead Architect PR Validation workflow defined in `.ai/skills/pr-review-validator.md`.

## Project Rules

Strictly adhere to `.ai/skills/project-rules.md` across all interactions (zero-tolerance for `any`, no hardcoded strings or magic numbers, DRY and centralized `src/utils/`, no deprecated APIs, exhaustive hook dependencies, zero lint/type/formatting errors).
