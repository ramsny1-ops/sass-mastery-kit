# Advanced Sass Notes

## `@content`

Content blocks turn mixins into wrappers, which is ideal for media queries and feature queries.

## Introspection

The `sass:meta` module can inspect values and dynamically call functions. Use it carefully; explicit APIs are easier to maintain.

## Color APIs

Prefer `sass:color` helpers over legacy global color functions.

## Math

Use `math.div()` for Sass division. Plain `/` should generally remain CSS syntax where appropriate.

## Module configuration

Configuration only affects the first load of a module in a compilation. Design shared entry points carefully when distributing a library.
