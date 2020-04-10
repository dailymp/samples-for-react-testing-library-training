import { connect } from 'react-redux';
import { TodoAreaComponent } from './todosArea';
import { State } from '../../redux/reducers';
import { getTodos, addTodo } from '../../redux/actions/todosActions';

const mapStateToProps = (state: State) => {
  return{
      todos: state.todoReducer
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadTodos: () => {return dispatch(getTodos())},
    addTodo: (newTodo: string) => {return dispatch(addTodo(newTodo))},
  };
}

export const TodosAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAreaComponent);