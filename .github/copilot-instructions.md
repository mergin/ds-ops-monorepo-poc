# DS Ops Monorepo Copilot Instructions

Use these rules for all code generation and refactoring in this repository.

## Stack and architecture

- Use Angular standalone APIs and current Angular best practices.
- Use NgRx for app-level state: actions, reducers, selectors, effects, and facades.
- Keep clear boundaries between `apps/*` and `libs/*`.
- Prefer smart/container components for orchestration and presentational components for rendering.

## Performance rules

- Use `ChangeDetectionStrategy.OnPush` for all components.
- Prefer signals in components and templates for local reactive state.
- Use `computed` for derived values and `effect` only when side effects are required.
- Avoid expensive template expressions; move logic to typed class members.
- Use `track`/`trackBy` for all repeated list rendering.
- Lazy-load feature routes.
- Avoid unnecessary subscriptions; use `async` pipe or signal interop patterns.

## Angular implementation rules

- Every component template must be in its own `.html` file (no inline templates).
- Every component style must be in its own `.scss` file (no inline styles).
- Every Angular service must be in its own folder.
- Each service folder must include a `Spy` test class used in unit tests.
- Use dependency injection, route guards, interceptors, and typed APIs according to Angular guidance.
- Do not introduce deprecated Angular, RxJS, or browser APIs.

## State management and best practices

- Use NgRx for feature and shared app state; do not replace with ad-hoc global service state.
- Keep components thin by consuming facades/selectors instead of dispatching complex logic from templates.
- Keep router query/filter/sort state in NgRx and synchronize with URL when applicable.
- Model state and actions with strict, explicit TypeScript types.

## Typing and code quality

- Everything must be strongly typed.
- Do not use `any`. If absolutely unavoidable, use `unknown` and narrow explicitly.
- Enable strict TypeScript behavior in all new code.
- Keep functions and classes focused and small.
- Prefer composition over inheritance.

## Styling and responsiveness

- All UI must be responsive on mobile, tablet, and desktop.
- Use CSS custom properties (`--token-name`) instead of SCSS variables for theming and design tokens.
- In SCSS, do not use `@import`; always use `@use` and `@forward`.
- Reuse design tokens consistently.

## Accessibility

- Accessibility is a first-class requirement, especially in the UI library.
- Ensure keyboard navigation, visible focus states, and proper semantic HTML.
- Use ARIA only when native semantics are insufficient.
- Validate color contrast and interactive target sizes.

## Documentation expectations

- Everything must be documented.
- Add concise TSDoc/JSDoc for public APIs, facades, services, and non-obvious logic.
- Keep README/docs pages updated when behavior or architecture changes.
- Document architectural decisions and trade-offs for significant features.

## Testing expectations

- Maintain high automated test coverage for all new code.
- Required testing layers:
  - Unit tests
  - Render/component tests
  - End-to-end tests
- Add or update tests with every feature/fix; do not leave behavior untested.
- Prefer deterministic tests with clear assertions and minimal mocking.

## Tooling and standards

- Follow ESLint and Prettier rules at all times.
- Generated code must pass linting and formatting without manual cleanup.
- Keep imports organized and remove dead code.
- Do not add temporary debug code or commented-out blocks in final commits.
