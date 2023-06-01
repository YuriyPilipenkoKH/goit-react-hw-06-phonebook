import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { editReducer } from "./editSlice";


export const store = configureStore({

    reducer: {
      
        contacts: contactsReducer,
        filter: filterReducer,
        edit: editReducer ,

    },

//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
//   enhancers: [composeWithDevTools()],

})   