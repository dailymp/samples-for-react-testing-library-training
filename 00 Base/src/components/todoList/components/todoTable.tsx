import * as React from 'react';
import {TodoEntity} from '../../../model/todo';
import { TodoRow } from './todoRow';

interface Props {
    todos: TodoEntity[];
}

export const TodoTableComponent = (props: Props) => {
  const {todos } = props
  return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>
                <span>Id</span>
              </th>
              <th>
              <span>Title</span>
              </th>
              <th>
              <span>Completed</span>
              </th>
              <th>
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              todos && todos.map((todo: TodoEntity) =>
                  <TodoRow key={todo.id} todo={todo} />
              )
            }
          </tbody>
        </table>
      </div>
  );
}