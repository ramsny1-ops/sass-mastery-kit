# Sass Style Guide

1. Prefer `@use` and `@forward` over `@import`.
2. Use Sass built-in modules such as `sass:math`, `sass:map`, and `sass:color`.
3. Keep design tokens semantic and centralized.
4. Use functions for calculations; use mixins for emitted declarations.
5. Avoid nesting deeper than three levels in application code.
6. Do not use mixins merely to rename one CSS declaration.
7. Prefer CSS custom properties when a value must change at runtime.
8. Keep generated utility output bounded.
9. Include reduced-motion handling for non-essential motion.
10. Document non-obvious parameters and units.
