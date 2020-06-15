'use strict';

class Todo {
  constructor() {
    this.items = [];
  }
  static generateId() {
    return Math.floor(Math.random() * 1e4);
  }
  addItem(title, priority) {
    const item = {
      title,
      priority,
      id: Todo.generateId(),
    };

    this.items.push(item);

    return item.id;
  }
  removeItem(id) {
    const item = this.items.filter((element) => element.id !== id);

    if (this.items.length > item.length) {
      this.items = item;

      return true;
    }

    return false;
  }
  getItem(id) {
    const item = this.items.find(element => element.id === id);

    return item || null;
  }
  next() {
    if (this.length === 0) {
      throw new Error();
    }

    const highestPriorityItem = this.items.reduce((previous, current) => {
      if (current.priority > previous.priority) {
        return current;
      }

      return previous;
    });

    return highestPriorityItem;
  };
}

module.exports = {
  Todo,
};
