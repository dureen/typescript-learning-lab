/**
 * Advanced Lesson 10 – Runtime vs Types
 *
 * Important: Types are erased at runtime.
 */

type User = { name: string; age: number };

// This only exists at compile time – no runtime code is generated for the type
const user: User = { name: "Alice", age: 25 };

// Runtime validation still needs libraries (zod, io-ts, etc.) or manual checks
function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value
  );
}

console.log(isUser(user));
console.log(isUser({ name: "Bob" })); // false
