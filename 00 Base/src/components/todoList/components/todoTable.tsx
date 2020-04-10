import * as React from 'react';
import {TodoEntity} from '../../../model/todo';
import {TodoRowComponent} from './todoRow';

interface Props {
    todos: TodoEntity[];
}

export const TodoTableComponent = (props: Props) => {
  return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Title
              </th>
              <th>
                Completed
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              props.todos && props.todos.map((todo: TodoEntity) =>
                  <TodoRowComponent key={todo.id} todo={todo}/>
              )
            }
          </tbody>
        </table>
      </div>
  );
}