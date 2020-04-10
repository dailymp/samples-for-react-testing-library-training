import {actionsEnums} from '../common/actionsEnums';
import {TodoEntity} from '../../model/todo';

export type todoState =  TodoEntity[];

export const todoReducer =  (state : todoState = [], action) => {
  switch (action.type) {
    case actionsEnums.TODO_REQUEST_COMPLETED:
      return handleGetTodosActionCompleted(state, action.payload);
    case actionsEnums.ADD_REQUEST_COMPLETED:
      return handleAddTodoActionCompleted(state, action.payload);
  }

  return state;
};

const handleGetTodosActionCompleted = (state : todoState, todos) => {
  return todos;
}

const handleAddTodoActionCompleted = (state : todoState, todo) => {
  return todo;
}