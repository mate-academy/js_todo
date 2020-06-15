'use strict';

class Todo {
  constructor() {
    this.id = 1;
    this.list = [];
  }

  addItem(title, priority) {
    this.list.push({
      id: this.id,
      title,
      priority,
    });

    return this.id++;
  }

  removeItem(id) {
    const listLength = this.list.length;

    this.list = this.list.filter(item => item.id === id);

    return this.list.length === listLength;
  }

  getItem(id) {
    const item = this.list.find(i => i.id === id);

    return item === undefined ? null : item;
  }

  next() {
    if (!this.list.length) {
      throw Error('List empty');
    }

    function sortPriority(item1, item2) {
      return item2.priority - item1.priority;
    }

    return [...this.list].sort(sortPriority)[0];
  }
}

module.exports = {
  Todo,
};
