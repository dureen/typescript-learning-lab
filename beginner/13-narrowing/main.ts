/**
 * Beginner Lesson 13 – Narrowing
 */

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // narrowed to string
  } else {
    console.log(value.toFixed(2)); // narrowed to number
  }
}

function process(input: string | null) {
  if (input === null) {
    console.log("No input");
    return;
  }
  console.log(input.trim()); // narrowed to string
}

printValue("hello");
printValue(3.14159);
process(null);
process("  TypeScript  ");
