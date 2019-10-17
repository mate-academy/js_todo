'use strict'

class Todo {
    constructor() {
        this.list = [];
        this.id = 1;
    }

    addItem(title, priority) {
        this.list.push({title, priority, id: this.id++});
    }

    removeItem(id) {
        const item = this.list.findIndex(item => item.id === id);
        if (item === -1) {
            return false;
        }
        this.list.splice(item, 1);
        return true;
    }

    getItem(id) {
        return this.list.find(item => item.id === id || null);
    }

    next() {
        if (!this.list.length) {
            throw new Error('There are no items');
        } else {
            this.list.sort((a, b) => b.priority - a.priority);
            return this.list[0];
        }
    }
}
