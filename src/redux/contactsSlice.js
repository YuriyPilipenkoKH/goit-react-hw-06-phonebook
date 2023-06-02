import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const DEFAULT_CONTACTS = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export const contactsSlice =  createSlice({
    name: 'contacts',
    initialState: DEFAULT_CONTACTS,


    reducers: {
        addContact: {
          reducer(state, action) {
           return [...state, action.payload]
          },
        },

       deleteContact: {
        reducer(state, action) {

         return state.filter(contact => contact.id !== action.payload)
        }
       
       },

       updateContact:{
       reducer(state, action) {
        const { id, name, number } = action.payload;
        const contact = state.contacts.find(contact => contact.id === id);
        if (contact) {
          contact.name = name;
          contact.number = number;
        }
       }
      },
    }
})

export const {addContact, deleteContact, updateContact}  = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer

