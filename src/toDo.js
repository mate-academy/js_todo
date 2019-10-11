class Todo {
  constructor() {
    this.list = []; 
    this.id = 0; 
  }

  addItem(title, priority) {
    const itemObj = {
      title: title, 
      priority: priority, 
      id: ++this.id
    }; 
    this.list.push(itemObj); 
    console.log (itemObj.id); 
  }

  removeItem(id) {
    let index = this.list.findIndex(item => item.id === id); 
    return this.list.splice(index, 1) ? true : false; 
  }

  getItem(id) {
    let index = this.list.findIndex(item => item.id === id);
    return index === -1 ? null : `id: ${this.list[index].id}, title: ${this.list[index].title}, priopity: ${this.list[index].priority}`; 
  }

  next() {
    const sortList = this.list.sort((a, b) => b.priority - a.priority); 
    console.log(this.list[0]); 
  }
}
