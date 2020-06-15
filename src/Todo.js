/* eslint-disable no-shadow */
'use strict';

class Todo {
  constructor() {
    this.list = new Map();
    this.id = 0;
  }

  addItem(title, priority) {
    this.list.set(++this.id, {
      title,
      priority,
    });

    return this.id;
  }

  removeItem(id) {
    return this.list.delete(id);
  }

  getItem(id) {
    if (this.list.has(id)) {
      return {
        id, ...this.list.get(id),
      };
    }

    return null;
  }

  next() {
    const priorityList = [];

    for (const key of this.list.entries()) {
      priorityList.push(key[1].priority);
    }

    const max = Math.max(...priorityList);

    for (const key of this.list.entries()) {
      if (key[1].priority === max) {
        key[1].id = key[0];

        return key[1];
      }
    }
  }
}

module.exports = {
  Todo,
};
