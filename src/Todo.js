'use strict';

class Todo {
  constructor() {
    this.elements = [];
    this.lastID = 0;
  }

  addItem(title, priority) {
    const id = this.lastID;

    this.elements[this.lastID] = {
      id,
      title,
      priority,
    };

    return this.lastID++;
  }

  removeItem(id) {
    if (this.elements[id]) {
      this.elements[id] = null;

      return true;
    }

    return false;
  }

  getItem(id) {
    if (this.elements[id]) {
      return (
        this.elements[id]
      );
    }

    return null;
  }

  next() {
    return this.elements.sort((a, b) => {
      return b.priority - a.priority;
    })[0];
  }
}

module.exports = {
  Todo,
};
