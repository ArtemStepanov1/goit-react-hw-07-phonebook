import { MdClose } from "react-icons/md";
import {
    ContactItem,
    DelContactBtn,
} from "./ContactListItem.styled";
import { useDeleteContactMutation } from "redux/contactsSlice";
import { Spinner } from "theme-ui";

export const ContactListItem = (contact) => {
    const { id, name, phone } = contact;
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();

    return(
        <ContactItem key={id}>
            <label>{`${name}: ${phone}`}</label>
            <DelContactBtn
                type="button"
                onClick={() => deleteContact(id)}
                >
                { isDeleting 
                    ? <Spinner size={12} />
                    : <MdClose className="delContactBtnIcon" />
                }
            </DelContactBtn>
        </ContactItem>
    );
};