import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { editReducer } from "./editSlice";
import { formReducer } from "./formSlice";


export const store = configureStore({

    reducer: {
      
        contacts: contactsReducer,
        form: formReducer,    
        filter: filterReducer,
        edit: editReducer ,

    },

//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
//   enhancers: [composeWithDevTools()],

})   