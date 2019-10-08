class Todo {
  constructor() {
    this.items = [];
    this.idCounter = 0;
  }

  show() {
    console.log(this.items);
  }

  addItem(title, priority) {
    this.items.push({id: ++this.idCounter, title, priority: Number(priority)});

    return this.idCounter;
  }

  removeItem(id) {
    let itemId = this.items.findIndex(obj => obj.id === id);
    if (itemId !== -1) {
      this.items.splice(itemId, 1);
      return true;
    }

    return false;
  }

  getItem(id) {
    let itemId = this.items.findIndex(obj => obj.id === id);
    if (itemId !== -1) {
      return this.items.slice(itemId, itemId + 1)[0];
    }

    return 0;
  }

  next() {
    // debugger;
    let maxPriority = this.items.reduce((max, obj) => max = obj.priority > max ? obj.priority : max, -100);
    
    for (const item of this.items) {
      if (item.priority === maxPriority) {
        return this.getItem(item.id); 
      }
    }
  }
}


let t = new Todo();

t.addItem('First', 10);
let secondId = t.addItem('Second', 20);
console.log(t.removeItem(secondId));
t.removeItem(100)
t.addItem('MaxPrior', 100);
console.log(t.getItem(1));
t.addItem('fourthWithMaxPrior', 100);
t.show();
console.log(t.next());
