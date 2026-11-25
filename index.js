// Orange Dashboard — near-black theme for Safelight.
//
// Mapped from a darktable CSS theme (Jkrci8VG.css): one structural orange,
// near-black panels, white primary text, and a neutral grey around the photo.
// Tokens are the ones Safelight paints with. The stylesheet only restyles
// dock chrome the CSS described (cards, an orange header rule, radii).
// It does not move panels. That file has no dock arrangement.

const MARK = "--theme-orange-dashboard";

// Active only while this theme's vars are on <html>. Safelight removes them
// when another theme is chosen, so the chrome rules drop out with the colours.
const CHROME_CSS = `
html[style*="${MARK}: 1"] [data-rail] {
  background-color: #0e0e0e;
  border-color: transparent;
}

html[style*="${MARK}: 1"] [data-dock-panel] {
  margin: 4px;
  border: 1px solid #242424;
  border-radius: 6px;
  background-color: #141414;
}

html[style*="${MARK}: 1"] [data-dock-panel] > div:first-child,
html[style*="${MARK}: 1"] .sl-floating-panel > div:first-child {
  height: auto;
  min-height: 34px;
  border: none;
  border-left: 3px solid #f34c19;
  border-radius: 0 4px 4px 0;
  background-color: #1a1a1a;
  padding: 6px 12px;
}

html[style*="${MARK}: 1"] [data-dock-panel] > div:first-child > span.flex-1,
html[style*="${MARK}: 1"] .sl-floating-panel > div:first-child > span.flex-1 {
  text-transform: none;
  letter-spacing: 0.1px;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
}

html[style*="${MARK}: 1"] button:not(.sl-switch):not(.sl-select),
html[style*="${MARK}: 1"] input[type="text"],
html[style*="${MARK}: 1"] input[type="number"],
html[style*="${MARK}: 1"] input[type="search"],
html[style*="${MARK}: 1"] textarea,
html[style*="${MARK}: 1"] .sl-select {
  border-radius: 6px;
}

html[style*="${MARK}: 1"] [data-photo-id].border-text-secondary,
html[style*="${MARK}: 1"] [data-photo-id].border-text-secondary\\/60,
html[style*="${MARK}: 1"] [data-photo-id]:hover {
  border-color: #f34c19;
}

html[style*="${MARK}: 1"] ::-webkit-scrollbar-thumb {
  background-color: #222222;
  border-radius: 6px;
}

html[style*="${MARK}: 1"] ::-webkit-scrollbar-thumb:hover {
  background-color: #f34c19;
}
`;

export function activate(api) {
  api.registerTheme({
    id: "theme-orange-dashboard.theme",
    name: "Orange Dashboard",
    colorScheme: "dark",
    vars: {
      // Library grid and the gap between panel cards.
      "--color-surface-0": "#0e0e0e",
      // Panel rails, thumbnails, top bar.
      "--color-surface-1": "#141414",
      // Panel headers.
      "--color-surface-2": "#1a1a1a",
      // Pressed and selected rows, button fill.
      "--color-surface-3": "#1c1c1c",
      // Hover.
      "--color-surface-4": "#242424",

      "--color-border": "#242424",
      "--color-border-subtle": "rgba(255, 255, 255, 0.05)",

      "--color-text-primary": "#ffffff",
      "--color-text-secondary": "#bababa",
      "--color-text-muted": "#8c8c8c",

      "--color-accent": "#f34c19",
      "--color-accent-hover": "#f6572a",
      "--color-slider-fill": "#f34c19",
      "--color-on-accent": "#ffffff",

      // Develop's surround behind the photo. Separate from the surface ladder.
      "--color-canvas-surround": "#929292",

      "--color-rating": "#f34c19",
      "--color-flag-pick": "#7A9B76",
      "--color-flag-reject": "#C1453C",

      "--color-label-red": "#C1453C",
      "--color-label-yellow": "#D9A05B",
      "--color-label-green": "#7A9B76",
      "--color-label-blue": "#6B8CAE",
      "--color-label-purple": "#9B7AA3",

      "--curve-rgb": "#ffffff",
      "--curve-grid": "#181818",
      "--curve-identity": "#8c8c8c",
      "--curve-ring": "#bababa",
      "--curve-ring-focused": "#f34c19",
      "--curve-point": "#ffffff",
      "--histogram-curve": "rgba(255, 255, 255, 0.25)",
      "--histogram-grid": "#181818",
      "--histogram-zone": "rgba(255, 255, 255, 0.05)",
      "--histogram-label": "#bababa",

      // Marker read by the chrome stylesheet. Not a colour.
      [MARK]: "1",

      // Leave --font-mono unset so Preferences ▸ Interface ▸ Interface font
      // keeps working. In Safelight 3.x that variable is the UI font.
      "--font-code": "'SF Mono', 'Cascadia Code', 'Fira Code', Consolas, ui-monospace, monospace",
    },
  });

  api.registerStylesheet?.({
    id: "theme-orange-dashboard.chrome",
    css: CHROME_CSS,
  });
}

export function deactivate() {}
