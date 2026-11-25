# Orange Dashboard Theme

A near-black theme for [Safelight](https://github.com/anthonyreimche/SafeLight). One orange accent. The grey around the photo stays neutral.

## Install

In Safelight, go to **View ▸ Extensions** and enter:

```
OPGERUIMD97/safelight-orange-dashboard
```

Then apply it via **View ▸ Theme**. No build step; `index.js` is the bundle.

## Palette

| Role | Hex | Safelight token |
| --- | --- | --- |
| Canvas | `#0e0e0e` | `--color-surface-0` |
| Panels | `#141414` | `--color-surface-1` |
| Panel headers | `#1a1a1a` | `--color-surface-2` |
| Selected | `#1c1c1c` | `--color-surface-3` |
| Hover | `#242424` | `--color-surface-4` |
| Borders | `#242424` | `--color-border` |
| Subtle borders | white at 5% | `--color-border-subtle` |
| Body text | `#ffffff` | `--color-text-primary` |
| Labels | `#bababa` | `--color-text-secondary` |
| Placeholder | `#8c8c8c` | `--color-text-muted` |
| Accent | `#f34c19` | `--color-accent` |
| Accent hover | `#f6572a` | `--color-accent-hover` |
| Slider fill | `#f34c19` | `--color-slider-fill` |
| Text on accent | `#ffffff` | `--color-on-accent` |
| Stars | `#f34c19` | `--color-rating` |
| Develop surround | `#929292` | `--color-canvas-surround` |

## Notes

- The top bar uses the same token as the panel rails, so it is `#141414` rather than the darker canvas.
- Flags and colour labels keep their own colours.
- `--font-mono` is left unset, so **Preferences ▸ Interface ▸ Interface font** keeps working (in Safelight 3.x that variable is the interface font).
- Cards, the header rule, corner radius, thumbnail outline and scrollbar apply only while this theme is active. Dock markup is Safelight's own and can change between releases. Input Styling can still set its own corner radius if that extension's stylesheet loads later.
- This theme does not register a layout. Panel arrangement stays whatever you already have.

## Changelog

### 1.0.2

- The description matches the README.

### 1.0.1

- The name in the theme list is Orange Dashboard Theme. The README uses the same sections as the other themes.

### 1.0.0

- First release.

## License

MIT
