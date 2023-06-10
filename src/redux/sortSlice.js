import { createSlice } from "@reduxjs/toolkit";


export  const sortSlice = createSlice({

    name: 'sort',
    initialState: {
     
        id : true,
        date: null,
        name : null,
        number: null,
    },
    reducers: {

      toggleSortId:{
       reducer(state)  {
       state.id = !state.id 

       
        }},
}
})

export const { toggleSortId }  = sortSlice.actions
export const sortReducer = sortSlice.reducer