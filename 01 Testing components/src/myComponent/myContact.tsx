import React, { useState, FC } from 'react';
import { Contact as ContactType } from '../store/contact/types';

export interface Props {
  contact: ContactType;
  onDelete(contact: ContactType): void;
  onChange(contact: ContactType): void;
}

export const MyContact: FC<Props> = ({ contact, onDelete, onChange }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [email, setEmail] = useState('');

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowEdit(true);
  };

  const handleSave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    contact: ContactType
  ) => {
    e.preventDefault();
    setShowEdit(false);
    const updatedContact = { ...contact, email: email };
    onChange(updatedContact);
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    contact: ContactType
  ) => {
    e.preventDefault();
    onDelete(contact);
  };

  // Edit form let change email.
  // By default edit form is hidden.
  // It appers when "change email" button is clicked.
  let editForm;
  if (showEdit === true) {
    editForm = (
      <React.Fragment>
        <td>
          <input
            data-testid="contact-input-change"
            className="contact-row__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </td>
        <td>
          <button
            data-testid="contact-button-save"
            className="contact-row__btn"
            type="submit"
            onClick={(e) => handleSave(e, contact)}
          >
            SAVE
          </button>
        </td>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <tr>
        <td data-testid="contact-label-name">{contact.name}</td>
        <td data-testid="contact-label-email">{contact.email}</td>
        <td>
          <button
            className="contact-row__btn"
            data-testid="contact-button-change"
            onClick={handleChange}
          >
            CHANGE EMAIL
          </button>
        </td>
        <td>
          <button
            className="contact-row__btn delete"
            data-testid="contact-button-delete"
            onClick={(e) => handleDelete(e, contact)}
          >
            DELETE
          </button>
        </td>
      </tr>
      <tr>{editForm}</tr>
    </React.Fragment>
  );
};
