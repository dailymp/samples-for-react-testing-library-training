import * as React from 'react';
// import { render, cleanup } from '@testing-library/react';
import {
  render,
  fireEvent,
  waitForElement,
  act,
  RenderResult,
} from '@testing-library/react';
//import * as myApi from '../myApi';
import { MyComponent, Props } from './myComponent';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { fetchPosts } from '../../redux/actions/index';

import reducer from '../../redux/reducers/index';
jest.mock('./MyComponent.tsx', () => ({
  MyComponent: () => <div />,
}));

const baseProps: Props = {
  nameFromProps: null,
};
Enzyme.configure({ adapter: new EnzymeAdapter() });

//afterEach(cleanup);
describe('My component', () => {
  let props: Props;
  beforeEach(() => {
    props = { ...baseProps };
  });

  const name = 'Title';
  const getWrapper = (
    mockStore = createStore(reducer, { posts: { posts: [] } })
  ) =>
    mount(
      <Provider store={mockStore}>
        <MyComponent nameFromProps={name} />
      </Provider>
    );
    
  it('should display the title provided', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h1').text()).toEqual(`Hello ${name}!`);
  });

  it('should dispatch the get post action', () => {
    const mockStore = createStore(reducer, { posts: { posts: [] } });
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find('button').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });
});
