class Todo {
  constructor() {
    this.list = [];
    this.counter = 0;
  }
  
  addItem(title, priority) {
    this.list.push({title, priority, id: this.counter});
    // console.log(this.list);
    return this.counter++;
  }
  
  removeItem(id) {
    const index = this.list.findIndex(item => item.id === id);
    // console.log(index);
    // console.log(+this.list[0].priority);
    if (index !== -1) {
      this.list.splice(index, 1);
      return true;
    } 
    return false;
    
    // for (let i = 0; i < this.list.length; i++) {
    //   if (this.list[i].id === id) {
    //     this.list.splice(i, 1);
    //     return true;
    //   }
    // }
    // return false;
  }
  
  getItem(id) {
    return (this.list.find(element => element.id === id) || 'element not found');
  }
  
  next() {
    if (this.list.length !== 0) {
      let highestPriopety = this.list[0];
      for (let index = 0; index < this.list.length; index++) {        
        if (+this.list[index].priority > +highestPriopety.priority) {
          // console.log(1);
          highestPriopety = this.list[index];
        }
      }
      // console.log(highestPriopety);
      return highestPriopety;
    } 
      throw 'error';
    // console.log(this.list.sort((a, b) => b.priority - a.priority)[0]);
  }
}

const todoList = new Todo();
todoList.addItem('1', '2');
todoList.addItem('1', '2');
// console.log(todoList.getItem(0));
todoList.addItem('12', '56');
todoList.removeItem(0);
todoList.addItem('12', '551');
todoList.next();