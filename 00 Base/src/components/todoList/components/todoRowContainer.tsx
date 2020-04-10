import { connect } from 'react-redux';
import { TodoRowComponent } from './todoRow';
import { deleteTodo } from '../../../redux/actions/todosActions';

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id: number) => {return dispatch(deleteTodo(id))},
  };
}

export const TodoRowContainer = connect(
  null,
  mapDispatchToProps
)(TodoRowComponent);