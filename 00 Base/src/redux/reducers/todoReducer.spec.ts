import { todoReducer, todoState } from "./todoReducer";
import { actionsEnums } from "../common/actionsEnums";

describe('todoReducer', () => {
    it('should update values when send correct type', () => {
      const initialState = [] as todoState;

      const action = {
        type: actionsEnums.TODO_REQUEST_COMPLETED,
        payload: [{
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
        }] as todoState,
      };

      const result = todoReducer(initialState, action);

      expect(result).toBe(action.payload);
    });
});
