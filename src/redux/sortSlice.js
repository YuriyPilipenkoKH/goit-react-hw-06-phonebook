import { createSlice } from "@reduxjs/toolkit";


export  const sortSlice = createSlice({

    name: 'sort',
    initialState: {
        activeIndex : 0,
        id : true,
        date: null,
        name : null,
        number: null,
    },
    reducers: {

      toggleSortId:{
       reducer(state)  {
       state.activeIndex = 0 
       state.id = !state.id 
       state.date = null
       state.name = null
       state.number = null
       
        }},

      toggleSortDate:{
       reducer(state)  {
       state.activeIndex = 1 
       state.id = null 
       state.date = !state.date
       state.name = null
       state.number = null
       
        }},

      toggleSortName:{
       reducer(state)  {
       state.activeIndex = 2 
       state.id = null 
       state.date = null
       state.name = !state.name
       state.number = null
       
        }},

      toggleSortNUmber:{
       reducer(state)  {
       state.activeIndex = 3 
       state.id = null 
       state.date = null
       state.name = null
       state.number = !state.number
       
        }},
}
})

export const { toggleSortId, toggleSortDate, toggleSortName, toggleSortNUmber }  = sortSlice.actions
export const sortReducer = sortSlice.reducer