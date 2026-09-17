<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Operational guide for coding agents working in this repository.

## 1) Project Snapshot

- Framework: Next.js 16.2.5 (App Router)
- Language: TypeScript (`strict: true`)
- React: 19
- Styling: Tailwind CSS v4 + `app/globals.css`
- Animation: GSAP + `@gsap/react`
- Lint: ESLint 9 + `eslint-config-next`
- Package manager: npm (`package-lock.json` is source of truth)
- Output mode: static export (`output: "export"`)

## 2) Workspace Rules Files

Checked and currently absent:

- `.cursorrules`: not present
- `.cursor/rules/`: not present
- `.github/copilot-instructions.md`: not present

If any of these files appear later, treat them as higher-priority local instructions.

## 3) Setup and Core Commands

Run all commands from repository root: `maison-d/`.

- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Production start: `npm run start`
- Lint: `npm run lint`
- Type check (manual): `npx tsc --noEmit`

Notes:

- `npm run export` currently maps to `next build`.
- Build output is static and intended for static hosting.

## 4) Tests and Single-Test Execution

Current status:

- No test runner configured.
- No `test` script in `package.json`.
- No test files committed at this time.

How to discover tests if added:

- PowerShell: `Get-ChildItem -Recurse -Include *.test.* , *.spec.*`

Recommended future test scripts:

- `"test": "vitest run"`
- `"test:watch": "vitest"`

Single-test patterns (when Vitest is added):

- Single file: `npx vitest run path/to/file.test.ts`
- Single test name: `npx vitest run -t "test name"`

## 5) App Structure and Architecture

- Keep route entries under `app/**/page.tsx`.
- Keep `app/layout.tsx` global and minimal (fonts, providers, shell).
- Put reusable UI in `components/`.
- Keep static assets in `public/`.
- Prefer route-level composition over large monolithic components.
- Keep SEO primitives in App Router metadata APIs.

## 6) Import and Module Conventions

- Prefer alias imports with `@/*` (configured in `tsconfig.json`).
- Import order:
  1. React/Next
  2. third-party
  3. internal alias (`@/...`)
  4. relative imports
- Remove unused imports quickly.
- Use named exports for shared components/utilities.
- Default exports are fine for route files (`page.tsx`, `layout.tsx`).

## 7) TypeScript Rules

- Preserve strictness; do not loosen compiler options.
- Avoid `any`; use explicit types/interfaces.
- Use `type` for unions/intersections, `interface` for object contracts.
- Type props and non-trivial returns explicitly.
- Prefer readonly props objects: `Readonly<{ ... }>`.
- Keep server/client boundaries explicit (`"use client"` only when needed).
- Validate JSON data assumptions before heavy runtime usage.

## 8) React / Next.js Practices

- Default to Server Components.
- Use Client Components only for hooks, browser APIs, or local interaction state.
- Keep JSX shallow; extract repeated UI into subcomponents.
- Use semantic elements (`header`, `main`, `section`, `footer`).
- Use `next/image` with meaningful `alt` text.
- Avoid direct `<head>` edits; use metadata exports.

## 9) Styling and UI System

- Reuse palette variables from `app/globals.css`.
- Reuse typography tokens already configured (Didot/Poppins mapping).
- Use `.container-regular` for horizontal layout consistency.
- Prefer Tailwind utilities over custom one-off CSS.
- Do not introduce a second container/grid system.
- Keep class strings readable (split long class lists by line).

## 10) Naming Conventions

- Components: PascalCase function names.
- Component filenames: kebab-case in `components/`.
- Variables/functions: camelCase.
- Constants: UPPER_SNAKE_CASE only for true constants.
- IDs/anchors: kebab-case.
- Data keys should stay stable once consumed by UI.

## 11) Error Handling and Robustness

- Fail gracefully for optional env values.
- Provide safe fallbacks for URLs/config (e.g., localhost fallback).
- Guard against missing DOM nodes in client effects.
- Avoid uncaught throws in render paths.
- In async code, handle unhappy paths explicitly.

## 12) Content and SEO

- Keep content primarily French unless task specifies otherwise.
- Keep metadata, robots, sitemap, and manifest coherent.
- Keep canonical/OG values aligned with `NEXT_PUBLIC_SITE_URL`.
- Ensure JSON-LD reflects actual business content.

## 13) GSAP Guidance

- Scope animations with refs and `useGSAP`.
- Register plugins once per module if needed.
- Keep motion subtle and performant.
- Avoid animations that harm CLS or accessibility.

## 14) Quality Gate Before Completion

Minimum checks for meaningful changes:

1. `npm run lint`
2. `npm run build` (for structural/routing changes)
3. `npx tsc --noEmit` when types were heavily touched

If tests are introduced, run relevant tests including single-file test where applicable.

## 15) Git Hygiene for Agents

- Keep edits focused and minimal.
- Do not reformat unrelated files.
- Do not modify generated artifacts unless required.
- Do not change lockfile unless dependencies changed intentionally.
- Document non-obvious decisions in final summary/PR notes.

## 16) Quick Completion Checklist

- Correct route/component placement
- No accidental client-component escalation
- UI aligns with existing visual system
- Lint passes
- Build passes when required
- SEO and metadata remain valid
