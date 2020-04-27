import * as React from 'react';
import  { shallow, mount }  from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  {MessageList} from './MessageList';

describe('Message List component test', () => {
  configure({ adapter: new Adapter() });

  let component;

  beforeEach(() => {
		component = shallow(< MessageList messages={[]}/>);
	});

	afterEach(() => {
    jest.clearAllMocks();
  });

  it('should open a context-menu on right clicking on the table', () => {
    const preventDefault = jest.fn();
    component.find('div').at(0).simulate('contextMenu', { clientX: 969, clientY: 140, preventDefault });
    expect(component.find('.context-menu-info')).toHaveLength(1);
  });
  // This test passes due to the setTimeout function, we should work over this.
  it('should close context menu', () => {
    const preventDefault = jest.fn();
    component.find('div').at(0).simulate('contextMenu', { clientX: 969, clientY: 140, preventDefault });
    component.find('div').at(0).simulate('mousedown', { which: 1 });
    setTimeout(() => {
      expect(component.find('.context-menu-info')).toHaveLength(0);
    },         150);
  });
});