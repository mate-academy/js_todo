'use strict';

class Todo {
  constructor() {
    this.todoList = [];
  }

  addItem(title, priority) {
    const newTask = {
      title: title,
      priority: priority,
      id: parseInt(Math.random() * 10000000)
    }
    this.todoList.push(newTask);
    return newTask.id;
  }

  removeItem(id) {
    this.todoList = this.todoList.filter(item => item.id !== id);
    return this.todoList;
  }

  getItem(id) {
    const searchedTask = this.todoList.find(task => task.id === id);
    return searchedTask;
  }

  next() {
    if (this.todoList.length === 0) {
      throw new Error('empty array!');
    }
    const sortedTasksByPriority = this.todoList.sort((prev, next) => next.priority - prev.priority);
    return sortedTasksByPriority[0];
  }
}
