'use strict';

class Todo {
  constructor() {
    this.name = {};
    this.priority = {};
    this.lastID = 0;
  }

  addItem(name, priority) {
    this.name[this.lastID] = name;
    this.priority[this.lastID] = priority;

    return this.lastID++;
  }

  removeItem(id) {
    if (this.name[id]) {
      delete this.name[id];
      delete this.priority[id];

      return true;
    } else {
      return false;
    }
  }

  getItem(requestID) {
    const id = requestID;
    const title = this.name[id];
    const priority = this.priority[id];

    if (this.name[id]) {
      return ({
        id, title, priority,
      });
    } else {
      return null;
    };
  }

  next() {
    if (!this.name[0]) {
      return 'Напривеликий жаль, примушений сповістити панство про помилку';
    }

    const allPriority = Object.values(this.priority);
    const id = allPriority.indexOf(Math.max.apply(null, allPriority));
    const priority = Object.entries(this.priority)[id][1];
    const title = Object.entries(this.name)[id][1];

    return ({
      id, title, priority,
    });
  }
}

module.exports = {
  Todo,
};
