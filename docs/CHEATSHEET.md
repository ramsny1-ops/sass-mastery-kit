# Sass Cheat Sheet

```scss
// Variables
$gap: 1rem;

// Lists
$weights: 400, 500, 700;

// Maps
$colors: ("brand": #5b5bd6, "danger": #c2413b);

// Nesting
.card { &__title { font-weight: 700; } }

// Interpolation
.icon-#{$name} { ... }

// Function
@function double($value) { @return $value * 2; }

// Mixin
@mixin flex-center { display:flex; align-items:center; justify-content:center; }

// Content block
@mixin desktop { @media (min-width: 64rem) { @content; } }

// Loop
@for $i from 1 through 4 { .span-#{$i} { grid-column: span $i; } }

// Each
@each $name, $value in $colors { .text-#{$name} { color: $value; } }

// Conditional
@if $compact { padding: .5rem; } @else { padding: 1rem; }

// Modules
@use "sass:math";
@use "./scss" as kit;
@forward "tokens";
```
