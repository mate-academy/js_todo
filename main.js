class Todo {

  constructor() {
    this.list = [{}];
    this.id = 1;
  }

  addItem(title, priority){
    this.list.push({title:title, priority:priority, id:this.id++});
    return `item's unique id is ${this.id}`;
  }

  removeItem(byId) {
    let index = Todo.checkIndex(byId, this.list);
    if (index !== -1) {
      this.list.splice(index, 1);
      return true
    }

    return false
  }

  getItem(byId) {
    let index = Todo.checkIndex(byId, this.list);
    return (index !== -1) ? Object.values(this.list.filter(item => item.id === byId)) : null;
  }

  next() {
    let arr = this.list.sort((a, b) => b.priority - a.priority);
    if (!arr.length) {
      throw new Error('There are no items');
    } else {
      arr.sort((a, b) => b.priority - a.priority);

      return arr;
    }
  }

  static checkIndex(byId, listVar) {
    return listVar.findIndex(item => item.id === byId);
  }

}

let a = new Todo();


console.log(a.addItem('aaaa',5));
console.log(a.addItem('bbb',2));
console.log(a.addItem('ccc',1));
console.log(a.addItem('ddd',4));
console.log(a.removeItem(2));
console.log(a.getItem(3));
console.log(a.next());




