# 06 – Declaration Files (.d.ts)

Declaration files describe the shape of existing JavaScript libraries.

Example:

```ts
// types/my-lib.d.ts
declare module "my-lib" {
  export function doSomething(value: string): number;
}
```

Then you can import and get full type checking.
