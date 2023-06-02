import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


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
         state.contactsList.push(action.payload);
          },
        },

       deleteContact: {

        reducer(state, action) {
          state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload);
        }
       },

       editContact:{

        reducer(state, action) {
  
          const { id, name, number} = action.payload;  
          const updatedContact = action.payload;
          const allExeptUpdated = state.contactsList.filter(contact => contact.id !== id);
  
          if (allExeptUpdated.find((contact) => contact.name.toLowerCase() === name.toLowerCase())){
            Notiflix.Notify.failure(`${name} is already in contacts.`);

          return ;
          }

          else if (allExeptUpdated.find((contact) => contact.number.toString() === number)) {
            Notiflix.Notify.failure(`${number} is already in contacts.`);

          return ;
          }

          state.contactsList = [...allExeptUpdated, updatedContact]
          // Notiflix.Notify.success(`Contact ${name} updated.`);

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
