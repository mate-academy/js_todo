class TODO {
  constructor() {
    this.itemList = [];
    this.id = 0;
  }

  addItem(title, priority = 0) {
    ++this.id;
    this.itemList.push({ title: title, priority: priority, id: this.id });
  }

  removeItem(id) {
    this.itemList.forEach((item, i) => {
      if (item.id == id) {
        this.itemList.splice(i, 1);
      }
    });
  }

  getItem(id) {
    if (itemList.length === 0) {
      return null;
    }
    this.itemList.forEach(item => {
      if (item.id == id) {
        return item;
      }
    });
  }

  next() {
    if (itemList.length === 0) {
      throw new Error("Нет, елементов!");
    }
    let max = 0;
    let result;
    this.itemList.forEach(item => {
      if (+item.priority > max) {
        max = item.id;
        result = item;
      }
    });
    return result;
  }
}
