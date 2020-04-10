import * as BEApi from './myBackEndApiEndpoint';
import { TodoEntity } from '../model/todo';

export const getListOfTodos = (): Promise<TodoEntity[]> => {
  return BEApi.getTodos()
    .then(resolveTodos)
    .catch(handleError);
}

export const insertTodo = (todo: string): Promise<TodoEntity[]> => {
  return BEApi.insertTodo(todo)
    .then(resolveTodos)
    .catch(handleError);
}

const resolveTodos = (todos: TodoEntity[]): TodoEntity[] => todos

const handleError = () => {
  throw new Error('Where is my todos???');
}