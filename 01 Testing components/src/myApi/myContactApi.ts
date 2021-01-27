import axios from 'axios/index';
import { Contact as ContactType } from '../store/contact/types';

export const url = 'https://jsonplaceholder.typicode.com/users';

// Get all contacts
export const getContactList = () => 
  axios.get(url);

// Delete contact
export const deleteContact = (contact: ContactType) =>
  axios.delete(`${url}/${contact.id}`);

// Update existing contact
export const updateContact = (contact: ContactType) => 
axios.put(`${url}/${contact.id}`, contact);


// Create new contact
export const addContact = (contact: ContactType) => 
 axios.post(url, contact);

