'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.id = 0;
  }

  addItem(title, priority) {
    ++this.id;
    this.list.push({id: this.id, title: title, priority: priority});
    return this.id;
  }

  removeItem(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
        return true; 
      }
    }

    return false;
  }

  getItem(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        return this.list[i];
      }
    }

    return null;
  }

  next() {
    let maxIndex = 0;
    let maxItem = null;

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id > maxIndex) {
        maxIndex = this.list[i].id;
        maxItem = this.list[i];
      }
    }

    return maxIndex === 0 ? `List is empty` : maxItem;
  }
}