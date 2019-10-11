'use strict'

class Todo {
  constructor() {
    this.list = [];
    this.id = 0;
  }

/* addItem(title, priority): adds an item with the given title and priority to the list;
  the method returns the unique id assigned to the item (positive integer);
*/
  addItem(title, priority) {
    this.id++;
    this.list.push({title, priority, id: this.id});
    return this.id;
   }

/*
  removeItem(id): removes the item with the given id from the list of items:
  it should return true if the item with the given id was successfully removed
  or false if there was no such item;
*/
  removeNumber(id) {
    const item = this.list.findIndex(item => item.id === id);
    if (item === -1) {
      return false;
    }
    this.list.splice(item, 1);
    return true;
  }

/* getItem(id): returns an object that contains the id, title, and priority fields
  for the item with the provided id (if there is no such item, it should return null);
*/
  getItem(id) {
    const item = this.list.findIndex(item => item.id === id);
    return item === -1 ? 0 : this.list[item];
  }

/* next(): returns the highest priority item from the list in the same format
  as getItem (if there are several items of the same priority,
  return the one that was added before others;
  if there are no items in the list, throw an error).
*/
  next(id) {
    if (this.list.length === 0) {
      return Error('The list is empty.');
    } else {
      this.list.sort((a, b) => b.priority - a.priority);
      return this.list[0];
    }
  }
}

let n = new Todo ();
console.log(n.addItem('title','priority'));
console.log(n.addItem('title','priority'));
console.log(n.addItem('title','priority'));

console.log(n.removeNumber(1));
console.log(n.getItem(3));
console.log(n.next(2));
