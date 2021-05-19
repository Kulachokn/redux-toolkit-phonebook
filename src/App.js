import './App.css';
import React from "react";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import {connect} from "react-redux";
import * as actions from "./redux/actions";

const App = ({contacts, onAddContact, onDeleteContact}) => {
    return (
        <>
            <h2>Phonebook</h2>
            <Form addContact={onAddContact}/>
            {contacts.length > 1 &&
            <Filter/>
            }
            {contacts.length > 0 &&
            <ContactsList
                contacts={contacts}
                deleteContact={onDeleteContact}
            />
            }
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddContact: () => dispatch(actions.addContact()),
        onDeleteContact: () => dispatch(actions.deleteContact()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// state = {
//   contacts: [],
//   name: "",
//   number: "",
//   filter: "",
// }

// addContact = ({name, number}) => {
//   const contact = {
//     name,
//     number,
//     id: Date.now(),
//   };
//   if (this.state.contacts.find(contact => contact.name === name)) {
//     return alert(`${name} is already in contacts`);
//   }
//
//   this.setState(prev => ({
//     contacts: [...prev.contacts, contact],
//   }));
// };

// deleteContact = (id) => {
//   this.setState(prev => ({
//     contacts: prev.contacts.filter(contact => contact.id !== id),
//   }));
// };

// //метод для обновления фильтра
// handleInputChange = (filter) => {
//   this.setState({filter});
// };

// getVisibleContacts = () => {
//   const {contacts, filter} = this.state;
//   return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
