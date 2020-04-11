import {
  Contact,
  CONTACTS_LOAD,
  CONTACT_UPDATE,
  CONTACT_CREATE,
  CONTACTS_DELETE,
  ContactActionTypes,
} from './types';

export function loadAllContacts(contacts: Array<Contact>): ContactActionTypes {
  return { type: CONTACTS_LOAD, contacts: contacts };
}

export function contactUpdate(contact: Contact): ContactActionTypes {
  return { type: CONTACT_UPDATE, contact };
}

export function contactCreate(contact: Contact): ContactActionTypes {
  return { type: CONTACT_CREATE, contact };
}

export function contactDelete(contact: Contact): ContactActionTypes {
  return { type: CONTACTS_DELETE, contact };
}
