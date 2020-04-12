import {
  getContactList,
  deleteContact,
  addContact,
  updateContact,
} from './myContactApi';

describe('contact Api', () => {
  it('update contact', () => {
    const contact = {
      id: '1',
      name: 'Leanne Graham',
      email: 'aaa@april.biz',
    };
    updateContact(contact).then((u) => expect(Promise.resolve(u.data)).not.toBeNull());
  });

  it('loads all contacts', () => {
    getContactList().then((u) => expect(Promise.resolve(u.data)).not.toBeNull());
  });
  it('add contact', () => {
    const contact = {
      id: '',
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
    };
    expect(addContact(contact).then((u) => expect(Promise.resolve(u.data)).not.toBeNull()));
  });
  it('delete contact', () => {
    const contact = {
      id: '2',
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
    };
    expect(deleteContact(contact).then((u) => expect(Promise.resolve(u.data)).not.toBeNull()));
  });
});
