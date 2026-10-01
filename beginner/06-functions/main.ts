/**
 * Beginner Lesson 06 – Functions
 */

function greet(name: string = "World"): string {
  return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

console.log(greet());
console.log(greet("TypeScript"));
console.log(add(3, 5));
console.log(multiply(4, 6));
