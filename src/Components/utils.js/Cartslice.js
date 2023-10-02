import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
    name:"cart",
    initialState:{
        itemlist:[],
    },
    reducers:{
        additem:(state,action)=>{
            state.itemlist.push(action.payload);
        },
        removeitem:(state)=>{
            state.itemlist.pop();
        },
        clearcart:(state)=>{
            state.itemlist.length=0;
        }
    }
})

export const{additem,removeitem,clearcart}=Cartslice.actions;
export default Cartslice.reducer;
