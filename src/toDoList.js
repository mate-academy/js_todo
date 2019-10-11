class Todo {
    constructor() {
        this.id = 0;
        this.toDoItems = new Map();
    }

    addItem(item) {
        this.toDoItems.set(this.id, item);
        return this.id++;
    }

    removeId(id) {
        return this.toDoItems.delete(id);
    }

    getItem(id) {
        if (this.toDoItems.has(id)) {
            return JSON.stringify(this.toDoItems.get(id));
        } else {
            return null;
        }
    }

    getToDoItems() {
        return this.toDoItems;
    }

    next() {
        if (this.toDoItems.size === 0) {
            throw 'The TODO list is empty!'
        }
        let highestPriority = 0;
        let itemWithHighestPriority = {};
        for (let item of this.toDoItems.values()) {
            let priority = item['priority'];
            if (priority > highestPriority) {
                highestPriority = priority;
                itemWithHighestPriority = item;
            }
        }

        return JSON.stringify(itemWithHighestPriority);
    }
}

let toDoList = new Todo();

console.log(toDoList.addItem({title: 'fishing', priority: 3}));
console.log(toDoList.addItem({title: 'hiking', priority: 3}));
console.log(toDoList.addItem({title: 'gym', priority: 3}));
console.log(toDoList.addItem({title: 'skiing', priority: 4}));
console.log(toDoList.addItem({title: 'chess', priority: 4}));
console.log(toDoList.addItem({title: 'cooking', priority: 2}));

console.log(toDoList.getToDoItems());

toDoList.removeId(1);
console.log(toDoList.getToDoItems());
console.log('getting item by id: ' + toDoList.getItem(0));
console.log('getting item by id: ' + toDoList.getItem(5));

console.log('Item with highest priority: ' + toDoList.next());

