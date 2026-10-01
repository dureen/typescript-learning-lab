# 07 – Module Augmentation

You can extend existing modules:

```ts
// augment.d.ts
declare module "express-serve-static-core" {
  interface Request {
    user?: { id: string };
  }
}
```

This is useful when adding properties to third-party types.
