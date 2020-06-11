'use strict';

class Todo {
  constructor() {
    this.items = [];
  }

  static generateId() {
    return Math.floor(Math.random() * 1e5);
  }

  addItem(title, priority) {
    const item = {
      id: Todo.generateId(),
      title,
      priority,
    };

    this.items.push(item);

    return item.id;
  };

  removeItem(id) {
    const filteredItems = this.items.filter((item) => item.id !== id);

    if (this.items.length > filteredItems.length) {
      this.items = filteredItems;

      return true;
    }

    return false;
  };

  getItem(id) {
    const item = this.items.find((el) => (el.id === id));

    return item || null;
  };

  next() {
    if (this.length === 0) {
      throw Error;
    }

    const highestPriority = this.items.reduce((previous, current) => {
      if (current.priority > previous.priority) {
        return current;
      }

      return previous;
    });

    return highestPriority;
  };
}

module.exports = {
  Todo,
};
