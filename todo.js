class Todo {
  constructor() {
    this.currentId = 1;
    this.list = [];
  }

  addItem(title, priority) {
    const task = {
      title: title,
      priority: priority,
      id: this.currentId++
    }

    this.list.push(task);

    return task.id;
  }

  removeItem(id) {
    const itemIndex = this.list.findIndex(task => task.id === id);

    if (itemIndex > -1) {
      this.list.splice(itemIndex, 1);
      return true;
    }

    return false;
  }

  getItem(id) {
    const item = this.list.find(task => task.id === id) || null;
    return item;
  }

  next() {
    let important = this.list[0] || null;
    if(this.list.length > 1) {
      this.list.forEach(item => {
        if (important.priority < item.priority) {
          important = item;
        }
      })
    }

    if (important !== null) {
      return important;
    }

    throw new Error('List of tasks is empty.');
  }
}
