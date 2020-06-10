'use strict';

class Todo {
  constructor() {
    this.todos = [];
    this.idCounter = 0;
  }

  addItem(title, priority) {
    const id = this.idCounter++;

    this.todos[id] = {
      id, title, priority,
    };

    return id;
  }

  removeItem(id) {
    const checkIdTodo = this.todos.find(todo => todo.id === id);

    if (checkIdTodo) {
      this.todos.splice(id, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.todos[id] || null;
  }

  next() {
    const priorityTodo = this.todos
      .reduce((accum, todo) => accum.priority < todo.priority
        ? todo : accum
      );

    return priorityTodo || Error;
  }
}

module.exports = {
  Todo,
};
