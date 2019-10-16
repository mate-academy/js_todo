'use strict'

class Todo {
  constructor() {
    this.items = [];
    this.idCounter = 1;
  };

  addItem(title, priority) {
    this.items.push({
      title: title, 
      priority: priority, 
      id: this.idCounter,
      });

    return this.idCounter++;
  };

  removeItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        
        return true;
      }
    }

    return false;
  };

  getItem(id) {
    for(let val of this.items) {
      if(val.id === id) {
        return val;
      }
    }

    return null;
  };

  next() {
    let priorItemId = 0;
    let priorItem = null;

    for (let val of this.items) {

      if (val.id > priorItemId) {
        priorItemId = val.id;
        priorItem = val;
      }
    }

    return priorItemId === 0 ? `There is no any items in your list` : priorItem;
  }
} 

const reminders = new Todo();

console.log(
  reminders.addItem('namochit', 1),
  reminders.addItem('pomochit', 2),
  reminders.addItem('zamochit', 3),
  reminders.addItem('zamochit', 3),
  reminders.addItem('zamochit', 3),
  reminders.removeItem(2),
  reminders.removeItem(2),
  reminders.getItem(2),
  reminders.next(2),
  reminders.items
)