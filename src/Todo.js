/* eslint-disable no-console */
'use strict';

// Create the Todo class with the following methods:

// - constructor(): initialization with the empty list of TODO items;
// - addItem(title, priority): adds an item with the given title and
// priority to the list; the method returns the unique id assigned
// to the item (positive integer);
// - removeItem(id): removes the item with the given id from the list
// of items: it should return true if the item with the given id was
// successfully removed or false if there was no such item;
// - getItem(id): returns an object that contains the id, title, and
// priority fields for the item with the provided id (if there is no
// such item, it should return null);
// - next(): returns the highest priority item from the list in the
// same format as getItem (if there are several items of the same
// priority, return the one that was added before others; if there
// are no items in the list, throw an error).

class Todo {
  // write code here
  constructor() {
    this.list = {};
    this.currentId = 0;
  }

  addItem(title, priority) {
    this.title = title;
    this.priority = priority;
    this.currentId++;

    this.list[this.currentId] = {
      'priority': this.priority,
      'title': this.title,
    };

    return this.currentId;
  }

  removeItem(id) {
    if (this.list.hasOwnProperty([id])) {
      delete this.list[id];

      return true;
    }

    return false;
  }

  getItem(id) {
    if (this.list.hasOwnProperty([id])) {
      return {
        id: id,
        priority: this.list[id].priority,
        title: this.list[id].title,
      };
    }

    return null;
  }

  next() {
    const tasks = [];
    const sortingTasks = (a, b) => {
      return a.priority > b.priority
        ? b.priority - a.priority
        : a.id - b.id;
    };

    for (const id in this.list) {
      tasks[id] = {
        'id': +id,
        ...this.list[id],
      };
    }

    return tasks.sort(sortingTasks)[0];
  }
}

module.exports = {
  Todo,
};
