import { Types } from '../types'

export const createContacts = (contacts) => {
  return {
    type: Types.CREATE_CONTACT,
    payload: contacts,
  };
};

export const selectedContact = (contacts) => {
  return {
    type: Types.SELECT_CONTACT,
    payload: contacts,
  };
};