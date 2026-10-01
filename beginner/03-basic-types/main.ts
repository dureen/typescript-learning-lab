/**
 * Beginner Lesson 03 – Basic Types
 */

const count: number = 42;
const price: number = 19.99;
const message: string = "TypeScript is fun";
const isActive: boolean = false;
const nothing: null = null;
const notDefined: undefined = undefined;

console.log(typeof count, count);
console.log(typeof price, price);
console.log(typeof message, message);
console.log(typeof isActive, isActive);
console.log(nothing, notDefined);

// any / unknown
let flexible: any = "hello";
flexible = 123;

let safe: unknown = "world";
if (typeof safe === "string") {
  console.log(safe.toUpperCase());
}
