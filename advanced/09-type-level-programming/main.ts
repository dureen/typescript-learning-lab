/**
 * Advanced Lesson 09 – Type-level Programming
 */

type Length<T extends readonly any[]> = T["length"];

type L = Length<[string, number, boolean]>; // 3

type Head<T extends readonly any[]> = T extends [infer H, ...any[]] ? H : never;

type H = Head<[string, number]>; // string

console.log("Type-level computations happen at compile time");
