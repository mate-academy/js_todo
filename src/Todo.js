'use strict';

/*
Create the `Todo` class with the following methods:

- `constructor()`: initialization with the empty list of TODO items;
- `addItem(title, priority)`:
adds an item with the given title and priority to the list;
the method returns the unique id assigned to the item (positive integer);
- `removeItem(id)`: removes the item with the given `id`
from the list of items:
it should return `true`
if the item with the given `id`
was successfully removed or `false` if there was no such item;
- `getItem(id)`: returns an object
that contains the `id`, `title`, and `priority` fields
for the item with the provided `id`
(if there is no such item, it should return `null`);
- `next()`: returns the highest priority item
from the list in the same format as `getItem`
(if there are several items of the same priority,
  return the one that was added before others;
  if there are no items in the list, throw an error).
*/

class Todo {
  constructor() {
    this.list = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.list.push(
      {
        title: title,
        priority: priority,
        id: this.id,
      }
    );
    this.id++;

    return this.id - 1;
  }

  removeItem(id) {
    const removedIndex = this.list.findIndex(item => item.id === id);

    if (removedIndex > -1) {
      this.list.splice(removedIndex, 1);

      return true;
    }

    return false;
  }

  getItem(id) {
    return this.list.find(item => item.id === id) || null;
  }

  next() {
    if (!this.list.length) {
      throw new Error('empty array');
    }

    this.list.sort((a, b) => b.priority - a.priority);

    return this.list[0];
  }
}

module.exports = {
  Todo,
};
