# tokens

Design token starter set for the DS Ops monorepo.

## Token groups included

- Color: brand, neutral, semantic state, and surface/text/border semantic aliases
- Typography: sans/mono families, size scale, line-height scale, font weights
- Spacing: `--space-0` through `--space-12`
- Radius: none, xs, sm, md, lg, xl, pill
- Elevation: `--shadow-0` through `--shadow-4`
- Motion: durations and easing curves
- Modes: theme (`theme-light`, `theme-dark`) and density (`density-comfortable`, `density-compact`)

## Usage

1. Apply theme and density classes on your app shell (`<body>` or root container):

```html
<body class="theme-light density-comfortable"></body>
```

2. Use token variables in component styles:

```scss
.panel {
	background: var(--color-bg-surface);
	color: var(--color-text-primary);
	border-radius: var(--radius-lg);
	padding: var(--space-5);
	box-shadow: var(--shadow-2);
}
```

3. Use typed modes from the library API when toggling classes from TS:

```ts
import {
	DEFAULT_DENSITY_MODE,
	DEFAULT_THEME_MODE,
	type DensityMode,
	type ThemeMode,
} from '@ds-ops-monorepo-poc/tokens';
```

## Notes

- Tokens are defined as CSS custom properties, not SCSS variables.
- SCSS in this repository should use `@use`/`@forward` and avoid `@import`.

## Running unit tests

Run `nx test tokens` to execute the unit tests.
