import * as React from 'react';
import Enzyme,  { shallow } from 'enzyme';
import { TodoEntity } from '../../model/todo';
import { TodoAreaComponent } from './todosContainer';
import Adapter from 'enzyme-adapter-react-16';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() })

function setup(todos) {
  const props = {
    todos,
    loadTodos: jest.fn(),
    addTodo: jest.fn(),
  }

  const enzymeWrapper = shallow(<TodoAreaComponent {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('TodoAreaComponent', () => {
  it('should render self', () => {
    const todos: TodoEntity[] = [
      {
          userId: 1,
          id: 1,
          title: 'Hacer la compra',
          completed: true,
      },
      {
          userId: 1,
          id: 2,
          title: 'Ir al gimnasio',
          completed: false,
      }
    ]
    
    const { enzymeWrapper } = setup(todos)

    expect(enzymeWrapper.find('h1').text()).toBe('Todos')
    expect(enzymeWrapper.find('div').hasClass('addTodoContainer')).toBe(true)
    expect(enzymeWrapper.find('input').hasClass('todoInput'))
    expect(enzymeWrapper.find('span').text()).toBe('New todo:')
    expect(enzymeWrapper.find('button').text()).toBe('Add todo')
  })

  it('should call loadTodos when componentDidMount', () => {
    const todos: TodoEntity[] = [
      {
          userId: 1,
          id: 1,
          title: 'Hacer la compra',
          completed: true,
      },
      {
          userId: 1,
          id: 2,
          title: 'Ir al gimnasio',
          completed: false,
      }
    ]

    const { props } = setup(todos)
    expect(props.loadTodos).toBeCalled()
    expect(props.addTodo).not.toBeCalled()
  })

  it('should call addTodo when the button is clicked', () => {
    const event = jest.fn()
    const { enzymeWrapper, props } = setup([])
    const newTodoButton = enzymeWrapper.find('button')

    newTodoButton.simulate('click', event)

    expect(props.addTodo).toHaveBeenCalledTimes(1)
  })

  it('if we dont have todos, should show de text ', () => {        
    const { enzymeWrapper } = setup([])

    expect(enzymeWrapper.find('p').text()).toBe('No todos yet')
  })
});