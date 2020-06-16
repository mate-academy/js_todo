'use strict';

class Todo {
  constructor() {
    this.todo = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.todo.push({
      title: title,
      priority: priority,
      id: this.id,
    });

    return this.id++;
  }

  removeItem(id) {
    const deleted = this.todo.filter(value => value.id !== id);

    if (this.todo.length > deleted.length) {
      this.todo = deleted;

      return true;
    }

    return false;
  }

  getItem(id) {
    const item = this.todo.find((elements) => (elements.id === id));

    return item || null;
  };

  next() {
    if (this.length === 0) {
      throw Error;
    }

    this.todo.sort((a, b) => b.priority - a.priority);

    return this.todo[0];
  }
}

module.exports = {
  Todo,
};
