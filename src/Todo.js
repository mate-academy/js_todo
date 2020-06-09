'use strict';

class Todo {
  constructor() {
    this.listOfItems = [];
    this.idNumber = -1;
  }
  addItem(titleInput, priorityInput) {
    this.idNumber++;

    this.listOfItems[this.idNumber] = {
      id: this.idNumber,
      priority: priorityInput,
      title: titleInput,
    };

    return this.idNumber;
  }
  removeItem(id) {
    if (this.listOfItems.find(element => element.id === id) !== undefined) {
      this.listOfItems.splice(id, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return (this.listOfItems.hasOwnProperty(id))
      ? this.listOfItems[id]
      : null;
  }
  next() {
    const priorityList = this.listOfItems.map(element => element.priority);
    const output = this.listOfItems
      .find(element => element.priority === Math.max.apply(null, priorityList));

    return (output !== undefined)
      ? output
      : Error;
  }
}

module.exports = {
  Todo,
};
