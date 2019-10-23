class ToDo {
  constructor() {
    this.list = [];
    this.id = 1;
  }

  addItem(title, priority) {
    this.list.push({title:title, priority: +priority, id:this.id++,});

    return this.id;
  }

  removeItem(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);

        return true;
      }
    }

    return false;
  }

  getItem(id) {
    const requiredObj = this.list.find(function(obj) {
      return obj.id === id;
    });

    return requiredObj ? requiredObj : null;
  }

  next() {
    if (this.list.length === 0) {
      throw new Error('List is Empty');
    }

    this.list.sort(function(a, b) { 
      return a.priority - b.priority
    }); 
    return this.list[0]; 
  }
}

const todo = new ToDo();

function test(experimental) {
  experimental.addItem('first', 4);
  experimental.addItem('second', 6);
  experimental.addItem('thirth', 3);
  experimental.addItem('fourth', 5);
  experimental.addItem('fifth', 2);
  experimental.addItem('sixth', 1);
  console.log(experimental.removeItem(7));
  console.log(experimental.getItem(4));
  console.log(experimental.next());
  console.log(experimental.list);
}

test(todo);
