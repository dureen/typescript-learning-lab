/**
 * Simple typed Todo API (in-memory)
 */

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Todo[] = [];
let nextId = 1;

function addTodo(title: string): Todo {
  const todo: Todo = { id: nextId++, title, completed: false };
  todos.push(todo);
  return todo;
}

function toggleTodo(id: number): Todo | undefined {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  return todo;
}

const t1 = addTodo("Learn TypeScript");
const t2 = addTodo("Build a project");
toggleTodo(t1.id);

console.log(todos);
