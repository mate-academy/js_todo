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
    const index = this.list.findIndex(element => element.id === id);

    if (index !== -1) {
      this.list.splice(index, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.list.find(element => element.id === id) || null;
  }

  next() {
    if (this.list.length === 0) {
      throw new Error(`It's empty`);
    }

    return this.list.sort((a, b) => b.priority - a.priority)[0];
  }
}

module.exports = {
  Todo,
};
