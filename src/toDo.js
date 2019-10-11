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
    let element = this.list.find(item => item.id === id);
    return element === -1 ? null : `id: ${element.id}, title: ${element.title}, priopity: ${element.priority}`; 
  }

  next() {
    const sortList = this.list.sort((a, b) => a.priority - b.priority); 
    return this.list[0]; 
  }
}


