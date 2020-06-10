'use strict';

class Todo {
  constructor() {
    this.todo = {};
    this.idCount = 1;
    this.highiestPriority = 0;
    this.highiestPriorityID = undefined;
  }

  addItem(title, priority) {
    this.todo[this.idCount] = [title, priority];

    if (priority > this.highiestPriority) {
      this.highiestPriority = priority;
      this.highiestPriorityID = this.idCount;
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
    return {
      id: this.highiestPriorityID,
      title: this.todo[this.highiestPriorityID][0],
      priority: this.todo[this.highiestPriorityID][1],
    };
  }
}

module.exports = {
  Todo,
};
