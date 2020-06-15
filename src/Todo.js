'use strict';

class Todo {
  constructor() {
    this.list = new Map();
    this.id = 0;
  }

  addItem(title, priority) {
    this.list.set(++this.id, {
      title, priority,
    });

    return this.id;
  }

  removeItem(id) {
    if (!this.list.has(id)) {
      return false;
    }
    this.list.delete(id);

    return true;
  }

  getItem(id) {
    if (this.list.has(id)) {
      return {
        id, ...this.list.get(id),
      };
    }

    return null;
  }

  next() {
    if (this.list.size === 0) {
      return new Error('List of items is empty!');
    }

    const arrayList = Array.from(this.list);
    let highestPriority = arrayList[0][1].priority;

    for (let i = 0; i < arrayList.length; i++) {
      if (highestPriority < arrayList[i][1].priority) {
        highestPriority = arrayList[i][1].priority;
      }
    }

    const priorityItem = arrayList.filter(item => (
      item[1].priority === highestPriority
    ));

    return {
      id: priorityItem[0][0],
      priority: priorityItem[0][1].priority,
      title: priorityItem[0][1].title,
    };
  }
}

module.exports = {
  Todo,
};
