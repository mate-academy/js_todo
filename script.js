"use strict"

class Todo {
  constructor() {
    this.list = [{id: 1},{id: 2},{id: 3}];
  }

  addItem(title, priority) {
    let item = {};
    item.title = title;
    item.priority = priority;
    this.list.push(item);
    item.id = this.list.length;
    return item.id;
  }

  removeItem(id) {
    const index = this.list.findIndex((elem) => elem.id == id);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
      return index !== -1;
  }

  getItem(id) {
    const elem = this.list.find((elem) => elem.id == id);
    return elem ? elem : null;
  }

  next() {
    try {
      if (!this.list.length) {
        throw new Error("the list is empty");
      }
      this.list.sort((a, b) => {
        if(a.priority > b.priority) return -1;
        if(a.priority < b.priority) return 1;
        if(a.priority === b.priority) return 0;
      });
      return this.list[0];
    } catch (e) {
      return e;
    }
  }
}
