class Todo {
  constructor() {
    this.items = [];
  }

  addItem(title, priority) {
    let id = this.items.length + 1;
    this.items.push({title: title, priority: priority, id: id});
    return id;
  }

  removeItem(id) {
    this.items.forEach(elem => {
      if (id === elem.id) {
        this.items.splice(this.items.indexOf(elem), 1);
        return true;
      }
      return false;
    });
  }

  getItem(id) {
    this.items.forEach(elem => {
      if (id === elem.id) {
        return elem;
      }
    });
    return null;
  }

  next() {
    const priorities = [];

    if (this.items.length === 0) {
      throw new Error('emptyArray')
    };

    this.items.forEach(elem => {
      priorities.push(elem.priority);
    });

    this.items.forEach(elem => {
      if (elem.priority === Math.max(...priorities)) {
        return elem;
      }
    });
  }
}
