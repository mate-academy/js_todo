class ToDo {
  constructor() {
    this.list = [];
    this.id = 0;
  }

  addItem(title, priority) {
    const id = ++this.id;
    this.list.push({title: title, priority: priority, id: id});
  }

  removeItem(id) {
    for (let item of this.list) {
      if (item.id === id) {
        this.list.splice(this.list.indexOf(item), 1);
      } else {
        return false;
      }
    }
  }

  getItem(id) {
    for (let item of this.list) {
      if (item.id === id) {
        return item;
      }
    }
  }

  next() {
    const list = this.list.sort( (item_1, item_2) => item_1.priority - item_2.priority);
    if (list.length === 0) {
      throw new Error('There are no items in the list');
    } else {
      return list[0];
    }
  }
}

