import * as React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  act,
  RenderResult,
} from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MyComponent } from './myComponent';
import {
  loadAllContacts,
  contactUpdate,
  contactCreate,
  contactDelete,
} from '../store/contact/actions';
import {
  getContactList,
  deleteContact,
  addContact,
  updateContact,
} from '../myApi';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import axios from 'axios';
import { rootReducer } from '../store/contact';
import { App } from '../app';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({
    contacts: { id: '', name: '', email: '' },
  }),
}));
describe('<MyComponent />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });
});