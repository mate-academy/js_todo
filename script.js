class Todo {
    constructor() {
        this.arr = [];
        this.id = 1;
    }
  
    addItem(title, priority) {
         return this.arr.push({ title: title, priority: priority, id: this.id++ })
    }
    
    removeItem(id) { 
        for (let item = 0; item < arr.length; item++) {
            if (item[i].id === id) {
                arr.splice(i, 1);
                return true;
            }  
            return false;
        }
    }
  
    getItem(id) {
        for (let item of arr) {
            if (item.id === id) {
                return item;
            }
            return null;
        }
    }
  
    next() {
        if (!arr.length){
            throw new Error('error!');
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