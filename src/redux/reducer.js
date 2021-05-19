import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

export const contactsReducer = createReducer([], {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer("", {
    [actions.changeFilter]: (_, {payload}) => payload,
});

export default {contactsReducer, filterReducer};

// export const contactsReducer = (state = [], {type, payload}) => {
//     switch (type) {
//         case "phonebook/Add" :
//             return [...state, payload];
//         case "phonebook/Delete" :
//             return state.filter(contact => contact.id !== payload);
//         default:
//             return state;
//     }
// };

// export const filterReducer = (state = "", {type, payload}) => {
//     switch (type) {
//         case "phonebook/changeFilter" :
//             return payload;
//         default:
//             return state;
//     }
// };
