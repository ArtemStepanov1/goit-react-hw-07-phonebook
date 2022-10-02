import { useSelector } from "react-redux";
import { ContactList, Spin } from "./ContactsList.styled";
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { useFetchContactsQuery } from "redux/contactsSlice";

export const ContactsList = () => {
    const { data: contacts, isLoading } = useFetchContactsQuery();
    const filter = useSelector(state => state.filter);
    const filteredContacts = contacts?.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()));
    return(
        <>
            {isLoading ? (
                <Spin />
            ) : (
                <ContactList>
                    {filteredContacts?.map(contact => (
                        <ContactListItem key={contact.id} {...contact} />
                    ))}
                </ContactList>
            )}
        </>
    )
}