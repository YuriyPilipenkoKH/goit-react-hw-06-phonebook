import { createSlice } from "@reduxjs/toolkit";



export  const editSlice = createSlice({

    name: 'edit',
    initialState: {
     
        isEdit: false,
        nick : '',
        phone: '',
    },
    reducers: {
        toggleEdit(state, action) {
            
        state.isEdit = !state.isEdit
          },

     updateValue(state, action) {
        state.nick = action.payload
     }


}

})

export const {toggleEdit, updateValue}  = editSlice.actions
export const editReducer = editSlice.reducer