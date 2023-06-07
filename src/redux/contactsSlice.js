import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from "./operations";


// const DEFAULT_CONTACTS = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]

const initialState = { 
  contactsList: [],
  isLoading: false,
  error: null,
};

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
  
          const { id} = action.payload;  
          const contactToUpdate  = state.contactsList.find(contact => contact.id === action.payload.id)
          const allExeptUpdated = state.contactsList.filter(contact => contact.id !== id);
          state.contactsList = [...allExeptUpdated, action.payload]

          Notiflix.Notify.success(`Contact ${contactToUpdate.name} was updated.`);

        }
        },
      
    },
   
    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
})

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

export const {addContact, deleteContact, editContact}  = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
