'use strict';

class Todo {
  constructor() {
      this.list = [];
      this.id = 0;
  }

  addItem(title, priority) {
      let newObj = {
          title : title,
          priority : priority,
          id : this.id++
      }
      this.list.push(newObj);
      return newObj.id;
  }

  removeItem(id) {
      let elIndex = this.list.findIndex(newObj => newObj.id ===id);
      if (elIndex !== -1) {
          this.list.splice(elIndex, 1);
          return true;
      }

      return false;
  }

  getItem(id) {
      let foundObj = this.list.find(newObj => newObj.id === id);
      return foundObj || null;
  }

  next() {
          if (this.list.length === 0) {
              throw new Error('Error');
          }
          this.list.sort((a, b) => {
              if(a.priority < b.priority) return 1;
              if(a.priority > b.priority) return -1;
              if(a.priority === b.priority) return 0;
          });

          return this.list[0];
      }
}
