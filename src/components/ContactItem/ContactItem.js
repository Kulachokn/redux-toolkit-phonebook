import React from "react";

const ContactItem = ({id, name, number, deleteContact}) => {

    const removeItem = () => {
        deleteContact(id);
    };

    return (
        <>
            <span>{name}</span> : <span>{number}</span>
            <button
                onClick={removeItem}
                type="button">delete
            </button>
        </>
    )
};

export default ContactItem;
