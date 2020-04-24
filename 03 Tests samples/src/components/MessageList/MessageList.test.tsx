import * as React from 'react';
import  { shallow, mount }  from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import  {MessageList} from './MessageList';

describe('Message List component test', () => {
	configure({ adapter: new Adapter() });

	let component;
	const setState = jest.fn();
	const useStateMock: any = (init) => [init, setState];
    
	beforeEach(() => {
		component = shallow(< MessageList messages={[]}/>);
	});

	afterEach(() => {
    jest.clearAllMocks();
  });

	it('should render a table', () =>{
		expect(component.find('table')).toHaveLength(1);
	});

	it('should render two  th', () =>{
		expect(component.find('th')).toHaveLength(2);
	});

	it('should render  a thead', () =>{
		expect(component.find('thead')).toHaveLength(1);
	});

	it('should render a tbody', () =>{
		expect(component.find('tbody')).toHaveLength(1);
	});

	it('should render none td', () =>{
		expect(component.find('td')).toHaveLength(0);
	});

	it('should render two td', () => {
		let messages = [
			{
				id: 1,
				subject: 'Hello world',
				body: 'Hello world'
			}
		];
		component = shallow(< MessageList messages={messages}/>);
		expect(component.find('td')).toHaveLength(2);
	});

	it('should set color red on mouse down on the tr', () => {
		jest.spyOn(React, 'useState').mockImplementation(useStateMock);
		let messages = [
			{
				id: 1,
				subject: 'Hello world',
				body: 'Hello world'
			}
		];
		component = shallow(< MessageList messages={messages}/>);
		// const bodyMessages = component.find('tr').at(1);
		// bodyMessages.simulate('mousedown', { type: "mousedown" });
		expect(setState).toHaveBeenCalledTimes(1);
		// expect(bodyMessages.props().style).toHaveProperty('backgroundColor', 'blue');
	});
});
