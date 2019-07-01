'use strict';

class Todo {
  constructor() {
    this.todos = [];
    this.id = 1;
  }

  addItem(title, priority) {
    const id = this.id;
    this.todos.push({ id, title, priority });
    this.id++;
    return id;
  }

  removeItem(id) {
    const index = this.todos.findIndex(item => item.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  getItem(id) {
    const index = this.todos.findIndex(item => item.id === id);
    if (index >= 0) {
      return this.todos[index];
    }
    return null;
  }

  next() {
    const max = this.todos.sort((a, b) => b["priority"] - a["priority"]);
    if (!this.todos.length) {
      throw new SyntaxError('There are no items in the list');
    }
    return max[0];
  }
}

const a = new Todo();
a.next();
a.addItem('Some title_1', 3);
a.addItem('Some title_2', 2);
a.removeItem(1);
a.removeItem(1);
a.addItem('Some title_3', 1);
a.addItem('Some title_4', 10);
a.getItem(3);
a.getItem(30);
a.next();
