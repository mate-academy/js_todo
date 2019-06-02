'use strict';

class TODO {
    constructor() {
        this.todo = [];
        this.id = 0;
    }

    addItem(title, priority) {
       this.id++;
       this.todo.push({id: this.id, title: `${title}`, priority: priority});
       return this.id;
    }

    removeItem(id) {
       const index = this.todo.findIndex((item)=>item.id===id);
       if(index < 0) {
           return false;
       } else {
           this.todo.splice(index, 1);
           return true;
       }
    }

    getItem(id) {
        return this.todo.find((item)=>item.id === id) || null;
    }

    next() {
       this.todo.sort((a, b)=> b.priority - a.priority);
       return this.todo[0];
    }
}
