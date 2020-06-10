'use strict';

class Todo {
  constructor() {
    this.items = [];
  }

  genereteId() {
    const uniqueId = Math.trunc(Math.random() * 1e8);

    return uniqueId;
  }

  addItem(title, priority) {
    const newTask = {
      id: this.genereteId(),
      title,
      priority,
    };

    this.items.push(newTask);

    return newTask.id;
  }

  removeItem(id) {
    const length = this.items.length;

    this.items = this.items.filter(task => task.id !== id);

    return length > this.items.length;
  }

  getItem(id) {
    const item = this.items.find(task => task.id);

    return item === undefined ? null : item;
  }

  next() {
    if (!this.items.length) {
      throw new Error('There are no items in the list');
    }

    return this.items.reduce((accum, current) => {
      if (current.priority > accum.priority) {
        return current;
      }

      return accum;
    });
  }
}

module.exports = {
  Todo,
};
