import { connect } from 'react-redux';
import { TodoState } from '../../redux/reducers';
import { getTodos, addTodo } from '../../redux/actions/todosActions';

import * as React from 'react';
import {TodoTableComponent} from './components/todoTable';
import { TodoEntity } from '../../model/todo';

interface State {
  newTodo: string
}

interface Props {
  todos: Array<TodoEntity>;
  loadTodos: () => void;
  addTodo: (newTodo: string) => void;
}

export class TodoAreaComponent extends React.Component<Props, State> {

  state = {
    newTodo: ""
  }

  componentDidMount() {
    this.props.loadTodos()
  }

  onAddSubmit = () => {
    this.props.addTodo(this.state.newTodo)
    this.setState({ newTodo: ''})
  }

  render() {
    const { todos } = this.props
    const { newTodo } = this.state

    return (
      <>
        <h1>Todos</h1>
        <div className="addTodoContainer">
            <span>New todo:</span>
            <input className="todoInput" data-testid="todo-input" type="text" name="title" value={newTodo} onChange={event => this.setState({ newTodo: event.target.value })} />
            <button data-testid="addTodo-button" onClick={() => this.onAddSubmit()} disabled={!newTodo}>Add todo</button>
        </div>
        {todos && todos.length > 0 ? 
          <TodoTableComponent todos={todos} /> :
          <p>No todos yet</p>}
      </>
    )
  }
}

const mapStateToProps = (state: TodoState) => {
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

export const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAreaComponent);