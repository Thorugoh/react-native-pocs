import { makeAutoObservable } from "mobx";

export class Todo {
  id = Date.now();
  text = '';
  completed = false;

  constructor(text: string) {
    makeAutoObservable(this);
    this.text = text;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  setText(newText: string) {
      this.text = newText;
  }
}

export class TodoStore {
  todos: Todo[] = [];
  filter = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text: string) {
    if (text.trim()) {
      this.todos.push(new Todo(text));
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  get filteredTodos() {
    switch (this.filter) {
      case 'active':
        return this.todos.filter((todo) => !todo.completed);
      case 'completed':
        return this.todos.filter((todo) => todo.completed);
      default:
        return this.todos;
    }
  }
}
