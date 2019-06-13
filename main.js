'use strict';

class Todo {
	constructor() {
		this.todoList = [];
		this.id = 1
	}

	addItem(title, priority) {
		if (typeof priority !== 'number') {
			throw new Error('"priority" should be a number');
		} else {
			this.todoList.push({
				title: title,
				priority: priority,
				id: this.id
			});
		this.id++;
		}
	}

	removeItem(id) {
		const currentItem = this.todoList.findIndex(el => el.id === id);
		if (currentItem === -1) {
			return false;
		}
		this.todoList.splice(currentItem, 1);
    		return true;		
	}

	getItem(id) {
		const currentItem = this.todoList.find(el => el.id === id);
		if (!currentItem) return null;
		return currentItem;
	}

	next() {
		if (this.todoList.length === 0) {
     		throw new Error('There are no items');
    	} else {
    	this.todoList.sort((a, b) => b.priority - a.priority);
    	return this.todoList[0];
    	}
  	}
}

const todo = new Todo();

todo.addItem('Stas', 5);
todo.addItem('father', 4);
todo.addItem('Lilya', 2);
todo.addItem('brother', 2);
todo.removeItem(4);
todo.getItem(1);

console.log(todo.next());
console.log(todo.getItem(1));
console.log(todo);


