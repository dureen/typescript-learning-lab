/**
 * Beginner Lesson 12 – Type Inference
 */

// TypeScript infers the type
let message = "Hello"; // inferred as string
let count = 42; // inferred as number

const numbers = [1, 2, 3]; // number[]
const mixed = [1, "two", true]; // (string | number | boolean)[]

function identity<T>(value: T): T {
  return value;
}

const result = identity("inferred"); // string
console.log(message, count, numbers, mixed, result);
