/**
 * Intermediate Lesson 10 – Function Overloads
 */

function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  }
  return value.toFixed(2);
}

console.log(format("  hello  "));
console.log(format(3.14159));
