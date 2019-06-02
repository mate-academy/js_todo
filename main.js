"use strict";

class Todo {
  constructor() {
    this.list = [];
    this.id = 1;
  }

  addItem(title, priority) {
    const item = {
      id: this.id,
      title: title,
      priority: priority
    };

    this.id++;
    this.list.push(item);

    return item.id;
  }

  removeItem(id) {
    const index = this.list.findIndex((item, i)=> {
      if (item.id === id) {
        return i;
      }
    });
    if (!index) {
      return false;
    }
    this.list.splice(index, 1);
    return true;
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
    if (this.list.length === 0) {
      throw new Error();
    }
    const highestPriority = this.list.reduce(
      (acc, curObj, index) => {
        if (curObj.priority > acc.priority) {
          acc.priority = curObj.priority;
          acc.index = index;
        }
        return acc;
      },
      { priority: null, index: null }
    );
    return this.list[highestPriority.index];
  }
}
