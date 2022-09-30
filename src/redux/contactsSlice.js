import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, action) => {
                const isAdded = state.find(i => i.name.toLowerCase() === action.payload.name.toLowerCase());
                if(isAdded) return alert(`${action.payload.name} is already in phonebook.`)
                state.push(action.payload);
            },
            prepare: (name, number) => {
                const id = nanoid();
                return {payload: { id, name, number }};
                        
            },
        },    
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;