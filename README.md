# Orange Dashboard

A near-black theme for [Safelight](https://github.com/anthonyreimche/SafeLight), mapped from a darktable CSS theme. One orange accent (`#f34c19`). The grey around the photo stays the neutral develop surround.

Copy this folder into Safelight's plugins directory as a real directory named `theme-orange-dashboard` (the folder name has to match `id`). Safelight lists only real directories there; a symlink is skipped. Then reload the extension list and apply it via **View ▸ Theme**. No build step; `index.js` is the bundle.

## What carried over

The source file is a colour theme plus chrome: card-like modules, an orange rule on module headers, 6px corners, and an orange scrollbar and thumbnail selection. It does not record which panels sit on which rail, so this extension does not register a layout. Panel arrangement stays whatever you already have (or whatever Advanced Layouts has saved).

## Palette

| Role in the darktable file | Hex | Safelight token |
| --- | --- | --- |
| Lighttable / canvas | `#0e0e0e` | `--color-surface-0` |
| Panels, thumbnails | `#141414` | `--color-surface-1` |
| Module headers | `#1a1a1a` | `--color-surface-2` |
| Selected / buttons | `#1c1c1c` | `--color-surface-3` |
| Hover | `#242424` | `--color-surface-4` |
| Borders | `#242424` | `--color-border` |
| Section divider | white at 5% | `--color-border-subtle` |
| Active text | `#ffffff` | `--color-text-primary` |
| Labels | `#bababa` | `--color-text-secondary` |
| Secondary text | `#8c8c8c` | `--color-text-muted` |
| Accent, slider, stars | `#f34c19` | `--color-accent`, `--color-slider-fill`, `--color-rating` |
| Accent hover | `#f6572a` | `--color-accent-hover` |
| Text on accent | `#ffffff` | `--color-on-accent` |
| Develop surround | `#929292` | `--color-canvas-surround` |

The top bar uses the same token as the panel rails, so it is `#141414` rather than the darker canvas.

Flags and colour labels keep their own colours so picks, rejects and labels stay readable.

`--font-mono` is left unset. In Safelight 3.x that variable is the interface font, and setting it would override **Preferences ▸ Interface ▸ Interface font**. The darktable file asked for Inter / SF Pro at 13px. On macOS the system font is already SF Pro; pick Inter there if you want that face.

The chrome stylesheet (cards, header rule, radii, thumbnail outline, scrollbar) applies only while this theme is active. Dock markup is Safelight's own and can change between releases. Input Styling can still set its own corner radius if that extension's stylesheet loads later.

## License

MIT
