'use strict';

class Todo {
  constructor() {
    this.list = {};
    this.lastId = 0;
  }

  addItem(title, priority) {
    this.list[this.lastId] = {
      title,
      priority,
      id: this.lastId,
    };

    return this.lastId++;
  }

  removeItem(id) {
    if (this.list.hasOwnProperty(id)) {
      delete this.list[id];

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.list[id] ? this.list[id] : null;
  }

  next() {
    return Object.values(this.list).reduce((currentTask, nextTask) => {
      return nextTask.priority > currentTask.priority ? nextTask : currentTask;
    });
  }
}

module.exports = {
  Todo,
};
