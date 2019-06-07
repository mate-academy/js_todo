'use strict';

class Todo {
  constructor() {
    this.toDoList = [];
    this.currId = 0;
  }
  addItem(title, priority) {
    const item = {
      title: title,
      priority: priority,
      id: ++this.currId
    }
    this.toDoList.push(item);
    return item.id;
  }
  removeItem(id) {
    const index = this.toDoList.findIndex(item => item.id === id);
    if (index !== -1) {
      this.toDoList.splice(index, 1);
      return true;
    }
    return false;
  }

  getItem(id) {
    return this.toDoList.find(item => item.id === id) || null;
  }

  next() {
    
    if (this.toDoList.length > 1) {
      this.toDoList.sort((item1, item2) => item2.priority - item1.priority);
      return this.toDoList[0];
    }
      
    if (this.toDoList.length === 0) {
      throw new Error('TODOList is Empty');
    }
  }
}