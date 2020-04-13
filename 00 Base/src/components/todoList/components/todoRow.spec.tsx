import * as React from 'react';
import Enzyme,  { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoEntity } from '../../../model/todo';
import { TodoRowComponent } from './todoRow';

Enzyme.configure({ adapter: new Adapter() })

function setup(todo) {
  const props = {
    key: '1',
    todo,
    deleteTodo: jest.fn(),
  }

  const enzymeWrapper = shallow(<TodoRowComponent {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('TodoRow', () => {
  it('should render self', () => {
    const todo: TodoEntity = {
        userId: 1,
        id: 1,
        title: 'Hacer la compra',
        completed: true,
    }
    
    const { enzymeWrapper } = setup(todo)

    expect(enzymeWrapper.find('tr')).toHaveLength(1)
    expect(enzymeWrapper.find('td')).toHaveLength(4)
    expect(enzymeWrapper.find('span')).toHaveLength(3)
    expect(enzymeWrapper.find('button').text()).toBe('Delete')
  })

  it('should call deleteTodo when the button is clicked', () => {
    const event = jest.fn()
    const { enzymeWrapper, props } = setup([])
    const deleteTodoButton = enzymeWrapper.find('button')

    deleteTodoButton.simulate('click', event)

    expect(props.deleteTodo).toHaveBeenCalledTimes(1)
  })
});