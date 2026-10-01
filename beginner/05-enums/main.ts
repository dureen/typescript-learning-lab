/**
 * Beginner Lesson 05 – Enums
 */

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Status {
  Pending = "PENDING",
  Active = "ACTIVE",
  Done = "DONE",
}

const move = Direction.Up;
console.log("Direction:", move, Direction[move]);

const current: Status = Status.Active;
console.log("Status:", current);
