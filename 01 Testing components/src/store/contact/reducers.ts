import {
  Contact,
  ContactActionTypes,
  CONTACTS_LOAD,
  CONTACT_UPDATE,
  CONTACT_CREATE,
  CONTACTS_DELETE,
} from "./types";

export function contactReducer(state: Array<Contact> = [], action: ContactActionTypes) {
  switch (action.type) {
    case CONTACTS_LOAD: {
      return action.contacts;
    }
    case CONTACT_UPDATE: {
      const contacts = state.map((obj) =>
        action.contact.id === obj.id ? action.contact : obj
      );
      return contacts;
    }
    case CONTACTS_DELETE: {
      const contacts = state.filter((obj) => obj.id !== action.contact.id);

      return contacts;
    }
    case CONTACT_CREATE: {
      return [...state, action.contact];
    }
    default:
      return state;
  }
}
