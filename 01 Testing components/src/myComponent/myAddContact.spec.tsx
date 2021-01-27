import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MyAddContact, Props } from './myAddContact';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const baseProps: Props = {
  onAdd: jest.fn(),
};

describe('MyAddContact', () => {
  let props: Props;
  let appWrapper;
  beforeEach(() => {
    props = { ...baseProps };
    appWrapper = mount(<MyAddContact {...props} />);
  });

  it('Should render without errors', () => {
    expect(appWrapper.length).toBe(1);
  });

  it('Set the email and name and trigger onAdd "', () => {
    const { getByTestId } = render(<MyAddContact {...props} />);

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

    expect(inputElementName.value).toEqual('John');
    expect(inputElementEmail.value).toEqual('John@gmail.com');
    expect(props.onAdd).toBeCalledTimes(1);
  });

});
