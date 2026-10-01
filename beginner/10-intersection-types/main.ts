/**
 * Beginner Lesson 10 – Intersection Types
 */

type Person = { name: string };
type Employee = { employeeId: number; department: string };

type Staff = Person & Employee;

const staff: Staff = {
  name: "Alice",
  employeeId: 1001,
  department: "Engineering",
};

console.log(staff);
