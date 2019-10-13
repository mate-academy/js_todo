class ToDo {
  constructor() {
    this.array = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.array.push({ title: title, priority: priority, id: ++this.id });
    return this.array;
  }

  removeItem(id) {
    for (let key of this.array) {
      if (key.id === id) {
        return this.array.splice(this.array.indexOf(key), 1);
      } else {
        return false;
      }
    }
  }

  getItem(id) {
    for (let key of this.array) {
      if (key.id === id) {
        return key;
      }
      return null;
    }
  }

  next() {
    return this.array.sort((a, b) => b.priority - a.priority[0]);
  }
}

const toDoList = new ToDo();
