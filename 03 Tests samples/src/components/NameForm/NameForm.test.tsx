import React from 'react';
import { mount } from 'enzyme';
import { NameForm } from './NameForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('<NameForm', () => {
	configure({ adapter: new Adapter() });
	it('Should call alert() when submit button is clicked', () => {
		const component = mount(<NameForm />);
		window.alert = jest.fn();
		component.setState({ value: 'Hello' });
		const expectedValue = 'A name was submitted: Hello';
		component.find('form').simulate('submit');
		expect(window.alert).toHaveBeenCalledWith(expectedValue);
	});
	it('Should handle state changes', () => {
		const component = mount(<NameForm />);
		component.setState({clicked: false});
		expect(component.state().clicked).toBe(false);
		component.find('form').simulate('submit');
		expect(component.state().clicked).toBe(true);
	});
});
