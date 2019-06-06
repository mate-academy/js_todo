'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.nextId = 1;
  }

  addItem(title, priority) {
    const item = {
      id: this.nextId,
      title: title,
      priority: priority
    };

    this.nextId++;
    this.list.push(item);

    return item.id;
  }

  removeItem(id) {
    const index = this.list.findIndex((item, i) => {
      return item.id === id;
    });
    if (index === -1) {
      return false;
    }
    this.list.splice(index, 1);
    return true;
  }

  getItem(id) {
    const item = this.list.find(currItem => currItem.id === id);
    if (item) {
      return item;
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
          return curObj;
        }
        return acc;
      },
      { priority: null, index: null }
    );
    return this.list[highestPriority.index];
  }
}
