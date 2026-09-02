# Migrating From `@import` to `@use`

Legacy Sass often looks like this:

```scss
@import "variables";
@import "mixins";

.card {
  color: $brand;
  @include flex-center;
}
```

Modern module-style Sass is explicit:

```scss
@use "variables" as vars;
@use "mixins" as mix;

.card {
  color: vars.$brand;
  @include mix.flex-center;
}
```

This project exposes a facade so application code can use one namespace:

```scss
@use "./scss" as kit;

.card {
  padding: kit.space(4);
  @include kit.surface;
}
```

## Why this is better

- A module is evaluated once.
- Members are namespaced.
- Dependencies are visible at the top of each file.
- `@forward` lets library authors control their public API.
- Name collisions are much easier to prevent.

Avoid `as *` in shared libraries unless you have a very small, tightly controlled codebase. Namespaces make dependencies clearer.
