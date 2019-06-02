class Todo {
    constructor() {
        this.todoArray = [];
        this.counter = 0;
    }

    addItem(title, priority) {
        this.todoArray.push({
            "title": title,
            "priority": priority,
            "id": this.counter
        });

        return this.counter++;
    }

    removeItem(id) {
        let startLength = this.todoArray.length;
        this.todoArray = this.todoArray.filter((value) => {
            return value.id !== id;
        });

        return this.todoArray.length < startLength ? true : false;
    }

    getItem(id) {
        let itemInList = this.todoArray.filter((value) => {
            return value.id === id;
        });

        if (itemInList.length > 0) {
            return itemInList[0];
        }
        return null;
    }

    next() {
        if (this.todoArray.length === 0) throw "exception";

        return this.todoArray.reduce(function (prev, current) {
            return (prev.priority >= current.priority) ? prev : current
        });
    }
}

