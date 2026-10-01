/**
 * Beginner Lesson 09 – Union Types
 */

type Status = "pending" | "active" | "done";

function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

function handleStatus(status: Status): void {
  if (status === "pending") {
    console.log("Waiting...");
  } else if (status === "active") {
    console.log("In progress");
  } else {
    console.log("Completed");
  }
}

printId(101);
printId("abc-123");
handleStatus("active");
