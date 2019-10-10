class Todo{
  constructor(){
    this.list = new Set;
    this.id = 1000;
  }

  addItem(title, priority) {
    const item = {};
    item.title = title;
    item.priority = priority;
    this.id++
    item.id = this.id; 
    this.list.add(item);
  }

  removeItem(id) {
    for (let item of this.list) {
      if (item.id === id) {
        return this.list.delete(item);
      }
    }
    return false;
  }

  getItem(id) {
    for (let item of this.list) {
      if (item.id === id) {
        return item;
      }
    }
    return null;    
  }

  next() {
    try {
      if (this.list.size === 0) throw 'error'
    }
    catch(err) {
      return err;
    }
    let highPriority = -Infinity;
    let lowerID = Infinity;
    let res;
    for (let item of this.list) {
      if (item.priority > highPriority) {
        highPriority = item.priority;
        lowerID = item.id;
        res = item;
      } else if (item.priority === highPriority) {
        if (item.id < lowerID) {
          lowerID = item.id;
          res = item;
        }
      }
    }
    return res;
  }
}