/**
 * Beginner Lesson 07 – Objects
 */

const person: { name: string; age: number; city?: string } = {
  name: "Bob",
  age: 30,
};

person.city = "Jakarta";
console.log(person);

// Readonly
const config: { readonly apiKey: string } = { apiKey: "abc123" };
// config.apiKey = "xyz"; // Error
console.log(config.apiKey);
