import React, { useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getContactList,
  deleteContact,
  addContact,
  updateContact,
} from '../myApi';
import {
  loadAllContacts,
  contactUpdate,
  contactCreate,
  contactDelete,
} from '../store/contact/actions';
import { MyContact, MyAddContact, MyLoading } from '../myComponent';
import {
  ContactActionTypes,
  Contact as ContactType,
} from '../store/contact/types';
import { RootState } from '../store/contact/index';



export const MyComponent: FC<any> = () => {
  const contacts = useSelector((state: RootState) => state.contactReducer);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect loads all contacts.
  React.useEffect(()  => {
    setLoading(true);
    getContactList()
      .then((u) => dispatch(loadAllContacts(u.data)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // If there is an error display simple message
  if (error === true) {
    return <h1>Something went wrong...</h1>;
  }

  const handleChange = (contact: ContactType) => {
    setLoading(true);
    updateContact(contact)
      .then(() => dispatch(contactUpdate(contact)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleDelete = (contact: ContactType) => {
    setLoading(true);
    deleteContact(contact)
      .then(() => dispatch(contactDelete(contact)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleAdd = (contact: ContactType) => {
    setLoading(true);
    addContact(contact)
      .then((u) => dispatch(contactCreate(u.data)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container" data-testid="app">
      <MyLoading hidden={!loading}>
        <h1 className="container-title" data-testid="component-label">
          My Contacts
        </h1>
        <div className="table-responsive" >
          <table className="table">
            <thead>
              <tr>
                <th scope="col" data-test="app-label" >Full Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? contacts.map((contact: ContactType) => {
                return (
                  <MyContact
                    key={contact.id}
                    onChange={handleChange}
                    onDelete={handleDelete}
                    contact={contact}
                  />
                );
              }): <h1 data-testid="component-no-contacts">No contacts...</h1>}
            </tbody>
          </table>
        </div>
        <MyAddContact onAdd={handleAdd} />
      </MyLoading>
    </div>
  );
};
