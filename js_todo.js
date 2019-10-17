class Todo{
  constructor(){
    this.list = [];
    this.id = 1000;
  }

  addItem(title, priority) {
    const item = {};
    item.title = title;
    item.priority = priority;
    this.id++;
    item.id = this.id;
    this.list.push(item);
  }

  removeItem(id) {
    const index = this.list.findIndex(item => item.id === id);
    if (index === -1) {
      return false;
    } else {
      this.list.splice(index, 1);
      return true;
    }
  }

  getItem(id) {
    const index = this.list.findIndex(item => item.id === id);
    return index === -1 ? null : this.list[index];
  }

  next() {
    try {
      if (!this.list.length) throw 'error'
    }
    catch(err) {
      return err;
    }
    let highPriority = -Infinity;
    let lowerID = Infinity;
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];
      if (item.priority > highPriority) {
        highPriority = item.priority;
        lowerID = item.id;
      } else if (item.priority === highPriority) {
        if (item.id < lowerID) {
          lowerID = item.id;
        }
      }
    }
    return this.getItem(lowerID);
  }
}