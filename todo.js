class Todo {
    constructor() {
        this.todoItems = [];
        this.id = 0;
    }

    addItem(title, priority) {
        this.todoItems.push({id: ++this.id, title: title, priority: priority});
        return this.id;
    }

    removeItem(id) {
        for (let i = 0; i < this.todoItems.length; i++) {
            if( this.todoItems[i].id === id) {
                this.todoItems.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    getItem(id) {
        for (let i = 0; i < this.todoItems.length; i++) {
            if( this.todoItems[i].id === id) {
                return this.todoItems[i];
            }
        }
        return null;
    }

    next() {
        let maxItem = 0;
        let highestPriorityItem = null;
        for (let i = 0; i < this.todoItems.length; i++) {
            if (this.todoItems[i].id > maxItem) {
                maxItem = this.todoItems[i].id;
                highestPriorityItem = this.todoItems[i];
            }
        }
        try {
            if (maxItem === 0) throw 'There are no items in the list.'
        }
        catch(err) {
            return err;
        }
        return highestPriorityItem;
    }
}
