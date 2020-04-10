import Axios from 'axios'
import { TodoEntity } from '../model/todo'

let todos: TodoEntity[] = []

export const getTodos = () => 
  Axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then( response => {
        todos = response.data
        return Promise.resolve(todos)
      }
    )

export const addToTodoList = (title: string) => {
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
  const newTodo: TodoEntity = {
    userId: 1,
    id,
    title,
    completed: false
  }
  todos.push(newTodo)
  return Promise.resolve(todos)
}

export const deleteFromTodoList = (id: number) => {
  todos = todos.filter(todo => todo.id !== id)
  return Promise.resolve(todos)
}
