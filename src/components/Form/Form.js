import React, {Component} from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";

class Form extends Component {
    formInitialState = {
        name: "",
        number: "",
    };

    state = {
        ...this.formInitialState,
    }

    inputHandler = ({target}) => {
        const {value, name} = target;
        this.setState({
            [name]: value,
        })
    }

    submitForm = (e) => {
        const {name, number} = this.state;
        e.preventDefault();
        const contact = {
            name,
            number,
            id: Date.now(),
        };

        this.props.addContact(contact);
        this.setState({...this.formInitialState});
    }

    render() {
        const {name, number} = this.state;
        return (
                <form
                    onSubmit={this.submitForm}
                >
                    <label>
                        <span>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.inputHandler}
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
                            onChange={this.inputHandler}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                        />
                    </label>
                    <button onClick={this.submitForm} type="button">Add contact</button>
                </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addContact: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
