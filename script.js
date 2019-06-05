'use strict';

class Todo {
  constructor() {
    this.toDos = [];
    this.nextId = 0;
  }
  addItem(title, priority) {
    const toDoItem = {
      id = this.nextId,
      title,
      priority
    }
    this.toDos.push(toDoItem);
    this.nextId++;
    return toDoItem.id;
  }
  removeItem(idToDelete) {
      if(this.toDos.length) {
        let indexToDelete = 0;
        for (let obj of this.toDos) {
          if (obj.id === idToDelete) {
            indexToDelete = this.toDos.indexOf(obj)
          }
        }
      this.toDos.splice(indexToDelete, 1);
      } else {
        return false;
      }
  }
  getItem(id) {
    for (let obj of this.toDos) {
      if (obj.id === id) {
        return obj;
      }
    return null;
    }
  }
  next() {
    if (!this.toDos.length) {
      throw new Error('No items!')
    }
    const sortedByPriority = [...this.toDos];
    sortedByPriority.sort((a,b) =>{
      if (a.priority > b.priority) {
        return -1;
      } else if (a.priority < b.priority) {
        return 1;
      }
      return 0;
    });
    return sortedByPriority[0];
  }
}