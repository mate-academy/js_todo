'use strict';

class Todo {
  constructor() {
    this.items = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.id++;

    this.items.push(
      {
        id: this.id,
        title: title,
        priority: priority,
      });

    return this.id;
  }

  removeItem(id) {
    const filteredItems = this.items.filter((item) => item.id !== id);

    if (this.items.length > filteredItems.length) {
      this.items = filteredItems;

      return true;
    }

    return false;
  }

  getItem(id) {
    const item = this.items.find(element => element.id === id);

    return item || null;
  }

  next() {
    if (this.items.length === 0) {
      return new Error('There are no items');
    }

    const highPriority = this.items.reduce((prev, element) => {
      if (element.priority > prev.priority) {
        return element;
      }

      return prev;
    });

    return highPriority;
  }
}

module.exports = {
  Todo,
};
