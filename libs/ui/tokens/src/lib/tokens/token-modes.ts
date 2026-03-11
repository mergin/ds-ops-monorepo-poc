/** Allowed visual themes for the design system token set. */
export type ThemeMode = 'theme-light' | 'theme-dark';

/** Allowed density modes for controls and data-heavy layouts. */
export type DensityMode = 'density-comfortable' | 'density-compact';

/** Default theme mode for first render. */
export const DEFAULT_THEME_MODE: ThemeMode = 'theme-light';

/** Default density mode for first render. */
export const DEFAULT_DENSITY_MODE: DensityMode = 'density-comfortable';
