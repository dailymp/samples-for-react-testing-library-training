import {actionsEnums} from '../common/actionsEnums';
import {TodoEntity} from '../../model/todo';

export type todoState =  TodoEntity[];

export const todoReducer =  (state : todoState = [], action) => {
  switch (action.type) {
    case actionsEnums.TODO_REQUEST_COMPLETED:
    case actionsEnums.ADD_REQUEST_COMPLETED:
    case actionsEnums.DELETE_REQUEST_COMPLETED:
      return action.payload;
    default:
      return state
  }
};