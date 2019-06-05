class Todo {
  constructor() {
    this.todoList = [];
    this.id = 1;
  }

  addItem(title, priority) {
    const todoItem = {
      id: this.id,
      title,
      priority
    }

    this.todoList.push(todoItem);
    this.id++;
  }

  removeItem(id) {
    return this.todoList = this.todoList.filter(item => item.id !== id) || false;
  }

  getItem(id) {
    return this.todoList.find(item => item.id === id) || null;
  }

  next() {
    if (this.todoList.length) {
      const todoNext = this.todoList.sort((a, b) => {
        return b.priority - a.priority;
      });

      return todoNext[0];
    } else {
      throw new Error('Todo list is empty');
    }
  }

}
