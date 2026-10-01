/**
 * Intermediate Lesson 06 – Inheritance
 */

class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Cat extends Animal {
  speak(): string {
    return `${this.name} says meow`;
  }
}

const cat = new Cat("Whiskers");
console.log(cat.speak());
