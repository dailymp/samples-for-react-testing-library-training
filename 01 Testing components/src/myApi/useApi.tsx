// Custom hook for Crud
import React, { useState, useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios/index';

import { Contact as ContactType } from '../store/contact/types';
import {
  loadAllContacts,
  contactUpdate,
  contactCreate,
  contactDelete,
} from '../store/contact/actions';
import { RootState } from '../store/contact/index';

export function useApi() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contactReducer);
  const [error, setError] = useState(false);

  const url = 'https://jsonplaceholder.typicode.com/users';

  // Get all contacts
  React.useEffect(() => {
    if (contacts.length < 1) {
      getContactList();
    }
  }, []);

  const getContactList = () => {
    setLoading(true);
    axios
      .get(url)
      .then((u) => dispatch(loadAllContacts(u.data)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  // Delete contact
  const deleteContact = (contact: ContactType) => {
    setLoading(true);
    axios
      .delete(`${url}/${contact.id}`)
      .then(() => dispatch(contactDelete(contact)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  // Update existing contact
  const updateContact = (contact: ContactType) => {
    setLoading(true);
    axios
      .put(`${url}/${contact.id}`, contact)
      .then(() => dispatch(contactUpdate(contact)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  // Create new contact
  const addContact = (contact: ContactType) => {
    setLoading(true);
    axios
      .post(url, contact)
      .then((u) => dispatch(contactCreate(u.data)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return [
    deleteContact as any,
    updateContact as any,
    addContact as any,
    loading,
    error,
  ];
}
