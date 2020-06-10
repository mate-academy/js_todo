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
    const deleted = this.items.filter((item) => item.getId() !== id);

    if (this.items.length > deleted.length) {
      this.items = deleted;

      return true;
    } else {
      return false;
    };
  };

  getItem(id) {
    const item = this.items.find((el) => (el.getId() === id));

    if (!item) {
      return null;
    }

    return item;
  };

  next() {
    if (this.length === 0) {
      throw Error;
    }

    let highestPriority = this.items[0];

    this.items.forEach((item) => {
      if (item.getPriority() > highestPriority.getPriority()) {
        highestPriority = item;
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

  getId() {
    return this.id;
  };
  getTitle() {
    return this.title;
  };
  getPriority() {
    return this.priority;
  };
};

function generateId() {
  return Math.floor(Math.random() * 1e5);
}

module.exports = {
  Todo,
};
