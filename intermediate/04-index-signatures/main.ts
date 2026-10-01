/**
 * Intermediate Lesson 04 – Index Signatures
 */

interface StringMap {
  [key: string]: string;
}

interface NumberDictionary {
  [index: number]: string;
  length: number;
}

const dict: StringMap = {
  hello: "world",
  foo: "bar",
};

console.log(dict["hello"]);
console.log(dict.foo);
