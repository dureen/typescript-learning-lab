/**
 * Intermediate Lesson 08 – Modules
 * (This file demonstrates export/import concepts)
 */

export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

export default class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Usage would be:
// import Calculator, { add, PI } from "./main";
console.log("Modules example – see exports above");
console.log(add(2, 3), PI);
