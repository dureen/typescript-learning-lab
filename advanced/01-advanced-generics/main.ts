/**
 * Advanced Lesson 01 – Advanced Generics
 */

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

interface Repository<T> {
  getById(id: string): T | undefined;
  save(item: T): void;
}

class InMemoryRepo<T extends { id: string }> implements Repository<T> {
  private items = new Map<string, T>();

  getById(id: string): T | undefined {
    return this.items.get(id);
  }

  save(item: T): void {
    this.items.set(item.id, item);
  }
}

const repo = new InMemoryRepo<{ id: string; name: string }>();
repo.save({ id: "1", name: "Alice" });
console.log(repo.getById("1"));
console.log(pair("hello", 42));
