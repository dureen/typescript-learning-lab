# 11 – Library Design Tips

When designing TypeScript libraries:

1. Prefer type inference over explicit annotations for public APIs when possible.
2. Use generics wisely – constrain them.
3. Export both types and values clearly.
4. Provide good `.d.ts` files.
5. Avoid `any` in public surface.
6. Document with JSDoc for better IntelliSense.
7. Consider dual ESM/CJS packages.

Example good public API style:

```ts
export function createId(): string;
export type User = { id: string; name: string };
```
