'use strict';

class Todo {
  constructor() {
    this.todoList = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.todoList.push({
      title: title,
      priority: priority,
      id: this.id,
    });

    return this.id++;
  }

  removeItem(id) {
    const removed = this.todoList.filter(item => item.id !== id);

    if (this.todoList.length > removed.length) {
      this.todoList = removed;

      return true;
    }

    return false;
  }

  getItem(id) {
    const item = this.todoList.find((items) => (items.id === id));

    return item || null;
  };

  next() {
    if (this.length === 0) {
      throw Error;
    }

    this.todoList.sort((a, b) => b.priority - a.priority);

    return this.todo[0];
  }
}

module.exports = {
  Todo,
};
