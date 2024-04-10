import {createSlice} from "@reduxjs/toolkit"
const appSlice=createSlice({
    name:"app",
    initialState:{
        isOpen:false,
    },
    reducers:{
        toogleMenu:(state)=>{
            state.isOpen=!state.isOpen
        },
    }
})
export const{toogleMenu}=appSlice.actions 
export default appSlice.reducer 