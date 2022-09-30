import { MdClose } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "redux/contactsSlice"
import {
    ContactList,
    ContactItem,
    DelContactBtn,
} from "./ContactsList.styled"

export const ContactsList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const filteredContacts = useSelector(state => 
        state.contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
            )
        );
      
    
    return(
        <ContactList>
            {filteredContacts.map(contact => {
                const {id, name, number} = contact;
                return (              
                <ContactItem key={id}>
                    <label>{`${name}: ${number}`}</label>
                    <DelContactBtn
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                        >
                            <MdClose
                                className="delContactBtnIcon"                            
                            />
                    </DelContactBtn>
                </ContactItem>)
            }
            )}
        </ContactList>     
    )
}