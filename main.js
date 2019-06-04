class Todo {
    constructor() {
        this.items = []
    }
    addItem(title, priority) {
        let item = {};
        item.title = title;
        item.priority = priority;
        item.id = this.items.length;
        this.items.push(item);
        return item.id;
    }
    removeItem(id) {
        let findItem = this.items.find((e) => {
          return e.id === id;
        });
        if (findItem) {
            this.items.splice(this.items.indexOf(findItem), 1);
            return true;
        }
        return false;
    }
    getItem(id) {
        let findItem = this.items.find((e) => {
            return e.id === id;
        });
        return (!findItem) ? null : findItem;
    }
    next() {
        if (!this.items.length) {
            throw new Error('list is empty');
        }
        let priorities = this.items.map((e) => {
            return e.priority;
        });
        return this.items.find((e) => {
            return e.priority === Math.max(...priorities);
        });
    }
}

let todo = new Todo();
todo.addItem('one', 1);
todo.addItem('two', 2);
todo.addItem('three', 3);
todo.addItem('four', 3);
todo.addItem('five', 3);
console.log(todo.items);
console.log(todo.next());
console.log(todo.removeItem(3));
console.log(todo.items);
console.log(todo.getItem(2));
