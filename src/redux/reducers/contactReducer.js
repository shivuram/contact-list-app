import { Types } from '../types'
const intialState = {
  contacts: [{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  }],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case Types.CREATE_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case Types.SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };
    default:
      return state;
  }
};