'use strict';

class Todo {
  constructor() {
    this.list = new Map();
  }

  _generateId() {
    let id = this.list.size + 1;

    while (this.list.has(id)) {
      id = Math.ceil(Math.random() * (this.list.size + 1));
    }

    return id;
  }

  addItem(title, priority) {
    const id = this._generateId();

    this.list.set(id, {
      title,
      priority,
    });

    return id;
  }

  removeItem(id) {
    if (!this.list.has(id)) {
      return false;
    }

    this.list.delete(id);

    return true;
  }

  getItem(id) {
    return this.list.has(id)
      ? {
        id,
        ...this.list.get(id),
      }
      : null;
  }

  next() {
    let highestPriorityItem = { priority: null };

    for (const [id, value] of this.list.entries()) {
      if (value.priority > highestPriorityItem.priority) {
        highestPriorityItem = {
          id,
          ...value,
        };
      }
    }

    return highestPriorityItem.priority
      ? highestPriorityItem
      : Error;
  }
}

module.exports = {
  Todo,
};
