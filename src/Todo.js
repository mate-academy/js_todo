'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.id++;

    const task = {
      id: this.id,
      title: title,
      priority: priority,
    };

    this.list.push(task);

    return task.id;
  }

  removeItem(id) {
    const deleted = this.list.filter(task => task.id !== id);

    if (this.list.length > deleted.length) {
      this.list = deleted;

      return true;
    }

    return false;
  }

  getItem(id) {
    const lookingTask = this.list.find(task => task.id === id);

    return !lookingTask ? null : lookingTask;
  }

  next() {
    let priorityHigh = this.list[0];

    for (const task of this.list) {
      if (task.priority > priorityHigh.priority) {
        priorityHigh = task;
      }
    }

    return !priorityHigh ? new Error('There are no items') : priorityHigh;
  }
}

module.exports = {
  Todo,
};
