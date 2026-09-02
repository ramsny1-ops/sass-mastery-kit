# Sass Mastery Kit

A deep, practical Sass project built to teach and demonstrate modern Sass through reusable production-style code rather than isolated syntax trivia.

## What is inside

- 15 deeply commented topic modules
- 50 practical `.scss` examples
- Modern `@use` and `@forward` architecture
- Variables and design tokens
- Maps and token lookup
- Functions with validation
- Parameterized mixins
- Typography systems
- Flexbox helpers
- CSS Grid helpers
- Responsive and container-query helpers
- Spacing utility generation
- Light/dark theme architecture
- Buttons and forms
- Cards and surface primitives
- Animation helpers with reduced-motion support
- Optional utility classes
- Five composed real-world components
- A demo app entry point
- Documentation, contributing guide, license, and verification script

## Quick start

```bash
npm install
npm run build
npm run watch
```

The default build compiles:

```text
src/main.scss -> dist/main.css
```

## The public API

Import the full toolkit under one namespace:

```scss
@use "./scss" as kit;

.page-header {
  @include kit.flex-between(kit.space(4));
  padding: kit.space(5);
  color: kit.token("text");
  background: kit.token("surface");
}
```

Using a namespace avoids hidden global dependencies and makes code review easier.

## Flexbox mixin with parameters

```scss
.toolbar {
  @include kit.flex(
    $direction: row,
    $justify: space-between,
    $align: center,
    $gap: 1rem,
    $wrap: wrap
  );
}
```

The generated CSS is ordinary CSS. Sass simply removes repetition at build time.

## Functions

```scss
.card {
  padding: kit.space(5);
  color: kit.token("text");
  font-size: kit.rem(18px);
}
```

`token()` and `space()` throw useful compile-time errors for unknown keys, which is safer than silently returning `null`.

## Responsive usage

```scss
.sidebar {
  display: none;

  @include kit.up("lg") {
    display: block;
  }
}
```

The breakpoint source is a map, so one configuration controls the whole project.

## Automatic responsive grid

```scss
.products {
  @include kit.auto-grid(
    $min: 18rem,
    $gap: kit.space(5)
  );
}
```

This often removes the need for several media queries.

## Typography

```scss
.hero-title {
  @include kit.type-heading(
    $min: 2.25rem,
    $max: 5rem,
    $weight: 800
  );
}
```

The helper uses `clamp()` to produce fluid typography between the chosen minimum and maximum.

## Themes

```scss
:root {
  @include kit.theme-light;
}

[data-theme="dark"] {
  @include kit.theme-dark;
}
```

Sass creates the values; CSS variables allow runtime switching without recompiling.

## Generated utilities

Utilities are opt-in:

```scss
@include kit.core-utilities;
@include kit.spacing-utilities("u-");
```

This keeps the default CSS output small.

## Real-world components

The `src/scss/components` folder demonstrates how to compose primitives into a navbar, hero, pricing card, dashboard, and modal. These are intentionally separate from the 15 topic files so the teaching modules stay reusable.

## 50 examples

See `examples/README.md`. Every example is independently compilable:

```bash
npx sass examples/16-auto-grid.scss dist/16-auto-grid.css
```

## Build scripts

```bash
npm run build
npm run build:compressed
npm run watch
npm run check
```

## Folder structure

```text
sass-mastery-kit/
├── src/
│   ├── main.scss
│   └── scss/
│       ├── _index.scss
│       ├── topics/          # 15 core modules
│       └── components/      # real composition examples
├── examples/                # 50 focused examples
├── docs/
├── demo/
├── dist/
├── scripts/
├── package.json
├── CONTRIBUTING.md
├── CHANGELOG.md
└── LICENSE
```

## Design philosophy

Sass is most useful when it reduces structural repetition, validates design tokens, and exposes a small consistent API. It becomes harmful when abstractions are harder to understand than the CSS they replace. This kit intentionally mixes Sass helpers with modern native CSS features instead of trying to turn every declaration into a Sass abstraction.

## Recommended learning order

1. Variables
2. Maps
3. Functions
4. Mixins
5. Typography
6. Flexbox
7. Grid
8. Responsive helpers
9. Spacing generation
10. Themes
11. Buttons
12. Forms
13. Cards
14. Animation
15. Utilities
16. Then inspect the 50 examples and real components

## License

MIT. Use, modify, and adapt the code for personal or commercial work.
