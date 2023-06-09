import { createSlice } from "@reduxjs/toolkit";


export  const editSlice = createSlice({

    name: 'edit',
    initialState: {
     
        nick : '',
        phone: '',
    },
    reducers: {

       updateValue:{
       reducer(state, action)  {
        const { field, value } = action.payload;
        state[field] = value;
       
        }},
}

})

export const { updateValue}  = editSlice.actions
export const editReducer = editSlice.reducer