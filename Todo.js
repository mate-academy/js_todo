export default class Todo {
  constructor() {
    this.todos = new Map();
    this.idCounter = 0;
  }

  addItem = (title, priority) => {
    const givenId = this.idCounter;
    this.todos.set(
      givenId,
      {
        title,
        priority
      }
    );
    this.idCounter++;
    return givenId;
  }

  removeItem = (id) => {
    if (this.todos.has(id)) {
      this.todos.delete(id);
      return true;
    } else {
      return false;
    }
  }

  getItem = (id) => {
    this.todos.has(id)
      ? { id, ...this.todos.get(id) }
      : null
  }


  next = () => {
    if (this.todos.size === 0) {
      throw new Error('The todo list is empty!');
    } else {
      const todosEntries = Object.entries(this.todos);
      let maxPriority = (todosEntries[0][1]).priority;

      const highestPriorityTodo = todosEntries.reduce(
        (accOfHighest, todo) => {
          const [ id, {title, priority} ] = todo;
          const comparingPrioritiesResult = this._comparePriorities(priority, maxPriority);

          switch (comparingPrioritiesResult) {
            case 1:
              maxPriority = priority;
              accOfHighest = [].push({ id, title, priority });
              break;
            case 0:
              accOfHighest.push({ id, title, priority });
              break;
          }

          return accOfHighest;
        }, []
      );

      return highestPriorityTodo[0];
    }
  }

  // It may be, that priorities can be not integer type. In this case
  // I put their comparing in a function.
  _comparePriorities(priority, maxPriority) {
    if (priority > maxPriority) {
      return 1;
    } else if (priority === maxPriority) {
      return 0;
    } else {
      return -1;
    }
  }
}
