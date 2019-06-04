class Todo {
  constructor() {
    this.todos = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.todos.push({"id": this.id, "title": title, "priority": priority});
    this.id++;
  }

  removeItem(id) {
    const index = this.todos.findIndex(item => item.id === id);
    if (index >= 0) {
      this.todos.splice(index, 1)
      return true;
    } else {
      return false;
    }
  }

  getItem(id) {
    const index = this.todos.findIndex(item => item.id === id);
    if (index >= 0) {
      return this.todos[index];
    } else {
      return null;
    }
  }

  next() {
    if (this.todos.length) {
      let maxPriority = {"priority": -Infinity};
      this.todos.map(item => {
        if (item.priority > maxPriority.priority) {
          maxPriority = item;
        }
      });
      return maxPriority;
    } else {
      return console.log('There are no items in the list');
    }
  }
}

const a = new Todo();
a.addItem('Some title', 3);
a.addItem('Some title_2', 2);
a.removeItem(1);
a.addItem('Some title_3', 1);
a.addItem('Some title_5', 10);
