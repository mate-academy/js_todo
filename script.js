class TODO {
  constructor () {
    this.list = [];
    this.id = 1;
  }

  addItem(title, priority) {
    return this.list.push({title: title, priority: priority, id: this.id++});
  }

  removeItem(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  getItem(id) {
    return this.list.find(item => item.id === id);
  }

  next() {
    let highPriority = this.list[0].priority;
    let highPriorityItem = this.list[0];
    for (let i = 1; i < this.list.length; i++) {
      if (this.list[i].priority > highPriority) {
        highPriority = this.list[i].priority;
        highPriorityItem = this.list[i];
      }
    }
    console.log(highPriorityItem);
    return highPriorityItem;
  }
}

const test = new TODO();

test.addItem('test1', 1);
test.addItem('test2', 4);
test.addItem('test4', 6);
test.getItem(1);
test.removeItem(2);
test.getItem(2);
test.next();