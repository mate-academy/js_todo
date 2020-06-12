'use strict';

class Todo {
  constructor() {
    this.list = [];
    this.count = 1;
  }
  addItem(title, priority) {
    this.list.push({
      'title': title, 'priority': priority, 'id': this.count,
    });

    return this.count++;
  };
  removeItem(id) {
    if (this.list.some(item => item.id === id)) {
      this.list = this.list.filter(item => item.id !== id);

      return true;
    }

    return false;
  }
  getItem(id) {
    const item = this.list.find(currentItem => currentItem.id === id);

    return item || null;
  }
  next() {
    const maxPriorityValue = Math.max(...this.list.map(item => item.priority));
    const maxPriorityItem = this.list.find(item => (
      item.priority === maxPriorityValue
    ));

    return maxPriorityItem || 'error';
  }
}

module.exports = {
  Todo,
};
