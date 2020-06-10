'use strict';

class Todo {
  constructor() {
    this.toDoList = new Map();
    this.id = 1;
  }

  addItem(title, priority) {
    this.toDoList.set(this.id, {
      'id': this.id, 'title': title, 'priority': priority,
    });

    return this.id++;
  }

  removeItem(id) {
    if (this.toDoList.has(id)) {
      this.toDoList.delete(id);

      return true;
    } else {
      return false;
    }
  }

  getItem(id) {
    if (this.toDoList.has(id)) {
      return this.toDoList.get(id);
    } else {
      return null;
    };
  }

  next() {
    const result = [];

    for (const item of this.toDoList.values()) {
      result.push(item);
    };

    const maxPriority = result.sort((a, b) => b.priority - a.priority)[0];

    return maxPriority || 'Empty list';
  }
}

module.exports = {
  Todo,
};
