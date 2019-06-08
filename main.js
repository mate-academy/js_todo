'use strict'

class Todo {
  constructor() {
    this.todosList = [];
    this.todoId = 1;
  }

  addItem(title,priority) {
    const todo = {};
    
    todo.id = this.todoId;
    this.todoId++;

    todo.title = title;
    todo.priority = priority;

    this.todosList.push(todo);

    return todo;
  }

  removeItem(id) {
    const removeItem = this.todosList.find(item => item.id == id);
    if (removeItem) {
      return this.todosList.splice(removeItem, 1);
    } else {
      return null;
    }
  }

  getItem(id) {
    const itemId = this.todosList.find(todo => todo.id === id);
    
    if (itemId) return itemId;
    return null;
  }

  getItems() {
    console.log(this.todosList);
  }

  next() {
    if (this.todosList.length === 0) {
      throw new Error('Empty List')
    };

    this.todosList.sort((a, b) => b.priority - a.priority);
    return this.todosList[0] ? this.todosList[0] : null;
  }

}

let todoList = new Todo();

todoList.addItem('Hello', 1);
todoList.addItem('Bon jor', 4);
todoList.addItem('Cemparo', 6);
todoList.addItem('Some other', 8);
todoList.addItem('Pre para', 2);
todoList.addItem('Salam', 3);

console.log(todoList.getItem(5));

todoList.getItems();

todoList.removeItem(1);
