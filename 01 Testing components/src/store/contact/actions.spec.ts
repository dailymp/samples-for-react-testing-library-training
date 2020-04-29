import {
  loadAllContacts,
  contactUpdate,
  contactCreate,
  contactDelete,
} from './actions';
import {
  CONTACTS_LOAD,
  CONTACT_UPDATE,
  CONTACT_CREATE,
  CONTACTS_DELETE,
} from './types';

describe('contact actions', () => {
  it('should create an action to load all contacts', () => {
    const contacts = [
      { id: '1', name: 'Aga Skrobot', email: 'aga@gmail.com' },
      { id: '2', name: 'Enrique Iglesias', email: 'enrique@gmail.com' },
    ];
    const expectedAction = {
      type: CONTACTS_LOAD,
      contacts,
    };
    expect(loadAllContacts(contacts)).toEqual(expectedAction);
  });

  it('should create an action to create new contact', () => {
    const contact = { id: '1', name: 'aga', email: 'aga@gmail.com' };
    const expectedAction = {
      type: CONTACT_CREATE,
      contact,
    };
    expect(contactCreate(contact)).toEqual(expectedAction);
  });

  it('should create an action to delete contact', () => {
    const contact = { id: '1', name: 'aga', email: 'aga@gmail.com' };
    const expectedAction = {
      type: CONTACTS_DELETE,
      contact,
    };
    expect(contactDelete(contact)).toEqual(expectedAction);
  });

  it('should create an action to update contact', () => {
    const contact = { id: '1', name: 'aga', email: 'aga@gmail.com' };
    const expectedAction = {
      type: CONTACT_UPDATE,
      contact,
    };
    expect(contactUpdate(contact)).toEqual(expectedAction);
  });
});
