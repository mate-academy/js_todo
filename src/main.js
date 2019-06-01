'use strict';

class Todo  {
    constructor() {
        this.todoPoints = [];
    }

    addItem(title, priority) {
        let todoPoint = {};
        todoPoint.title = title;
        todoPoint.priority = priority;
        todoPoint.id = +Math.random().toString().substr(2, 4);
        this.todoPoints.push(todoPoint);
        return todoPoint.id
    }

    getItem(id) {
        let item = this.todoPoints.filter(item => item.id === id);
        if (item.length <= 0) {
            return null;
        } else {
            return item;
        }
    }

    removeItem(id) {
        let item = this.todoPoints.filter(item => item.id === id);
        this.todoPoints = this.todoPoints.filter(item => item.id !== id);
        return item.length > 0;
    }

    next() {
        let highestPriority = Math.max.apply(Math, this.todoPoints.map(item => {return item.priority}))
        let item = this.todoPoints.find(item => item.priority === highestPriority);
        if (item.length <= 0) {
            return "Error: no items in the list";
        } else {
            return item;
        }
    }
}

const todoItem = new Todo();
console.log(todoItem.addItem('js studying', 8));
console.log(todoItem.addItem('shopping', 3));
console.log(todoItem.addItem('workout', 5));
console.log(todoItem);
console.log(todoItem.getItem(3423));
console.log(todoItem.removeItem(9586));
console.log(todoItem);
console.log(todoItem.next());
