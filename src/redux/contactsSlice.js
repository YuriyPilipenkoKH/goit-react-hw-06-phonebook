import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { nanoid } from "nanoid";

// const DEFAULT_CONTACTS = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]

const initialState = {contactsList: []};

export const contactsSlice =  createSlice({
    name: 'contacts',
    initialState,


    reducers: {
        addContact: {

          reducer(state, action) {
        
          //  
          //  return [...state.contactsList, action.payload]
         state.contactsList.push(action.payload);
          },
        },

       deleteContact: {
        reducer(state, action) {

         return state.filter(contact => contact.id !== action.payload)
        }
       
       },

       editContact:{
        reducer(state, action) {
         
          const { id} = action.payload;  
          const updatedContact = action.payload;
          const newState = [...state.contacts]
          console.log(newState);

          // const contact = newState.find(contact => contact.id === id);
          const allcontacts = newState.find(contact => contact.id !== id);

          console.log(allcontacts);

          return [...allcontacts, updatedContact]

          // const index = state.contacts.findIndex((contact) => contact.id === updatedContact.id);
          // if (index !== -1) {
          //   state.contacts[index] = updatedContact;

            // const { id, name, number } = action.payload;   
            // const contact = state.contacts.find(contact => contact.id === id);
            // if (contact) {
            //   contact.name = name;
            //   contact.number = number;
          //   }
        }
        },
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
};

export const {addContact, deleteContact, editContact}  = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
