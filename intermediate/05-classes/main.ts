/**
 * Intermediate Lesson 05 – Classes
 */

class Dog {
  constructor(
    public name: string,
    public age: number
  ) {}

  bark(): string {
    return `${this.name} says woof!`;
  }
}

const dog = new Dog("Buddy", 3);
console.log(dog.bark());
console.log(dog.name);
