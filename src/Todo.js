'use strict';

class Todo {
  constructor() {
    this.items = [];
  }

  addItem(title, priority) {
    const item = new TodoItem(title, priority);

    this.items.push(item);

    return item.id;
  };

  removeItem(id) {
    const deleted = this.items.filter((item) => item.id !== id);

    if (this.items.length > deleted.length) {
      this.items = deleted;

      return true;
    } else {
      return false;
    };
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
      } else {
        return previous;
      }
    });

    return highestPriority;
  };
}

class TodoItem {
  constructor(title, priority) {
    this.id = generateId();
    this.title = title;
    this.priority = priority;
  }
};

function generateId() {
  return Math.floor(Math.random() * 1e5);
}

module.exports = {
  Todo,
};
