import * as BEApi from './myBackEndApiEndpoint';
import { TodoEntity } from '../model/todo';

export const getListOfTodos = (): Promise<TodoEntity[]> => {
  return BEApi.getTodos()
    .then(resolveTodos)
    .catch(handleError);
}

export const addToTodoList = (todo: string): Promise<TodoEntity[]> => {
  return BEApi.addToTodoList(todo)
    .then(resolveTodos)
    .catch(handleError);
}

export const deleteFromTodoList = (id: number): Promise<TodoEntity[]> => {
  return BEApi.deleteFromTodoList(id)
    .then(resolveTodos)
    .catch(handleError);
}

const resolveTodos = (todos: TodoEntity[]): TodoEntity[] => todos

const handleError = () => {
  throw new Error('Where is my todos???');
}