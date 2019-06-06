"use strict"
class Todo {
  constructor() {
    this.listItems = [];
    this.id = 0;
  }

  addItem(title, priority) {
    let newItem = {
      title: title,
      priority: priority,
      id: this.id++
    }

    this.listItems.push(newItem);
  }

  removeItem(id) {
   let index = this.listItems.findIndex((elem) => {
     return elem.id === id;
   });
   this.listItems.splice(index, 1);
  }

  getItem(id) {
    return this.listItems.find((elem) => {
      return elem.id === id;
    })
  }

  next() {
    const maxPriorityItem = Math.max(...this.listItems.map(todo => todo.priority));

    if (!this.listItems.length || maxPriorityItem === NaN) {
      throw new Error ('Empty array: there are no items in the list');
    } 

    return this.listItems.find(todo => todo.priority === maxPriorityItem);;
  } 
}