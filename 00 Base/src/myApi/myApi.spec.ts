import * as BEApi from './myBackEndApiEndpoint';
import { todoState } from '../redux/reducers/todoReducer';
import { getListOfTodos } from './myApi';

describe('myApi', () => {
    const todos = [
      {
        userId: 1,
        id: 1,
        title: 'Hacer la compra',
        completed: true,
      },
      {
          userId: 1,
          id: 2,
          title: 'Ir al gimnasio',
          completed: false,
      }
    ] as todoState;

    it('getListOfTodos should call getTodos and return the todos', async () => {
      jest.spyOn(BEApi, "getTodos").mockResolvedValue(todos)

      const result = await getListOfTodos()
      
      expect(BEApi.getTodos).toBeCalled()
      expect(result).toEqual(todos);
    });

    it('addToTodoList should call addToTodoList and return the todos', async () => {
      jest.spyOn(BEApi, "addToTodoList").mockResolvedValue(todos)

      const result = await BEApi.addToTodoList('new todo')
      
      expect(BEApi.addToTodoList).toBeCalled()
      expect(result).toEqual(todos);
    });

    it('deleteFromTodoList should call deleteFromTodoList and return the todos', async () => {
      jest.spyOn(BEApi, "deleteFromTodoList").mockResolvedValue(todos)

      const result = await BEApi.deleteFromTodoList(2)
      
      expect(BEApi.deleteFromTodoList).toBeCalled()
      expect(result).toEqual(todos);
    });
});
