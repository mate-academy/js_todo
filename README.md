# TODO

Create the `Todo` class with the following methods:

- `constructor()`: initialization with the empty list of TODO items;
- `addItem(title, priority)`: adds an item with the given title and priority to the list; the method returns the unique id assigned to the item (positive integer);
- `removeItem(id)`: removes the item with the given `id` from the list of items: it should return `true` if the item with the given `id` was successfully removed or `false` if there was no such item;
- `getItem(id)`: returns an object that contains the `id`, `title`, and `priority` fields for the item with the provided `id` (if there is no such item, it should return `null`);
- `next()`: returns the highest priority item from the list in the same format as `getItem` (if there are several items of the same priority, return the one that was added before others; if there are no items in the list, throw an error).
