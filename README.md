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

## Workaround

It possible (but tedious) to remove the ionic specific types and proxy classes in the following generated files:

- [./angular-target/src/app/stencil-library/generated/proxies.ts](https://github.com/jacksloan/stencil-ionic-ng-issue/blob/ea0c13c26c728e0145d8eed6225349d92f306f45/angular-target/src/app/stencil-library/generated/proxies.ts)

- [./angular-target/src/app/stencil-library/generated/index.ts](https://github.com/jacksloan/stencil-ionic-ng-issue/blob/e75e90c4c56c4ed876f230bd31f02a033ca161bd/angular-target/src/app/stencil-library/generated/index.ts)
