class Todo{
  constructor(){
    this.list = new Map;
    this.id = 1000;
  }

  addItem(title, priority) {
    const item = {};
    item.title = title;
    item.priority = priority;
    this.id++
    this.list.set(this.id, item);
  }

  removeItem(id) {
    return this.list.delete(id);
  }

  getItem(id) {
    const value = this.list.get(id);
    if (value) {
      value.id = id;
    }
    return value ? value : null;
  }

  next() {
    try {
      if (!this.list.size) throw 'error'
    }
    catch(err) {
      return err;
    }
    let highPriority = -Infinity;
    let lowerID = Infinity;
    for (let id of this.list.keys()) {
      let item = this.list.get(id);
      if (item.priority > highPriority) {
        highPriority = item.priority;
        lowerID = id;
      } else if (item.priority === highPriority) {
        if (id < lowerID) {
          lowerID = id;
        }
      }
    }
    return this.getItem(lowerID);
  }
}