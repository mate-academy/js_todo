/*
- `next()`: returns the highest priority item from the list in the same format as `getItem`
(if there are several items of the same priority, return the one that was added before others; if there are no items in the list, throw an error).
 */
 class TODO {
    constructor() {
        this.list = [];
        this.idCounter = 1;
        console.log(`Created new TODO list`);
    }
     addItem(title, priority) {
        const newItem = {title: title, priority: priority, id: this.idCounter};
        this.list.push({title: title, priority: priority, id: this.idCounter});
        this.idCounter++;
         console.log(`Added new item with id ${newItem.id}`);
        return newItem.id;
     }

     removeItem(id) {
        const index = this.list.findIndex((item) =>  item.id === id );
        if (index !== -1 ) {
            this.list.splice(index, 1);
            console.log(`Removed item with id ${id}.`);
            return true;
        } else {
            console.log(`Item with id ${id} was not found.`);
            return false;
        }
     }

     getItem(id) {
        return this.list.find((item) =>  item.id === id ) || null;
     }

     next() {
        return this.list.sort((a, b) => b.priority - a.priority)[0];
     }
 }

 toDoList = new TODO();
 toDoList.addItem('Washing', 1);
 toDoList.addItem('Reading', 2);
 toDoList.addItem('Sleep', 3);

 toDoList.removeItem(2);
 toDoList.removeItem(5);

console.log(toDoList.getItem(3));
console.log(toDoList.getItem(2));

console.log(toDoList.next());
