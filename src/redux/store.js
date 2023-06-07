import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { editReducer } from "./editSlice";
import { formReducer } from "./formSlice";
// import { persistStore, FLUSH, REHYDRATE, PERSIST, PURGE, PAUSE,  REGISTER,}  from "redux-persist";

export const store = configureStore({

    reducer: {
      
        contacts: contactsReducer,
        form: formReducer,    
        filter: filterReducer,
        edit: editReducer ,

    },

    // middleware (getDefaultMiddleware) {
    //     return getDefaultMiddleware({
    //       serializableCheck: {
    //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //       },
    //     })},

})   

// export const persistor = persistStore(store);