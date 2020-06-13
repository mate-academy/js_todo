'use strict';

class Todo {
  constructor() {
    this.todoList = [];
    this.idMaker = 1;
  }

  addItem(title, priority) {
    const id = ++this.idMaker;

    this.todoList.push({
      title,
      priority,
      id,
    });

    return id;
  }
  removeItem(id) {
    if (!this.todoList.find(item => item.id === id)) {
      return false;
    }

    this.todoList.filter(item => item.id === id);

    return true;
  }
  getItem(id) {
    const itemToGet = this.todoList.find(item => item.id === id);

    if (!itemToGet) {
      return null;
    }

    return itemToGet;
  }
  next() {
    let nextTodo = this.todoList[0];

    if (this.todoList.length === 0) {
      return Error('Todo list is empty!');
    };

    for (const item of this.todoList) {
      if (item.priority > nextTodo.priority) {
        nextTodo = item;
      }
    }

    return nextTodo;
  }
}

module.exports = {
  Todo,
};
