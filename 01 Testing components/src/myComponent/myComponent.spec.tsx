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
import * as myApi from '../myApi';
jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => [{ id: '1', name: 'aga', email: 'aga@op.com' }],
}));

const setUp = (initialState = {}) => {
  const store = configureStore(initialState);
  const wrapper = shallow(<MyComponent store={store} />)
    .childAt(0)
    .dive();
  return wrapper as any;
};

describe('<MyComponent />', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = [];
    wrapper = setUp(initialState);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    expect(wrapper.length).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Shows buttons', () => {
    const { getByTestId } = render(wrapper);
    const deleteElement = getByTestId(
      'contact-button-delete'
    ) as HTMLButtonElement;
    expect(deleteElement).not.toBeNull();

    const addElement = getByTestId('add-button-add') as HTMLButtonElement;
    expect(addElement).not.toBeNull();

    const changeElement = getByTestId(
      'contact-button-change'
    ) as HTMLButtonElement;
    expect(changeElement).not.toBeNull();
  });

  it('Renders loading', () => {
    const { getByTestId } = render(<MyComponent />);
    const labelElement = getByTestId('loading-label');
    expect(labelElement.textContent).toEqual('Loading...');
  });

  it('Renders contacts list', () => {
    const { getByTestId } = render(wrapper);
    const labelElementName = getByTestId('contact-label-name');
    const labelElementEmail = getByTestId('contact-label-email');
    expect(labelElementName.textContent).toEqual('aga');
    expect(labelElementEmail.textContent).toEqual('aga@op.com');
  });

  it('Diplay Properly when addContact "', () => {
    const { getByTestId } = render(wrapper);
    const inputElementName = getByTestId('add-input-name') as HTMLInputElement;

    const inputElementEmail = getByTestId(
      'add-input-email'
    ) as HTMLInputElement;

    const buttonElementAdd = getByTestId('add-button-add') as HTMLButtonElement;
    fireEvent.change(inputElementName, { target: { value: 'John' } });
    fireEvent.change(inputElementEmail, {
      target: { value: 'John@gmail.com' },
    });
    buttonElementAdd.click();
    expect(buttonElementAdd).not.toBeNull();
  });

  it('Diplay properly when onDelete', () => {
    const { getByTestId } = render(wrapper);
    const buttonElement = getByTestId(
      'contact-button-delete'
    ) as HTMLButtonElement;
    buttonElement.click();
    expect(buttonElement).not.toBeNull();
  });

  it('Display properly children "', async () => {
    const { getByTestId } = render(wrapper);

    const buttonElementChange = getByTestId(
      'contact-button-change'
    ) as HTMLButtonElement;
    buttonElementChange.click();

    const inputElement = getByTestId(
      'contact-input-change'
    ) as HTMLInputElement;

    const buttonElementSave = getByTestId(
      'contact-button-save'
    ) as HTMLButtonElement;

    fireEvent.change(inputElement, { target: { value: 'John@gmail.com' } });
    buttonElementSave.click();
    expect(buttonElementChange).not.toBeNull();
    expect(buttonElementSave).not.toBeNull();
  });
});
