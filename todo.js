'use strict';

class Todo {
  constructor() {
    this.lastId = 0;
    this.itemsList = [];
  }

  addItem(title, priority) {
    this.lastId++;
    const newItem = {
      title: title,
      priority: priority,
      id: this.lastId
    }

    this.itemsList.push(newItem);
    return newItem.id;
  }

  removeItem(id) {
    const removeItemInd = this.itemsList.findIndex(item => item.id === id);
    if (removeItemInd < 0) return false;

    const removedItem = this.itemsList.splice(removeItemInd, 1);
    console.log(removedItem);
    return removedItem.length > 0 ? true : false;
  }

  getItem(id) {
    const searchedItem = this.itemsList.find(item => item.id === id);
    return searchedItem;
  }

  next() {
    if (this.itemsList.length <= 0)
      throw new Error ('array is empty');

    const sortedItems = this.itemsList.sort((a, b) =>
      b.priority === a.priority ? a.id - b.id : b.priority - a.priority);
    return sortedItems[0];
  }
}

const list = new Todo();
console.log(list.addItem(100, 1));
console.log(list.addItem(111, 22));
console.log(list.addItem(123, 32));
console.log(list.removeItem(2));
console.log(list.removeItem(1));
console.log(list.getItem(3));
console.log(list.next());

const anotherList = new Todo();
console.log(anotherList.next());
