'use strict'

class Todo {

    constructor() {
        this.todoList = {};
        this.id = 0;
        this.topPriorId = 0;
    }

    addItem(title, priority) {
        this.id++;
        if (!this.topPriority || this.topPriority > priority) {
            this.topPriority = priority;
            this.topPriorId = this.id;
        }
        let todo = {[title]: priority};
        this.todoList[this.id] = todo;
        return this.id;
    }

    removeItem(id) {
        if (this.todoList.hasOwnProperty(id)) {
            delete this.todoList[id];
            return true;
        } else {
            return false;
        }
    }

    getItem(id) {
        return this.todoList[id] || null;
    }

    next() {
        return this.todoList[this.topPriorId];
    }

}