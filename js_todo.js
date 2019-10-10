class Todo {
    constructor() {
        this.list = [];
    }

    addItem(title, priority, id = 0) {
        this.list.push({ title: title, priority: priority, id: id });
        return console.log(this.list);
    }

    removeItem(id) {
        if (this.list[id]) {
            this.list.splice(id, 1);
            return console.log(true);
        }
        return console.log(false);
    }

    getItem(id) {
        if (this.list[id]) {
            return console.log(this.list[id]);
        }
        return console.log(`id ${id} is not found`);
    }

    next() {

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].priority === 1){
                return console.log(this.list[i]);
            }
        }
        return console.log(`There is no the highest priority work to do.`)
    }
}

const list = new Todo();

list.addItem('fallAsleep', 1);
list.addItem('eatCake', 2);
list.addItem('petCat', 3);
list.removeItem(5);
list.addItem('petDog', 4);
list.getItem(19);
list.next();
