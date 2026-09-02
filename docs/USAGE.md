# Usage Guide

## 1. Install Sass

```bash
npm install
```

## 2. Build

```bash
npm run build
```

## 3. Watch during development

```bash
npm run watch
```

## 4. Consume the entire public API

```scss
@use "./scss" as kit;

.card {
  @include kit.surface(kit.space(5));
  color: kit.token("text");
}
```

## 5. Configure a module

Sass variables declared with `!default` can be configured before the module is first loaded:

```scss
@use "./scss/topics/01-variables" with (
  $font-size-root: 18px,
  $radius-md: 1rem
);
```

For large design systems, prefer a dedicated configuration facade rather than configuring many internal files independently.

## 6. Import versus use

Old Sass code frequently uses `@import`. Modern Sass projects should use `@use` and `@forward` because they provide namespaces, deterministic loading, and clearer dependency boundaries.
