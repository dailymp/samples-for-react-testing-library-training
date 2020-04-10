import * as React from 'react';
import {TodoEntity} from '../../../model/todo';

interface Props  {
  todo: TodoEntity;
}

const onDeleteSubmit = () => console.log('Delete todo')

export const TodoRowComponent = (props: Props) => {
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
       <button data-testid="deleteTodo-button"  onClick={() => onDeleteSubmit()}>Delete</button>
       </td>
     </tr>
   );
}