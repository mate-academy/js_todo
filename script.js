class Todo {
  constructor() {
    this.list = [];
  }

  addItem(title, priority) {
    let item = {};
    item.title = title;
    item.priority = priority;
    this.list.push(item);
    item.id = this.list.length;
    return item.id;
  }

  removeItem(id) {
    for (let item of this.list) {
      if (item.id === id) {
        this.list.splice(this.list(indexOf(item), 1));
        return true;
      }
      return false;
    }
  }

  getItem(id) {
    for (let item of this.list) {
      if (item.id === id) {
        return this.list[this.list.indexOf(item)];
      }
    }
    return null;
  }

  next() {
    try {
      if (!this.list.length) {
        throw new Error("the list is empty");
      }
      this.list.sort((a, b) => {
        if(a.priority > b.priority) return -1;
        if(a.priority < b.priority) return 1;
        if(a.priority === b.priority) return 0;
      });
      return this.list[0];
    } catch (e) {
      return e.message;
    }
  }
}
