/**
 * Beginner Lesson 08 – Type Aliases
 */

type ID = string | number;
type Point = { x: number; y: number };
type User = {
  id: ID;
  name: string;
  email?: string;
};

const user: User = {
  id: 1,
  name: "Alice",
};

const origin: Point = { x: 0, y: 0 };

console.log(user);
console.log(origin);
