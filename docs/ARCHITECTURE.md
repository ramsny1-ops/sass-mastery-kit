# Architecture

The project separates build-time primitives from component code.

- `topics/` contains the 15 reusable knowledge modules.
- `_index.scss` forwards the public API.
- `components/` demonstrates real application composition.
- `main.scss` is the application entry point.
- `examples/` contains 50 isolated usage examples.
- `dist/` is generated output and should not be hand-edited.

## Dependency direction

Components may depend on the public API. Topic modules should depend only on Sass built-ins or lower-level topic modules. Avoid circular dependencies.

## Why namespaces matter

`@use "scss" as kit` makes ownership obvious:

```scss
padding: kit.space(4);
@include kit.flex-between;
```

This is much safer in large codebases than global mixin and variable names.
