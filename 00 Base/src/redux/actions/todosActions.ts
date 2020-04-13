import { getListOfTodos, addToTodoList, deleteFromTodoList } from "../../myApi";
import { TodoEntity } from "../../model/todo";
import { actionsEnums } from "../common/actionsEnums";

export const completedAction = (todos: TodoEntity[], action) => {
    return {
        type: action,
        payload: todos
    }
}

export const getTodos = () => (dispatcher) => {
    const promise = getListOfTodos();

    promise.then(
        (data) => dispatcher(completedAction(data, actionsEnums.TODO_REQUEST_COMPLETED))
    )

    return promise;
}

export const addTodo = (todo: string) => (dispatcher) => {
    const promise = addToTodoList(todo);

    promise.then(
        (data) => dispatcher(completedAction(data, actionsEnums.ADD_REQUEST_COMPLETED))
    )

    return promise;
}

export const deleteTodo = (id: number) => (dispatcher) => {
    const promise = deleteFromTodoList(id);

    promise.then(
        (data) => dispatcher(completedAction(data, actionsEnums.DELETE_REQUEST_COMPLETED))
    )

    return promise;
}