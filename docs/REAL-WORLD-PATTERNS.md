# Real-World Patterns

## Flexible toolbar

Use `flex-between` for two logical groups and `cluster` inside each group.

## Responsive card grid

Use `auto-grid()` instead of writing repeated breakpoint declarations when cards only need a minimum width.

## Dashboard shell

Use explicit CSS Grid tracks for the large structure, then mixins for recurring inner layouts.

## Theme architecture

Use Sass for default values and compile-time calculations. Use CSS custom properties for runtime theme switching.

## Component API design

Prefer mixins with a small, meaningful parameter surface. A mixin with 20 positional arguments becomes harder to understand than regular CSS. Use defaults and named arguments at call sites.

```scss
@include kit.flex(
  $direction: row,
  $justify: space-between,
  $align: center,
  $gap: 1rem,
  $wrap: wrap
);
```
