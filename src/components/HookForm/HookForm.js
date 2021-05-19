import React, {useState} from "react";

const initialState = {
    name: "",
    number: ""
}

const HookForm = ({addContact}) => {
    const [{name, number}, setForm] = useState({...initialState});
    const inputHandler = ({target}) => {
        const {value, name} = target;
        setForm(state => ({
            ...state,
            [name]: value,
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        const contact = {
            name,
            number,
            id: Date.now(),
        }
        addContact(contact);
        setForm(initialState);
    }

    return (
        <form
            onSubmit={submitForm}
        >
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputHandler}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label>
                <span>Number</span>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={inputHandler}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button onClick={submitForm} type="button">Add contact</button>
        </form>
    )
};

export default HookForm;
