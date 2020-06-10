'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.list.push(
      {
        title: title,
        priority: priority,
        id: this.id,
      }
    );
    this.id++;

    return this.id - 1;
  }

  removeItem(id) {
    const removedIndex = this.list.findIndex(item => item.id === id);

    if (removedIndex > -1) {
      this.list.splice(removedIndex, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.list.find(item => item.id === id) || null;
  }

  next() {
    if (!this.list.length) {
      throw new Error('empty array');
    }

    this.list.sort((a, b) => b.priority - a.priority);

    return this.list[0];
  }
}

module.exports = {
  Todo,
};
