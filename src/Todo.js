'use strict';

class Todo {
  constructor() {
    this.todo = {};
    this.idCount = 1;
  }

  addItem(title, priority) {
    this.todo[this.idCount] = [title, priority];

    return this.idCount++;
  }

  removeItem(id) {
    if (!this.todo[id]) {
      return false;
    }

    return delete this.todo[id];
  }

  getItem(id) {
    if (!this.todo[id]) {
      return null;
    }

    return {
      id: id,
      title: this.todo[id][0],
      priority: this.todo[id][1],
    };
  }

  next() {
    let highiestPriority = 0;

    for (const item in this.todo) {
      highiestPriority = this.todo[item][1] > highiestPriority
        ? this.todo[item][1]
        : highiestPriority;
    }

    for (const item in this.todo) {
      if (this.todo[item][1] === highiestPriority) {
        return {
          id: +item,
          title: this.todo[item][0],
          priority: this.todo[item][1],
        };
      }
    }
  }
}

module.exports = {
  Todo,
};
