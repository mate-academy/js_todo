class Todo {
  constructor() {
    this.listToDo = [];
    this.id = 0;
  }

  addItem(title, priority) {
    this.listToDo.push({ title, priority, id: ++this.id });
    return this.id;
  }

  removeItem(id) {
    const listItem = this.listToDo;
    for (let i = 0; i < listItem.length; i++) {
      if (listItem[i].id === id) {
        listItem.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  getItem(id) {
    for (let i = 0; i < this.listToDo.length; i++) {
      if (this.listToDo[i].id === id) {
        return this.listToDo[i];
      }
    }
    return null;
  }

  next() {
    let maxItemId = 0;
    let maxItem = null;
    for (let i = 0; i < this.listToDo.length; i++) {
      console.log(this.listToDo[i].id)
      if (this.listToDo[i].id > maxItemId) {
        maxItemId = this.listToDo[i].id;
        maxItem = this.listToDo[i];
      }
    }
    return maxItemId === 0 ? `There is no any items in your list` : maxItem;
  }
}