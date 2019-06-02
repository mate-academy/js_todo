'use strict';

class Todo {
  constructor() {
    this.id = 1;
    this.itemsList = [];
  }

  addItem(title, priority) {
    const newItem = {
      title: title,
      priority: priority,
      id: this.id++
    }

    this.itemsList.push(newItem);
    console.log(newItem);
    console.log(this.itemsList);
    return newItem.id;
  }

  removeItem(id) {
    const removeItemInd = id - 1;
    const removedItem = this.itemsList.splice(removeItemInd, 1);
    console.log(removedItem);
    return removedItem.length > 0 ? true : false;
  }

  getItem(id) {
    const searchedItem = this.itemsList.find(item => item.id === id) || null;
    return searchedItem;
  }

  next() {
    const sortedItems = this.itemsList.sort((a, b) => b.priority - a.priority);
    if (sortedItems.length <= 0) {
      throw new Error ('array is empty');
    } else {
      return sortedItems[0];
    }
  }
}

let a = new Todo();
console.log(a.addItem(100, 1));
console.log(a.addItem(111, 22));
console.log(a.addItem(123, 32));
console.log(a.removeItem(2));
console.log(a.removeItem(1));
console.log(a.getItem(3));
console.log(a.next());

let e = new Todo();
console.log(e.next());
