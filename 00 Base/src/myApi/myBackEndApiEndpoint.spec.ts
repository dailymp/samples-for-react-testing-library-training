import * as BEApi from './myBackEndApiEndpoint';
import Axios from 'axios'
import { TodoEntity } from '../model/todo';

describe('myBackEndApiEndpoint', () => {
    const todos: TodoEntity[] = [
      {
        userId: 1,
        id: 1,
        title: 'Buy',
        completed: true,
      },
      {
          userId: 1,
          id: 2,
          title: 'Go to the gym',
          completed: false,
      }
    ];

    it('getTodos should return the todos', async () => {
      jest.spyOn(Axios, "get").mockResolvedValue(todos)

      await BEApi.getTodos()

      expect(Axios.get).toBeCalled()
    });

    it('addToTodoList should add todo the todos', async () => {
      const newTodo: string = 'Do the test'
      const newTodos: TodoEntity[] = [
        {
          userId: 1,
          id: 1,
          title: 'Buy',
          completed: true,
        },
        {
            userId: 1,
            id: 2,
            title: 'Go to the gym',
            completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'Do the test',
          completed: false,
        }
      ]

      await BEApi.setTodos(todos)
      expect(BEApi.getTodosValue()).toEqual(todos)

      const result = await BEApi.addToTodoList(newTodo)
      expect(result).toEqual(newTodos)
      expect(BEApi.getTodosValue()).toEqual(newTodos)
    });

    it('deleteFromTodoList should delete todo from todos', async () => {
      const todoToDelete: number = 1
      const newTodos: TodoEntity[] = [
        {
            userId: 1,
            id: 2,
            title: 'Go to the gym',
            completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'Do the test',
          completed: false,
        }
      ]

      await BEApi.setTodos(todos)
      expect(BEApi.getTodosValue()).toEqual(todos)

      const result = await BEApi.deleteFromTodoList(todoToDelete)
      expect(result).toEqual(newTodos)
      expect(BEApi.getTodosValue()).toEqual(newTodos)
    });
});
