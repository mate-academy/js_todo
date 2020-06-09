'use strict';

class Todo {
  constructor() {
    this.list = [];
  }

  addItem(title, priority) {
    let id = this.list.length + 1;

    while (this.list.some(item => item.id === id)) {
      id = Math.ceil(Math.random() * (this.list.length + 1));
    }

    this.list.push({
      title,
      priority,
      id,
    });

    return id;
  }

  removeItem(id) {
    const checkItem = item => item.id !== id;

    if (this.list.some(checkItem)) {
      return false;
    }

    this.list.filter(checkItem);

    return true;
  }

  getItem(id) {
    return this.list.find(item => item.id === id) || null;
  }

  next() {
    return this.list.reduce((previous, current) =>
      current.priority > previous.priority ? current : previous)
      || Error;
  }
}

module.exports = {
  Todo,
};
