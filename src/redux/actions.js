import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction("phonebook/Add", ({ name, number }) => ({
        payload: {
            name,
            number,
            id: new Date(),
        }
    })
);

export const deleteContact = createAction("phonebook/Delete");
export const changeFilter = createAction("phonebook/changeFilter");

export default {addContact, deleteContact, changeFilter};

// export const changeFilter = filter => ({
//     type: "phonebook/changeFilter",
//     payload: filter,
// });

// export const deleteContact = id => ({
//     type: "phonebook/Delete",
//     payload: id
// });

// export const addContact = ({name, number,}) => ({
//     type: "phonebook/Add",
//     payload: {
//         name: name,
//         number: number,
//         id: new Date(),
//     }
// });
