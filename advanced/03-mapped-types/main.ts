/**
 * Advanced Lesson 03 – Mapped Types
 */

type ReadonlyProps<T> = {
  readonly [K in keyof T]: T[K];
};

type OptionalProps<T> = {
  [K in keyof T]?: T[K];
};

type User = { name: string; age: number };

type ReadonlyUser = ReadonlyProps<User>;
type PartialUser = OptionalProps<User>;

const user: ReadonlyUser = { name: "Alice", age: 25 };
// user.name = "Bob"; // Error

console.log(user);
