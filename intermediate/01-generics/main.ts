/**
 * Intermediate Lesson 01 – Generics
 */

function identity<T>(value: T): T {
  return value;
}

class Box<T> {
  constructor(private value: T) {}
  get(): T {
    return this.value;
  }
}

console.log(identity<string>("hello"));
console.log(identity(42)); // inferred

const stringBox = new Box("TypeScript");
const numberBox = new Box(100);
console.log(stringBox.get(), numberBox.get());
