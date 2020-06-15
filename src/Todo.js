/* eslint-disable no-console */
'use strict';

class Todo {
  // write code here
  constructor() {
    this.todoList = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.todoList.push({
      title: title,
      priority: priority,
      id: ++this.id,
    });

    return this.id;
  }

  removeItem(id) {
    return this.todoList.length !== this.todoList.filter(
      item => item.id !== id
    ).length;
  }

  getItem(id) {
    return this.todoList.find(item => item.id === id) || null;
  }

  next() {
    this.todoList.sort((a, b) => b.priority - a.priority);

    if (!this.todoList.length) {
      throw new Error('List is empty');
    }

    return this.todoList[0];
  }
}

module.exports = {
  Todo,
};
