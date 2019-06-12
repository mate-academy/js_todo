document.addEventListener('DOMContentLoaded', () => {
  let t = new Todo();
  console.log(t.addItem('ghj', 1));
  console.log(t.addItem('fcs', 1));
  console.log(t);
  console.log(t.removeItem(3));
  console.log(t.getItem(1));
  console.log(t.next());
});

class Todo {
  constructor() {
   this.items = [];
   this.itemsID = 0;
  }
  addItem(title, priority) {
    this.itemsID++;
    this.items[this.itemsID] = {title, priority};

    return this.itemsID;
  }
  removeItem(id) {
    delete this.items[id];
    return this.items[id] 
             ? true
             : false;
  }
  getItem(id) {
    return this.items[id] ? this.items[id] : null;
  }
  next() {
      if (Object.keys(this.list).length === 0) {
        throw new Error("is empty!");
      }
      this.items.sort((x, y) => {
        if(x.priority > y.priority) return -1;
        if(x.priority < y.priority) return 1;
        if(x.priority === y.priority) return 0;
      });
      return this.items[0];
   }
}
