class TODO {
  constructor() {
    this.todo = [];
    this.uniqueId = 1;
  }

  addItem(title, priority) {
    this.todo.push({
      "id": this.uniqueId ,"title" : title, "priority": priority
    })
    this.uniqueId++;
  }

  removeItem(id) {
    const item = this.todo.findIndex(item => item.id === id);
    if (item === -1) {
      return false;
    }
    this.todo.splice(item, 1);
    return true;
  }

  getItem(id) {
    return this.todo.find(item => item.id === id) || null;
  }

  next() {
    if (!this.todo.length) {
      throw new Error('There are no items');
    } else {
      this.todo.sort((a, b) => b.priority - a.priority);
      return this.todo[0];
    }
  }
}

let test = new TODO();

console.log(test);
test.addItem('Kiev', 1);
test.addItem('Ukraine', 5);
test.addItem('Russian', 3);
test.addItem('Usa', 5);
test.addItem('Georgia', 4);
test.addItem('Moldova', 2);
test.removeItem(5);

console.log(test.getItem(1));
console.log(test.next());