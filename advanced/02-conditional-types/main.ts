/**
 * Advanced Lesson 02 – Conditional Types
 */

type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

type NonNullable<T> = T extends null | undefined ? never : T;

type C = NonNullable<string | null>; // string

console.log("Conditional types are compile-time only");
