import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MyContact, Props } from './myContact';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const baseProps: Props = {
  contact: { id: '1', name: 'aga', email: 'aga@op.com' },
  onDelete: jest.fn(),
  onChange: jest.fn(),
};

describe('My Contact', () => {
  let props: Props;
  let appWrapper;
  beforeEach(() => {
    props = { ...baseProps };
    appWrapper = mount(<MyContact {...props} />);
  });

  it('Should render without errors', () => {
    expect(appWrapper.length).toBe(1);
  });

  it('Display the prop Name and Email', () => {
    const { getByTestId } = render(<MyContact {...props} />);
    const labelElementName = getByTestId('contact-label-name');
    const labelElementEmail = getByTestId('contact-label-email');
    expect(labelElementName.textContent).toEqual('aga');
    expect(labelElementEmail.textContent).toEqual('aga@op.com');
  });

  it('Trigger Event onDelete', () => {
    const { getByTestId } = render(<MyContact {...props} />);
    const buttonElement = getByTestId(
      'contact-button-delete'
    ) as HTMLButtonElement;
    buttonElement.click();
    expect(props.onDelete).toBeCalledTimes(1);
  });

  it('Showing form when "change email" button is clicked', () => {
    const { getByTestId } = render(<MyContact {...props} />);
    const buttonElement = getByTestId(
      'contact-button-change'
    ) as HTMLButtonElement;
    buttonElement.click();
    const inputElement = getByTestId(
      'contact-input-change'
    ) as HTMLInputElement;
    expect(inputElement).not.toBeNull();
  });

  it('Change the email state and trigger onChange "', () => {
    const { getByTestId } = render(<MyContact {...props} />);

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
    buttonElementSave.click();

    fireEvent.change(inputElement, { target: { value: 'John@gmail.com' } });

    expect(inputElement.value).toEqual('John@gmail.com');
    expect(props.onChange).toBeCalledTimes(1);
  });
});
