import * as React from 'react';
import {TodoEntity} from '../../../model/todo';
import { TodoRowContainer } from './todoRowContainer';

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
              todos && todos.map((todo: TodoEntity) =>
                  <TodoRowContainer key={todo.id} todo={todo} />
              )
            }
          </tbody>
        </table>
      </div>
  );
}