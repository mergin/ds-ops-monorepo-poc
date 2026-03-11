# DS Ops Monorepo POC

Angular enterprise front-end portfolio monorepo built with Nx.

This repository is designed to produce two deliverables in one codebase:

- Atlas DS: design-heavy Angular design system
- Ops Portal: data-heavy Angular app with enterprise patterns

## Goals

- Target US front-end hiring expectations for 2026 (enterprise focus)
- Demonstrate strong UI engineering and data-heavy product implementation
- Use an enterprise-credible Angular architecture end-to-end

## Final stack decisions

- Framework: Angular
- Monorepo: Nx (integrated workspace)
- UI approach: custom design system (CDK primitives allowed)
- State management: full NgRx
- Data tables: headless table utility + custom DS visuals
- E2E testing: Playwright

## What is scaffolded now

Workspace root:

- `apps/ops-portal`
- `apps/ops-portal-e2e`
- `libs/ui/tokens`
- `libs/ui/primitives`
- `libs/state/customers`
- `libs/data-access/api-client`

TypeScript path aliases are configured in `tsconfig.base.json`:

- `@ds-ops-monorepo-poc/tokens`
- `@ds-ops-monorepo-poc/primitives`
- `@ds-ops-monorepo-poc/customers`
- `@ds-ops-monorepo-poc/api-client`

## Planned high-level architecture

- `apps/ops-portal`: main app shell and routed experience
- `libs/ui/*`: design system foundations, primitives, and components
- `libs/data-access/*`: API client, auth, interceptors
- `libs/state/*`: NgRx feature stores, effects, selectors, facades
- `libs/feature/*`: routed containers and feature composition
- `docs/*`: architecture decisions, a11y contracts, token/theming docs

## Portfolio deliverables

### 1) Atlas DS (design-heavy)

Must-have scope:

- Foundations: tokens, themes, density, icon system
- Components: Button, FormField/Input, Select/Combobox, Checkbox/Radio/Switch, Dialog, Tooltip, Toast, Tabs, Skeleton/EmptyState, Nav shell
- Accessibility: keyboard behavior, focus management, ARIA when needed

Docs:

- Storybook with usage and a11y notes
- Docs for tokens/theming, overlays, and keyboard contracts

### 2) Ops Portal (data-heavy)

Features:

- Customers module: server-side pagination/sort/filter, saved views, detail tabs
- Audit Log module: date range filtering, large datasets, CSV export flow
- Role-based access: route guards, nav gating, auth/interceptor stub

Architecture:

- NgRx per domain (actions, reducer, selectors, effects, facade)
- Query state in store and mirrored to URL
- Headless table model + DS visuals

Testing:

- Playwright critical-path flows
- CI gates for lint, test, build, and e2e traces on failure

## Development commands

Install dependencies:

```sh
npm install
```

Serve app:

```sh
npx nx serve ops-portal
```

Build app:

```sh
npx nx build ops-portal
```

Run tests:

```sh
npx nx test ops-portal
npx nx run-many -t test -p tokens,primitives,customers,api-client
```

Run lint:

```sh
npx nx lint ops-portal
npx nx run-many -t lint -p tokens,primitives,customers,api-client
```

Show project graph:

```sh
npx nx graph
```

If generated projects do not appear immediately, refresh Nx daemon/cache:

```sh
npx nx reset
```

## Roadmap

1. Create Nx workspace + initial libs (completed)
2. Implement tokens/themes/density switching + Storybook
3. Build 3 keystone components: Button, FormField/Input, Dialog
4. Scaffold Ops Portal shell + auth stub + route guards
5. Build Customers list with NgRx + server-side query state + headless table
6. Add Playwright suite + GitHub Actions PR checks

## Next natural steps

1. Wire full NgRx in `libs/state/customers` (actions/reducer/selectors/effects/facade)
2. Build token system plus theme/density switching in `libs/ui/tokens`
3. Replace placeholder library components with first DS components in `libs/ui/primitives` (Button, FormField/Input, Dialog)
