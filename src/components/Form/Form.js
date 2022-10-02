import { useState } from "react";
import { useCreateContactMutation } from 'redux/contactsSlice';
import { Spinner } from "theme-ui";
import {
    FormWrapper,
    NameInput,
    ContactsFormBtn,
} from "./Form.styled.js";

export const ContactsForm = () => {
    const [createContact, {isLoading}] = useCreateContactMutation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case 'name':
              setName(value);
              break;
      
            case 'phone':
                setPhone(value);
              break;
      
            default:
              return;
        }    
    };

    const handleSubmit = e => {
        e.preventDefault();
        const contact = {name, phone};
        createContact(contact);
        reset();
    };

    const reset = () => {
        setName('');
        setPhone('');
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
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={phone}
                onChange={handleChange}
            />
            <ContactsFormBtn
            type="submit" disabled={isLoading}
            >
                {isLoading ? <Spinner  width={16} height={16}/> : 'Add contact' }
            </ContactsFormBtn>
        </FormWrapper>
    )
}