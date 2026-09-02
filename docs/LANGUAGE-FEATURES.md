# Sass Language Features You Should Know

This project is intentionally more than a mixin library. The examples below cover language features that appear in mature Sass codebases.

## Variables and `!default`

```scss
$brand: #5b5bd6 !default;
```

`!default` means a consumer may configure the variable before the module is first evaluated.

## Lists

```scss
$directions: top, right, bottom, left;

@each $direction in $directions {
  .border-#{$direction} {
    border-#{$direction}: 1px solid currentColor;
  }
}
```

## Maps

```scss
$states: (
  success: #16875d,
  warning: #b7791f,
  danger: #c2413b
);
```

Use `map.get`, `map.has-key`, `map.merge`, and `map.keys` from `sass:map` for structured configuration.

## `@if`, `@else if`, and `@else`

```scss
@mixin density($mode) {
  @if $mode == compact {
    padding: .5rem;
  } @else if $mode == comfortable {
    padding: 1rem;
  } @else {
    @error "Unknown density: #{$mode}";
  }
}
```

## `@for`

```scss
@for $i from 1 through 6 {
  .order-#{$i} { order: $i; }
}
```

## `@each`

```scss
@each $name, $value in $states {
  .text-#{$name} { color: $value; }
}
```

## `@while`

Use `@while` sparingly because `@for` and `@each` usually express intent better.

```scss
$i: 1;
@while $i <= 3 {
  .layer-#{$i} { z-index: $i * 10; }
  $i: $i + 1;
}
```

## Interpolation

```scss
@mixin property($name, $value) {
  #{$name}: $value;
}
```

Interpolation is useful for generated selector names and property names, but avoid using it when plain Sass expressions work.

## Placeholders and `@extend`

```scss
%control-reset {
  border: 0;
  background: none;
  font: inherit;
}

.icon-button {
  @extend %control-reset;
}
```

`@extend` can create surprising selector combinations in large projects. Prefer mixins when you need predictable emitted CSS. Placeholders are still useful for tightly controlled local patterns.

## `@content`

```scss
@mixin supports-hover {
  @media (hover: hover) and (pointer: fine) {
    @content;
  }
}
```

This is how the responsive mixins in the kit wrap arbitrary caller declarations.

## `@error`, `@warn`, and `@debug`

Use `@error` when invalid input must stop compilation. Use `@warn` for suspicious but recoverable input. Keep `@debug` for local development rather than committed production noise.

## `@at-root`

`@at-root` moves emitted rules outside their current nesting context. It is powerful, but often a sign that nesting has become too clever. Use it only when the output structure genuinely requires it.

## Built-in modules

Modern Sass provides namespaced built-ins:

```scss
@use "sass:color";
@use "sass:list";
@use "sass:map";
@use "sass:math";
@use "sass:meta";
@use "sass:string";
```

Prefer these over deprecated global functions.
