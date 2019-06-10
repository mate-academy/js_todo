"use strict";

class Todo {
  constructor() {
    this.todoList = [];
    this.Ids = 1;
  }

  addItem(title, priority) {
    const newTask = {
      title: title,
      priority: priority
    };

    newTask.id = this.Ids;
    this.todoList.push(newTask);
    this.Ids++;
    return newTask.id;
  }

  removeItem(id) {
    const index = this.finder(id);
    this.todoList.splice(index, 1);
    return index === -1 ? false : true;
  }

  getItem(id) {
    return this.todoList.find((elem) => elem[`id`]) || null;
  }

  next() {
    if (this.todoList.length === 0) {
      throw new Error("Todo list is empty.");
    }
    const sorted = this.todoList.sort((a, b) => a.priority - b.priority);
    return sorted[0];
  }

  finder(id) {
    return this.todoList.findIndex(i => i.id === id);
  }
}
