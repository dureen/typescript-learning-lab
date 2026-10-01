/**
 * Beginner Lesson 04 – Arrays & Tuples
 */

const fruits: string[] = ["apple", "banana", "cherry"];
fruits.push("date");
console.log("Array:", fruits);

const numbers: Array<number> = [1, 2, 3];
console.log("Numbers:", numbers);

// Tuple
const point: [number, number] = [10, 20];
console.log("Tuple:", point);

const person: [string, number, boolean] = ["Alice", 25, true];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);
