'use strict';

class Todo {
  constructor() {
    this.initialId = 1;
    this.list = new Map();
    this.initialTopPriority = -1;
    this.initialTopPriorityItemId = 1;
  }

  addItem(title, priority) {
    const itemId = this.initialId;

    if (priority > this.initialTopPriority) {
      this.initialTopPriority = priority;
      this.initialTopPriorityItemId = itemId;
    }

    this.list.set(itemId, {
      id: itemId,
      title: title,
      priority: priority,
    });
    this.initialId++;

    return itemId;
  }

  removeItem(id) {
    if (!this.list.has(id)) {
      return false;
    } else {
      this.list.delete(id);

      return true;
    }
  }

  getItem(id) {
    return this.list.has(id) ? this.list.get(id) : null;
  }

  next() {
    if (!this.list.size) {
      return new Error('Try to relax, you have no more affairs');
    } else {
      return this.getItem(this.initialTopPriorityItemId);
    }
  }
}

module.exports = {
  Todo,
};
