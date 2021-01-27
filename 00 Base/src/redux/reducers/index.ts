import { combineReducers} from 'redux';
import { todoReducer, todoState } from './todoReducer';

export interface TodoState {
  todoReducer : todoState;
};

export const reducers = combineReducers<TodoState>({
  todoReducer,
});