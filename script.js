'use strict';

class Todo{
  constructor() {
    this.todoList = [];
  }
  addItem(title, priority){
    const newTask = {
      title: title,
      priority: priority,
      id: parseInt(Math.random() * 10000000)
    }
    this.todoList.push(newTask);
    console.log(this.todoList);
  }
  removeItem(id){
    const result = this.todoList.some(item => item.id === id);
    this.todoList = this.todoList.filter(item => item.id !== id);
    console.log(result);
  }
  getItem(id){
    const searchedTask = this.todoList.find(task => task.id === id) || null;
    console.log(searchedTask);
  }
  next(){
    if(this.todoList.length === 0) throw new Error('empty array!');
    const sortedTasksByPriority = this.todoList.sort((prev, next) => next.priority - prev.priority); 
    console.log(sortedTasksByPriority[0]);
  }
}
