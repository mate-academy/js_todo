class Todo {
    constructor() {
      this.list = [];
      this.id = 0;
    }

    addItem(title, priority) {
      ++this.id;
      this.list.push({id: this.id, title: title, priority: priority});
      return this.array;
    }

    removeItem(id) {
      for (let item of this.list) {
        if (item.id === id) {
          return this.list.splice(this.list.indexOf(item), 1);
        } else {
          return false;
        }
      }
    }

    getItem(id) {
      for (let key of this.list) {
        if (key.id === id) {
          return key;
        }
      }
    }

    next() {
      return this.list.sort((a, b) => b.priority - a.priority[0]);
    }
  }