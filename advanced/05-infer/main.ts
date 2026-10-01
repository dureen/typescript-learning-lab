/**
 * Advanced Lesson 05 – infer
 */

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ReturnTypeOf<() => string>; // string
type B = ElementType<number[]>; // number

console.log("infer is used at the type level");
