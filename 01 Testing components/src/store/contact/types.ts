export interface Contact {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}

export const CONTACTS_LOAD = 'CONTACTS_LOAD';
export const CONTACT_UPDATE = 'CONTACT_UPDATE';
export const CONTACT_CREATE = 'CONTACT_CREATE';
export const CONTACTS_DELETE = 'CONTACTS_DELETE';

interface loadAllContactsAction {
  type: typeof CONTACTS_LOAD;
  contacts: Array<Contact>;
}

interface contactUpdateAction {
  type: typeof CONTACT_UPDATE;
    contact: Contact;
}

interface contactCreateAction {
  type: typeof CONTACT_CREATE;
  contact: Contact;
}

interface contactDeleteAction {
  type: typeof CONTACTS_DELETE;
  contact: Contact;
}

export type ContactActionTypes =
  | loadAllContactsAction
  | contactUpdateAction
  | contactCreateAction
  | contactDeleteAction;
