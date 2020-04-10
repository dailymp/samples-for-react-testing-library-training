import Axios from 'axios'
import { TodoEntity } from '../model/todo'

let todos = []

export const getTodos = () => 
  Axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then( response => {
        todos = response.data
        return Promise.resolve(todos)
      }
    )

export const insertTodo = (todo: string) => {
  const newTodo: TodoEntity = {
    userId: 1,
    id: todos[todos.length - 1].id + 1,
    title: todo,
    completed: false
  }
  todos.push(newTodo)
  return Promise.resolve(todos)
}
