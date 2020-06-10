'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.uniqueId = -1;
  }
  addItem(title, priority) {
    const id = ++this.uniqueId;

    this.list[id] = {
      id,
      priority,
      title,
    };

    return id;
  }
  removeItem(id) {
    const checker = this.list.find(element => element.id === id);

    if (checker !== undefined) {
      this.list.splice(id, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.list[id] || null;
  }
  next() {
    const priorityList = this.list.map(element => element.priority);
    const output = this.list
      .find(element => element.priority === Math.max(...priorityList));

    return output || Error;
  }
}

module.exports = {
  Todo,
};
