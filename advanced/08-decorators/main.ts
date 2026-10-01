/**
 * Advanced Lesson 08 – Decorators (experimental)
 * Requires experimentalDecorators in tsconfig
 */

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  // @log  // uncomment when experimentalDecorators is enabled
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
console.log("Decorators require experimentalDecorators: true");
