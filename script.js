class Todo {
  constructor() {
    this.lastId = 0;
    this.list = [];
  }

  addItem(title, priority) {
    const task = { id: this.lastId++, title, priority };
    this.list.push(task);
    return task.id;
  }

  removeItem(id) {
    const removeIndex = this.list.findIndex(item => item.id === id)
    const removed = this.list.splice(removeIndex, 1)
    return removed.length > 0 ? true : false;
  }

  getItem(id) {
    return this.list.find(item => item.id === id);
  }

  next() {
    return this.list.reduce((acc, item) => {
      if (item.priority < acc.priority) {
        return item;
      }
      return acc;
    })
  }
}

function getRandomNum() {
  return Math.floor(1 + Math.random() * 10);
}

const test1 = new Todo();

test1.addItem('test2', 2);
test1.addItem('test5', 5);
test1.addItem('test1', 1);
test1.addItem('test4', 4);
test1.addItem('test6', 6);
test1.addItem('test3', 3);
test1.addItem('testHighest', 0);

console.log(test1.removeItem(1));

console.log(test1.getItem(3));
console.log(test1.getItem(5));

console.log(`The highest priority has ${test1.next().title}`);
