'use strict';

class Todo {
  constructor() {
    this.toDoList = [];
    this.idCounter = 0;
  }

  addItem(title, priority) {
    const id = this.idCounter++;

    const item = {
      id,
      title,
      priority,
    };

    this.toDoList[id] = item;

    return item.id;
  }

  removeItem(id) {
    if (this.toDoList[id]) {
      this.toDoList.splice(id, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.toDoList[id] || null;
  }

  next() {
    return this.toDoList.sort((a, b) => b.priority - a.priority)[0];
  }
}

module.exports = {
  Todo,
};
