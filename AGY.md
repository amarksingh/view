# @ostro/view — Antigravity AI Architecture & Knowledge Base

> **Package Name**: `@ostro/view`
> **Version**: `1.0.1`
> **Role in Ecosystem**: Modular Core Framework Library

---

## 1. Package Purpose & Overview
Template view rendering engine supporting Nunjucks, Twig, EJS, Pug, and Blade-compatible templates.

- **Primary Architectural Patterns**: Adapter pattern, view caching, view composer callbacks.
- **Key Exported Entities**: `ViewManager`, `ViewAdapter`, `NunjucksAdapter`, `TwigAdapter`

---

## 2. Dependencies & Interoperability
- **Direct Dependencies**:
  - `@ostro/support`: `^1.0.2`
  - `bluebird`: `^3.7.2`
  - `lodash.get`: `^4.4.2`
- **Framework Consumers**: Consumed across the OstroJS ecosystem via `@ostro/framework` and direct imports.

---

## 3. Directory & Source Layout
```text
origin/view/
├── FileNotFoundException.ts
├── InvalidArgumentException.ts
├── adapter/ejs.ts
├── adapter/handlebar.ts
├── adapter/nunjucks.ts
├── adapter/pug.ts
├── adapter/twig.ts
├── viewAdapter.ts
├── viewManager.ts
├── viewServiceProvider.ts
```

---

## 4. TypeScript Typing & Code Standards
1. **Access Modifiers**: All class properties and methods declare explicit visibility (`public`, `protected`, `private`).
2. **Inheritance & Overrides**: Classes overriding base class methods use the `override` keyword to safeguard contracts.
3. **Immutability**: Constant lookup tables and static registries use `readonly` and strict record types.
4. **No Implicit Any**: Public APIs avoid `any` in favor of generics (`<T = unknown>`) and typed contracts from `@ostro/contracts`.
5. **Contract Binding**: Core managers implement contracts from `@ostro/contracts/view/*`.

---

## 5. Development & Verification Guide
- **Compile / Build**: `npm run build` (runs `rm -rf build && npx tsc -p tsconfig.build.json`)
- **Run Tests**: `npm test` (executes Jest with 100% coverage target via `c8`)
- **Published Artifacts**: Target output compiled to `./build` with accompanying `.d.ts` declarations and source maps.

---
*Generated for Antigravity AI high-speed codebase comprehension with minimal token consumption.*
