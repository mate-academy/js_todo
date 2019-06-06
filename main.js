'use strict'

class Todo {
  constructor() {
    this.items = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.items.push({title: title, priority: priority, id: this.id});
    this.id++;
    return this.id;
  }

  removeItem(id) {
    const index = this.items.findIndex(elem => id === elem.id);
      if (index !== -1) {
        this.items.splice(index, 1);
        return true;
      }
      return false;
  }

  getItem(id) {
    return this.items.find(elem => elem.id === id || null);
  }

  next() {
    if (this.items.length === 0) {
      throw new Error('emptyArray')
    };

    this.items.sort((a, b) => b.priority - a.priority);
    return this.items[0];
  }
}

