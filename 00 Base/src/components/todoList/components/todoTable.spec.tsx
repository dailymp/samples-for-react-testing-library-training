import * as React from 'react';
import Enzyme,  { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoTableComponent } from './todoTable';
import { TodoEntity } from '../../../model/todo';

Enzyme.configure({ adapter: new Adapter() })

function setup(todos) {
  const props = {
    todos,
  }

  const enzymeWrapper = shallow(<TodoTableComponent {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('TodoTable', () => {
  it('should render self', () => {
    const todos: TodoEntity[] = [
      {
          userId: 1,
          id: 1,
          title: 'Buy',
          completed: true,
      },
      {
          userId: 1,
          id: 2,
          title: 'Go to the gym',
          completed: false,
      }
    ]
    
    const { enzymeWrapper } = setup(todos)

    expect(enzymeWrapper.find('div').hasClass('row')).toBe(true)
    expect(enzymeWrapper.find('table').hasClass('table'))
    expect(enzymeWrapper.find('table')).toHaveLength(1)
    expect(enzymeWrapper.find('thead')).toHaveLength(1)
    expect(enzymeWrapper.find('tr')).toHaveLength(1)
    expect(enzymeWrapper.find('th')).toHaveLength(4)
    expect(enzymeWrapper.find('Id')).toBeDefined()
    expect(enzymeWrapper.find('Title')).toBeDefined()
    expect(enzymeWrapper.find('Completed')).toBeDefined()
    expect(enzymeWrapper.find('Action')).toBeDefined()
    expect(enzymeWrapper.find('tbody')).toHaveLength(1)
  })
});
