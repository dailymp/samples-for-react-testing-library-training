import { actionsEnums } from "../common/actionsEnums";
import { completedAction } from "./todosActions";
import { TodoEntity } from "../../model/todo";

describe('todosActions', () => {
  it('should create an action to get todos', () => {
    const todos: TodoEntity[] = [
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
    ]
    const action = actionsEnums.ADD_REQUEST_COMPLETED
    const expectedAction = {
      type: action,
      payload: todos,
    }
    expect(completedAction(todos, action)).toEqual(expectedAction)
  })

  it('should return action when is called', () => {
    const todoResponse: TodoEntity[] = [
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
            completed: false
        }
    ]

    const result = completedAction(todoResponse, actionsEnums.TODO_REQUEST_COMPLETED);

    expect(result.type).toBe(actionsEnums.TODO_REQUEST_COMPLETED);
    expect(result.payload).toBe(todoResponse);
  });
});