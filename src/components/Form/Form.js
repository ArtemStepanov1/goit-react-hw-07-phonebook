import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
    FormWrapper,
    NameInput,
    ContactsFormBtn,
} from "./Form.styled.js";

export const ContactsForm = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch();

    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case 'name':
              setName(value);
              break;
      
            case 'number':
              setNumber(value);
              break;
      
            default:
              return;
        }    
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addContact(name, number));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };
    
    return (
        <FormWrapper
        onSubmit={handleSubmit}
        > 
            <p>Name</p>
            <NameInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
            />
            <p>Phone number</p>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
            />
            <ContactsFormBtn
            type="submit"
            >Add contact</ContactsFormBtn>
        </FormWrapper>
    )
}