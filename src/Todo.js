'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.list.push({
      title: title,
      priority: priority,
      id: this.id,
    });

    return this.id++;
  }

  removeItem(id) {
    const index = this.list.filter(item => item.id !== id);

    if (index > -1) {
      this.list.splice(index, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.list.find(item => item.id === id) || null;
  }

  next() {
    this.list.sort((a, b) => b.priority - a.priority);

    if (!this.list.length) {
      throw new Error('Array is empty');
    }

    return this.list[0];
  }
}

module.exports = {
  Todo,
};
