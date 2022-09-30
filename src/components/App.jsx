import { Box } from 'theme-ui';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from "./Form/Form";
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList/ContactsList";

export const App = () => {
  return (
    <>
      <Box style={{ width: "25vw", padding: "16px", }}>
        <h2>Phonebook</h2>
        <ContactsForm />
        <h3 style={{ marginBottom: "16px" }}>Contacts</h3>
        <Filter />
        <ContactsList />
      </Box>
      <GlobalStyle />
    </>
  ) 
}

