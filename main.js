class Todo {
  constructor() {
    this.todoList = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.todoList.push({title, priority, id: ++this.id});
    return this.id;
  }

  removeItem(id) {
    const item = this.todoList.findIndex(item => item.id === id);
    return this.todoList.splice(item, 1) ? true : false;
  }

  getItem(id) {
    return this.todoList.find((item) =>  item.id === id ) || null;
  }

  next() {
    return this.todoList.sort((a, b) => b.priority - a.priority)[0];
  }
}

// Usage

const toDoList = new Todo();
toDoList.addItem('Do homework', 1);
toDoList.addItem('Learn the theory', 2);
toDoList.addItem('Relax', 3);
toDoList.removeItem(2);
toDoList.getItem(1);
toDoList.next(3);

console.log(toDoList.addItem());
console.log(toDoList.getItem());
console.log(toDoList.next());