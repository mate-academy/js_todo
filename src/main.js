'use strict';

class Todo  {
  constructor() {
    this.todoPoints = [];
  }

  addItem(title, priority) {
    let todoPoint = {};
    todoPoint.title = title;
    todoPoint.priority = priority;
    todoPoint.id = +Math.random().toString().substr(2, 4);
    if (todoPoint.id === this.todoPoints.find(item => item.id)){
      throw 'This ID already exists.'
    } else {
      this.todoPoints.push(todoPoint);
      return todoPoint.id
    }

  }

  getItem(id) {
    const item = this.todoPoints.filter(item => item.id === id);
    if (item.length <= 0) {
      return null;
    }
    return item;
  }

  removeItem(id) {
    const item = this.todoPoints.filter(item => item.id === id);
    if (item.length === 0) {
      return false
    } else {
      const filtredList = this.todoPoints.filter(item => item.id !== id);
      if (!filtredList.includes(item)){
        return true
      }
    }
  }

  next() {
    if (this.todoPoints.length === 0) {
      throw 'This ToDoList is empty.'
    }
    return this.todoPoints.map(item => item.priority).reduce(
      (a, b) => {
        return Math.max(a, b)
      });
  }
}

const todoItem = new Todo();
console.log(todoItem.addItem('js studying', 8));
console.log(todoItem.addItem('shopping', 3));
console.log(todoItem.addItem('workout', 5));
console.log(todoItem);
console.log(todoItem.getItem(3423));
console.log(todoItem.removeItem(9586));
console.log(todoItem);
console.log(todoItem.next());
