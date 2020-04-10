import { getListOfTodos, insertTodo } from "../../myApi";
import { TodoEntity } from "../../model/todo";
import { actionsEnums } from "../common/actionsEnums";

export const getTodosCompletedAction = (todos: TodoEntity[]) => {
    return {
        type: actionsEnums.TODO_REQUEST_COMPLETED,
        payload: todos
    }
}

export const getTodos = () => (dispatcher) =>{
    const promise = getListOfTodos();

    promise.then(
        (data) => dispatcher(getTodosCompletedAction(data))
    )

    return promise;
}

export const addTodosCompletedAction = (todo: TodoEntity) => {
    return {
        type: actionsEnums.ADD_REQUEST_COMPLETED,
        payload: todo
    }
}

export const addTodo = (todo: string) => (dispatcher) => {
    const promise = insertTodo(todo);

    promise.then(
        (data) => dispatcher(getTodosCompletedAction(data))
    )

    return promise;
}