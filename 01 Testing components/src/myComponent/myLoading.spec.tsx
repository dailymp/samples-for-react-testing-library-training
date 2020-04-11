import * as React from 'react';
import { render } from '@testing-library/react';
import { MyLoading, Props } from './myLoading';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const baseProps: Props = {
  hidden: false,
  children: null,
};
describe('My Loading', () => {
  let props: Props;
  let appWrapper;
  beforeEach(() => {
    props = { ...baseProps };
    appWrapper = mount(<MyLoading {...props} />);
  });

  it('Should render without errors', () => {
    expect(appWrapper.length).toBe(1);
  });

  it('if hidden is false show loading', () => {
    const { getByTestId } = render(<MyLoading {...props} />);
    const labelElement = getByTestId('loading-label');
    expect(labelElement.textContent).toEqual('Loading...');
  });
});
