import { createSlice } from "@reduxjs/toolkit";

const appslice=createSlice({
    name:"app",
    initialState:{
        ismenuopen:false,
    },
    reducers:{
        togglemenu:(state)=>{
            state.ismenuopen=!state.ismenuopen;

        },
    }
})

export const{togglemenu}=appslice.actions;
export default appslice.reducer;