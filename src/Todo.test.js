'use strict';
/* global require, describe, it, expect */

const { Todo } = require('./Todo');

describe('Todo', () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  it('should create object', () => {
    expect(todo).toBeInstanceOf(Todo);
  });

  describe('addItem', () => {
    it('should be a function', () => {
      expect(todo.addItem).toBeInstanceOf(Function);
    });

    it('should return integer `id`', () => {
      const id = todo.addItem('Buy milk', 1);

      expect(typeof id).toBe('number');
    });

    it('should return unique `id`', () => {
      const id1 = todo.addItem('Buy milk', 1);
      const id2 = todo.addItem('Go gym', 2);

      expect(id1).not.toBe(id2);
    });
  });

  describe('removeItem', () => {
    it('should be a function', () => {
      expect(todo.removeItem).toBeInstanceOf(Function);
    });

    it('should return boolean value', () => {
      const id = todo.addItem('Go gym', 2);

      const haveBeenRemoved1 = todo.removeItem(id);
      const haveBeenRemoved2 = todo.removeItem(100);

      expect(typeof haveBeenRemoved1).toBe('boolean');
      expect(typeof haveBeenRemoved2).toBe('boolean');
    });

    it('should return true if item have been removed', () => {
      const id = todo.addItem('Go gym', 2);

      const haveBeenRemoved = todo.removeItem(id);

      expect(haveBeenRemoved).toBe(true);
    });

    it('should return false if item have not been removed', () => {
      todo.addItem('Go gym', 2);

      const haveBeenRemoved = todo.removeItem(100);

      expect(haveBeenRemoved).toBe(false);
    });
  });

  describe('getItem', () => {
    it('should be a function', () => {
      expect(todo.getItem).toBeInstanceOf(Function);
    });

    it('should return correct todoItem object', () => {
      const title = 'Go gym';
      const priority = 2;
      const id = todo.addItem(title, priority);

      const todoItem = todo.getItem(id);

      expect(todoItem).toEqual({
        id, title, priority,
      });
    });

    it('should return null if there are no todoItem with given id', () => {
      const todoItem = todo.getItem(15);

      expect(todoItem).toBe(null);
    });
  });

  describe('next', () => {
    it('should be a function', () => {
      expect(todo.next).toBeInstanceOf(Function);
    });

    it('should return correct todoItem object shape', () => {
      const title = 'Go gym';
      const priority = 2;
      const id = todo.addItem(title, priority);

      const todoItem = todo.next();

      expect(todoItem).toEqual({
        id, title, priority,
      });
    });

    it('should return highest priority todoItem', () => {
      const id1 = todo.addItem('Buy milk', 1);
      const id2 = todo.addItem('Go gym', 2);

      const todoItem = todo.next();

      expect(todoItem.id).toBe(id2);
      expect(todoItem.id).not.toBe(id1);
    });

    const testTitle = `
    should return highest priority todoItem not depends on add order
    `;

    it(testTitle, () => {
      const id2 = todo.addItem('Go gym', 2);
      const id1 = todo.addItem('Buy milk', 1);

      const todoItem = todo.next();

      expect(todoItem.id).toBe(id2);
      expect(todoItem.id).not.toBe(id1);
    });

    it('should return first added highest priority todoItem', () => {
      const id1 = todo.addItem('Buy milk', 2);
      const id2 = todo.addItem('Go gym', 2);

      const todoItem = todo.next();

      expect(todoItem.id).toBe(id1);
      expect(todoItem.id).not.toBe(id2);
    });
  });
});
