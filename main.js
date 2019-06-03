class Todo {
  constructor() {
    this.list = [];
  }
  addItem(title, priority) {
    this.id++
    this.list.push({
      title: title,
      priority: priority,
      id: this.id
    })
    return this.id;
  }
  removeItem(id) {
    let index = this.list.findIndex(listItem => listItem.id === id);
    if (index !== -1) {
      this.list.splice(index, 1);
      return true;
    }
    return false;
  }
  getItem(id) {
    this.list.find(item => item.id === id) || null;
  }
  next() {
    // соображаю пока, как это сделать
  }
};