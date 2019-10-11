class Todo {
  constructor() {
    this.list = [];
    this.counter = 1;
  }

  addItem(title, priority) {
    this.list.push({ title: title, priority: priority, id: this.counter });
    this.counter++;
    return console.log(this.list);
  }

  findItem(id) {
    const index = this.list.findIndex((elem, index) => elem.id === id);
    return index;
  }

  removeItem(id) {
    const index = this.findItem(id);
    if (this.list[index]) {
      this.list.splice(index, 1);
      return console.log(true);
    }
    return console.log(false);
  }

  getItem(id) {
    const index = this.findItem(id);
    if (this.list[index]) {
      return console.log(this.list[index]);
    }
    return console.log(`id ${id} is not found`);
  }

  next() {
    for (let i = 1; i <= this.list.length; i++) {
      const element = this.list.find((elem, index) => elem.priority === i);
      return console.log(element);
    }
    return console.log(`There is no work to do.`)
  }
}

const list = new Todo();

list.addItem('fallAsleep', 1);
list.addItem('eatCake', 2);
list.addItem('petCat', 3);
list.removeItem(2);
list.addItem('petDog', 4);
list.getItem(3);
list.next();
