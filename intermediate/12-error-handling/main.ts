/**
 * Intermediate Lesson 12 – Error Handling
 */

class AppError extends Error {
  constructor(
    message: string,
    public code: number
  ) {
    super(message);
    this.name = "AppError";
  }
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new AppError("Division by zero", 400);
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (err) {
  if (err instanceof AppError) {
    console.log(`Error ${err.code}: ${err.message}`);
  } else {
    console.log("Unknown error", err);
  }
}
