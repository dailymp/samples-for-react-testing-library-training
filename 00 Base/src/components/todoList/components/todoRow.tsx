import { connect } from 'react-redux';
import { deleteTodo } from '../../../redux/actions/todosActions';

import * as React from 'react';
import {TodoEntity} from '../../../model/todo';

interface Props  {
  todo: TodoEntity;
  deleteTodo: (id: number) => void
}

export const TodoRowComponent = (props: Props) => {
  const { deleteTodo } = props
  const { id, title, completed } = props.todo
   return (
     <tr>
       <td>
         <span>{id}</span>
       </td>
       <td>
        <span>{title}</span>
       </td>
       <td>
        <span>{completed ? 'Completed' : 'Pending'}</span>
       </td>
       <td>
       <button data-testid="deleteTodo-button"  onClick={() => deleteTodo(id)}>Delete</button>
       </td>
     </tr>
   );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id: number) => {return dispatch(deleteTodo(id))},
  };
}

export const TodoRow = connect(
  null,
  mapDispatchToProps
)(TodoRowComponent);