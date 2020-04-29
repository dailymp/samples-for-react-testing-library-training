import React, { useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getContactList,
  deleteContact,
  addContact,
  updateContact,
} from '../myApi';
import { loadAllContacts } from '../store/contact/actions';
import { MyContact, MyAddContact, MyLoading } from '../myComponent';
import { Contact as ContactType } from '../store/contact/types';
import { RootState } from '../store/contact/index';

export const MyComponent: FC<any> = () => {
  const contacts = useSelector((state: RootState) => state.contactReducer);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadContacts, setLoadContacts] = useState(true);

  // useEffect loads all contacts.
  React.useEffect(() => {
    if (loadContacts === true) {
      setLoading(true);
      getContactList()
        .then((u) => dispatch(loadAllContacts(u.data)))
        .catch(() => setError(true))
        .finally(() => {
          setLoadContacts(false);
          setLoading(false);
        });
    }
  }, [loadContacts]);

  // If there is an error display simple message
  if (error === true) {
    return <h1>Something went wrong...</h1>;
  }

  const handleChange = (contact: ContactType) => {
    setLoading(true);
    updateContact(contact)
      .then(() => setLoadContacts(true))
      .catch(() => setError(true));
  };

  const handleDelete = (contact: ContactType) => {
    setLoading(true);
    deleteContact(contact)
      .then(() => setLoadContacts(true))
      .catch(() => setError(true));
  };

  const handleAdd = (contact: ContactType) => {
    setLoading(true);
    addContact(contact)
      .then(() => setLoadContacts(true))
      .catch(() => setError(true));
  };

  return (
    <div className="container" data-testid="app">
      <MyLoading hidden={!loading}>
        <h1 className="container-title" data-testid="component-label">
          My Contacts
        </h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" data-test="app-label">
                  Full Name
                </th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0
                ? contacts.map((contact: ContactType) => {
                    return (
                      <MyContact
                        key={contact.id}
                        onChange={handleChange}
                        onDelete={handleDelete}
                        contact={contact}
                      />
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <MyAddContact onAdd={handleAdd} />
      </MyLoading>
    </div>
  );
};
