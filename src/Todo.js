'use strict';

class Todo {
  constructor() {
    this.toDoList = [];
  }

  addItem(title, priority) {
    const id = Number(this.toDoList.length);

    this.toDoList[id] = {
      id: id,
      title: title,
      priority: priority,
    };

    return id;
  }

  removeItem(id) {
    const previousLength = this.toDoList.length;

    this.toDoList = this.toDoList.filter(item => item.id !== id);

    if (previousLength === this.toDoList.length) {
      return false;
    } else {
      return true;
    };
  }

  getItem(id) {
    const neededItem = this.toDoList.find(item => item.id === id);

    return neededItem !== undefined ? neededItem : null;
  }

  next() {
    if (this.toDoList.length === 0) {
      throw new Error('The list is empty');
    }

    const priorities = this.toDoList.map(item => item.priority);
    const maxPriority = Math.max(...priorities);
    const items = this.toDoList.filter(item => item.priority === maxPriority);

    if (items.length === 1) {
      return items[0];
    } else {
      const ids = items.map(item => item.id);
      const minId = Math.min(...ids);

      return items.find(item => item.id === minId);
    }
  }
}

module.exports = {
  Todo,
};
