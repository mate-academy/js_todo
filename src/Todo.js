'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.idCount = 1;
  }
  addItem(title, priority) {
    this.list.push({
      'title': title, 'priority': priority, 'id': this.idCount,
    });
    this.idCount++;

    return this.idCount - 1;
  };
  removeItem(id) {
    if (this.list.some(item => item.id === id)) {
      this.list = this.list.filter(item => item.id !== id);

      return true;
    } else {
      return false;
    }
  }
  getItem(id) {
    const findElem = this.list.find(item => item.id === id);

    return (findElem !== undefined)
      ? findElem : null;
  }
  next() {
    const maxPriorityItem = this.list.find(item =>
      item.priority === Math.max(...this.list.map(x => x.priority)));

    return maxPriorityItem || 'error';
  }
}

module.exports = {
  Todo,
};
