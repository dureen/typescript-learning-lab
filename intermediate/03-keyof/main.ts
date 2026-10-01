/**
 * Intermediate Lesson 03 – keyof
 */

type Person = {
  name: string;
  age: number;
  city: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "city"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 25, city: "Jakarta" };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
