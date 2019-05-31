class Todo {
    constructor() {
        this.tasks = [];
    }

    addItem(title, priority) {
        let id = this.tasks.push({title: title, priority: priority});
        let index = id - 1;
        this.tasks[index]['id'] = id;
        return id;

    }

    removeItem(id) {
        let index = id - 1;
        let removed = this.tasks.splice(index, 1);
        return !!removed.length;

    }

    getItem(id) {
        let index = id - 1;
        return this.tasks[index] ? this.tasks[index] : null;
    }

    next() {
        try {
            if (this.tasks.length === 0) {
                throw new RangeError("There is no tasks in todo list");
            } else {
                let result = [];
                this.tasks.forEach(e => {
                    if (result.length !== 0) {
                        if (e['priority'] > result[0]['priority']) {
                            result.pop();
                            result.push(e);
                        }
                    } else {
                        result.push(e);
                    }
                });
                return result;
            }
        } catch (err) {
            return err;
        }
    }


}

let b = new Todo();
b.addItem("task2", 1);
b.addItem("task3", 6);
b.addItem("task5", 3);
b.addItem("task4", 4);
b.addItem("task6", 5);
b.addItem("task7", 6);
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'items are added');
console.log(b);
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'now we remove id4');
console.log(b.removeItem(4))
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'id4 is removed');
console.log(b);
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'now we are going to remove id that doesnt exist');
console.log(b.removeItem(234))
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'nothing is changed');
console.log(b);
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'now we retrieve info for id2');
console.log(b.getItem(2))
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'now we retrieve info for id234 that doesnt exist');
console.log(b.getItem(234))
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'get first maximum priority');
console.log(b.next())
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'time for error, here we are');
let c = new Todo();
console.log(c.next())
