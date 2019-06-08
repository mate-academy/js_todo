'use strict'

class Todo {
  constructor() {
    this.todos = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.todos.push({
      todoTitle: title,
      todoPriority: priority,
      todoId: this.id,
    })
    this.id++;
    return this.id
  }

  removeItem(id) {
    const index = this.todos.findIndex(item => item.todoId === id);
    if(index === -1) {
      return false;
    }
    this.todos.splice(index, 1);
    return true;
  }

  getItem(id) {
    return this.todos.find(todo => todo.todoId === id) || null;
  }

  next() {
  if(this.todos.length) {
    this.todos.sort((a, b) => b.priority - a.priority);
    return this.todos[0];
  }
  throw new Error('There are no items');
}
}

const todoList = new Todo();

todoList.addItem('first', 1);
todoList.addItem('second', 2);
console.log(todoList.removeItem(1));
console.log(todoList.todos);
console.log(todoList.getItem(1));
console.log(todoList.next());
