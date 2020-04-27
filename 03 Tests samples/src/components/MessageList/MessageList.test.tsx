import * as React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MessageList } from './MessageList';

describe('Message List component test', () => {
  configure({ adapter: new Adapter() });

  let component;
  const messages = [
    {
      id: 1,
      subject: 'Hello world',
      body: 'Hello world',
    },
  ];

  beforeEach(() => {
    component = shallow(<MessageList messages={[]} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a table', () => {
    expect(component.find('table')).toHaveLength(1);
  });

  it('should render two  th', () => {
    expect(component.find('th')).toHaveLength(2);
  });

  it('should render  a thead', () => {
    expect(component.find('thead')).toHaveLength(1);
  });

  it('should render a tbody', () => {
    expect(component.find('tbody')).toHaveLength(1);
  });

  it('should render none td', () => {
    expect(component.find('td')).toHaveLength(0);
  });

  it('should render two td', () => {
    component = shallow(<MessageList messages={messages} />);
    expect(component.find('td')).toHaveLength(2);
  });

  it('should alert mousedown on mouse down on the tr', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    component = shallow(<MessageList messages={messages} />);
    const bodyMessages = component.find('tr').at(1);
    bodyMessages.simulate('mousedown', { type: 'mousedown' });
    expect(window.alert).toBeCalledWith('mousedown');
  });

  it('should alert mouseup on mouse up on the tr', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    component = shallow(<MessageList messages={messages} />);
    const bodyMessages = component.find('tr').at(1);
    bodyMessages.simulate('mouseup', { type: 'mouseup' });
    expect(window.alert).toBeCalledWith('mouseup');
  });
});
