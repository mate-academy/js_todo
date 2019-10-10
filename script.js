class Todo {
    constructor() {
        this.arr = [];
    }
  
    addItem(title, priority) {
         return this.arr.push({ title: title, priority: priority })
    }
    
    removeItem(id) { 
        if (arr[id]) {
            arr.splice(id, 1);
            return true;
        }  
        return false;
    }
  
    getItem(id) {
        if (!arr[id]) {
            return null;
        }
        return arr[id];
    }
  
    next() {
        if(arr.length === 0) {
            throw 'error!';
        }
        let item = arr[0];
        for (let i = 0; i < arr.length; i++) {      
            if (item.priority < arr[i].priority) {
                item = arr[i];
            }
        }    
        return item;
    }    
}