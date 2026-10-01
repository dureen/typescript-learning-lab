/**
 * Beginner Lesson 11 – Interfaces
 */

interface Animal {
  name: string;
  speak(): string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  breed: "Labrador",
  speak() {
    return `${this.name} says woof!`;
  },
};

console.log(dog.speak());
console.log(dog.breed);
