# Ionic/Stencil build errors when targeting Angular

## Steps to reproduce

```
# build the stencil libary to generate the angular components
cd stencil-library
npm ci
npm run build

# build the angular app
cd ../angular-target
npm ci
npm run build
```

## Issues

See [angular-build-errors.png](./angular-build-errors.png) or [angular-build-errors.txt](./angular-build-errors.txt)

## Desired resolution

Need a way to exclude ionic component types from being generated in the angular output.
When commented out, the Angular builds work and the generated component works.
