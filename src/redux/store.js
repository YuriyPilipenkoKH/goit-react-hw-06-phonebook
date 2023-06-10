import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { editReducer } from "./editSlice";
import { formReducer } from "./formSlice";
import { sortReducer } from "./sortSlice";


export const store = configureStore({

    reducer: {
      
        contacts: contactsReducer,
        form: formReducer,    
        filter: filterReducer,
        edit: editReducer ,
        sort:sortReducer,

    },


})   

