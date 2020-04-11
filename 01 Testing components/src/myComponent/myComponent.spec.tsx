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
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => [{ id: '1', name: 'a', email: '' }],
}));

const setUp = (initialState = {}) => {
  const store = configureStore(initialState);
  const wrapper = shallow(<MyComponent store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('<MyComponent />', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = [{ id: '1', name: 'a', email: '' }];
    wrapper = setUp(initialState);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    expect(wrapper.length).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Renders table list', () => {
    const label = wrapper.find('[data-test="app-label"]');
    expect(label).not.toBeNull();
  });
});
