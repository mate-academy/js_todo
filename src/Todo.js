'use strict';

class Todo {
  constructor() {
    this.todo = {};
    this.idCount = 1;
    this.highiestPriority = 0;
  }

  addItem(title, priority) {
    this.todo[this.idCount] = [title, priority];

    if (priority > this.highiestPriority) {
      this.highiestPriority = priority;
    }

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
    for (const item in this.todo) {
      if (this.todo[item][1] === this.highiestPriority) {
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
