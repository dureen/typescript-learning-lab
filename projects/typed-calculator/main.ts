/**
 * Typed Calculator project
 */

type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
  }
}

console.log(calculate(10, 5, "add"));
console.log(calculate(10, 2, "divide"));
