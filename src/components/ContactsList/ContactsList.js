import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import {connect} from "react-redux";
import actions from "../../redux/actions";

const ContactsList = ({contacts, deleteContact}) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={contact.id}>
                        <ContactItem
                            {...contact}
                            deleteContact={deleteContact}
                            contactIndex={index}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
};

const getVisibleContacts = (allContacts, filter) => {
    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};

const mapStateToProps = ({contacts, filter}) => ({
    contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

// const mapStateToProps = state => {
//     const {contacts, filter} = state;
//     const visibleContacts = getVisibleContacts(contacts, filter);
//     return {
//     contacts: visibleContacts,
//     }
// };
