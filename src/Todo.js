/* eslint-disable no-shadow */
'use strict';

let id = 0;

function idGenerator() {
  id++;

  return id;
}

class Todo {
  constructor() {
    this.list = new Map();
  }

  addItem(title, priority) {
    this.list.set(idGenerator(), {
      id,
      title,
      priority,
    });

    return id;
  }

  removeItem(id) {
    return this.list.delete(id);
  }

  getItem(id) {
    return id && this.list.get(id) !== undefined ? this.list.get(id) : null;
  }

  next() {
    const priorityList = [];

    for (const p of this.list.entries()) {
      priorityList.push(p[1].priority);
    }

    const max = Math.max.apply(null, priorityList);

    for (const p of this.list.entries()) {
      if (p[1].priority === max) {
        return p[1];
      }
    }
  }
}

module.exports = {
  Todo,
};
