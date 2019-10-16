class ToDo {
  constructor() {
    this.array = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.array.push({ title, priority, id: ++this.id });
    return this.array;
  }

  removeItem(id) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].id === id) {
        return this.array.splice(i, 1);
      } else {
        return false;
      }
    }
  }

  getItem(id) {
    return this.array[id];
  }

  next() {
    return this.array.sort((a, b) => b.priority - a.priority[0]);
  }
}

const toDoList = new ToDo();
