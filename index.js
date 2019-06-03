class Todo {
    constructor() {
        this.todos = [];
        this.startId = 1;
    }

    addItem(title, priority) {
        const task = {
            id: this.startId,
            title,
            priority
        };
        this.todos.push(task);
        this.startId += 1;
        return task.id;
    }

    removeItem(id) {
        const numIndex = this._findTodosIndex(id);

        if (numIndex >= 0) {
            this.todos.splice(numIndex, 1);
            return true;
        } else {
            return false
        }
    }

    getItem(id) {
        const numIndex = this._findTodosIndex(id);

        if (numIndex >= 0) {
            return this.todos[numIndex];
        } else {
            return null;
        }
    }

    next() {
        if (this.todos.length !== 0){
            const nexts = this.todos.sort( (a, b) => {
                if(a.priority > b.priority){
                    return -1;
                }
                if(a.priority < b.priority){
                    return 1;
                }
                return 0;
            });
            return nexts[0];
        } else {
            throw new Error('Todos is empty');
        }

    }


    _findTodosIndex (id) {
        return this.todos.findIndex( item => {
            return item.id === id;
        });
    }



}
