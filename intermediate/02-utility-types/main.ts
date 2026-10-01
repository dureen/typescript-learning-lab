/**
 * Intermediate Lesson 02 – Utility Types
 */

type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "email">;

const partial: PartialUser = { name: "Alice" };
const preview: UserPreview = { id: 1, name: "Bob" };

console.log(partial, preview);
