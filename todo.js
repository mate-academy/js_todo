'use strict';
class Todo {
  constructor() {
    this.listTodo = [];
    this.id = 0;
    }

  addItem(title, priority){
    let item = {};
    item.title = title;
    item.priority = priority;    
    item.id = this.id;
    this.listTodo.push(item);
    this.id++;
    return this.id;
  }

  removeNumber(valueId) {
    for (let i in this.listTodo) {
      if(this.listTodo[i].id === valueId) { 
         this.listTodo.splice(i,1);
        return true;
      }
    }
    return false;
   }

   getItem(valueId) {
    for (let i in this.listTodo) {
      if(this.listTodo[i].id === valueId) { 
        return this.listTodo[i];
    }
    }
    return null;
   }

   next() {
    let maxProperty = this.listTodo[0].priority;
    let maxMember = this.listTodo[0];
    for (let i=1; i < this.listTodo.length; i++) {
      if(this.listTodo[i].priority > maxProperty) { 
        maxProperty = this.listTodo[i].priority;
        maxMember = this.listTodo[i];
      }
    }
    return maxMember;
   }
}


